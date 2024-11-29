import { Typography, Layout, Menu, Dropdown, Image, Button} from 'antd'
import { DownOutlined, MenuUnfoldOutlined  } from '@ant-design/icons'

import ModalPromocion from './modalPromocion'
import TopHead from "./topheader"

import 'antd/dist/antd.css'

const { Header} = Layout
const { Text, Link } = Typography
const menu = (
    <Menu>
    
      <Menu.Item>
        <Link href="/acerca-de-nosotros">
        <a rel="noopener noreferrer" >
          Acerca de Nosotros
        </a>
        </Link>
        
      </Menu.Item>
      <Menu.Item>
        <Link href="/nuestros-docentes">
          <a rel="noopener noreferrer" >
            Nuestros Docentes
          </a>
        </Link>
        
      </Menu.Item>
    </Menu>
  )

const Head = () => {
    return (
        <div>
            <ModalPromocion/>
            <TopHead/>
            <Layout >
                <Header style={{backgroundColor:'#2B60AE'}}>
                  <div style={{
                    float: 'left', 
                    margin: '16px 50px 50px 16px',
                  }}>
                    <Link href='/'>
                      <Image
                        src="../images/logo-CCITEC/logo-ccitec-blanco-pequeño.png"
                        alt="logo-CCITEC"
                        preview={false}
                      /> 
                    </Link>
                  </div>
                  <Menu 
                    mode="horizontal" 
                    theme='dark' 
                    triggerSubMenuAction='click'
                    expandIcon='+'
                    style={{
                      backgroundColor:'#2B60AE'
                      }}
                    >    
                      <Menu.Item key="1">
                        <Link href="/" style={{color:'white', fontWeight:'bold', fontSize: 16}}>
                          Inicio
                        </Link>
                      </Menu.Item>
                    <Menu.Item key="2">
                      <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{color:'white', fontWeight:'bold', fontSize: 16}}>
                          Nuestra Institución
                          <DownOutlined />
                        </a>
                      </Dropdown>
                    </Menu.Item>
                    {/*  
                    <Menu.Item key="3">
                      <Link href="/eventos-gratuitos" style={{color:'white', fontWeight:'bold', fontSize: 16}}>
                        Eventos gratuitos
                      </Link>
                    </Menu.Item> 
                    */}                   
                    <Menu.Item key="4">
                      <Link href="/cursos" style={{color:'white', fontWeight:'bold', fontSize: 16}}>
                        Cursos
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                      <Link href="/diplomados" style={{color:'white', fontWeight:'bold', fontSize: 16}}>
                        Diplomados
                      </Link>
                    </Menu.Item>
                    {/*
                    <Menu.Item key="6">
                      <Link href="/contactanos" style={{color:'white', fontWeight:'bold', fontSize: 16}}>
                        Contáctanos
                      </Link>
                    </Menu.Item>
                    */}
                    <Menu.Item key="7">
                      <Button style={{color:'white', fontWeight:'bold', fontSize: 16}} target="_blank" type="primary" href="http://aula.ccitecperu.com.pe/">Campus Virtual</Button>
                    </Menu.Item>
                    
                    <Menu.Item key="7">
                      <Button style={{color:'white', fontWeight:'bold', fontSize: 16}} target="_blank" type="primary" href="http://certificados.ccitecperu.com.pe/">Valida tu Certificado</Button>
                    </Menu.Item>
                  </Menu>
                </Header>
            </Layout>
        </div>
    )
}

export default Head