// ------------------------------
//  /src/config/env/validationSchema.ts
// ------------------------------
import * as Joi from 'joi';

export const validationSchema = Joi.object({
  PORT: Joi.string().required(),
  // TESTVAR: Joi.string().required(),

  //DB_HOST: Joi.string().required(),
  //DB_PORT: Joi.string().required(),
  //DB_USERNAME: Joi.string().required(),
  //DB_PASSWORD: Joi.string().required(),
  //DB_DATABASE: Joi.string().required(),
  //DB_SYNCHRONIZE: Joi.string().required(),
});
