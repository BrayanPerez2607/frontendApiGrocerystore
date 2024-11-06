import { useState, useEffect } from "react";

function InvoiceForm({ onSubmit, clients, products }) {
    const [clientId, setClientId] = useState('');
    const [productIds, setProductIds] = useState([]);
    const [total, setTotal] = useState('');

    const handleClientChange = (event) => {
        setClientId(event.target.value);
    }

    const handleProductChange = (event) => {
        const selectedProductIds = Array.from(event.target.selectedOptions, option => option.value);
        setProductIds(selectedProductIds);
    }

    const handleTotalChange = (event) => {
        setTotal(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!clientId || productIds.length === 0 || !total) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const saleData = {
            clientId: parseInt(clientId, 10),
            productIds: productIds.map(id => parseInt(id, 10)),
            total: parseFloat(total),
        };

        onSubmit(saleData); // Llama a la función onSubmit para enviar los datos
        setClientId('');
        setProductIds([]);
        setTotal('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="client">Cliente</label>
                <select id="client" value={clientId} onChange={handleClientChange} required>
                    <option value="">Seleccione un cliente</option>
                    {clients.map(client => (
                        <option key={client.clientId} value={client.clientId}>
                            {client.names} ({client.email})
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="products">Productos</label>
                <select id="products" multiple value={productIds} onChange={handleProductChange} required>
                    {products.map(product => (
                        <option key={product.id} value={product.id}>
                            {product.nombre} - {product.precio} {product.categoria}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="total">Total</label>
                <input
                    type="number"
                    id="total"
                    value={total}
                    onChange={handleTotalChange}
                    required
                    placeholder="Total de la venta"
                />
            </div>

            <button type="submit">Crear Venta</button>
        </form>
    );
}

export default InvoiceForm;
