import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ClientsTable from './components/ClientComponents/ClientsTable';
import ClientsForm from './components/ClientComponents/ClientsForm';
import ProductsForm from './components/ProductComponents/ProductsForm';
import ProductsTable from './components/ProductComponents/ProductsTable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SalesList from "./components/SaleComponents/SalesList.jsx";
import SaleDetails from "./components/SaleComponents/SaleDetails.jsx";
import AddSale from "./components/SaleComponents/AddSale.jsx";
import Register from './components/RegisterLoginComponents/Register.jsx';
import Login from './components/RegisterLoginComponents/Login.jsx';
import InvoiceForm from './components/InvoiceComponents/InvoiceForm.jsx';
import InvoiceTable from './components/InvoiceComponents/InvoiceTable.jsx';


function App() {
  const [clients, setClients] = useState([])
  const [editingClient, setEditingClient] = useState(null)

  const [products, setProducts] = useState([])
  const [editingProduct, setEditingProduct] = useState(null)

  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  // Manejar la autenticación del usuario
const handleLogin = () => {
  setIsAuthenticated(true);
};

const handleLogout = () => {
  setIsAuthenticated(false);
};

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

  useEffect(() => {
    fetch(`http://localhost:8080/apigrocerystore/products`)
        .then(response => response.json())
        .then(data => {
          console.log("Datos recibidos:", data);  // Log para verificar la respuesta
          if (Array.isArray(data)) {
            setProducts(data);
          } else {
            console.error("La respuesta de la API no es un arreglo:", data);
          }
        })
        .catch(error => console.error('Error al obtener los datos:', error));
  }, []);

  const handleCreateOrUpdateProduct = async (productData) => {
    if (editingProduct) {
      await axios.put(`http://localhost:8080/apigrocerystore/products/${editingProduct.id}`, productData)
    } else {
      await axios.post(`http://localhost:8080/apigrocerystore/products`, productData)
    }
  }

  /*const fetchProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/apigrocerystore/products`);
      setProducts(response.data);
    } catch (error) {
      console.log('Error al cargar los productos: ', error);
    }
  };*/

  const handleEditProduct = (product) => {
    setEditingProduct(product)
  }

  const handleDeleteProduct = async(id) => {
    await axios.delete(`http://localhost:8080/apigrocerystore/products/${id}`)
    fetch()
  }
  //#endregion

  

  return (
    <div className='App'>
      <h1>Api Grocery Store</h1>
      {!isAuthenticated ? (
        <>
          <Register />
          <Login onLogin={handleLogin} />
        </>
      ) : (
        <>
          <button onClick={handleLogout}>Logout</button>
          <h2>List Clients</h2>
          <ClientsTable clients={clients} onEdit={handleEditClient} onDelete={handleDeleteClient} />
          <h2>{editingClient ? 'Edit Client' : 'Create Client'}</h2>
          <ClientsForm onSubmit={handleCreateOrUpdateClient} initialClient={editingClient} />
          <br />
          <h2>List Products</h2>
          <ProductsTable products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />
          <h2>{editingProduct ? 'Edit Product' : 'Create Product'}</h2>
          <ProductsForm onSubmit={handleCreateOrUpdateProduct} initialProduct={editingProduct} />
          <br />
          <Router>
            <Routes>
              <Route exact path="/apigrocerystore/sales" element={<SalesList />} />
              <Route path="/" element={<AddSale />} />
              <Route path="/apigrocerystore/sales/:id" element={<SaleDetails />} />
            </Routes>
          </Router>
        </>
      )}
    </div>
  );

  const [sales, setSales] = useState([]);

    const handleAddSale = (saleData) => {
        const newSale = {
            id: sales.length + 1, // Genera un nuevo ID
            ...saleData,
            purchaseDate: new Date().toLocaleDateString(), // Fecha de compra
            client: initialClients.find(client => client.clientId === saleData.clientId), // Busca el cliente
            products: initialProducts.filter(product => saleData.productIds.includes(product.id)), // Filtra los productos
        };
        setSales([...sales, newSale]); // Actualiza el estado de ventas
    };

    const handleEditSale = (saleToEdit) => {
        // Aquí deberías implementar la lógica para editar una venta
        console.log("Editar venta:", saleToEdit);
    };

    const handleDeleteSale = (saleId) => {
        const updatedSales = sales.filter(sale => sale.id !== saleId); // Filtra la venta a eliminar
        setSales(updatedSales); // Actualiza el estado de ventas
    };

    return (
        <div>
            <h1>Gestión de Ventas</h1>
            <InvoiceForm onSubmit={handleAddSale} clients={initialClients} products={initialProducts} />
            <InvoiceTable sales={sales} onEditSale={handleEditSale} onDeleteSale={handleDeleteSale} />
        </div>
    );
}

export default App