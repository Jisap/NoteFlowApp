import { motion } from "motion/react"
import Close from "../../icons/Close"
import { navigationLinks } from "../../../utils/content"




const MobileMenu = () => {
  return (
    <motion.div>
      <motion.div>
        <div>
          <button>
            <Close  width={2} />
          </button>

          <ul>
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button>Login</button>
          <button>Get Started</button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default MobileMenu