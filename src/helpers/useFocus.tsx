import { useRef, useEffect } from "react";

export const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);
  //    możesz zapisać to też tak:
  // if(inputRef.current){
  // inputRef.current.focus()
  // }
  return ref;
};
