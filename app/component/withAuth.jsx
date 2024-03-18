"use Client"
import { sessionStatus } from "../utils/session"
import {redirect} from "next/navigation"
import { useEffect } from "react"

export default function withAuth(Component){
return function withAuth(props) {
    const session = sessionStatus
    useEffect(()=>{
        if(!session){
            redirect("/")
            
        }
        console.log(Window.location)
    },[session])
if(!session){
    return null
}
}
    return <Component{...props}/>;
}



// }