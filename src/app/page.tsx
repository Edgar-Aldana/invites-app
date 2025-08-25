'use client';

import { useState, useEffect } from "react";
import { Loader } from "./components/loader/loader";
import { Hero } from "./components/Hero/Hero";
import "./globals.css";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader />;
  }

  return <Hero />;
}