import React from 'react';
import { Form, Input } from 'antd';
import IFarmings from '../../../interfaces/iFarmings';
import ButtonForm from '../../button';
import axios from 'axios';

export default function Farmings() {
  async function handleSubmitForm(formData: IFarmings) {
    const headers = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    // console.log(formData);
    await axios
      .post('http://localhost:8080/farmings/create', formData, headers)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section className='section-form'>
      <div className='h2-content'>
        <h2>Cadastro de Agrupecuárias</h2>
      </div>
      <div className='form-content'>
        <Form
          name='formFarming'
          layout='horizontal'
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          onFinish={handleSubmitForm}
        >
          <Form.Item<IFarmings>
            label='Nome'
            htmlFor='name'
            name='name'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<IFarmings>
            label='CNPJ'
            htmlFor='cnpj'
            name='cnpj'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<IFarmings>
            label='Responsável'
            htmlFor='owner'
            name='owner'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<IFarmings>
            label='Telefone/Celular'
            htmlFor='phone'
            name='phone'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<IFarmings>
            label='Endereço'
            htmlFor='address'
            name='address'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
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
