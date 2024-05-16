"use client";

import LinkButton from "@/container/components/buttons/linkButton";

import SuccessIcon from "@/container/components/icons/successIcon";

import ModalFooter from "@/container/components/modal/modalFooter";

type Props = {};

export default function PasswordResetSuccessfully({}: Props) {
  return (
    <div>
      <SuccessIcon />
      <h2 className='mt-2rem text-24 font-medium'>Password reset successfully!</h2>
      <h3 className='mt-0.25rem text-18 text-gray-500  mb-1.5rem'>
        your password has been reset successfully and you can now login with your new password.
      </h3>

      <ModalFooter>
        <LinkButton href='/auth/login' className='btn-primary'>
          Back to login
        </LinkButton>
      </ModalFooter>
    </div>
  );
}
