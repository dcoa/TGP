import React, {useState} from "react";
import {  Link, useHistory } from "react-router-dom";
import { Menu } from 'antd';
import { signOut } from '../firebase/auth';
import { Alert } from 'react-bootstrap';
import {  HomeFilled , HddFilled, WalletFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../style/menu.css';
import logo from '../img/logotitle.svg';

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

 const MenuNav = () => {
  const [openKeys, setOpenKeys] = React.useState(['sub1']);
  const [error, setError] = useState();
  const history = useHistory();

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const handleLogOut = async() => {
    try {
        setError('');
        await signOut();
        history.push('/');
    } catch {
        setError('No se puede cerrar sesión');
    };
    
}
  return (
  
    <Menu mode="inline" className="menu"openKeys={openKeys} onOpenChange={onOpenChange} >
        <img src={logo} alt="logo" className="menu-logo" width='120' height='auto'/>
  <p className="logo-title1">Reducer</p>
      <Menu.Item key="mail" icon={<HomeFilled />} className="list">
        {/* <Menu.Item className="item" key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item> */}
        Principal
        <Link to="/home" />
      </Menu.Item>
      <SubMenu key="sub2" icon={<HddFilled />} title="TGP">
      <Menu.Item key="4">G.Legal</Menu.Item>
        <Menu.Item key="5">G.Sostenibilidad y comunicación</Menu.Item>
        <Menu.Item key="6">G.Planeación y control</Menu.Item>
        <Menu.Item key="7">G.Cormercial y Operaciones</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<HddFilled />} title="COGA">
        <Menu.Item key="9">G. de Abastecimientos</Menu.Item>
        <Menu.Item key="10">G. de  Gestión Humana y Transformación</Menu.Item>
        <SubMenu key="sub4.1" icon={<HddFilled />} title="G. de Administración y Finanzas">
        <Menu.Item key="11">Contabilidad e Impuestos</Menu.Item>
        <Menu.Item key="12">Tecnología de la Información</Menu.Item>
        </SubMenu>
        <Menu.Item key="13">G. de Planeaminto y Control de Gestión</Menu.Item>
        <Menu.Item key="14">G. de Auditoría y Gestión de Riesgos</Menu.Item>
        <Menu.Item key="15">G. Legal y Cumplimiento Regulatorio</Menu.Item>
        <Menu.Item key="16">G. de  Operaciones</Menu.Item>
        <SubMenu key="sub4.2" icon={<HddFilled />} title="G. de Administración y Finanzas">
        <Menu.Item key="17">Proyectos y Seguridad de Procesos</Menu.Item>
        <Menu.Item key="18">Operación y mantenimiento</Menu.Item>
        <Menu.Item key="19">Seguridad y Salud Ocupacional</Menu.Item>
        <Menu.Item key="20">Transporte</Menu.Item>
        <Menu.Item key="21">Gestión de activos</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4.3" icon={<HddFilled />} title="G. de Gestión Socioambiental y Seguridad Patrimonial">
        <Menu.Item key="22">Medio Ambiente</Menu.Item>
        <Menu.Item key="23">Gestión Social</Menu.Item>
        </SubMenu>
      </SubMenu>
      <Menu.Item key="24" icon={<WalletFilled />} onClick={handleLogOut}>Cerrar Sesión</Menu.Item>
      {error && <Alert variant="danger">{error}</Alert>}
    </Menu>
   
  );
};

export default MenuNav;