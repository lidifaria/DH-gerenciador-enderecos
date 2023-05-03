import './header.css';
import { NavLink, Link } from 'react-router-dom';

function Header({title}){

    return(
        <header>
            <NavLink to='/'>Usuários</NavLink>
            {/* o link acima substitui <a href="/">Usuários</a> */}
            <NavLink to='/registro'>Cadastrar usuário</NavLink>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;