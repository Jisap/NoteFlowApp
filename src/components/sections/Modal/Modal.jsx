import { motion } from "motion/react"
import { useModalContext } from "../../../context/ModalContext"




const Modal = ({ children, modal }) => {

  const { activeModal, setActiveModal } = useModalContext()
  const activelyDisplayedModal = modal === activeModal; // Si el argumento "modal" =  a activeModal ("sign-up"), entonces es true -> visible

  return (
    <motion.div
      className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center px-24 py-32 max-lg:px-8 max-md:px-6"
      variants={{
        hidden: { opacity: 0, visibility: "hidden" },
        visible: { opacity: 100, visibility: "visible" },
      }}
      animate={activelyDisplayedModal ? "visible" : "hidden"}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      onClick={(e) => e.currentTarget === e.target && setActiveModal("")} // Cerrar el modal cuando se hace click fuera del modal
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={activelyDisplayedModal ? { opacity: 100, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="flex overflow-hidden rounded-2xl opacity-0 shadow-[0px_0px_20px_rgb(6,18,18,.10)]"
      >
        { children }
      </motion.div>
    </motion.div>
  )
}

export default Modal