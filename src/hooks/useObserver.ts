import { useEffect, useRef } from "react";

export const useObserver = (callback: () => void, deps: any[]) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {

      if(ref.current && isIntersecting && deps.every(dep => dep)) {
        callback();
        console.log('observe');
      } 

    }, {
      rootMargin: '100px'
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      } 
    }
  }, [ref.current,]);

  return [ref];
};
