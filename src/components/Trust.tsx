import React from 'react';

interface TrustProps {
    onCtaClick: () => void;
}

const Trust: React.FC<TrustProps> = ({ onCtaClick }) => {
    return (
        <section className="bg-dark">
            <div className="container">
                <div className="section-header">
                    <h2>Experimente la comodidad cada vez que alquile con Travra</h2>
                </div>
                <div className="trust-cards">
                    <div className="trust-card">
                        <h5>Participación segura</h5>
                        <p>Sistemas encriptados para el manejo de tus datos personales.</p>
                    </div>
                    <div className="trust-card">
                        <h5>Sorteos verificados</h5>
                        <p>Auditados por organismos independientes para garantizar azar real.</p>
                    </div>
                    <div className="trust-card">
                        <h5>Soporte 24/7</h5>
                        <p>Atención personalizada para compras y consultas técnicas.</p>
                    </div>
                    <div className="trust-card">
                        <h5>Recaudación transparente</h5>
                        <p>Reportes claros sobre el estado de cada sorteo activo.</p>
                    </div>
                    <div className="trust-card">
                        <h5>Confirmación inmediata</h5>
                        <p>Notificaciones por Email y WhatsApp al segundo de pagar.</p>
                    </div>
                    <div className="trust-card">
                        <h5>Términos y condiciones</h5>
                        <p>Bases legales protocolizadas ante notaría en Santiago.</p>
                    </div>
                </div>
                <div className="cta-box">
                    <div>
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>Comencemos tu compra hoy</h4>
                        <p style={{ color: '#718096' }}>Tu próximo auto está a solo unos clics de distancia.</p>
                    </div>
                    <button className="btn btn-primary" onClick={onCtaClick}>Elegir paquete</button>
                </div>
            </div>
        </section>
    );
};

export default Trust;
