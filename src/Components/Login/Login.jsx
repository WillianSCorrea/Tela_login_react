import {FaUser , FaLock} from "react-icons/fa";

import {useState} from 'react';

import "./Login.css";
const Login = () => {
    
    const [username, setUsername] = useState("");
    const [userpassword, setPassword] = useState("");
   
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Envio")

    };

  return (
    <div className="container">
      <form  onSubmit={handleSubmit}>
        <h1>Acesse o Sistema</h1>
        <div>
            <input type="email" name="" id="" placeholder="E-mail" value={username}
  onChange={(e) => setUsername(e.target.value)}/>
            <FaUser/>
        </div>
        <div>
            <input type="password" name="" id="" placeholder="Senha" value={userpassword}
  onChange={(e) => setPassword(e.target.value)}/>
            <FaLock/>
        </div>

        <div className="recall-forget">
            <label>
                <input type="checkbox" name="" id="" />Lembre de Mim
            </label>
            <a href="">Esqueceu a senha ?</a>
        </div>


        <button>Entrar</button>

        <div className="signup-link">
            <p>Não tem conta? <a href=""> Registrar</a></p>
        </div>

      </form>
    </div>
  )
}

export default Login
