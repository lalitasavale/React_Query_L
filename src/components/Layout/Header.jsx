import { NavLink } from "react-router-dom"

const Header =()=>{
  return(
    <Header>
      <div>
        <NavLink to ="/">React Query Learning</NavLink>
        <NavLink to ="/">Home</NavLink>
        <NavLink to ="/trad">Fetch Old</NavLink>
        <NavLink to ="/rq">Fetch RQ</NavLink>
      </div>
    </Header>
  )
}
export default Header