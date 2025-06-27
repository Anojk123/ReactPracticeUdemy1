
import './card.css'

function Card (props){
    return (
        <div id="card">
        <p><span>{props.name}</span> is professor of computer science at university of galgotias.</p>
        <p><a href="#"><span>{props.email}</span></a></p>
        </div>
    );
}

export default Card;