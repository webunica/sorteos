import React from 'react';

interface HeaderProps {
    onComprarClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onComprarClick }) => {
    return (
        <header>
            <div className="container nav-content">
                <a href="#" className="logo">SORTEA AUTO</a>
                <nav className="nav-links">
                    <a href="#inicio">Inicio</a>
                    <a href="#sorteos">Sorteos</a>
                    <a href="#ganadores">Ganadores</a>
                    <a href="#faq">Preguntas</a>
                    <a href="#contacto">Contacto</a>
                </nav>
                <div className="nav-btns">
                    <a href="#" className="login-link">Iniciar sesión</a>
                    <button className="btn btn-primary" onClick={onComprarClick}>Comprar boletos</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
