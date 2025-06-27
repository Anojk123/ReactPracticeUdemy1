
import './Button.css'

export default function TabButton( {children , onSelect}){

   

    return (
        <button  onClick={onSelect} className="EachButton">{children}</button>
    );
}