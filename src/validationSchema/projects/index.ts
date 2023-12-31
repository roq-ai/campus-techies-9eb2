import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  team_id: yup.string().nullable().required(),
});
