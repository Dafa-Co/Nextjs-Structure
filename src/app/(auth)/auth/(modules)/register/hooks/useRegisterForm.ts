"use client";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {TypeRegisterField} from "../types";

const schema = Yup.object().shape({
  email: Yup.string().email("Enter valid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
});

export default function useLoginForm() {
  const form = useForm<TypeRegisterField>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  function onSubmit(data: TypeRegisterField) {
    console.log(data);
  }

  const emailError = form.formState.errors.email?.message;

  const passwordError = form.formState.errors.password?.message;

  const confirmPasswordError = form.formState.errors.confirmPassword?.message;

  const firstNameError = form.formState.errors.firstName?.message;

  const lastNameError = form.formState.errors.lastName?.message;

  return {
    ...form,
    onSubmit,
    emailError,
    passwordError,
    confirmPasswordError,
    firstNameError,
    lastNameError,
  };
}
