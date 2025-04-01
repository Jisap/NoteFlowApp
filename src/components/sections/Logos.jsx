import { logos } from "../../utils/content"


const Logos = () => {
  return (
    <section className="bg-gradient-to-top">
      <div className="m-auto max-w-[90rem] px-24 py-28">
        <p className="text-primary-50 m-auto mb-20 text-center text-xl">
          Organizations powered by <span className="font-bold tracking-tight">NoteFlow</span>{" "}
        </p>
        <div>
          <ul>
            {logos.slice(0,4).map((logo) => {
              return (
                <li key={logo.id}>
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="" 
                  />
                </li>
              )
            })}
          </ul>
          <ul>
            {logos.slice(4).map((logo) => {
              return (
                <li key={logo.id}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className=""
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Logos