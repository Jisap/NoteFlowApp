import { motion } from "motion/react"
import  Star  from "../../icons/Star.jsx"

const Testimonial = ({ test }) => {
  return (
    <motion.li
    
    >
      <div>
        {Array.from({length: test.rating }).map((_, i) => (
          <Star key={i} className="fill-primary-100" alt="Filled star icon"/>
        ))}
        {Array.from({length: 5 - test.rating }).map((_, i) => (
          <Star key={i} alt="Filled star icon"/>
        ))}
      </div>

      <p>
        {test.description}
      </p>

      <div>
        <img
          src={test.src}
          alt="Portrait Headshot"
        />
        <div>
          <p>{test.name}</p>
          <p>{test.title}</p>
        </div>
      </div>
    </motion.li>
  )
}

export default Testimonial