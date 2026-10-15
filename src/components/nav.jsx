import { useAuth } from "./auth-provider";
import User from "./user";


export default function Nav() {

    const {user} = useAuth()

  return (
    <div>
        <h2>My Nav</h2>
        <User/>
        <h3>{user.name}</h3>
    </div>
  )
}
