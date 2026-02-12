import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <div className="logo" style={{ marginBottom: '20px' }}>SORTEA AUTO</div>
                        <p style={{ fontSize: '0.9rem', maxWidth: '300px' }}>La plataforma de sorteos automotrices líder en Chile. Transparencia, legalidad y sueños cumplidos en cada sorteo.</p>
                    </div>
                    <div className="footer-col">
                        <h5>Enlaces rápidos</h5>
                        <ul className="footer-links">
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#sorteos">Sorteos</a></li>
                            <li><a href="#ganadores">Ganadores</a></li>
                            <li><a href="#faq">Preguntas</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h5>Contacto</h5>
                        <ul className="footer-links">
                            <li>info@sorteauto.cl</li>
                            <li>+56 9 1234 5678</li>
                            <li>Lunes a Viernes</li>
                            <li>09:00 - 19:00 hrs</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h5>Redes Sociales</h5>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <span>FB</span> <span>IG</span> <span>TK</span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Sorteos realizados conforme a bases publicadas. Protocolizadas ante notario. Juega con responsabilidad. © 2026 SORTEA AUTO Chile.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
