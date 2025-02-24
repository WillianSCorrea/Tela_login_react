
import {FaUser , FaLock} from "react-icons/fa"
const Cadastro = () => {
  return (
    <div className="container">
        <form action="">
         <h1>Acesse o Sistema</h1>
              <div>
                  <input type="email" name="" id="" placeholder="E-mail" />
                  <FaUser/>
              </div>
              <div>
                  <input type="password" name="" id="" placeholder="Senha"/>
                  <FaLock/>
              </div>
              <button>Entrar</button>
        </form>
    </div>
  )
}

export default Cadastro

