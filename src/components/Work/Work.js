//Will fail without importing firelord. Must have firelord imported in Navbar, in IMAGES arr, in current file
import firelord from "../NavBar/img/firelord.jpg"

import { Navbar } from "../NavBar/Navbar";

export const Work = () => {
    return (
        <Navbar
        image= {firelord}
        children="Work"
        >
        </Navbar>
    );
  }
  
