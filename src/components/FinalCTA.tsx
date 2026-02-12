import React from 'react';

interface FinalCTAProps {
    onVerPaquetesClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onVerPaquetesClick }) => {
    return (
        <div className="final-cta">
            <img src="https://templatekit.selaraswp.com/rental/wp-content/uploads/sites/44/2025/10/cta-car-3.png" alt="" className="car-bg car-left" />
            <img src="https://templatekit.selaraswp.com/rental/wp-content/uploads/sites/44/2025/10/cta-car-4.png" alt="" className="car-bg car-right" />
            <div className="container">
                <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '20px' }}>Empieza tu participación hoy</h2>
                <button className="btn btn-primary" style={{ padding: '18px 45px', fontSize: '1.1rem' }} onClick={onVerPaquetesClick}>Ver paquetes</button>
                <p style={{ marginTop: '24px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Compra segura • Números al instante • Soporte WhatsApp</p>
            </div>
        </div>
    );
};

export default FinalCTA;
