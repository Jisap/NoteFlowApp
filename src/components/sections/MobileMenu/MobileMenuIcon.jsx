import { motion } from "motion/react"
import Menu from "../../icons/Menu"
import { useMobileMenuContext } from "../../../context/MobileMenuContext"


const MobileMenuIcon = () => {

  
  const { mobileMenuOpen, setMobileMenuOpen  } = useMobileMenuContext();

  return (
    <motion.button
      animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="justify-center items-center max-lg:flex hidden cursor-pointer"
      onClick={() => setMobileMenuOpen(true)}
    >
      <Menu 
        className="stroke-primary-50 h-7 w-7" 
        width={2} 
      />
    </motion.button>
  )
}

export default MobileMenuIcon