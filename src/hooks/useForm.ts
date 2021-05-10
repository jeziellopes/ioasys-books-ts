import { useState, useEffect } from 'react';
import Form from 'services/form';

const useForm = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({});
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setIsEmpty(!Object.values(values).some((value) => value !== ''));
  }, [values]);

  useEffect(() => {
    const { isValidated, errors } = Form.validate(values);
    setError(!isValidated && !isEmpty);
    setErrors(errors);
  }, [isEmpty, values]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values) => ({
      ...values,
      [event.target.type]: event.target.value,
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
