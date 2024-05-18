import api from "../../api.jsx";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SalesList = () => {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await api.get('/sales');
                setSales(response.data);
            } catch (error) {
                console.error('Error fetching sales:', error);
            }
        };

        fetchSales();
    }, []);

    return (
        <div>
            <h1>Sales</h1>
            <Link to="/add">Add Sale</Link>
            <ul>
                {sales.map((sale) => (
                    <li key={sale.id}>
                        <Link to={`/apigrocerystore/sales/${sale.id}`}>Sale {sale.id}</Link> - Total: {sale.total}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SalesList;

