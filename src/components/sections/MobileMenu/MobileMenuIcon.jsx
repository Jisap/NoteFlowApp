import { motion } from "motion/react"
import Menu from "../../icons/Menu"


const MobileMenuIcon = () => {

  const mobileMenuOpened = true

  return (
    <motion.button
      animate={{ rotate: mobileMenuOpened ? 90 : 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="justify-center items-center max-lg:flex hidden cursor-pointer"
    >
      <Menu className="stroke-primary-50 h-7 w-7" width={2} />
    </motion.button>
  )
}

export default MobileMenuIcon