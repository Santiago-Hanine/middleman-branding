"use client"
import AOS from 'aos';
import Image from "next/image";
import Hero from "./Components/Hero";
import 'aos/dist/aos.css'
import { useEffect } from "react";

export default function Home() {


  return (
    <main>
        <Hero />
    </main>
  );
}
