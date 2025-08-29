// amplify/data/resource.ts
import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/* =========================================================================
   Schema overview
   - Todo: basic todo item with defaults and a boolean flag
   - FileAttachment: one row per uploaded file (stores S3 key + metadata)
     and (optionally) associates the file to a Todo
   - Guest auth kept (identityPool) to match your starter
   ========================================================================= */

const schema = a.schema({
  // Main model with defaults and a boolean
  Todo: a
    .model({
      // NOTE: 'id' is implicit; Amplify adds it automatically
      content: a.string().default('Hello World Todo'),
      isDone: a.boolean().default(false),

      // Relation: a Todo can have many files
      attachments: a.hasMany('FileAttachment', 'todoId'),
    })
    // Keep guest access like the starter (create/read/update/delete)
    .authorization((allow) => [allow.guest()]),

  // Upload "section" — stores Storage (S3) object key + metadata
  FileAttachment: a
    .model({
      // human-friendly label for your UI; default placeholder
      label: a.string().default('Hello World File'),

      // REQUIRED: the S3 object key you get back from Storage.uploadData(...)
      s3Key: a.string().required(),

      // optional helpers
      contentType: a.string().default('application/octet-stream'),
      sizeBytes: a.integer().default(0),

      // (optional) link to a Todo
      todoId: a.id(),
      todo: a.belongsTo('Todo', 'todoId'),
    })
    .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  // Keep the same default mode from your starter for guest access
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});
