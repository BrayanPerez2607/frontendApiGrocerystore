function InvoiceRow({ sale, onEdit, onDelete }) {
    const handleEdit = () => {
        onEdit(sale); // Llama a onEdit pasando la venta completa
    }

    const handleDelete = () => {
        onDelete(sale.id); // Llama a onDelete pasando el ID de la venta
    }

    return (
        <tr>
            <td>{sale.id}</td>
            <td>{sale.client.names} ({sale.client.email})</td>
            <td>{sale.purchaseDate}</td>
            <td>{sale.total}</td>
            <td>
                <ul>
                    {sale.products.map((product) => (
                        <li key={product.id}>
                            {product.nombre} - {product.precio} {product.categoria}
                        </li>
                    ))}
                </ul>
            </td>
            <td>
                <button onClick={handleEdit}>Edit ✏️</button>
                <button onClick={handleDelete}>Delete 🗑️</button>
            </td>
        </tr>
    );
}

export default InvoiceRow;
