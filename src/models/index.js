// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Status = {
  "DRAFT": "DRAFT",
  "COMPLETED": "COMPLETED"
};

const { Todo } = initSchema(schema);

export {
  Todo,
  Status
};