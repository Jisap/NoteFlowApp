import Close from "../../icons/Close"
import Checkmark from "../../icons/Checkmark"
import { useState } from "react"



const SignUpModal = () => {

  const initialState = {
    email: "sss",
    password: "1234",
  }

  const [checked, setChecked] = useState(false)
  const [input, setInput] = useState(initialState)

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
      // TODO: close modal
      // TODO: submit data to database
    }
  }

  return (
    <section className="grid grid-cols-2 max-w-3xl ">
      <div className="bg-primary-1300 flex flex-col justify-center gap-y-4b noise bg-repeat p-10 text-center">
        <h4 className="text-primary-50 text-4xl/12 font-bold tracking-tight">
          Lets Get You signedUp
        </h4>
        <p className="text-primary-100 text-lg/8">
          No charges, no fees. Get note taking in minutes!
        </p>
      </div>

      <div className="bg-primary-1500 flex flex-col justify-between gap-y-24 noise bg-repeat p-10">
        <button className="border-primary-75 hover:bg-primary-75 group transition-properties ml-auto w-fit cursor-pointer rounded-2xl border-2 p-3">
          <Close 
            className="stroke-primary-75 group-hover:stroke-primary-1300 transition-properties"
            width={2}
          />
        </button>

        <div className="text-primary-50 flex flex-col gap-y-6 text-lg/8 font-semibold tracking-tight">
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={input.email}
              onChange={handleInputs}
              className="bg-primary-75 placeholder-primary-1500 text-primary-1300 mt-2 block w-full rounded-full px-8 py-4 font-normal 
              placeholder:text-base placeholder:font-light placeholder:opacity-20"
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
              placeholder:text-base placeholder:font-light placeholder:opacity-20"
            />
          </label>
        </div>

        <div>
          <div onClick={() => setChecked((prev) => !prev)}>
            <button>
              <Checkmark />
            </button>
            <p>I agree to all terms</p>
          </div>
          <button onClick={ handleSubmit }>
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default SignUpModal