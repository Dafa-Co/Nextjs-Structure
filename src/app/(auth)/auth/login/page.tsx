import Transition from "@/app/Transition";

import { pages_transition_default } from "@/constants";

export default function Login() {
  return <Transition options={pages_transition_default}>login</Transition>;
}
