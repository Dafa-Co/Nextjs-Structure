"use client";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {TypeVerifyOTPField} from "../types";

import useAuthJourney from "@/app/(auth)/auth/hooks/useAuthJourney";

import {useRouter} from "next/navigation";

const schema = Yup.object().shape({
  email: Yup.string().email("Enter valid email").required("Email is required"),
  code: Yup.string().required("Code is required"),
});

export default function useVerifyForm() {
  const router = useRouter();

  const {email, setOtp} = useAuthJourney();

  const form = useForm<TypeVerifyOTPField>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      email,
    },
  });

  function onSubmit(data: TypeVerifyOTPField) {
    setOtp(data.code);
    router.push("/auth/create-password");
  }

  const codeError = form.formState.errors.code?.message;

  return {...form, onSubmit, codeError};
}
