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
                <h2>Empieza tu participación hoy</h2>
                <p>Elige tu paquete, asegura tus boletos y sé el próximo ganador.</p>
                <button className="cta-button" onClick={onVerPaquetesClick}>
                    MOSTRAR TODOS LOS COCHES →
                </button>
            </div>
        </div>
    );
};

export default FinalCTA;
