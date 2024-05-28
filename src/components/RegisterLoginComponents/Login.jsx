import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../../../firebaseConfig";

function Login({ onLogin }) {  // Aceptamos onLogin como prop
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogIn = async () => {
        try {
            const auth = getAuth(firebaseApp);
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User Log In');
            setErrorMessage('El usuario ha ingresado');
            onLogin();  // Llamamos a onLogin al autenticarse exitosamente
        } catch (error) {
            console.log('Hubo un error al intentar acceder el usuario', error.message);
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="login">
            <h2>Log In</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogIn}>Log In</button>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}

export default Login;
