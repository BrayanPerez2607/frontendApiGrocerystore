function ProductsRow ({product, onEdit, onDelete}) {
    const handleEdit = () =>{
        onEdit(product)
    }

    const handleDelete = () => {
        onDelete(product.id)
    }

    return(
        <tr>//table row
            <td>{product.codigo}</td>
            <td>{product.precio}</td>
            <td>{product.nombre}</td>
            <td>{product.categoria}</td>
            <td>{product.peso}</td>
            <td>{product.marca}</td>
            <td>{product.descripcion}</td>
            <td>{product.imagen}</td>
            <td>
                <button onClick={handleEdit}>Edit ✏️</button>
                <button onClick={handleDelete}>Delete 🗑️</button>
            </td>
        </tr>
    )
}
export default ProductsRow