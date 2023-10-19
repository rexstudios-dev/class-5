
const Producto = ({producto}) => {
  return (
    <div className="producto-card">
      <img src={producto.image} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p>{producto.price}</p>
    </div>
  )
}

export default Producto;
