import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  name: yup.string().required(),
  date: yup.date().required(),
  theme: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
