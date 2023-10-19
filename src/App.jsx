

import { useState, useEffect } from 'react';
import './App.css';
const App = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProductos(data);
    }
    obtenerProductos();
  }, []);

  return (
    <div>
      <h1>Productos</h1>

      <div className="productos-grid">
        {productos.map(producto => (
          <div className="producto-card">
            <img src={producto.image} alt={producto.title} />
            <h3>{producto.title}</h3>
            <p>{producto.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App