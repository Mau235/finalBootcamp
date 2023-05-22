import { motion } from "framer-motion";


export default function Transitions({ children, direction = 'left' }) {
  const res = direction === 'left' ? leftToRight : direction === 'right' ? rightToLeft : leftToRight

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

const spring = { type: "spring", stiffness: 100 }

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


/*
  initial={{ opacity: .7, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: .7,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        */
