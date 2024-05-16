"use client";

import useMutate from "@/container/hooks/useMutate";

import {serviceApiUploadFile} from "@/container/services";
import Image from "next/image";

type Props = {
  name: string;
  setValue: (name: string, value: string) => void;
  value: string | undefined;
};

export default function RemoteFileUploader({name, setValue, value}: Props) {
  const {mutate, isPending} = useMutate({
    mutationFn: (variables: FormData) => serviceApiUploadFile(variables),
    mutationKey: ["admin-profile-image"],
  });

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      const formData = new FormData();

      formData.append("file", e.target.files[0]);

      mutate(formData, {
        onSuccess: (response) => {
          // @ts-ignore
          setValue(name, response?.preview);
        },
      });
    }
  }

  return (
    <>
      {value ? (
        <Image src={value} alt='profile image' width={200} height={200} className='mb-1rem' />
      ) : null}
      <label className='w-full flex items-center gap-1.5rem'>
        <input
          type='file'
          className='file-input file-input-bordered w-full'
          onChange={handleChange}
        />
        {isPending ? <span className='loading loading-spinner loading-sm'></span> : null}
      </label>
    </>
  );
}
