import React,{useState} from "react";

function Signup() {

    const [name,setName] = useState("")
    const [title,setTitle] = useState("")
    const [phone,setPhone] = useState(0)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


const handleSubmit=(e)=>{
        e.preventDefault()
        if(name && title && phone && email && password){
        console.log(name)
        }
        else
        alert("Enter all fields")
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <br />
            <form onSubmit = {handleSubmit}  >
                <section>
                    <label htmlFor="name">Name :</label>
                    <input id="name" value={name} placeholder="please enter name" onChange={(e)=>setName(e.target.value)} ></input>
                </section>
                <section>
                    <label htmlFor='title'>Title :</label>
                    <input  id="title" value={title}  placeholder='please enter title' onChange={(e)=>setTitle(e.target.value)}></input>
                </section>

                <section>
                    <label htmlFor='phone'>Phone Number :</label>
                    <input type="number" id="phone" value={phone} placeholder='please enter Phone Number' onChange={(e)=>setPhone(e.target.value)} ></input>
                </section>

                <section>  
                  <label htmlFor='email'>Email Id :</label>
                    <input type="text" id="email" value={email} placeholder='please enter email' onChange={(e)=>setEmail(e.target.value)} ></input>
                </section>




                <br />
                <section>
                    <label htmlFor='password'>Password :</label>
                    <input type="password" id="password" value={password} placeholder='please enter password' onChange={(e)=>setPassword(e.target.value)} ></input>
                </section>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )

}
export default Signup