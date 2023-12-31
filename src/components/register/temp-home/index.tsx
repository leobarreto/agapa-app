import React from 'react';
import './style.css';
import ITempHome from '../../../interfaces/iTempHome';
import { Form, Input } from 'antd';
import ButtonForm from '../../button';

export default function TempHome() {
  function handleSubmitForm(formData: ITempHome) {
    console.log('Sent successfully', formData);
  }
  return (
    <section className='section-form'>
      <div className='h2-content'>
        <h2>Cadastro de Lar Temporário</h2>
      </div>
      <div className='form-content'>
        <Form
          name='formTemHome'
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          layout='horizontal'
          onFinish={handleSubmitForm}
        >
          <Form.Item<ITempHome>
            label='Nome'
            name='name'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<ITempHome>
            label='CPF'
            name='cpf'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<ITempHome>
            label='Telefone/Celular'
            name='phone'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<ITempHome>
            label='Endereço'
            name='address'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<ITempHome> label='Pto. referência' name='landmark'>
            <Input />
          </Form.Item>
          <Form.Item>
            <ButtonForm />
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
