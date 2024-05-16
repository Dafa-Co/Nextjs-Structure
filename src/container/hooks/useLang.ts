import {useContext} from "react";

import {langContext} from "@/container/providers/langProvider";

export default function useLang() {
  return useContext(langContext);
}
