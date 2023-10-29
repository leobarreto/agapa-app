import './style.css';
import React from 'react';
import IVolunteers from '../../../interfaces/iVolunteers';
import { DatePicker, Form, Input } from 'antd';
import ButtonForm from '../../button';

const dateFormat = 'DD/MM/YYYY';

export default function Volunteers() {
  function handleSumbitForm(formData: IVolunteers) {
    console.log('Sent successfully: ', formData);
  }

  return (
    <section className='section-form'>
      <div className='h2-content'>
        <h2>Cadastro de Voluntário</h2>
      </div>
      <div className='form-content'>
        <Form
          name='formVolunteers'
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          layout='horizontal'
          onFinish={handleSumbitForm}
        >
          <Form.Item<IVolunteers>
            label='Nome'
            name='name'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<IVolunteers>
            label='CPF'
            name='cpf'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<IVolunteers>
            label='Telefone/Celular'
            name='phone'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<IVolunteers>
            label='Endereço'
            name='address'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<IVolunteers>
            label='Data de início'
            name='volunteer_start_date'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item>
            <ButtonForm />
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
