import Close from "../../icons/Close"
import Checkmark from "../../icons/Checkmark"
import { useState } from "react"
import { useModalContext } from "../../../context/ModalContext"



const SignUpModal = () => {

  const initialState = {
    email: "sss",
    password: "1234",
  }

  const [checked, setChecked] = useState(false)
  const [input, setInput] = useState(initialState)
  const { setActiveModal } = useModalContext()

  const handleInputs = (e) => {
    setInput((prevInputs) => {
      return {
        ...prevInputs,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(checked){
      console.log(input)
      setInput(initialState)
      setActiveModal("") // Close modal after submit
      // TODO: submit data to database
    }
  }


  return (
    <section className="grid grid-cols-2 max-w-3xl ">
      <div className="bg-primary-1300 flex flex-col justify-center gap-y-4b noise bg-repeat p-10 text-center max-md:px-6 max-md:py-8">
        <h4 className="text-primary-50 text-4xl/12 font-bold tracking-tight max-md:text-3xl/10">
          Lets Get You signedUp
        </h4>
        <p className="text-primary-100 text-lg/8 max-md:text-base/loose">
          No charges, no fees. Get note taking in minutes!
        </p>
      </div>

      <div className="bg-primary-1500 flex flex-col justify-between gap-y-24 noise bg-repeat p-10 max-md:px-6 max-md:py-8">
        <button 
          className="border-primary-75 hover:bg-primary-75 group transition-properties ml-auto w-fit cursor-pointer rounded-2xl border-2 p-3"
          onClick={() => setActiveModal("")}
        >
          <Close 
            className="stroke-primary-75 group-hover:stroke-primary-1300 transition-properties max-md:h-4 max-md:w-4"
            width={2}
          />

        </button>

        <div className="text-primary-50 flex flex-col gap-y-6 text-lg/8 font-semibold tracking-tight max-md:font-normal">
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={input.email}
              onChange={handleInputs}
              className="bg-primary-75 placeholder-primary-1500 text-primary-1300 mt-2 block w-full rounded-full px-8 py-4 font-normal 
              placeholder:text-base placeholder:font-light placeholder:opacity-20 max-md:px-6 max-md:py-3"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={input.password}
              onChange={handleInputs}
              className="bg-primary-75 placeholder-primary-1500 text-primary-1300 mt-2 block w-full rounded-full px-8 py-4 font-normal 
              placeholder:text-base placeholder:font-light placeholder:opacity-20 max-md:px-6 max-md:py-3"
            />
          </label>
        </div>

        <div>
          <div 
            onClick={() => setChecked((prev) => !prev)}
            className="m-auto mb-4 w-fit cursor-pointer gap-x-2"
          >
            <button
              className={`border-primary-100 transition-properties mr-2 inline-flex h-4 w-4 cursor-pointer items-center justify-center
              rounded-sm border-2 ${checked && "bg-primary-100" }`}
            >
              <Checkmark className="stroke-primary-1500" />
            </button>
            <p className="text-primary-100 inline cursor-pointer text-sm">I agree to all terms</p>
          </div>
          <button 
            onClick={ handleSubmit }
            className="bg-primary-500 primary-glow-hover transition-properties w-full cursor-pointer rounded-full py-4 text-lg/8 max-md:px-6 max-md:py-3 max-md:text-base/loose"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default SignUpModal