import SearchBar from "./SearchBar"
import { Link } from "react-router-dom";
// import About from "./About/About";
const Nav = (props) =>{
    const {onSearch} = props;
    return (
    <div className = "barrabusqueda">
        
        <Link to="/home">
           <button>Home</button>
        </Link>
        <Link to="/about">
            <button>About</button>
        </Link>
        <Link to="/">
            <button>Login</button>
        </Link>
        <SearchBar onSearch={onSearch} />
    </div>
    )
};


export default Nav;
