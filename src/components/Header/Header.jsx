import { NavLink } from 'react-router-dom';

import { AppBar, Toolbar} from '@mui/material';

import logo from '../../img/logo.png';
import style from './Header.module.css';

function Header(){
    return (
        <AppBar position="static" color="inherit" sx={{mb: "35px"}}>
            <Toolbar sx={{justifyContent: "space-between", height: 70, fontFamily: "Karla, sans-serif", py: 0.5, maxWidth: "xl", mx: "auto", width: 1/1, boxSizing: "border-box"}}>
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
                <ul className={style["header-menu"]}>
                    <li><NavLink to="characters" className={({isActive}) => isActive ? style.active : ""}>Characters</NavLink></li>
                    <li><NavLink to="locations" className={({isActive}) => isActive ? style.active : ""}>Locations</NavLink></li>
                    <li><NavLink to="episodes" className={({isActive}) => isActive ? style.active : ""}>Episodes</NavLink></li>
                </ul>
            </Toolbar>
        </AppBar>
    );
}

export default Header;