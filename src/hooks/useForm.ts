import { useState, useEffect } from 'react';
import Form from 'services/form';
import { SignInType } from 'interfaces/auth';
import { FormErrors } from 'interfaces/form';

type UseFormType = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validated: boolean;
  values: SignInType;
  error: boolean;
  errors: FormErrors | null;
};

const useForm = (): UseFormType => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState<FormErrors | null>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setIsEmpty(!Object.values(values).some((value) => value !== ''));
  }, [values]);

  useEffect(() => {
    const { isValidated, errors } = Form.validate(values);
    setError(!isValidated && !isEmpty);
    setErrors(errors);
  }, [isEmpty, values]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values) => ({
      ...values,
      [e.target.type]: e.target.value,
    }));
  };

  return {
    handleChange,
    validated: !error && !isEmpty,
    values,
    error,
    errors,
  };
};

export default useForm;
