import React from 'react'
import './top.css'
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'
import img from '../../../assets/img/dashboard/gilbert.jpg'
import img2 from '../../../assets/img/dashboard/images (2).png'
import video from '../../../assets/img/dashboard/video.mp4'

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Bem vindo ao Painel</h1>
          <p>Olá como é bom ter você de volta</p>
          <h1 ><a href="/">Sair</a></h1>
        </div>

       

      </div>

      
    </div>
  )
}

export default Top