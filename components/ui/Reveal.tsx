"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

// Use React.forwardRef to forward the ref to the wrapped component
const Reveal = (WrappedComponent: React.ComponentType<any>) => {
  const RevealComponent = React.forwardRef<HTMLDivElement, any>(
    (props, ref) => {
      const internalRef = React.useRef<HTMLDivElement>(null);
      const isInView = useInView(internalRef, { once: true });

      return (
        <motion.div
          ref={internalRef} // Use the internal ref to track the element in view
          initial={{ opacity: 0, y: 10 }} // Start invisible
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }} // Fade to visible when in view
          transition={{ duration: 0.5, delay: 0.3 }} // Duration of the fade-in
        >
          <WrappedComponent {...props} ref={ref} />{" "}
          {/* Forward ref to wrapped component */}
        </motion.div>
      );
    }
  );

  // Set displayName for better debugging
  RevealComponent.displayName = `Reveal(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return RevealComponent;
};

export default Reveal;
