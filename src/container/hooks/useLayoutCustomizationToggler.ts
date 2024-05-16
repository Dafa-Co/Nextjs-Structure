import {useEffect, useState} from "react";

import useModal from "@/container/hooks/useModal";

export default function useLayoutCustomizationToggler() {
  const {show} = useModal();

  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAnimating(false);
    }, 10000);

    return () => clearTimeout(timeOut);
  }, []);

  return {show, animating};
}
