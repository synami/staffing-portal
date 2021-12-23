import * as Joi from 'joi'; // Should use 17.0.0 or 17.0.2 version for Node v12 or later, or 16.1.8 for older versions of Node

export default () =>
  Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'production')
      .default('development'),
    HTTP_HOST: Joi.string().default('localhost'),
    HTTP_PORT: Joi.number().default(5000),
  });
