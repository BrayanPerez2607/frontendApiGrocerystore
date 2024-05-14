import { useEffect, useState } from 'react'

import './App.css'

import axios from 'axios'
import ClientsTable from './components/ClientComponents/ClientsTable'
import ClientsForm from './components/ClientComponents/ClientsForm'
import ProductsForm from './components/ProductComponents/ProductsForm'
import ProductsTable from './components/ProductComponents/ProductsTable'

function App() {
  const [clients, setClients] = useState([])
  const [editingClient, setEditingClient] = useState(null)

  const [products, setProducts] = useState([])
  const [editingProduct, setEditingProduct] = useState(null)

  //functions clients
  //#region 
  //actualiza la lista de clientes por cada cliente nuevo
  useEffect(()=>{
    fetchClients()
  }, [])

  //crea o actualiza un cliente
  const handleCreateOrUpdateClient = async (clientData) => {
    if (editingClient) {
      await axios.put(`http://localhost:8080/apigrocerystore/clients/${editingClient.clientId}`, clientData)
    } else {
      await axios.post(`http://localhost:8080/apigrocerystore/clients`, clientData)
    }
  }

  //recorre la lista de clientes y retornalos como respuesta 
  const fetchClients = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/apigrocerystore/clients`)
      setClients(response.data)
    } catch (error) {
      console.log('Error al cargar los clientes: ' , error)
    }
  }

  //permite editar un cliente
  const handleEditClient = (client) => {
    setEditingClient(client)
  }

  //permite eliminar un cliente a partir de un ID
  const handleDeleteClient = async(clientId) => {
    await axios.delete(`http://localhost:8080/apigrocerystore/clients/${clientId}`)
    fetchClients()
  }
  //#endregion
  
  //functions products
  //#region 

  useEffect(()=>{
    fetchProducts()
  }, [])

  const handleCreateOrUpdateProduct = async (productData) => {
    if (editingProduct) {
      await axios.put(`http://localhost:8080/apigrocerystore/products/${editingProduct.id}`, productData)
    } else {
      await axios.post(`http://localhost:8080/apigrocerystore/products`, productData)
    }
  }

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/apigrocerystore/products`)
      setProducts(response.data)
    } catch (error) {
      console.log('Error al cargar los productos: ' , error)
    }
  }

  const handleEditProduct = (product) => {
    setEditingProduct(product)
  }

  const handleDeleteProduct = async(id) => {
    await axios.delete(`http://localhost:8080/apigrocerystore/products/${id}`)
    fetchProducts()
  }
  //#endregion

  return (
    <div className='App'>
      <h1>Api Grocery Store</h1>
      <br/>
      <h2>List Clients</h2>
      <ClientsTable clients={clients} onEdit={handleEditClient} onDelete={handleDeleteClient} />
      <h2>{editingClient ? 'edit client' : 'create client'}</h2>
      <ClientsForm onSubmit={handleCreateOrUpdateClient} initialClient={editingClient} />
      <br/>
      <h2>List Products</h2>
      <ProductsTable products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />
      <h2>{editingProduct ? 'edit product' : 'create product'}</h2>
      <ProductsForm onSubmit={handleCreateOrUpdateProduct} initialClient={editingProduct} />
    </div>
  )
}

export default App
