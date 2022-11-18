import { useEffect } from "react";

type RefObj = React.RefObject<HTMLTextAreaElement | HTMLInputElement>;

export function useInputFocus(ref: RefObj, name: string = '', value: string) {
  useEffect(() => {
    if(ref.current) {
      ref.current.value = `${name}, `;
      ref.current?.focus();
    }
  }, [ref]);
}
