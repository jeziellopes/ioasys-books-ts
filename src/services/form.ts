import { SignInType } from 'interfaces/auth';
import Validation from './validation';

class Form {
  static validate = ({ email, password }: SignInType) => {
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
