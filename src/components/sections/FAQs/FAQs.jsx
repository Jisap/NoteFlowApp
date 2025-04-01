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

  const handleCategoryClick = () => { // Establece el estado de la categoría seleccionada
    setActiveQuestion(null)
    setCategory(category)
  }

  return (
    <section>
      <div>
        <h2>Frequently Asked Question</h2>
        
        <div>
          <p>
            The most commonly asked question about NoteFlow.<br/>
            Have any other questions ?{" "} 
            <a href="#">Chat with our expert tech team</a>
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