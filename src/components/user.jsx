
import { useAuth } from "./auth-provider"


export default function User() {

    const {user } = useAuth()

    console.log(user)

  return (
    <div>
        <h1>{user.name}</h1>
        <p>{user.job}</p>
        
    </div>
  )
}
