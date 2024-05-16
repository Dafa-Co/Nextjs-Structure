"use client";

import useForgotPasswordForm from "../hooks/useForgotPasswordForm";

import Label from "@/container/components/form/label";

import Input from "@/container/components/form/input";

import ErrorMessage from "@/container/components/form/errorMessage";

import Button from "@/container/components/buttons/button";

type Props = {};

export default function Form({}: Props) {
  const {onSubmit, handleSubmit, register, emailError} = useForgotPasswordForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate name='forgot-password-form'>
      <div className='mb-2rem'>
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

      <Button type='submit' className='btn-primary w-full'>
        Submit
      </Button>
    </form>
  );
}
