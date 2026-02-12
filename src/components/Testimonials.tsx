import React, { useState } from 'react';

interface Testimonial {
    name: string;
    location: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Ricardo M.",
        location: "Santiago, Chile",
        quote: "Increíble la rapidez del proceso. Compré mis boletos y en segundos ya los tenía en mi WhatsApp. ¡Súper confiable!"
    },
    {
        name: "Camila R.",
        location: "Viña del Mar, Chile",
        quote: "Vi el sorteo en vivo y todo es muy transparente. Aunque no gané esta vez, seguiré participando por el Mega Pack."
    },
    {
        name: "Ignacio S.",
        location: "Concepción, Chile",
        quote: "La mejor plataforma de sorteos en Chile por lejos. La atención al cliente es inmediata y muy amable."
    }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section>
            <div className="container">
                <div className="section-header">
                    <h2>Experiencias reales, libertad real</h2>
                </div>
                <div className="testi-wrapper">
                    <div className="rating-side">
                        <h2 style={{ fontSize: '4rem' }}>4.9/5</h2>
                        <div style={{ color: 'var(--primary)', margin: '10px 0', fontSize: '1.5rem' }}>★★★★★</div>
                        <p style={{ color: '#718096' }}>Calificación promedio de +3,500 participantes</p>
                    </div>
                    <div className="slider-side">
                        {testimonials.map((testi, index) => (
                            <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
                                <div style={{ color: 'var(--primary)', marginBottom: '16px' }}>★★★★★</div>
                                <p style={{ fontSize: '1.25rem', fontWeight: 500, fontStyle: 'italic', marginBottom: '24px' }}>
                                    "{testi.quote}"
                                </p>
                                <p><strong>{testi.name}</strong> — {testi.location}</p>
                            </div>
                        ))}

                        <div style={{ marginTop: '30px', display: 'flex', gap: '10px' }}>
                            <button onClick={prevSlide} className="btn" style={{ background: '#EDF2F7', borderRadius: '50%', width: '45px', height: '45px', padding: 0 }}>←</button>
                            <button onClick={nextSlide} className="btn" style={{ background: '#EDF2F7', borderRadius: '50%', width: '45px', height: '45px', padding: 0 }}>→</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
