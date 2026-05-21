import React from "react";
import useModal from "../../../hooks/useModal";
import InputField from "../../UI/Input/Input";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({setSearch,search}) => {
  
	const{isOpen,toggle} = useModal();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="logo">🎬 MovieHub</div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <NavLink style={{color:'white',textDecoration:'none'}} to={'/home'} className="nav-item">Home</NavLink>
          
          <NavLink style={{color:'white',textDecoration:'none'}} to={'/tvshow'} className="nav-item">TVShows</NavLink>
          
          <NavLink style={{color:'white',textDecoration:'none'}} to={'/trendingMovies'} className="nav-item">TrendingMovies</NavLink>

          <NavLink to="/mylist" className="nav-item" style={{ color: "white", textDecoration: "none" }}>My List</NavLink>

          <li>
            <InputField
              type="text"
              placeholder="Search movies..."
              className="search"
			  value={search}
			  onChange={(e)=>setSearch(e.target.value)}
            />
          </li>
        </ul>
        <div
          className="hamburger"
          onClick={toggle}
        >
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;