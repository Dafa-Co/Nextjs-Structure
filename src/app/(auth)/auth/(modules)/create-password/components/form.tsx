"use client";

import useCreatePassword from "../hooks/useCreatePassword";

import Label from "@/container/components/form/label";

import Input from "@/container/components/form/input";

import ErrorMessage from "@/container/components/form/errorMessage";

import Button from "@/container/components/buttons/button";

type Props = {};

export default function Form({}: Props) {
  const {onSubmit, handleSubmit, register, emailError, passwordError, confirmPasswordError} =
    useCreatePassword();

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate name='create-password-form'>
      <div className='mb-1rem'>
        <Label htmlFor='form-create-password-password-input'>Password</Label>
        <Input
          type='password'
          placeholder='Enter new password'
          id='form-create-password-password-input'
          isErorr={Boolean(passwordError)}
          {...register("password")}
        />
        <ErrorMessage message={passwordError} />
      </div>

      <div className='mb-2rem'>
        <Label htmlFor='form-create-password-confirm-password-input'>Confirm Password</Label>
        <Input
          type='password'
          placeholder='Enter password confirmation'
          id='form-create-password-confirm-password-input'
          isErorr={Boolean(confirmPasswordError)}
          {...register("confirmPassword")}
        />
        <ErrorMessage message={confirmPasswordError} />
      </div>
      <Button type='submit' className='btn-primary w-full'>
        Reset Password
      </Button>
    </form>
  );
}
