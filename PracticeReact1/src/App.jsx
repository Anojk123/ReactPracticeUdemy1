
import './App.css'
import reactImg from './assets/react.svg'
import Header from './Components/Header'
import CoreConcept from './Components/CoreConcept'





function App() {
  return (
   <div>
    <Header/>
    
    <main>
      <section id="">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept title="Mobile" description="make calls and play game" img={reactImg}/>
          <CoreConcept title="laptop" description="uses for office work and study" img={reactImg}/>
          <CoreConcept title="TV" description="uses for entertainment" img={reactImg}/>
        </ul>
      </section>
      <h2>Time to get started</h2>
    </main>
   </div>
  )
}

export default App
