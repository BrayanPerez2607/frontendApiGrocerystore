import React from "react";
import InvoiceRow from "./InvoiceRow";

function InvoiceTable({ sales, onEditSale, onDeleteSale }) {
    if (!Array.isArray(sales) || sales.length === 0) {
        return <div>No hay ventas registradas</div>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>CLIENTE</th>
                    <th>FECHA DE COMPRA</th>
                    <th>TOTAL</th>
                    <th>PRODUCTOS</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                {sales.map((sale) => (
                    <InvoiceRow
                        key={sale.id}
                        sale={sale}
                        onEdit={onEditSale}
                        onDelete={onDeleteSale}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default InvoiceTable;