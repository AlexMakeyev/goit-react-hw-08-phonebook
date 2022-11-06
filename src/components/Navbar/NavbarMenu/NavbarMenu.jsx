import { NavLink } from 'react-router-dom';

import items from './items';

const NavbarMenu = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className="" to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className="">{elements}</ul>;
};

export default NavbarMenu;
