import {useContext} from "react";

import {themeContext} from "@/container/providers/themeProvider";

export default function useTheme() {
  return useContext(themeContext);
}
