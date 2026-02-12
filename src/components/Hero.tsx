import React, { useState, useEffect } from 'react';

interface HeroProps {
    onVerPaquetesClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onVerPaquetesClick }) => {
    const [timeLeft, setTimeLeft] = useState<{
        days: number;
        hours: number;
        minutes: number;
    }>({ days: 4, hours: 12, minutes: 45 });

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes } = prev;
                if (minutes > 0) minutes--;
                else {
                    minutes = 59;
                    if (hours > 0) hours--;
                    else {
                        hours = 23;
                        if (days > 0) days--;
                    }
                }
                return { days, hours, minutes };
            });
        }, 60000); // Update every minute to avoid too many renders

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero" id="inicio">
            <div className="container">
                <h1>Impulsa tu suerte <br />hacia adelante</h1>
                <p>Participa en sorteos de autos en Chile. Compra paquetes de boletos y aumenta tus chances de llevarte el auto de tus sueños.</p>
                <div className="hero-btns">
                    <button className="btn btn-primary" onClick={onVerPaquetesClick}>Ver paquetes</button>
                    <button className="btn btn-outline">Ver sorteo actual</button>
                </div>

                <div className="hero-image-wrap">
                    <img src="https://templatekit.selaraswp.com/rental/wp-content/uploads/sites/44/2025/10/BMW-XM-SUV-Mockup-01-2.png" alt="BMW SUV" className="main-car" />
                    <div className="floating-panel">
                        <div className="panel-item">
                            <span className="panel-label">Sorteo Activo</span>
                            <span className="panel-value" id="timer">
                                {timeLeft.days.toString().padStart(2, '0')}d : {timeLeft.hours.toString().padStart(2, '0')}h : {timeLeft.minutes.toString().padStart(2, '0')}m
                            </span>
                        </div>
                        <div className="panel-item">
                            <span className="panel-label">Métodos de pago</span>
                            <span className="panel-value">Webpay, transferencia, MercadoPago</span>
                        </div>
                        <div className="panel-item">
                            <span className="panel-label">Entrega Premio</span>
                            <span className="panel-value">Notaría / Transmisión en vivo</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
