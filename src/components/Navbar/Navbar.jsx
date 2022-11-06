import { Link } from 'react-router-dom';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';

const Navbar = () => {
  return (
    <nav className="">
      <div className="">
        <div className="">
          <Link to="/">Logo</Link>
          <NavbarMenu />
          <NavbarAuth />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
