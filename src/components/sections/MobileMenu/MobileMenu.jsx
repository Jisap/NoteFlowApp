import { motion } from "motion/react"
import Close from "../../icons/Close"
import { navigationLinks } from "../../../utils/content"




const MobileMenu = () => {
  return (
    <motion.div>
      <motion.div>
        <div>
          <button>
            <Close className="stroke-primary-50 h-7 w-7" width={2} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default MobileMenu