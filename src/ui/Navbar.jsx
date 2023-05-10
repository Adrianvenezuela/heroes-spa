import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
      <Link className='navbar-brand' to='/'>
        Asociaciones
      </Link>

<<<<<<< HEAD
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/marvel"
          >
=======
      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to='/marvel'>
>>>>>>> d1a4729c24c6f83f975e2f59726ce85032e22d0a
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
<<<<<<< HEAD
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/marvel"
          ></NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">Adrian</span>

          <button className="nav-item nav-link btn">logout</button>
=======
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to='/marvel'>
            DC
          </NavLink>
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-primary'>Adrian</span>

          <button className='nav-item nav-link btn'>logout</button>
>>>>>>> d1a4729c24c6f83f975e2f59726ce85032e22d0a
        </ul>
      </div>
    </nav>
  );
};
