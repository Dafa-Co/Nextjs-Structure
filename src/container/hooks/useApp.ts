import {useContext} from "react";

import {appContext} from "@/container/providers/appProvider";

export default function useApp() {
  return useContext(appContext);
}
