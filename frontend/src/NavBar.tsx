import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import useUser from "./hooks/useUser";

export default function NavBar(){

  const {user, isLoading} = useUser();

    const navigate = useNavigate()

    return (
        <>
        <nav className=" px-4 py-7 bg-[#ff6500] w-full 2x1:rounded-b">
            <ul className="flex justify-between flex-wrap gap-x-8 gap-y-4 text-white
                    font-bold sm:justify-center sm:gap-x-16 *: text-x1">        

                <li>
                    <Link  to="/"> Home</Link>


                </li>

                <li>
                    <Link to="/stories">Stories</Link>
                </li>

                {
                    isLoading ? (<li>Loading...</li>): (
                        <>
                        {
                            user && (
                                <li>

                            User: <span className="text-[#0B192C]">{user?.email}</span>
                        </li>

                            )
                        }
                        
                         <li>
                    
                                {user ? (<button onClick={()=> signOut(getAuth())}>Log Out</button>
                                ) : (
                                <button onClick={() => navigate("/login")} > Log In</button>)}
                    
                            </li>
                        
                        </>
                        
                    )
                }


               


            </ul>
        </nav>
        
        
        </>
    )
}