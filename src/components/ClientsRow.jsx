function ClientsRow ({client, onEdit, onDelete}) {
    const handleEdit = () =>{
        onEdit(client)
    }

    const handleDelete = () => {
        onDelete(client.id)
    }

    return(
        <tr>//table row
            <td>{client.names}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>{client.address}</td>
            <td>{client.password}</td>
            <td>{client.id_card}</td>
            <td>
                <button onClick={handleEdit}>Edit ✏️</button>
                <button onClick={handleDelete}>Delete 🗑️</button>
            </td>
        </tr>
    )
}
export default ClientsRow