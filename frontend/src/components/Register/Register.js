import React, { useState } from 'react';
import './Register.css';
import './App.css'
import { Link, useNavigate} from 'react-router-dom';
import Axios from 'axios'
import video from '../../assets/img/video.mp4'
import logo from '../../assets/img/logo.png'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import { MdMarkEmailRead } from 'react-icons/md'



const Register = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [username, setUsername] = useState('')
    const [senha, setSenha] = useState('')
    const navigateTo = useNavigate();

    const createUser = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:8800/register', {
            Nome: nome,
            Email: email,
            Telefone: telefone,
            Username: username,
            Senha: senha

        }).then(() => {
            navigateTo('/');
            setNome('');
            setEmail('');
            setTelefone('');
            setUsername('');
            setSenha('');

        })
    }

    return (
        <div className="registerPage flex mt-5">
            <div className="container flex">

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className="title">Faça parte da WORKWAVE</h2>
                        <p>Sua próxima onda de sucesso!</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Já possui uma conta?</span>
                        <Link to={'/login'}>
                            <button className="btn">Login</button>
                        </Link>
                    </div>
                </div>

              

                <div className="formDiv flex">
                    


                    <form action="" className="form grid">

                    <div className="inputDiv">
                            <label htmlFor="text">Nome Completo:</label>
                            <div className="input flex">
                                <FaUserShield className="icon" />
                                <input type="text" id='nome' placeholder='Digite o seu nome...'
                                    onChange={(event) => setNome(event.target.value)} />
                            </div>
                        </div>
                    
                    <div className="inputDiv">
                            <label htmlFor="email">Email:</label>
                            <div className="input flex">
                                <MdMarkEmailRead className="icon" />
                                <input type="email" id='email' placeholder='Digite um email de contato...'
                                    onChange={(event) => setEmail(event.target.value)} />
                            </div>
                    </div> 

                    <div className="inputDiv">
                            <label htmlFor="text">Telefone:</label>
                            <div className="input flex">
                                <FaUserShield className="icon" />
                                <input type="text" id='telefone' placeholder='Digite um número para contato...'
                                    onChange={(event) => setTelefone(event.target.value)} />
                            </div>
                    </div>      

                    <div className="inputDiv">
                            <label htmlFor="username">Nome de usuário:</label>
                            <div className="input flex">
                                <FaUserShield className="icon" />
                                <input type="text" id='username' placeholder='Digite seu usuário...'
                                    onChange={(event) => setUsername(event.target.value)} />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Senha:</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className="icon" />
                                <input type="password" id='senha' placeholder='Crie uma senha...'
                                    onChange={(event) => setSenha(event.target.value)} />
                            </div>
                        </div>

                        <button type='submit' className='btn flex' onClick={createUser}>
                            <span>Cadastrar</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>

     
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Register;