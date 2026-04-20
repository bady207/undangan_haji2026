import { motion } from "framer-motion";

export const Reveal = ({
  children,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const GoldOrnament = ({
  className = "",
}) => {
  return (
    <div
      className={`gold-divider text-gold-brand ${className}`}
    >
      <svg
        width="36"
        height="14"
        viewBox="0 0 36 14"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M18 0 L22 7 L18 14 L14 7 Z"
          fill="currentColor"
          opacity="0.9"
        />

        <circle
          cx="6"
          cy="7"
          r="1.5"
          fill="currentColor"
        />

        <circle
          cx="30"
          cy="7"
          r="1.5"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export const SectionLabel = ({
  children,
}) => {
  return (
    <div className="text-center">
      <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-gold-brand font-medium">
        {children}
      </p>
    </div>
  );
};