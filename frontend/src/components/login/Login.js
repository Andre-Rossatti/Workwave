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
        Axios.post('http://localhost:8800/login', {
          LoginUsername: loginUsername,
          LoginSenha: loginSenha
        }).then((response) => {
            console.log(response.data)
            if (response.data.message || loginUsername === '' || loginSenha === '') {
                // navigateTo('/')  // Comente ou remova esta linha
                setLoginStatus(`Credenciais não coincidem!`);
            }
            
        })
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

export default Login