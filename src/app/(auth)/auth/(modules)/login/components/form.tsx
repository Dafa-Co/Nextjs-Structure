"use client";

import Link from "next/link";

import useLoginForm from "../hooks/useLoginForm";

import Label from "@/container/components/form/label";

import Input from "@/container/components/form/input";

import ErrorMessage from "@/container/components/form/errorMessage";

import Button from "@/container/components/buttons/button";

type Props = {};

export default function Form({}: Props) {
  const {onSubmit, handleSubmit, register, emailError, passwordError, isPending} = useLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate name='login-form'>
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

      <div>
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

      <div className='mb-2rem flex justify-end'>
        <Link href='forgot-password' className='link-primary text-14'>
          Forgot Password ?
        </Link>
      </div>

      <Button type='submit' className='btn-primary w-full' isLoading={isPending}>
        Submit
      </Button>
    </form>
  );
}
