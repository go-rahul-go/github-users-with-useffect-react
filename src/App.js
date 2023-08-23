import { useEffect, useState } from "react";
import UserCard from "./components/USerCard";
import "./style.css";
import Heading from "./components/Heading";

function App(){

  const [users,setUsers] = useState([]);

  async function getUsers(){
    let data = await fetch("https://api.github.com/users");

    data=await data.json();
    setUsers(data)
    console.log(data)
  }

  useEffect(()=>{
    getUsers();
  },[])

  return(
    <>
    <Heading/>
    <div className="card-container">
    {
      users.map((user)=><UserCard key={user.id} name={user.login} imageLink={user.avatar_url} followers={user.followers_url}/>)
    }
    </div>
    </>
  )  

  
}


export default App;