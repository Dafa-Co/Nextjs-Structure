"use client";

import useRegisterForm from "../hooks/useRegisterForm";

import Label from "@/container/components/form/label";

import Input from "@/container/components/form/input";

import ErrorMessage from "@/container/components/form/errorMessage";

import Button from "@/container/components/buttons/button";

type Props = {};

export default function Form({}: Props) {
  const {
    onSubmit,
    handleSubmit,
    register,
    emailError,
    passwordError,
    confirmPasswordError,
    firstNameError,
    lastNameError,
  } = useRegisterForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate name='register-form'>
      <div className='mb-1rem grid grid-cols-2 gap-1rem'>
        <div>
          <Label htmlFor='form-firstname-input'>First name</Label>
          <Input
            type='text'
            placeholder='Enter your first name'
            id='form-firstname-input'
            isErorr={Boolean(firstNameError)}
            {...register("firstName")}
          />
          <ErrorMessage message={firstNameError} />
        </div>
        <div>
          <Label htmlFor='form-lastname-input'>Last name</Label>
          <Input
            type='text'
            placeholder='Enter your last name'
            id='form-lastname-input'
            isErorr={Boolean(lastNameError)}
            {...register("lastName")}
          />
          <ErrorMessage message={lastNameError} />
        </div>
      </div>

      <div className='mb-1rem'>
        <Label htmlFor='form-email-input'>Email</Label>
        <Input
          type='email'
          placeholder='Enter your email'
          id='form-email-input'
          isErorr={Boolean(emailError)}
          autoComplete='username'
          {...register("email")}
        />
        <ErrorMessage message={emailError} />
      </div>

      <div className='mb-2rem'>
        <Label htmlFor='form-password-input'>Password</Label>
        <Input
          type='password'
          placeholder='Enter your password'
          id='form-password-input'
          isErorr={Boolean(passwordError)}
          autoComplete='current-password'
          {...register("password")}
        />
        <ErrorMessage message={passwordError} />
      </div>

      <div className='mb-2rem'>
        <Label htmlFor='form-confirm-password-input'>Confirm Password</Label>
        <Input
          type='password'
          placeholder='Enter password'
          id='form-confirm-password-input'
          isErorr={Boolean(confirmPasswordError)}
          autoComplete='current-password'
          {...register("confirmPassword")}
        />
        <ErrorMessage message={confirmPasswordError} />
      </div>

      <Button type='submit' className='btn-primary w-full'>
        Submit
      </Button>
    </form>
  );
}
