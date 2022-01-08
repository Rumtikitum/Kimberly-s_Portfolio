import knight from "./img/knight.jpg"
import firelord from "./img/firelord.jpg"
import kitty from "./img/kitty.jpg"
import "./navbar.css"
import { SubBanner } from "./SubBanner/SubBanner"

const IMAGES = [
    knight,
    firelord,
    kitty
]

export const Navbar = ({children, image,}) => {
    const checksrc = IMAGES.includes(image) ? image : IMAGES[0];

    return (
        <div>
            <nav className={`bannercontainer container`}>
                <img src={checksrc} alt={checksrc}/>
                <header>{children}</header>
                <SubBanner></SubBanner>
            </nav>
        </div>
    );
}