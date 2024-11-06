import { useState } from "react"

function ProductsForm ({onSubmit}) {
    const [codigo, setCodigo] = useState('')
    const [precio, setPrecio] = useState('')
    const [nombre, setNombre] = useState('')
    const [categoria, setCategoria] = useState('')
    const [peso, setPeso] = useState('')
    const [marca, setMarca] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [imagen, setImagen] = useState('')

    const handleCodigoChange = (event) => {
        setCodigo(event.target.value)
    }

    const handlePrecioChange = (event) => {
        setPrecio(event.target.value)
    }

    const handleNombreChange = (event) => {
        setNombre(event.target.value)
    }

    const handleCategoriaChange = (event) => {
        setCategoria(event.target.value)
    }

    const handlePesoChange = (event) => {
        setPeso(event.target.value)
    }

    const handleMarcaChange = (event) => {
        setMarca(event.target.value)
    }

    const handleDescripcionChange = (event) => {
        setDescripcion(event.target.value)
    }

    const handleImagenChange = (event) => {
        setImagen(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({codigo, precio, nombre, categoria, peso, marca, descripcion, imagen})
        setCodigo('')
        setPrecio('')
        setNombre('')
        setCategoria('')
        setPeso('')
        setMarca('')
        setDescripcion('')
        setImagen('')
    } 

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Codigo" value={codigo} onChange={handleCodigoChange} required />
            <input type="number" placeholder="Precio" value={precio} onChange={handlePrecioChange} required />
            <input type="text" placeholder="Nombre" value={nombre} onChange={handleNombreChange} required />
            <input type="text" placeholder="Categoria" value={categoria} onChange={handleCategoriaChange} required />
            <input type="text" placeholder="Peso" value={peso} onChange={handlePesoChange} required />
            <input type="text" placeholder="Marca" value={marca} onChange={handleMarcaChange} required />
            <input type="text" placeholder="Descripcion" value={descripcion} onChange={handleDescripcionChange} required />
            <input type="text" placeholder="Imagen" value={imagen} onChange={handleImagenChange} required />
            <button type="submit">Save</button>
        </form>
    )
}

export default ProductsForm