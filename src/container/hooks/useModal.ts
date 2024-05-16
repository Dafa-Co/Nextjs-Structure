import {useContext} from "react";

import {modalContext} from "@/container/providers/modalProvider";

export default function useModal() {
  return useContext(modalContext);
}
