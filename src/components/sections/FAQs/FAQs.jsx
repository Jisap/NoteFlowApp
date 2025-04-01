import { useState } from "react"
import { frequentlyAskedQuestions } from "../../../utils/content"
import FAQList from "./FAQList";
//import FAQ from "./FAQ";

const FAQs = () => {

  const[category, setCategory] = useState("General");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const categoryObj = frequentlyAskedQuestions
    .filter((obj) => obj.category === category)
    .at(0)

  const questionsArr = categoryObj.questions;

  const handleQuestionClick = (id) => { // Establece como activa la pregunta seleccionada y vicebersa
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
      <div className="w-full max-w-[90rem] py-32">
        <h2 className="text-primary-50 mb-8 text-center text-6xl/18 font-semibold tracking-tighter">
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

        <ul>
          {frequentlyAskedQuestions.map((obj) => (
            <li key={obj.id}>
              <button onClick={() => handleCategoryClick(obj.category)}>
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