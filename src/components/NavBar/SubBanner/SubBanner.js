import "./subBanner.css"
import { Button } from "../../Button/Button";

export const SubBanner = () => {
    const objects = [
        {id: 1, title: "About", link: "meow"},
        {id: 2, title: "Twitter", link: "https://google.com"},
        {id: 3, title: "Work", link: 'http://localhost:3000/work'},
        {id: 4, title: "Services", link: 'http://localhost:3000/services'},
        {id: 5, title: "Contact", link: 'https://google.com'},

    ]

    return (
        <div>
            <ul className="underbanner">
                {objects.map((object) => <Button key={object.id} onClick={()=>{handleClick(`${object.link}`)}}>{object.title}</Button> 
                )}
            </ul>
        </div>
    );
}


const handleClick = (arg) => {
    window.location.assign(arg)
}