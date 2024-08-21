import { Typography, Image , Col, Row, Divider, Card, Carousel  } from 'antd'
import {
    CodeTwoTone,
    SafetyCertificateTwoTone,
    BookTwoTone
} from '@ant-design/icons'

import Header from "../components/header"
import EndPage from "../components/footer"

const { Text, Link } = Typography
const { Meta } = Card

const Index = () => {
    return(
        <div>
            <Header/>
            <Col span={24}>
                <Carousel
                    autoplay
                >
                    <Image
                        src="../images/carrusel/portada-1.png"
                        alt="logo-CCITEC"
                        preview={false}
                        width={'100%'}
                        height={400}
                    />
                    <Image
                        src="../images/carrusel/portada-2.png"
                        alt="logo-CCITEC"
                        preview={false}
                        width={'100%'}
                        height={400}
                    />
                    <Image
                        src="../images/carrusel/portada-3.png"
                        alt="logo-CCITEC"
                        preview={false}
                        width={'100%'}
                        height={400}
                    />
                    <Image
                        src="../images/carrusel/portada-4.png"
                        alt="logo-CCITEC"
                        preview={false}
                        width={'100%'}
                        height={400}
                    />
                    <Image
                        src="../images/carrusel/portada-5-1.png"
                        alt="logo-CCITEC"
                        preview={false}
                        width={'100%'}
                        height={400}
                    />
                    <Image
                        src="../images/carrusel/portada-5-2.png"
                        alt="logo-CCITEC"
                        preview={false}
                        width={'100%'}
                        height={400}
                    />
                </Carousel>
            </Col>
            <Row justify="center">
                <Link 
                    href="/diplomados" 
                    style={{
                        margin: '30px',
                        width: '280px',
                        height: '150px',
                        borderRadius: '30px'
                    }}
                >
                    <Col style={{               
                        backgroundImage: `url("../images/statics/diplomados.jpg")`,
                        backgroundSize: 'contain',
                        borderRadius: '30px',
                    }}>
                        <Col style={{paddingTop:'28%', paddingLeft:'15px', }}>
                            <h3 strong style={{color:'white', fontWeight: 'bold'}}>DIPLOMADOS</h3>
                            <Text strong style={{color:'white',  fontWeight: 'bold'}}>PROGRAMAS DE ESPECIALIZACIÓN</Text>
                        </Col>
                    </Col>
                </Link>
                
                <Link 
                    href="/cursos" 
                    style={{
                        margin: '30px',
                        width: '280px',
                        height: '150px',
                        borderRadius: '30px'
                    }}
                >
                    <Col style={{                 
                        backgroundImage: `url("../images/statics/cursos.jpg")`,
                        backgroundSize: 'contain',
                        borderRadius: '30px',
                    }}>
                        <Col style={{paddingTop:'28%', paddingLeft:'15px'}}>
                            <h3 strong style={{color:'white', fontWeight: 'bold'}}>CURSOS</h3>
                            <Text strong style={{color:'white',  fontWeight: 'bold'}}>PROGRAMAS DE ESPECIALIZACIÓN</Text>
                        </Col>               
                    </Col>
                </Link>
                
                <Link 
                    href="/diplomados" 
                    style={{
                        margin: '30px',
                        width: '280px',
                        height: '150px',
                        borderRadius: '30px'
                    }}
                >
                    <Col style={{                 
                        backgroundImage: `url("../images/statics/eventos.jpg")`,
                        backgroundSize: 'contain',
                        borderRadius: '30px',
                    }}>
                        <Col style={{paddingTop:'28%', paddingLeft:'15px'}}>
                            <h3 strong style={{color:'white', fontWeight: 'bold'}}>EVENTOS</h3>
                            <Text strong style={{color:'white',  fontWeight: 'bold'}}>GRATUITAS</Text>
                        </Col>
                    </Col>
                </Link> 
            </Row>
            {/*
            <Divider>
                <Typography style={{fontSize: '30px', fontWeight: 'bold'}}>
                    ESPECIALIZACIONES RECIENTES
                </Typography>
            </Divider>
            <Row>
                    //Aqui iran los cursos recientes
            </Row>
            */}
            <Row justify='center' style={{backgroundColor:'#CFECFB', padding: '20px'}}>
                <Col span={24} style={{textAlign:'center'}}>
                    <Typography style={{fontSize: '30px', fontWeight: 'bold'}}>
                        NUESTRO CERTIFICADO
                    </Typography>
                </Col>

                <Row justify='center' style={{ alignItems: 'center'}}>
                    <Col 

                        xs={ 24 } 
                        sm={ 24 } 
                        md={ 10 } 
                        lg={ 10 }
                        style={{
                            paddingTop:'30px',
                            display:'flex',
                            justifyContent: 'center'
                            }}
                        >
                        <Image
                            src="../images/statics/certificado.png"
                            alt="Certificado-CCITEC"
                            preview={false}
                            width= {'300px'}
                            height= {'300px'}
                        />
                    </Col>
                    <Col span={14} style={{paddingTop:'30px', textAlign: 'center'}}>
                        <Row justify='center'>   
                            <Text style={{fontSize: '23px', fontWeight: 'bold',}}>
                                OTORGADO POR NUESTRAS INSTITUCIONES
                            </Text>
                        </Row>
                        <Row justify='center' style={{ paddingTop:'10px', alignItems:'center'}}>
                            <Col style={{ padding:'5px'}}>
                                <Image
                                    src="../images/logo-CCITEC/logo-CCITEC.png"
                                    alt="logo-CCITEC"
                                    preview={false}
                                    width= {180}
                                    height= {45}
                                />
                            </Col>
                            <Col style={{ padding:'5px'}}>
                                <Image
                                    src="../images/logos/CIP.png"
                                    alt="logo-ColegioDeIngenieros"
                                    preview={false}
                                    width= {120}
                                    height= {120}
                                />
                            </Col>
                            <Col style={{ padding:'5px'}}>
                                <Image
                                    src="../images/logos/CDCP.jpg"
                                    alt="logo-Conrede"
                                    preview={false}
                                    width= {120}
                                    height= {120}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>

            <Divider/>
            <Col span={24} style={{textAlign:'center', padding:'8px'}}>
                <Typography style={{fontSize: '30px', fontWeight: 'bold'}}>
                    ¿POR QUÉ CONFIAR EN CCITEC?
                </Typography>
            </Col>
                
            
            <Row justify='center'>
                <Col style={{padding: '30px', textAlign:'center'}}>
                    <Card 
                        cover={
                        <CodeTwoTone
                            style={{fontSize:'80px', paddingTop:'20px'}}
                        />
                        }
                        hoverable
                        style={{ width: 300 }}
                        >
                    <Meta title="PLATAFORMA WEB" description="Encuentra en nuestro Aula Virtual los recursos y actividades de forma directa con los aplicativos requeridos, disponible en el momento que requieras." />

                    </Card>
                </Col>

                <Col style={{padding: '30px', textAlign:'center'}}>
                    <Card 
                        cover={
                        <SafetyCertificateTwoTone
                            style={{fontSize:'80px', paddingTop:'20px'}}
                        />
                        }
                        hoverable
                        style={{ width: 300 }}
                        >
                    <Meta title="CALIDAD" description="Cada programa cuenta con un plantel de docentes nacionales e internacionales con sólida preparación académica y experiencia gerencial." />

                    </Card>
                </Col>

                <Col style={{padding: '30px', textAlign:'center'}}>
                    <Card 
                        cover={
                        <BookTwoTone
                            style={{fontSize:'80px', paddingTop:'20px'}}
                        />
                        }
                        hoverable
                        style={{ width: 300 }}
                        >
                    <Meta title="ENSEÑANZA" description="Estudia con los mejores docentes líderes y autoridades en el Sector Eléctrico con un enfoque Nacional e Internacional." />

                    </Card>
                </Col>
            </Row>
            
            <Divider/>
            <Col span={24} style={{textAlign:'center', padding:'8px'}}>
                <Typography style={{fontSize: '30px', fontWeight: 'bold'}}>
                    NUESTROS CONVENIOS
                </Typography>
            </Col>
            <Row justify='center'>
                <Col style={{ padding:'50px'}}>
                    <Image
                        src="../images/logos/CIP.png"
                        alt="logo-CCITEC"
                        preview={false}
                        width= {220}
                        height= {220}
                    />
                </Col>

                <Col style={{ padding:'50px'}}>
                    <Image
                        src="../images/logos/CDCP.jpg"
                        alt="logo-CCITEC"
                        preview={false}
                        width= {220}
                        height= {220}
                    />
                </Col>
            </Row>
            <Divider/>
            <Row>  
                <Col span={24} style={{textAlign:'center', padding:'8px'}}>
                    <Typography style={{fontSize: '30px', fontWeight: 'bold'}}>
                        EMPRESAS QUE SE CAPACITARON CON NOSOTROS
                    </Typography>
                </Col>
            </Row>
        {
            // // EXTRA
            // // EXTRA
            // // EXTRA
            // // EXTRA
            // // EXTRA
            // // EXTRA
            // // EXTRA
        }
            <Divider/> 

            <Row span={24} justify='center' style={{backgroundColor:'#CFECFB', padding: '20px'}}>
            
                <Col
                    span={24}
                    style={{
                        textAlign:'center'
                    }}
                >
                    <Typography style={{fontSize: '30px', fontWeight: 'bold'}}>
                            DEPÓSITOS BANCARIOS
                    </Typography>
                </Col>
                
                
                <Col
                    style={{padding:'20px'}}
                >
                    <Image
                        style={{borderRadius:'30px'}}
                        src='../images/bancos/bcp.gif'
                        alt='BCP-logo'
                        preview={false}
                        width= {240}
                        height= {140}
                    />
                </Col>
                
                <Col
                    style={{padding:'20px'}}
                > 
                    <Image
                        style={{borderRadius:'30px'}}
                        src='../images/bancos/banco-de-la-nacion.jpg'
                        alt='Banco-de-la-Nacion-logo'
                        preview={false}
                        width= {240}
                        height= {140}
                    />
                </Col>

                <Col
                    style={{padding:'20px'}}
                >
                    <Image
                        style={{borderRadius:'30px'}}
                        src='../images/bancos/interbank.jpg'
                        alt='interbank-logo'
                        preview={false}
                        width= {240}
                        height= {140}
                    />
                </Col>

                <Col
                    style={{padding:'20px'}}
                >
                    <Image
                        style={{borderRadius:'30px'}}
                        src='../images/bancos/bbva.png'
                        alt='BBVA-logo'
                        preview={false}
                        width= {240}
                        height= {140}
                    />   
                </Col>
                
                
                <Col
                    style={{padding:'20px'}}
                >
                    <Image
                        style={{borderRadius:'30px'}}
                        src='../images/bancos/wester-union.png'
                        alt='wester-union-logo'
                        preview={false}
                        width= {240}
                        height= {140}
                    />
                </Col>
                
                <Col
                    style={{padding:'20px'}}
                > 
                    <Image
                        style={{borderRadius:'30px'}}
                        src='../images/bancos/paypal.png'
                        alt='paypal-logo'
                        preview={false}
                        width= {240}
                        height= {140}
                    />
                </Col>

                <Col
                    style={{padding:'20px'}}
                >
                    <Image
                        style={{borderRadius:'30px'}}
                        src='../images/bancos/pagos.png'
                        alt='plin-yape-tunki-likita'
                        preview={false}
                        width= {240}
                        height= {140}
                    />
                </Col>
            </Row>
            <EndPage/>
        </div>
    )
}

export default Index