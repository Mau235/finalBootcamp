import { motion } from "framer-motion";


export default function Transitions({ children, direction = 'left' }) {
  const res =
    direction === 'left'
      ? leftToRight
      : direction === 'right' 
        ? rightToLeft
        : leftToRight

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
  )
}

const rightToLeft = {
  initial: { opacity: .8, x: 100, rotate: 2 },
  animate: { opacity: 1, x: 0, rotate: 0 },
  transition: {
    duration: .7
  }
}

const leftToRight = {
  ...rightToLeft,
  initial: { ...rightToLeft.initial, x: -100, rotate: -2 }
}