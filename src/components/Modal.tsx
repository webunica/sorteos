import React, { useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    packageName: string;
    packagePrice: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, packageName, packagePrice }) => {
    const [rut, setRut] = useState('');

    if (!isOpen) return null;

    const handleRutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\./g, '').replace(/-/g, '');
        if (value.length > 1) {
            let body = value.slice(0, -1);
            let dv = value.slice(-1).toUpperCase();
            setRut(body + '-' + dv);
        } else {
            setRut(value);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Simulando conexión con Webpay Plus... \nEn segundos será redirigido.");
        onClose();
    };

    return (
        <div className="modal flex" id="buyModal">
            <div className="modal-content">
                <h3 id="mTitle" style={{ marginBottom: '10px' }}>Comprar {packageName}</h3>
                <p id="mPrice" style={{ color: 'var(--primary-dark)', fontWeight: 700, marginBottom: '24px' }}>
                    Total: {packagePrice} CLP
                </p>

                <form id="pForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>RUT (Sin puntos, con guion)</label>
                        <input
                            type="text"
                            id="rut"
                            placeholder="12345678-9"
                            required
                            value={rut}
                            onChange={handleRutChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Nombre Completo</label>
                        <input type="text" placeholder="Ej: Juan Pérez" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="email@ejemplo.cl" required />
                    </div>
                    <div className="form-group">
                        <label>Teléfono</label>
                        <input type="tel" placeholder="+56 9 1234 5678" required />
                    </div>
                    <label style={{ fontSize: '0.8rem', display: 'flex', gap: '8px', margin: '20px 0' }}>
                        <input type="checkbox" required /> Acepto las bases legales del sorteo.
                    </label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button type="button" className="btn" style={{ background: '#EDF2F7', flex: 1 }} onClick={onClose}>Cerrar</button>
                        <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>Continuar al pago</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
