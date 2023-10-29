import './style.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  return (
    <section className='home-content'>
      <div className='home-pets'>
        <span>Pets</span>
        <table>
          <thead>
            <th>Nome</th>
            <th>Raça</th>
            <th>Ação</th>
          </thead>
          <tbody>
            <td>Luna</td>
            <td>Rottweiller</td>
            <td>Editar - Excluir</td>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Home;
