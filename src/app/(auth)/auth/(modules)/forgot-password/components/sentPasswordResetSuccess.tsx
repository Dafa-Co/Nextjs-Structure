import LinkButton from "@/container/components/buttons/linkButton";

import ArrowLeftIcon from "@/container/components/icons/arrowLeftIcon";

import SuccessIcon from "@/container/components/icons/successIcon";

import ServerHelper from "@/container/helpers/serverHelpers";

import {redirect} from "next/navigation";

type Props = {};

export default async function SentPasswordResetSuccess({}: Props) {
  const isEmail = await ServerHelper.getEmailOnServer();

  if (!isEmail) {
    return redirect("/auth/forgot-password");
  }

  return (
    <div className=''>
      <SuccessIcon />
      <h2 className='mt-2rem text-24'>Successfully!</h2>
      <h3 className='mt-0.25rem text-18 text-gray-500 text-balance'>
        Sent password reset. Please check your email
      </h3>

      <div className='flex items-center gap-1rem mt-2rem'>
        <LinkButton href='forgot-password' className='btn-outline'>
          <ArrowLeftIcon
            pathProps={{
              className: "stroke-current",
            }}
          />
          Back
        </LinkButton>
        <LinkButton href='verify-otp' className='btn-primary flex-1'>
          Continue
        </LinkButton>
      </div>
    </div>
  );
}
