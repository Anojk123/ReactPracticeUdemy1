
import reactImg from '../assets/react.svg'
import './Header.css'

function CoreConcept(props){
  return(
    <li>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

export default CoreConcept;