export type FormErrors = {
  message: string | null;
};

export type FormValidateType = {
  isValidated: boolean;
  errors: FormErrors;
};
