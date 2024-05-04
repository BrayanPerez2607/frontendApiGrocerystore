import { useEffect, useState } from 'react'

import './App.css'

import axios from 'axios'
import ClientsTable from './components/ClientsTable'
import ClientsForm from './components/ClientsForm'

function App() {
  const [clients, setClients] = useState([])

  const [editingClient, setEditingClient] = useState(null)

  //actualiza la lista de clientes por cada cliente nuevo
  useEffect(()=>{
    fetchClients()
  }, [])

  //crea o actualiza un cliente
  const handleCreateOrUpdateClient = async (clientData) => {
    if (editingClient) {
      await axios.put(`http://localhost:8080/api/grocerystore/clients/${editingClient.id}`, clientData)
    } else {
      await axios.post(`http://localhost:8080/api/grocerystore/clients`, clientData)
    }
  }

  //recorre la lista de clientes y retornalos como respuesta 
  const fetchClients = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/grocerystore/clients`)
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
    await axios.delete(`http://localhost:8080/api/grocerystore/clients/${clientId}`)
    fetchClients()
  }

  return (
    <div className='App'>
      <h1>Api Grocery Store</h1>
      <br/>
      <h2>List Clients</h2>
      <ClientsTable clients={clients} onEdit={handleEditClient} onDelete={handleDeleteClient} />
      <h2>{editingClient ? 'editar cliente' : 'crear cliente'}</h2>
      <ClientsForm onSubmit={handleCreateOrUpdateClient} initialClient={editingClient} />
    </div>
  )
}

export default App
