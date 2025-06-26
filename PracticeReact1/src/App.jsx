
import './App.css'
import reactImg from './assets/react.svg'

const reactDescription = ['Fundamental' , 'Crucial' ,'Core'];
function GenRandomNumber(max){
  return Math.floor(Math.random()*(max+1));
}

function Header(){
  return(
    <header>
      {/* <img src="src/assets/react.svg" alt="Stylized atom" /> */}
      <img src={reactImg} alt="Stylized atom" />

      <h1>React Essentials</h1>
      <p>{reactDescription[GenRandomNumber(2)]} react concepts you will need for almost any aap you are going to build!</p>
    </header>
  );
}

function CoreConcept(props){
  return(
    <li>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

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
