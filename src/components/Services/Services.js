import { Navbar } from "../NavBar/Navbar";
import kitty from "../NavBar/img/kitty.jpg"

export const Services = () => {
  return (
    <div>
        <Navbar
        children="Services"
        image={kitty}
        >

        </Navbar>
    </div>
  );
}

export default Services;