import { getSession, useSession } from "next-auth/react"
import LoginComponents from "../components/LoginComponents"

const login = () => {
    return <LoginComponents/>
}
export default login