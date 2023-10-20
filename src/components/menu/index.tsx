import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="nav-menu">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li className='link-menu'><Link className='link-menu' to='#'>Cadastros</Link>
          <ul>
            <li><Link className='link-register' to='/register/pet/'>Pet</Link></li>
            <li><Link className='link-register' to='/register/temp-home/'>Lar Temporário</Link></li>
            <li><Link className='link-register' to='/register/vet-clinic/'>Clínica</Link></li>
          </ul>
        </li>
        <li><Link className='link-menu' to='/vet-care/'>Atendimento</Link></li>
      </ul>
    </nav>
  )
}
