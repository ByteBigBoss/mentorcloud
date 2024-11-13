"use client";

import React, { Suspense } from "react";

interface SuspenseWrapperProps {
  children: React.ReactNode;
}

const SuspenseWrapper: React.FC<SuspenseWrapperProps> = ({ children }) => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper;