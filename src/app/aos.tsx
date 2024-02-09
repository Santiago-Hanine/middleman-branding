"use client"

import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 700,
          easing: 'ease-in',
          delay: 200,
        });
      });

  return null
}