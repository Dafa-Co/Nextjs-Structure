import {useContext} from "react";

import {authJourneyContext} from "@/app/(auth)/auth/providers/authJourneyProvider";

export default function useAuthJourney() {
  return useContext(authJourneyContext);
}
