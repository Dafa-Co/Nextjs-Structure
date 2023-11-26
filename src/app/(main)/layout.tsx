import { layouts_transition_default } from "@/constants";

import Transition from "@/app/Transition";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <Transition options={layouts_transition_default}>
      <main className="relative">
        <div className="relative z-10 mb-lg me-lg mt-layout-margin ms-layout-margin min-h-min-height">
          {children}
        </div>
      </main>
    </Transition>
  );
}
