import * as yup from 'yup';

export const resourceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  url: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
