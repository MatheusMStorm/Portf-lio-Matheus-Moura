
import { useState, useEffect, useRef } from 'react';

type ObserverOptions = {
  threshold?: number;
  triggerOnce?: boolean;
};

export const useScrollAnimation = <T extends HTMLElement,>(options?: ObserverOptions) => {
  const elementRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options?.triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else {
            if (!options?.triggerOnce) {
                setIsVisible(false);
            }
        }
      },
      {
        threshold: options?.threshold || 0.1,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return { ref: elementRef, isVisible };
};
