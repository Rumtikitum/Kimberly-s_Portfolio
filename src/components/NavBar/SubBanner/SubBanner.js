import "./subBanner.css"
import { Button } from "../../Button/Button";
import { useNavigate } from "react-router-dom";

export const SubBanner = () => {
    const paths = [
        {id: 1, title: "About", link: "/"},
        {id: 3, title: "Work", link: '/work'},
        {id: 4, title: "Services", link: '/services'},
    ]

    const trueLinks = [
    {id: 2, title: "Twitter", link: "https://google.com"},
    {id: 5, title: "Contact", link: 'https://google.com'},

    ]


    const navigate = useNavigate();
 
    const someEventHandler = (arg) => {
        navigate(arg);
    } 

    const handleClick = (arg) => {
        window.location.assign(arg)
    }

    return (
        <div>
            <ul className="underbanner">
                {paths.map((path) => <Button key={path.id} onClick={()=>{someEventHandler(`${path.link}`)}}>{path.title}</Button> 
                )}   
                {trueLinks.map((trueLink) => <Button key={trueLink.id} onClick={()=>{handleClick(`${trueLink.link}`)}}>{trueLink.title}</Button> 
                )}             
            </ul>
        </div>
    );
}






