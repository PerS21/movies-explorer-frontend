import { useCallback, useState } from 'react';

export function useForm() {
  const [values, setValues] = useState({});

  const handleChange = (evt) => {
    const input = evt.target;
    const { value } = input;
    const { name } = input;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (evt) => {
    const input = evt.target;
    const { value } = input;
    const { name } = input;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
    },
    [setValues, setErrors],
  );

  return {
    values, handleChange, resetForm, errors,
  };
}