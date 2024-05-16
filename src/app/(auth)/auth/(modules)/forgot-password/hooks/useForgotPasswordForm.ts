"use client";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {TypeForgotPasswordField} from "../types";

import useUrlSearchParams from "@/container/hooks/useUrlSearchParams";

import {passwordIsSentKey} from "@/app/(auth)/auth/constants";

import useAuthJourney from "@/app/(auth)/auth/hooks/useAuthJourney";

const schema = Yup.object().shape({
  email: Yup.string().email("Enter valid email").required("Email is required"),
});

export default function useForgotPasswordForm() {
  const {setEmail} = useAuthJourney();

  const {setSearchParmas} = useUrlSearchParams();

  const form = useForm<TypeForgotPasswordField>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  function onSubmit(data: TypeForgotPasswordField) {
    console.log(data);
    setEmail(data.email);
    setSearchParmas({searchParams: {key: passwordIsSentKey, value: "true"}});
  }

  const emailError = form.formState.errors.email?.message;

  return {...form, onSubmit, emailError};
}
