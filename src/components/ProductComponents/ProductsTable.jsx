import ProductsRow from "./ProductsRow";

function ProductsTable () {
    return(
        <table>
            <thead>
                <tr>
                    <th>CODIGO</th>
                    <th>PRECIO</th>
                    <th>NOMBRE</th>
                    <th>CATEGORIA</th>
                    <th>PESO</th>
                    <th>MARCA</th>
                    <th>DESCRIPCION</th>
                    <th>IMAGEN</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((product) => (
                    <ProductsRow key={product.id} product={product} onEdit={onEdit} onDelete={onDelete} />
                ))}
            </tbody>
        </table>
    )
}

export default ProductsTable