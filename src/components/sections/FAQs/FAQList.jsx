import { motion } from "motion/react"
import { useState } from "react"
import FAQ from "./FAQ"




const FAQList = ({
  category,
  questions,
  activeQuestion,
  handleQuestionClick,
}) => {

  const [inView, setInView] = useState(false);

  return (
    <motion.ul
      key={category}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      layout
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          transition: {
            staggerChildren: 0.25,
            ease: "easeIn"
          }
        },
      }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{ once: false, amount: "100%" }}
      className="m-auto flex flex-col max-w-[51.625rem] gap-y-14 max-lg:gap-y-12"
    >
      {questions.map((question) => (
        <FAQ 
          key={question.id}
          question={question}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      ))}
    </motion.ul>
  )
}

export default FAQList