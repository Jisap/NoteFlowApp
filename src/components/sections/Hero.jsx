import ArrowRightLine from "../icons/ArrowRightLine";
import ArrowRight from "../icons/ArrowRight";
import HeroGraphic from "../../assets/graphics/HeroGraphic.webp";


const Hero = () => {
  return (
    <div>
      <div>
        <h1>
          AI-Powered Notes. Organize and Summarize in Seconds.
        </h1>
        <p>
          Let AI organize & summarize your notes, <br/>
          saving you time and boosting productivity.
        </p>
        <button>
          <p>
            Get Started
          </p>
          <ArrowRightLine />
          <ArrowRight />
        </button>
      </div>

      <div>
        <div />
        <img src={HeroGraphic} alt="hero-graphic" />
      </div>
    </div>
  )
}

export default Hero