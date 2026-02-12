import React from 'react';

interface Package {
    name: string;
    price: string;
    features: string[];
    isFeatured?: boolean;
    badge?: string;
}

const packages: Package[] = [
    {
        name: "Básico",
        price: "$5.000",
        features: ["Participas con 1 número", "Confirmación inmediata", "Soporte WhatsApp"]
    },
    {
        name: "Dúo Pack",
        price: "$12.000",
        features: ["Participas con 3 números", "Ahorro proporcional", "Soporte WhatsApp"]
    },
    {
        name: "Mega Pack",
        price: "$35.000",
        isFeatured: true,
        badge: "Más popular",
        features: ["Participas con 10 números", "Ahorro del 30%", "Doble chance semanal", "Soporte VIP WhatsApp"]
    },
    {
        name: "Pro Pack",
        price: "$18.000",
        features: ["Participas con 5 números", "Confirmación inmediata", "Soporte WhatsApp"]
    }
];

interface PackagesProps {
    onBuy: (pkg: Package) => void;
}

const Packages: React.FC<PackagesProps> = ({ onBuy }) => {
    return (
        <section className="bg-light" id="sorteos" style={{ paddingTop: '160px' }}>
            <div className="container">
                <div className="section-header">
                    <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '10px' }}>Sorteo actual: BMW XM 2026 • 28 de Febrero</div>
                    <h2>Un paquete para cada participante</h2>
                </div>

                <div className="packages-grid">
                    {packages.map((pkg, index) => (
                        <div key={index} className={`package-card ${pkg.isFeatured ? 'featured' : ''}`}>
                            {pkg.badge && (
                                <span className="badge" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }}>
                                    {pkg.badge}
                                </span>
                            )}
                            <div className="img-mock">🎫</div>
                            <h3>{pkg.name}</h3>
                            <div className="package-price">{pkg.price} <span style={{ fontSize: '0.9rem', color: '#718096' }}>CLP</span></div>
                            <ul className="package-list">
                                {pkg.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <div className="card-btns">
                                <button
                                    className="btn btn-primary buy-trigger"
                                    onClick={() => onBuy(pkg)}
                                >
                                    Comprar ahora
                                </button>
                                <button className="btn btn-outline" style={{ color: '#2D3748', borderColor: '#CBD5E0' }}>Ver detalles</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;
