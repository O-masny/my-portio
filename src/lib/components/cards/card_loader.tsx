"use client";
import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="rounded bg-gray-300 h-40 w-full"></div>
    </div>
  );
};

export default SkeletonLoader;
