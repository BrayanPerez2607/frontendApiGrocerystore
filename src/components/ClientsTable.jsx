import ClientsRow from "./ClientsRow"

function ClientsTable({clients, onEdit, onDelete}){


    return(
        <table>
            <thead>
                <tr>
                    <th>NAMES</th>
                    <th>EMAILS</th>
                    <th>PHONES</th>
                    <th>ADDRESSES</th>
                    <th>PASSWORDS</th>
                    <th>DOCUEMENT</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client) => (
                    <ClientsRow key={client.id} client={client} onEdit={onEdit} onDelete={onDelete} />
                ))}
            </tbody>
        </table>
    )
}

export default ClientsTable