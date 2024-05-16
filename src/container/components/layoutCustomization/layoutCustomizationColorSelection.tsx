"use client";

import LayoutCustomizationTitle from "./layoutCustomizationTitle";

type Props = {};

export default function LayoutCustomizationColorSelection({}: Props) {
  return (
    <div>
      <LayoutCustomizationTitle
        title='Color selection'
        description='Make changes to the color palette'
      />

      <div className='grid grid-cols-3 gap-1.5rem'></div>
    </div>
  );
}
