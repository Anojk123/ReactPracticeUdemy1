
import reactImg from '../assets/react.svg'
import './Header.css'

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

export default Header;