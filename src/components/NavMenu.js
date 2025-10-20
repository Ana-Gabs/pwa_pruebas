import React from 'react';
export default function NavMenu() {
    return (
        <nav style={{ width: '220px', borderRight: '1px solid #eee', padding: '1rem' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    );
}