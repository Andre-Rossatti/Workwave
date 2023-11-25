import React, { useEffect, useState } from 'react';
import './Login.css';
import './App.css'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'
import video from '../../assets/img/video.mp4'
import logo from '../../assets/img/logo.png'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'




const Login = () => {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginSenha, setLoginSenha] = useState('');
    const navigateTo = useNavigate();
    const [loginStatus, setLoginStatus] = useState('');
    const [statusHolder, setStatusHolder] = useState('message');

    const loginUser = (e) => {
        e.preventDefault();
        if (loginUsername === '' || loginSenha === '') {
            setLoginStatus('Por favor, preencha todos os campos.');
            return; // Impede a continuação da função se os campos estiverem vazios
        }
        
        Axios.post('http://localhost:8800/login', {
            LoginUsername: loginUsername,
            LoginSenha: loginSenha
        }).then((response) => {
            if (response.data.loggedIn) {
                // Armazenar o userId no localStorage ou no estado do aplicativo
                localStorage.setItem('userId', response.data.userId);
                navigateTo('/dashboard') // Substitua '/dashboard' pelo caminho desejado
            } else {
                // Definir mensagem de erro com base na resposta do servidor
                setLoginStatus(response.data.message);
            }
        }).catch((error) => {
            console.error('Erro no login:', error);
            setLoginStatus('Ocorreu um erro ao tentar fazer login.');
        });
    }

    useEffect(() => {
        if (loginStatus !== '') {
            setStatusHolder('showMessage') 
            setTimeout(() => {
                setStatusHolder('message')
            }, 2000);
        }
    }, [loginStatus])



    return (
        <div className="loginPage flex  mt-5">
            <div className="container flex">

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className="title">Você está a uma onda do sucesso</h2>
                        <p>Continue.</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Não possui uma conta?</span>
                        <Link to={'/register'}>
                            <button className="btn">Criar Conta</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Seja Bem-Vindo!</h3>
                    </div>

                    <form className="form grid" onSubmit={loginUser}>
                        <span className={statusHolder}>{loginStatus}</span>

                        <div className="inputDiv">
                            <label htmlFor="username">Usuário:</label>
                            <div className="input flex">
                                <FaUserShield className="icon" />
                                <input type="text" id='username' placeholder='Digite o seu usuário...'
                                    onChange={(event) => setLoginUsername(event.target.value)} />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Senha</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className="icon" />
                                <input type="password" id='senha' placeholder='Digite sua senha...'
                                    onChange={(event) => setLoginSenha(event.target.value)} />
                            </div>
                        </div>

                        <button type='submit' className='btn flex'>
                            <span>Entrar</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>

                        <span className="forgotPassword">
                            Esqueceu sua senha? <a href="">Clique aqui.</a>
                        </span>

                    </form>
                </div>

            </div>
        </div>
    )
}





fetch('/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        LoginUsername: 'username',
        LoginSenha: 'password',
    }),
})
.then(response => response.json())
.then(data => {
    if (data.loggedIn) {
        // Armazenar o userId no localStorage para uso posterior
        localStorage.setItem('userId', data.userId);

        // Redirecionar para a dashboard
        window.location.href = '/dashboard';
    } else {
        // Exibir mensagem de erro
        alert(data.message);
    }
})
.catch(error => {
    console.error('Erro no login:', error);
});

export default Login