import React from 'react';

const PromoBanners: React.FC = () => {
    return (
        <section className="bg-light">
            <div className="container">
                <div className="promo-banners">
                    <div className="promo-card" style={{ background: '#4A5568' }}>
                        <span className="badge" style={{ width: 'fit-content', marginBottom: '12px' }}>Temporal</span>
                        <h3>Duplica tus chances</h3>
                        <p>Promo verano: 2x1 en boletos seleccionados por tiempo limitado.</p>
                        <button className="btn btn-primary" style={{ width: 'fit-content', marginTop: '15px', padding: '8px 20px' }}>Ver promo</button>
                    </div>
                    <div className="promo-card" style={{ background: '#2D3748' }}>
                        <span className="badge" style={{ width: 'fit-content', marginBottom: '12px' }}>Ahorro</span>
                        <h3>Ahorra en paquetes</h3>
                        <p>Obtén hasta un 40% de descuento al comprar el Mega Pack de 10 boletos.</p>
                        <button className="btn btn-primary" style={{ width: 'fit-content', marginTop: '15px', padding: '8px 20px' }}>Ahorrar ahora</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoBanners;
