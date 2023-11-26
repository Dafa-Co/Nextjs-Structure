import { layouts_transition_default } from "@/constants";

import Transition from "@/app/Transition";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <Transition options={layouts_transition_default}>
      <main className="grid grid-cols-1 lg:grid-cols-2">{children}</main>
    </Transition>
  );
}
