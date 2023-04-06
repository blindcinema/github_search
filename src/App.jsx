import { useEffect, useState } from 'react'
import { UsernameForm } from './components/UsernameForm'



function App() {
  const [formState, setFormState] = useState({});
  const [userState, setUserState] = useState({});
  const [repoState, setRepoState] = useState([]);
  function handleSubmit(username) {
    console.log(username);
    setFormState(username);
  }

  useEffect(() => {
    fetch("./api/username.json")
      .then((response)=>{
        return response.json()
      })
      .then((json)=> {
        setUserState(json);
      })}
  ,[])

  useEffect(() => {
    fetch("./api/repos.json")
      .then((response)=>{
        return response.json()
      })
      .then((json)=> {
        setRepoState(json);
      })}
  ,[])
      const repoComponent = repoState.map((item)=>{
        return <div key={item.id}>{item.name}<br/></div>
      })
    
      console.log(userState);
      console.log(repoState);
    
  return (
    <div className="App">
      <UsernameForm onSubmit={handleSubmit}></UsernameForm>
    <div>

      {userState.login}
      <br/> 
      {userState.name}
      <br/>
      <img src={userState.avatar_url} style={{width:" 50px"}} alt='avatar_url'></img>
      <br/>
      <div>{repoComponent}</div>
    </div> 
    </div>
  )
}

export default App
