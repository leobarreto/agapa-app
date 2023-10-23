import './style.css';
import React from 'react';
import { DatePicker, Form, Input, InputNumber, Radio } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import IPet from '../../../interfaces/iPet';
import ButtonForm from '../../button';

const dateFormat = 'DD/MM/YYYY';

export default function Pet() {
  function handleSumbitForm(formData: IPet) {
    console.log(formData);
  }
  return (
    <section className='section-form'>
      <div className='h2-content'>
        <h2>Cadastro do Pet</h2>
      </div>
      <div className='form-content'>
        <Form
          name='formPet'
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          layout='horizontal'
          onFinish={handleSumbitForm}
        >
          <Form.Item<IPet>
            label='Data do Resgate'
            name='rescue_date'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item<IPet> label='Nome' name='name'>
            <Input />
          </Form.Item>
          <Form.Item<IPet> label='Idade' name='age'>
            <InputNumber />
          </Form.Item>
          <Form.Item<IPet>
            label='Gênero'
            name='gender'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Radio.Group>
              <Radio.Button value={0}>Macho</Radio.Button>
              <Radio.Button value={1}>Fêmea</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item<IPet>
            label='Espécie'
            name='specie'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Radio.Group>
              <Radio.Button value={0}>Canina</Radio.Button>
              <Radio.Button value={1}>Felina</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item<IPet> label='Raça' name='breed'>
            <Input />
          </Form.Item>
          <Form.Item<IPet> label='Peso' name='weight'>
            <InputNumber />
          </Form.Item>
          <Form.Item<IPet> label='Data da Pesagem' name='weight_date'>
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item<IPet> label='Ração/mês (kg)' name='feed_month'>
            <InputNumber />
          </Form.Item>
          <Form.Item<IPet> label='Tipo da Ração' name='type_feed'>
            <Radio.Group>
              <Radio.Button value={0}>Adulto</Radio.Button>
              <Radio.Button value={1}>Filhote</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item<IPet> label='Características' name='character'>
            <TextArea rows={4} maxLength={255} />
          </Form.Item>
          <Form.Item<IPet>
            label='Castrado'
            name='castrated'
            rules={[{ required: true, message: 'Campo obrigatório' }]}
          >
            <Radio.Group>
              <Radio.Button value={0}>Não</Radio.Button>
              <Radio.Button value={1}>Sim</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item<IPet> label='V8 Dose 1' name='vac_v8_dose1'>
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item<IPet> label='V8 Dose 2' name='vac_v8_dose2'>
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item<IPet> label='V8 Dose 3' name='vac_v8_dose3'>
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item<IPet> label='V8 próx. dose' name='vac_v8_next_dose'>
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item<IPet> label='Anti-rábica' name='vac_antirage'>
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item<IPet>
            label='Anti-rábica próx. dose'
            name='vac_antirage_next_dose'
          >
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item<IPet> label='Vermífugo dose 1' name='vermifuge_dose1'>
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item<IPet> label='Vermífugo dose 2' name='vermifuge_dose2'>
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item<IPet> label='Vermífugo dose 3' name='vermifuge_dose3'>
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item<IPet>
            label='Vermífugo próx. dose'
            name='vermifuge_next_dose'
          >
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item<IPet>
            label='Anti-parasitário dose'
            name='antiparasitic_dose'
          >
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item<IPet>
            label='Anti-parasitário próx. dose'
            name='antiparasitic_next_dose'
          >
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item<IPet> label='Doenças' name='diseases'>
            <TextArea rows={4} maxLength={255} />
          </Form.Item>
          <Form.Item<IPet>>
            <ButtonForm />
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
