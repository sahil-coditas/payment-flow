import * as Yup from 'yup';
import { FieldConfig } from './IPaymentOptions';

export const createYupSchema = (
  fields: FieldConfig[]
): Yup.ObjectSchema<Record<string, Yup.AnySchema>> => {
  const shape: Record<string, Yup.AnySchema> = {};

  fields.forEach((field) => {
    let validator: Yup.StringSchema<string | undefined> = Yup.string();
    if (field.validations?.required) {
      validator = validator.required('This field is required');
    }
    if (field.validations?.maxLength) {
      validator = validator.max(
        field.validations.maxLength,
        `Must be at most ${field.validations.maxLength} characters`
      );
    }
    if (field.validations?.minLength) {
      validator = validator.min(
        field.validations.minLength,
        `Must be at least ${field.validations.minLength} characters`
      );
    }
    if (field.validations?.pattern) {
      validator = validator.matches(
        field.validations.pattern,
        'Invalid format'
      );
    }

    shape[field.name] = validator;
  });
  const schema = Yup.object().shape(shape);
  return schema;
};
