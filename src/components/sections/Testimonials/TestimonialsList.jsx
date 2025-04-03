import Testimonial from "./Testimonial"



const TestimonialsList = ({ testimonials }) => {
  return (
    <ul className="flex flex-col gap-y-6">
      {testimonials.map((test) => (
        <Testimonial 
          key={test.name} 
          test={test} 
        />
      ))}
    </ul>
  )
}

export default TestimonialsList