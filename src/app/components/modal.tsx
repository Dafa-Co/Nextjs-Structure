"use client";

import React, { FunctionComponent } from "react";

import { createPortal } from "react-dom";

import { useAppDispatch, useAppSelector } from "@/hooks";

import { closeModal } from "@/store/globalReducer";

import Transition from "../Transition";

import { modal_transition_default, modals_types } from "@/constants";

interface ModalComponentProps {
  hideModal: () => void;
  data: any;
}

type Props = {
  edit?: FunctionComponent<ModalComponentProps>;
  view?: FunctionComponent<ModalComponentProps>;
  add?: FunctionComponent<ModalComponentProps>;
  delete?: FunctionComponent<ModalComponentProps>;
  other?: FunctionComponent<ModalComponentProps>;
  status?: FunctionComponent<ModalComponentProps>;
  filter?: FunctionComponent<ModalComponentProps>;
  sort?: FunctionComponent<ModalComponentProps>;
};

export default function Modal(props: Props) {
  // get modal state from store
  const { modal } = useAppSelector((state) => state.global);

  // dispatch for store action
  const dispatch = useAppDispatch();

  function hideModal() {
    dispatch(closeModal());
  }

  const Component = modal.type && props[modal.type];

  if (!Component) return null;

  return createPortal(
    <div className="fixed inset-0 z-[999] backdrop-blur bg-base-200 bg-opacity-20 py-xl overflow-x-hidden overflow-y-auto modal-wrapper">
      <Transition
        options={modal_transition_default}
        className="w-full flex items-center justify-center min-h-full"
      >
        <div className="rounded-box p-lg bg-base-200 w-[90%]  md:w-[600px]">
          <Component hideModal={hideModal} data={modal.data} />
        </div>
      </Transition>
    </div>,
    document.getElementById("modal-root") as HTMLElement,
  );
}
