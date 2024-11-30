import Image from "next/image";
import React, { useState } from "react";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const Loader = () => {
  const [Loading, setLoading] = useState(true);
  return (
    <div className="loader">
      <div className="loader__inner"></div>
    </div>
  );
};

export default Loader;
