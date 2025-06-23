
import './App.css'

function Header(){
  return(
    <header>
      <img src="src/assets/react.svg" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>Fundamenatl react concepts you will need for almost any aap you are going to build!</p>
    </header>
  );
}

function App() {
  return (
   <div>
    <main>
      <h2>Time to get started</h2>
      <Header/>
    </main>
   </div>
  )
}

export default App
