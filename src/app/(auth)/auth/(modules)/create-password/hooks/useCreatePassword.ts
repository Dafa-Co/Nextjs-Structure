"use client";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {TypeCreatePasswordField} from "../types";

import useAuthJourney from "@/app/(auth)/auth/hooks/useAuthJourney";

import useModal from "@/container/hooks/useModal";

import {modalTypes} from "@/container/constants";

const schema = Yup.object().shape({
  email: Yup.string().email("Enter valid email").required("Password is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export default function useCreatePassword() {
  const {show} = useModal();

  const {email, otp} = useAuthJourney();

  const form = useForm<TypeCreatePasswordField>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      email,
    },
  });

  function onSubmit(data: TypeCreatePasswordField) {
    show(modalTypes.success);
  }

  const emailError = form.formState.errors.email?.message;

  const passwordError = form.formState.errors.password?.message;

  const confirmPasswordError = form.formState.errors.confirmPassword?.message;

  return {...form, onSubmit, emailError, passwordError, confirmPasswordError};
}
