import React from 'react';
import './style.css';
import IVetClinicForm from '../../../interfaces/iVetClinic';
import { Form, Input } from 'antd';
import ButtonForm from '../../button';

export default function VetClinic() {
  function handleSumbitForm(formData: IVetClinicForm) {
    console.log(formData);
  }

  return (
    <section className='section-form'>
      <div className='h2-content'>
        <h2>Cadastro de Clínicas</h2>
      </div>
      <div className='form-content'>
        <Form
          name='formVetClinic'
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          layout='horizontal'
          onFinish={handleSumbitForm}
        >
          <Form.Item<IVetClinicForm>
            label='Clínica'
            name='name'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<IVetClinicForm>
            label='Proprietário'
            name='owner'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<IVetClinicForm>
            label='CNPJ'
            name='cnpj'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<IVetClinicForm> label='Veterinário' name='vet'>
            <Input />
          </Form.Item>
          <Form.Item<IVetClinicForm>
            label='Telefone/Celular'
            name='phone'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<IVetClinicForm>
            label='E-mail'
            name='email'
            rules={[
              { required: true, message: 'Campo obrigatório' },
              { type: 'email', message: 'Formato de e-mail inválido' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<IVetClinicForm>
            label='Endereço'
            name='address'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<IVetClinicForm> label='Pto. referência' name='landmark'>
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
