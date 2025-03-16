import React from "react";
import {useEffect} from "react";


const Categories = () => {
    const elementsRef = useRef([]);
    
        useEffect(() => {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if(entry.isIntersecting) {
                  entry.target.classList.add("show");
                }
                else {
                  entry.target.classList.remove("show");
                }
              });
            },
            { threshold: 0 }
          );
    
          elementsRef.current.forEach((el) => {
            if (el) observer.observe(el);
          });
          return () => observer.disconnect();
        }, []);
}