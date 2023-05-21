import { data } from "autoprefixer"
import Form from "./form-field/Form"
import { useState } from "react"

function App() {

  let [data,updateData] = useState({
    username:"",
    email:"",
    password:"",
    confirm_password:"",
  })

  let formFieldData = [
    {
      id:'1',
      type: "text",
      name:"username",
      placeholder:"Username",
      label: "Username",
      required :true,
      pattern: "^[A-Za-z0-9]{3,16}$",
      errorMessage:"username should be 3-16 characters and shouldn't include any special characters"
    },
    {
      id:'2',
      type: "email",
      name:"email",
      placeholder:"Email",
      label: "Email",
      required :true,
      // pattern: "^[A-Za-z0-9]{3,16}$"
      errorMessage:"email should be valid"


    },
    {
      id:'3',
      type: "password",
      name:"password",
      placeholder:"Password",
      label: "Password",
      required :true,
      pattern:"^[A-Za-z0-9]{8,20}$",
      errorMessage:"password should 8-20 characters and include atleast 1 number and 1 alphabet "

    },
    {
      id:'4',
      type: "password",
      name:"confirm_password",
      placeholder:"Confirm Password",
      label: "Confirm Password",
      required :true,
      errorMessage: "password should be match",
      pattern:data.password,

    }
    
  ]

  let onchange = (e) => {
    updateData({...data, [e.target.name] : e.target.value})
  }

  let handleSubmit = () => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="outline w-90 pl-10 pr-8 pt-4 rounded shadow-[0_10px_10px_10px_rgba(0,0,0,0.1)] bg-white">
      {formFieldData.map((data) =>(
        <Form key={data.id} {...data} onchange={onchange} value={data[data.name]}/>
      ))}
    <button className="bg-slate-400 text-black px-7 py-1 rounded mb-6 mt-3">submit</button>
    </form>
  )
}

export default App
