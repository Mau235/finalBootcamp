import { motion } from 'framer-motion';

export default function Transitions({ children, direction = 'left' }) {
  const res =
    direction === 'left'
      ? leftToRight
      : direction === 'right'
      ? rightToLeft
      : leftToRight;

  return (
    <>
      <motion.div
        initial={res.initial}
        animate={res.animate}
        transition={res.transition}
      >
        {children}
      </motion.div>
    </>
  );
}

const rightToLeft = {
  initial: { translateX: 60, skew: 5 },
  animate: { translateX: 0, skew: 0 },
  transition: { duration: 0.2, ease: 'backOut' },
};
const leftToRight = {
  initial: { ...rightToLeft.initial, translateX: -60, skew: -5 },
  animate: { ...rightToLeft.animate },
  transition: { ...rightToLeft.transition },
};
