import React from 'react';

const HowItWorks: React.FC = () => {
    return (
        <section>
            <div className="container">
                <div className="how-grid">
                    <div className="step-list">
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2 }}>
                            Alquile en minutos, <br />conduzca con confianza
                        </h2>

                        <div className="step-item">
                            <div className="step-num">01</div>
                            <div className="step-info">
                                <h4>Elegir paquete</h4>
                                <p>Selecciona la cantidad de boletos que mejor se adapte a tu suerte.</p>
                            </div>
                        </div>

                        <div className="step-item">
                            <div className="step-num">02</div>
                            <div className="step-info">
                                <h4>Completar datos</h4>
                                <p>Ingresa tu RUT, nombre, email y teléfono para registrar tus números.</p>
                            </div>
                        </div>

                        <div className="step-item">
                            <div className="step-num">03</div>
                            <div className="step-info">
                                <h4>Pagar (Webpay/Transferencia)</h4>
                                <p>Finaliza tu compra de forma segura con los métodos más usados en Chile.</p>
                            </div>
                        </div>

                        <div className="step-item">
                            <div className="step-num">04</div>
                            <div className="step-info">
                                <h4>Recibir confirmación</h4>
                                <p>Recibe tus números al instante por correo y WhatsApp.</p>
                            </div>
                        </div>
                    </div>

                    <div className="how-visual">
                        <div style={{ padding: '60px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#A0AEC0' }}>
                            [Ilustración Mock de Sorteo]
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
