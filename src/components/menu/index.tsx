import './style.css';
import React from 'react';
import {
  HomeFilled,
  UserOutlined,
  SettingOutlined,
  ScissorOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    label: <Link to='/'>Home</Link>,
    key: 'home',
    icon: <HomeFilled />,
  },
  {
    label: 'Cadastros',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        label: (
          <Link className='link-register' to='/register/pet/'>
            Pet
          </Link>
        ),
        key: 'setting:1',
      },
      {
        label: (
          <Link className='link-register' to='/register/temp-home/'>
            Lar Temporário
          </Link>
        ),
        key: 'setting:2',
      },
      {
        label: (
          <Link className='link-register' to='/register/vet-clinic/'>
            Clínicas
          </Link>
        ),
        key: 'setting:3',
      },
      {
        label: (
          <Link className='link-register' to='/register/volunteers/'>
            Cadastro de Voluntários
          </Link>
        ),
        key: 'setting:4',
      },
      {
        label: (
          <Link className='link-register' to='/register/farmings/'>
            Agropecuárias
          </Link>
        ),
        key: 'setting:5',
      },
      {
        label: (
          <Link className='link-register' to='/register/vet-care/'>
            Atendimentos
          </Link>
        ),
        key: 'setting:6',
      },
    ],
  },
  {
    label: <Link to='/register/social-castration'>Castração Social</Link>,
    key: 'social-castration',
    icon: <ScissorOutlined />,
  },
  {
    label: 'Usuários',
    key: 'users',
    icon: <UserOutlined />,
  },
];

const MainMenu: React.FC = () => {
  return <Menu className='nav-menu' mode='horizontal' items={items} />;
};

export default MainMenu;
