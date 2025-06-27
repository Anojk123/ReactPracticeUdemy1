
import './App.css'
import reactImg from './assets/react.svg'
import Header from './Components/Header'
import CoreConcept from './Components/CoreConcept'
// import './Components/Header.css'
import TabButton from './Components/TabButtons'
import Card from './Components/Card'
import { useState } from 'react'



function App() {
  const [userInfo,setUserInfo]=useState({
    name:"shradha",
    email:"shradh@gmail.com"
  });

   function handleClick(newName,newEmail){
      console.log(newName,newEmail);
      setUserInfo({
        name:newName,
        email:newEmail
      })
    }

  return (
    <div>
      <Header />

      <main>
        <section id="">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title="Mobile" description="make calls and play game" img={reactImg} />
            <CoreConcept title="laptop" description="uses for office work and study" img={reactImg} />
            <CoreConcept title="TV" description="uses for entertainment" img={reactImg} />
          </ul>
        </section>
        <section id="examples">
          <menu>
            <h1>Examples</h1>
            <div className="button">
              <TabButton onSelect={()=>handleClick("Component","Component@gmail.com")}>Component</TabButton>
              <TabButton onSelect={()=>handleClick("Jsx","Jsx@gmail.com")}>JSX</TabButton>
              <TabButton onSelect={()=>handleClick("Props","Props@gmail.com")}>Props</TabButton>
              <TabButton onSelect={()=>handleClick("State","State@gmail.com")}>State</TabButton>
            </div>
           
          </menu>
          
        </section>
        <Card name={userInfo.name} email={userInfo.email} />
        <h2>Time to get started</h2>
      </main>
    </div>
  )
}

export default App
