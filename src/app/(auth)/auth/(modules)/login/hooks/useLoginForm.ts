"use client";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {useRouter} from "next/navigation";

import {TypeLoginField} from "../types";

import useAuth from "@/app/(auth)/auth/hooks/useAuth";

import {dataUser} from "@/container/fakeData";

import useMutate from "@/container/hooks/useMutate";

import {apiLogin} from "../services";

import {tagsOrQueryKeys} from "../constants";

const schema = Yup.object().shape({
  email: Yup.string().email("Enter valid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function useLoginForm() {
  const {setUserData} = useAuth();

  const router = useRouter();

  const {mutate, isPending} = useMutate({
    mutationFn: apiLogin,
    mutationKey: [tagsOrQueryKeys.loginKey],
  });

  const form = useForm<TypeLoginField>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  async function onSubmit(data: TypeLoginField) {
    mutate(data, {
      onSuccess: (response) => {
        console.log(response);
        // setUserData()
        // router.replace("/");
      },
    });
  }

  const emailError = form.formState.errors.email?.message;

  const passwordError = form.formState.errors.password?.message;

  return {...form, onSubmit, isPending, emailError, passwordError};
}
