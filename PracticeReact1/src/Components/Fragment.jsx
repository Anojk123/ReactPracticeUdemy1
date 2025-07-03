import { Fragment } from "react"

export default function Summary({text}){
    return(
        <Fragment>
         <h1>Fragment</h1>
         <p>{text}</p>
        </Fragment>
    );
}