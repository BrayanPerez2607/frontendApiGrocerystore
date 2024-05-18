import api from "../../api.jsx";
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SaleDetails = () => {
    const { id } = useParams();
    const [sale, setSale] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSale = async () => {
            try {
                const response = await api.get(`/sales/${id}`);
                setSale(response.data);
            } catch (error) {
                console.error('Error fetching sale:', error);
            }
        };

        fetchSale();
    }, [id]);

    const handleDelete = async () => {
        try {
            await api.delete(`/sales/${id}`);
            navigate('/');
        } catch (error) {
            console.error('Error deleting sale:', error);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/sales/${id}`, sale);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating sale:', error);
        }
    };

    if (!sale) return <div>Loading...</div>;

    return (
        <div>
            <h1>Sale Details</h1>
            {isEditing ? (
                <form onSubmit={handleUpdate}>
                    <div>
                        <label>Total:</label>
                        <input
                            type="number"
                            step="0.01"
                            value={sale.total}
                            onChange={(e) => setSale({ ...sale, total: parseFloat(e.target.value) })}
                            required
                        />
                    </div>
                    <button type="submit">Update Sale</button>
                </form>
            ) : (
                <div>
                    <p>ID: {sale.id}</p>
                    <p>Client ID: {sale.clientId.id}</p>
                    <p>Total: {sale.total}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default SaleDetails;
