import { useState } from "react"
import TestimonialsList from "./TestimonialsList";
import { testimonials as test } from "../../../utils/content";

const Testimonials = () => {

  const [expanded, setExpanded] = useState(true);

  return (
    <section>
      <div>
        <p>Testimonials</p>
        <h2>
          What out AI-powered <br/>
          notetaker have to say
        </h2>
        <p>
          NoteFlow has helped 1000&apos;s supercharge their productivity with cutting edge AI note taking tools.
        </p>
      </div>

      <div>
        <TestimonialsList
          textimonials={test.slice(0, expanded ? 5 : 2)}
        />
        <TestimonialsList
          textimonials={test.slice(5, expanded ? 10 : 7)}
        />
        <TestimonialsList
          textimonials={test.slice(0, expanded ? 15 : 12)}
        />
      </div>
    </section>
  )
}

export default Testimonials