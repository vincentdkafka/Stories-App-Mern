import { useState } from "react"
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"
import { useNavigate, Link } from "react-router-dom"

export default function LoginPage (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[error, setError] = useState("")

    const navigate = useNavigate()

   async function logIn(){
    try {
        await signInWithEmailAndPassword( getAuth(), email, password)
        navigate("/stories")
        
    } catch (e) {
        setError(e.message)
        
    }
   }


    return (
        <form  onSubmit={(e) => {
            e.preventDefault()
            if(!email || !password) return
            logIn();
            
            
        } } className="flex flex-col gap-8 self-center w-full text-white lg:max-w-3xl my-8" >

            <h3 className="text-4xl font-bold mb-4">Log In</h3>

            {error && <p className="">{error}</p> }

            <label
                className="flex flex-col text-xl gap-2 focus-within:font-bold "
                htmlFor="email"
                >
                Email Address
                <input
                    className="border-b border-gray-300 text-white focus-within:text-[#FF6500] focus:border-[#FF6500] outline-none py-2 text-2xl"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </label>


                            <label
                    className="flex flex-col text-xl gap-2 focus-within:font-bold"
                    htmlFor="password"
                    >
                    Password
                    <input
                        className="border-b py-2 text-2xl outline-none border-gray-300 focus:border-[#FF6500] text-white"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </label>

                    <button className="text-white bg-[#ff6500] px-4 py-3 rounded text-xl">
                        Login

                    </button>









        <Link to="/create-account" className="text-xl">
            Why you dont have account ??
             Sign up here and make one.
        </Link>


        </form>

        
    )
}