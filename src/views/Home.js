import React, { useEffect, useState } from 'react';

export default function Home() {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        // Simulación: carga desde public/data/products.json
        fetch('/data/products.json')
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then(data => setItems(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);


    if (loading) return <p>Cargando contenido...</p>;
    if (error) return <p>Error al cargar: {error}</p>;


    return (
        <section>
            <h2>Lista de Productos (dinámico)</h2>
            <ul>
                {items.map(it => (
                    <li key={it.id}>{it.name} — ${it.price}</li>
                ))}
            </ul>
        </section>
    );
}