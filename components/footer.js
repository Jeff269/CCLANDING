import { Layout, Row, Col, Typography, Divider} from 'antd'

import 'antd/dist/antd.css'

import {
    FacebookOutlined,
    InstagramOutlined,
    YoutubeOutlined
} from '@ant-design/icons'


const { Text, Link } = Typography
const { Footer } = Layout

const EndPage = () => {
    return (
        <Layout>
            <Footer style={{  backgroundColor:'#222222', position: 'relative', width:'100%'}}>
                <Row justify='center'>
                    <Col 
                        xs={ 10 } 
                        sm={ 10 } 
                        md={ 8 } 
                        lg={ 8 }
                        style={{
                            paddingRight:'20px'
                        }}
                    >
                        <Row>
                            <Text style={{color:"#FFEEE2"}}> Realizamos diplomados, cursos de capacitación, cursos de especialización, talleres, entre otros desde el 2014 con los profesionales más calificados del sector. Respaldados de las instituciones creadas por ley
                            </Text>
                        </Row>
                        <Row>
                            <Col>
                                <Link href="https://www.facebook.com/CcitecIngenieria" target="_blank">
                                    <FacebookOutlined 
                                        style={{fontSize:'25px', color:'#FFEEE2', paddingTop: '20px', paddingRight:'7px'}}
                                    />
                                </Link>
                            </Col>
                            <Col>
                                <Link href="https://www.instagram.com/ccitecingenieria/" target="_blank">
                                    <InstagramOutlined 
                                        style={{fontSize:'25px', color:'#FFEEE2', paddingTop: '20px', paddingRight:'7px'}}
                                    />
                                </Link>
                            </Col>
                            <Col>
                                <Link href="https://www.youtube.com/channel/UCalcAcEV5moLxaMa4H-_igw" target="_blank">
                                    <YoutubeOutlined 
                                        style={{fontSize:'25px', color:'#FFEEE2', paddingTop: '20px', paddingRight:'7px'}}
                                    />
                                </Link>
                            </Col>  
                        </Row>    
                    </Col>
                    <Col 
                        xs={ 10 } 
                        sm={ 10 } 
                        md={ 8 } 
                        lg={ 8 }
                    >
                        <Row> 
                            <h3 style={{color:"#FFEEE2"}}>Contacto</h3>    
                        </Row>
                        <Row> 
                            <Link href="https://goo.gl/maps/mFC3pxCEQtsXayjQ8" target="_blank">
                                <Text style={{color:"#FFEEE2"}}>Jr. Torongil 260 - UMUTO, Huancayo, Perú</Text> 
                            </Link>   
                        </Row>
                        <Divider/>
                        <Row> 
                            <Link href="https://api.whatsapp.com/send?phone=51951004548" target="_blank">
                                <Text style={{color:"#FFEEE2"}}>Tel.: +51 951004548</Text>    
                            </Link> 
                        </Row>
                        <Row> 
                            <Col span={24}>
                                <Link href="mailto:eeventosacademicos@gmail.com">
                                    <Text style={{color:"#FFEEE2"}}>Mail : eeventosacademicos@gmail.com</Text>  
                                </Link> 
                            </Col>
                              
                        </Row>
                    </Col>
                    <Col 
                        xs={ 0 } 
                        sm={ 0 } 
                        md={ 8 } 
                        lg={ 8 }
                    >
                        <Row> 
                            <h3 style={{color:"#FFEEE2"}}>Links</h3> 
                        </Row>
                        <Row>
                            <Link href="/">
                                <Text style={{color:"#FFEEE2"}}>INICIO</Text>   
                            </Link>  
                        </Row>
                        <Row> 
                            <Link href="/diplomados">
                                <Text style={{color:"#FFEEE2"}}>DIPLOMADOS</Text> 
                            </Link>   
                        </Row>
                        <Row> 
                            <Link href="/cursos">
                                <Text style={{color:"#FFEEE2"}}>CURSOS</Text>
                            </Link>    
                        </Row>
                        <Row> 
                            <Link href="https://forms.gle/3fNRzP6qmWWTL1ss8" target="_blank">
                                <Text style={{color:"#FFEEE2"}}>FORMA PARTE DE NUESTRA PLANA DOCENTE</Text>  
                            </Link>  
                        </Row>
                        <Row>
                            <Link href="#"> 
                                <Text style={{color:"#FFEEE2"}}>CONTÁCTANOS</Text>   
                            </Link> 
                        </Row>
                    </Col>
                </Row> 
                <Divider />
                <Row>
                    <Col span={24} style={{textAlign: 'center'}}>
                        <Typography style={{color:"#FFEEE2"}}> Copyright 2021 © CCITEC INGENIERÍA Y TECNOLOGÍA </Typography> 
                    </Col>
                    
                </Row>                   
            </Footer>
        </Layout>    
    )
}

export default EndPage
