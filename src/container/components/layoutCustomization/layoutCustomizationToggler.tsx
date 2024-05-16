"use client";

import {modalTypes} from "@/container/constants";

import ClassNameHelper from "@/container/helpers/classNameHelper";

import useLayoutCustomizationToggler from "@/container/hooks/useLayoutCustomizationToggler";

import SettingsIcon from "../icons/settingsIcon";

type Props = {};

export default function LayoutCustomizationToggler({}: Props) {
  const {animating, show} = useLayoutCustomizationToggler();

  return (
    <button
      type='button'
      className='btn btn-circle btn-primary fixed bottom-5rem end-10rem z-10'
      onClick={() => show(modalTypes.layout)}
    >
      <span
        className={ClassNameHelper.clsn("absolute inset-0 bg-primary rounded-full z-[-1]", {
          "animate-ping": animating,
        })}
      ></span>
      <SettingsIcon />
    </button>
  );
}
