import ProductsRow from "./ProductsRow";

function ProductsTable (products, onEdit, onDelete) {
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
                {products.map((product) => (
                    <ProductsRow 
                        key={product.id} 
                        product={product} 
                        onEdit={onEdit} 
                        onDelete={onDelete} 
                    />
                ))}
            </tbody>
        </table>
    )
}

export default ProductsTable