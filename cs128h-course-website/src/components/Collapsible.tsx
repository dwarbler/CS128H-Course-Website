import { useState } from "react"

export interface CollapisbleAtts {
    title: string,
    BodyComponent: JSX.Element,
}

export default function Collapsible({title, BodyComponent}: CollapisbleAtts): JSX.Element {
    const [active, setActive] = useState(false);

    function changeState() {
        setActive(!active);
    }

    return (
        <>
            <button className={`collapsible ${active ? 'collapsibleShown' : ''}`} onClick={changeState}>{((active) ? "- " : "+ ") + title}</button>
            <div className={`content ${active ? 'contentShown' : ''}`}>
                {BodyComponent}
            </div>
        </>
    )
}