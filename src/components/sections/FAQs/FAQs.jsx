import { useState } from "react"
import { frequentlyAskedQuestions } from "../../../utils/content"
import FAQList from "./FAQList";


const FAQs = () => {

  const[category, setCategory] = useState("General");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const categoryObj = frequentlyAskedQuestions
    .filter((obj) => obj.category === category)
    .at(0)

  const questionsArr = categoryObj.questions;

  const handleQuestionClick = (id) => { // Establece como activa la pregunta seleccionada y viceversa
    id === activeQuestion 
      ? setActiveQuestion(null)
      : setActiveQuestion(id)

  }

  const handleCategoryClick = (category) => { // Establece el estado de la categoría seleccionada
    setActiveQuestion(null)
    setCategory(category)
    console.log("category", category);
  }

  return (
    <section className="bg-gradient-to-bottom justify-items-center">
      <div className="w-full max-w-[90rem] py-32 max-xl:px-16 max-xl:py-24">
        <h2 className="text-primary-50 mb-8 text-center text-6xl/18 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-5xl/16">
          Frequently Asked Question
        </h2>
        
        <div className="mb-8 text-xl/loose font-light">
          <p className="text-primary-100 text-center">
            The most commonly asked question about NoteFlow.<br/>
            Have any other questions ?{" "} 
            <a href="#" className="underline decoration-1 underline-offset-3">
              Chat with our expert tech team
            </a>
          </p>
        </div>

        <ul className="mb-16 flex flex-wrap justify-center gap-x-3 gap-y-4">
          {frequentlyAskedQuestions.map((obj) => (
            <li key={obj.id}>
              <button 
                className={`
                border-primary-50 text-primary-50 transition-properties cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 max-xl:px-6 max-xl:text-base/loose
                  ${obj.category === category && "bg-primary-500 text-primary-1300 border-primary-500 primary-glow"}
                  ${obj.category !== category && "hover:bg-primary-50 hover:text-primary-1300"}
                `}
                onClick={() => handleCategoryClick(obj.category)}
              >
                {obj.category}
              </button>
            </li>
          ))}
        </ul>

        <FAQList 
          category={category}
          questions={questionsArr}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      </div>
    </section>
  )
}

export default FAQs