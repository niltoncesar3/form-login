import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos. 
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fetching, setFething] = useState(false);
  const [error, setError] = useState(null)

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value)
  }

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value)
  }

  const handleLogin = (e) => {
    setFething(true)
    const values = {email: email, password: password}
    login(values)
    .then(() => {
      alert('Login efetuado com sucesso')
    })
    .catch((error) => {
      setError(error)
    
    })
    .finally(() => {
      setFething(false)

    })
    setError(null)
  }





  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Acesse sua conta</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        { error && <div className='errorMessage'>{error.message}</div>}
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input 
          id={'email'}
          value={email}
          onChange={handleEmail}/>
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input 
          id={'password'}
          type={'password'}
          value={password}
          onChange={handlePassword}/>
        </div>

        <div className='button'>
          <button disabled={email === '' || password.length < 6 || fetching === true} onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}