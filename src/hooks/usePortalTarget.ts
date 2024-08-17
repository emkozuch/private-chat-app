import { RefObject, useEffect, useState } from "react";

export const usePortalTarget = (ref: RefObject<HTMLDivElement>) => {
  const [element, setElement] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setElement(ref.current);
  }, []);

  return element;
};
