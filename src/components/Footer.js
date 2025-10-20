import React from 'react';

export default function Footer() {
    return (
        <footer style={{ background: '#f5f5f5', padding: '1rem', textAlign: 'center' }}>
            <small>© {new Date().getFullYear()} - PWA - IDGS11 - Manuel Contreras Castillo</small>
        </footer>
    );
}