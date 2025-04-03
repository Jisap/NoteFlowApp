import { motion } from "motion/react"




const Modal = ({ children }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center px-24 py-32"
    >
      <motion.div>
        { children }
      </motion.div>
    </motion.div>
  )
}

export default Modal