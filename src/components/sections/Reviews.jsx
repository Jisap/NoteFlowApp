import { reviews } from "../../utils/content"


const Reviews = () => {
  return (
    <section>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <img src={review.src} alt={review.alt} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Reviews