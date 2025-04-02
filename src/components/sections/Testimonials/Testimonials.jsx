import { useState } from "react"
import TestimonialsList from "./TestimonialsList";
import { testimonials as test } from "../../../utils/content";

const Testimonials = () => {

  const [expanded, setExpanded] = useState(true);

  return (
    <section className="bg-gradient-to-top">
      <div className="m-auto flex max-w-[90rem] flex-col items-center px-24 py-32">
        <div className="mb-20 flex max-w-[51.625rem] flex-col items-center gap-y-6">
          <p className="text-primary-1300 bg-primary-500 primary-glow w-min rounded-full px-4 py-2 text-base/8">
            Testimonials
          </p>
          <h2 className="text-primary-50 text-center text-6xl/18 font-semibold tracking-tighter">
            What out AI-powered <br />
            notetaker have to say
          </h2>
          <p className="text-primary-100 px-28 text-center text-xl/loose font-light">
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

        <button>
          {expanded ? "Show less" : "Show more"}
        </button>
      </div>
    </section>
  )
}

export default Testimonials