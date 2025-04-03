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

  return (
    <section>
      <div>
        <h4>Lets Get You signedUp</h4>
        <p>No charges, no fees. Get note taking in minutes!</p>
      </div>

      <div>
        <button>
          <Close />
        </button>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={input.email}
            onChange={handleInputs}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={input.password}
            onChange={handleInputs}
          />
        </div>

        <div>
          <div>
            <button>
              <Checkmark />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUpModal