import * as Joi from 'joi';

export const validationSchema = Joi.object({
  APP_PORT: Joi.string().required(),
  REDIS_PORT: Joi.string().required(),
});
