import { useEffect } from 'react';

/**
 * A custom hook to reveal elements as they enter the viewport using IntersectionObserver.
 * Elements must have the 'reveal' class.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
      root: null, // default is the browser viewport
      rootMargin: '0px 0px -80px 0px', // trigger slightly before the element reaches the bottom
      threshold: 0.1, // 10% of the element needs to be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once the animation triggers, we can stop observing it
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []); // Empty dependency array runs this on mount
};

export default useScrollReveal;
