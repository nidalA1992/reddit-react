import { useEffect } from "react";

export function useCloseModalOnClickOutside (
  ref: React.RefObject<HTMLElement>, 
  onClose: () => void)

{
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if(event.target instanceof Node && 
          !ref.current?.contains(event.target)
        ) {
        onClose();
      }
    }

    document.addEventListener('click', handleClick);

    return() => {
      document.removeEventListener('click', handleClick);
    }
  },[])
}
