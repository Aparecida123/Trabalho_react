import{FiPhoneCall} from 'react-icons/fi'
import {Menu} from "../Menu"
import "./style.css";

import {BsWhatsapp } from 'react-icons/bs'

import {FaInstagram} from 'react-icons/fa'

import {HiOutlineMail} from 'react-icons/hi'



export const Contatos = () => {
    return (
        <>
        <Menu/>
            <main>
        
                <h1 className='contatos'><FiPhoneCall/>Contatos:</h1>
                <div>                   
                    <div className="whats">
                        <h2 className='n3'><BsWhatsapp /> Whatsapp</h2>
                        <p> tel: +55 (85) 2456-8754</p>
                        <p> tel: +55 (85) 1234-3656</p>
                        <p> tel: +55 (85) 2354-3454</p>
                    </div>
                    <div className='inst'>
                        <h2><FaInstagram /> Instagram</h2>
                        <p>insta: @assistencia_1519</p>
                        <p>insta: @lilo_empresa</p>
                        <p>insta: @ana_sousa29</p>
                    </div>
                    <div className='em'>
                        <h2><HiOutlineMail /> Email</h2>
                        <p>empregados.ass.com.br</p>
                        <p>ana236@gmail.com</p>
                        <p>Sousa35@gmail.com</p>
                        
                    </div>
                </div>


            </main>
        </>

    )
}