import { useState } from "react"

function ClientsForm ({onSubmit}) {

    const [names, setNames] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [id_card, setId_card] = useState('')

    const handleNamesChange = (event) => {
        setNames(event.target.value)
    }

    const handleEmailsChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePhonesChange = (event) => {
        setPhone(event.target.value)
    }

    const handleAddressesChange = (event) => {
        setAddress(event.target.value)
    }

    const handlePasswordsChange = (event) => {
        setPassword(event.target.value)
    }

    const handleIdCardChange = (event) => {
        setId_card(event.target.value)
    }

    //funcion para enviar el formulario

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({names, email, phone, address, password, id_card})
        setNames('')
        setEmail('')
        setPhone('')
        setAddress('')
        setPassword('')
        setId_card('')
    } 

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Names" value={names} onChange={handleNamesChange} required />
            <input type="email" placeholder="Email" value={email} onChange={handleEmailsChange} required />
            <input type="text" placeholder="Phone" value={phone} onChange={handlePhonesChange} required />
            <input type="text" placeholder="Address" value={address} onChange={handleAddressesChange} required />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordsChange} required />
            <input type="text" placeholder="Document" value={id_card} onChange={handleIdCardChange} required />
            <button type="submit">Save</button>
        </form>
    )

}
export default ClientsForm