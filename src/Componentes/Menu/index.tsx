import "./style.css";
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <>
            <header className="logo" >
                <h1>  </h1>
                <nav className="menu">
                    <ul >
                        <li> <Link to='/'> Home </Link> </li>
                        <li> <Link to='/Contatos'> Contatos </Link> </li>
                        <li> <Link to='/Servicos'> Serviços</Link> </li>
                    </ul>
                </nav>
            </header>
        </>

    )
}