import React from 'react';

const Benefits: React.FC = () => {
    return (
        <section className="bg-light">
            <div className="container">
                <div className="benefits-grid">
                    <div className="phone-container">
                        <div className="phone-mock">
                            <div className="phone-inner">SORTEA APP</div>
                        </div>
                    </div>
                    <div className="benefits-info">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Disfruta más con cada viaje</h2>

                        <div className="benefit-item">
                            <div className="benefit-icon">🛡️</div>
                            <div>
                                <h4>Transparencia del sorteo</h4>
                                <p>Todos nuestros sorteos son validados ante notario público y transmitidos en vivo.</p>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">🔒</div>
                            <div>
                                <h4>Pagos seguros</h4>
                                <p>Protocolos de seguridad bancaria para proteger cada una de tus transacciones.</p>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">🎧</div>
                            <div>
                                <h4>Soporte 24/7</h4>
                                <p>Nuestro equipo está disponible por WhatsApp para resolver tus dudas en minutos.</p>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">🏆</div>
                            <div>
                                <h4>Ganadores publicados</h4>
                                <p>Mantenemos un historial público de todos nuestros ganadores anteriores.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px', marginTop: '40px' }}>
                            <button className="btn btn-primary">Descargar App Store</button>
                            <button className="btn btn-primary" style={{ background: '#000', color: '#fff' }}>Google Play</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
