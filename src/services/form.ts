import { SignInType } from 'interfaces/auth';
import { FormValidateType } from 'interfaces/form';
import Validation from './validation';

class Form {
  static validate = ({ email, password }: SignInType): FormValidateType => {
    const isValidEmail = Validation.isValidEmail(email);
    const isValidPassword = Validation.isValidPassword(password);

    return {
      isValidated: isValidEmail && isValidPassword,
      errors: {
        message:
          !isValidEmail || !isValidPassword
            ? 'Email e/ou senha inválidos.'
            : null,
      },
    };
  };
}

export default Form;
