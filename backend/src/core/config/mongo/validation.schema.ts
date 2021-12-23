import * as Joi from 'joi'; // Should use 17.0.0 or 17.0.2 version for Node v12 or later, or 16.1.8 for older versions of Node

export default () =>
  Joi.object({
    MONGO_DB_CONN: Joi.string(),
  });
