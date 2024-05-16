import {useContext} from "react";

import {authContext} from "@/app/(auth)/auth/providers/authProvider";

export default function useAuth() {
  return useContext(authContext);
}
