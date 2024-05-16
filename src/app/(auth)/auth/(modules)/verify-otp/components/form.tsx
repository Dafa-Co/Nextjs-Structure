"use client";

import useVerifyForm from "../hooks/useVerifyForm";

import Label from "@/container/components/form/label";

import Input from "@/container/components/form/input";

import ErrorMessage from "@/container/components/form/errorMessage";

import Button from "@/container/components/buttons/button";

import ResendCode from "./resendCode";

type Props = {};

export default function Form({}: Props) {
  const {onSubmit, handleSubmit, register, codeError} = useVerifyForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate name='verification-form'>
      <div className='mb-2rem'>
        <Label htmlFor='form-code-input'>Code</Label>
        <div className='relative'>
          <Input
            type='text'
            placeholder='Enter your code'
            id='form-code-input'
            isErorr={Boolean(codeError)}
            {...register("code")}
          />
          <ResendCode />
        </div>
        <ErrorMessage message={codeError} />
      </div>

      <Button type='submit' className='btn-primary w-full'>
        Verify
      </Button>
    </form>
  );
}
