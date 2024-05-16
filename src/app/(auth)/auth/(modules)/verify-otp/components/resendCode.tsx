"use client";

import {CSSProperties, useState} from "react";

import {verifyCodeTimer} from "../constants";

type Props = {};

export default function ResendCode({}: Props) {
  const [isCountDown, setIsCountDown] = useState(false);

  const [countdown, setCountdown] = useState(verifyCodeTimer);

  function triggerTest() {
    setIsCountDown(true);

    let countValue = verifyCodeTimer;

    const interval = setInterval(() => {
      if (countValue === 1) {
        clearInterval(interval);
        setIsCountDown(false);
        setCountdown(verifyCodeTimer);
        return;
      }

      setCountdown((prev) => {
        countValue = prev;
        return prev - 1;
      });
    }, 1000);
  }

  return (
    <div className='absolute end-1rem top-0 bottom-0 text-primary text-sm font-medium'>
      {isCountDown ? (
        <div className='h-3rem flex items-center overflow-hidden'>
          <span className='countdown'>
            <span style={{"--value": countdown} as CSSProperties}></span>
          </span>
        </div>
      ) : (
        <button
          type='button'
          className='h-3rem'
          onClick={() => triggerTest()}
          disabled={isCountDown}
        >
          Get Code
        </button>
      )}
    </div>
  );
}
