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
            <Row 
                justify='center'
                style={{
                    display: 'flex', 
                    justifyContent:'center'
                }}
            >

                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/USA.png'
                            alt='USA-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/engie.png'
                            alt='Engine-logo'
                            preview={false}

                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>

                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/ingra.png'
                            alt='Ingra-logo'
                            preview={false}

                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>

                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/electro-sur-este.gif'
                            alt='Electro-sur-oeste-logo'
                            preview={false}

                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>


                
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/live-ingenieria-y-construccion.png'
                            alt='live-ingenieria-y-construccion-logo'
                            preview={false}

                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/ingenieria-y-servicios-sac.jpg'
                            alt='ingenieria-y-servicios-sac-logo'
                            preview={false}

                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>

                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/distriluz.png'
                            alt='distriluz-logo'
                            preview={false}

                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>

                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/siemens.png'
                            alt='siemens-logo'
                            preview={false}

                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/hidrandina.jpg'
                            alt='hidrandina-logo'
                            preview={false}

                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/AEE-power.png'
                            alt='AEE-power-logo'
                            preview={false}

                            width= {80}
                            height= {40}
                        />
                    </Card>
                </Col>

                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/statkraft.jpg'
                            alt='statkraft-logo'
                            preview={false}

                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>

                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/kv-ingenieria.png'
                            alt='kv-ingenieria-logo'
                            preview={false}

                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/enel.png'
                            alt='enel-logo'
                            preview={false}

                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/abengoa.png'
                            alt='abengoa-logo'
                            preview={false}

                            width= {120}
                            height= {50}
                        />
                    </Card>
                </Col>

                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/zevallos.jpg'
                            alt='zevallos-logo'
                            preview={false}

                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/future-engineering-sac.png'
                            alt='future-engineering-sac-logo'
                            preview={false}

                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/G.jpg'
                            alt='G-logo'
                            preview={false}

                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/gigawatt-ingenieros.png'
                            alt='gigawatt-ingenieros-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/gobierno-autonomo-departamental-de-potos.png'
                            alt='gigawatt-ingenieros-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/grupo-union.png'
                            alt='grupo-union-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/grupo-eit-sac.jpg'
                            alt='grupo-eit-sac-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/hmv-ingenieros.jpg'
                            alt='hmv-ingenieros-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/hv-contratistas.png'
                            alt='hv-contratistas-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/hyh-soluciones-tecnologias-e-ingenieria-sac.png'
                            alt='hyh-soluciones-tecnologias-e-ingenieria-sac-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/imporper.png'
                            alt='imporper-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/inesco.png'
                            alt='inesco-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/ingenieria-estudios-y-proyectos.png'
                            alt='ingenieria-estudios-y-proyectos-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/inkia-energy.png'
                            alt='inkia-energy-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/inmel.png'
                            alt='inmel-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/interfrio.png'
                            alt='interfrio-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/isa-rep.jpg'
                            alt='isa-rep-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/jjf-ingenieria-de-mantenimiento-sac.png'
                            alt='jjf-ingenieria-de-mantenimiento-sac-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/kd-contratistas-generales-srlt.png'
                            alt='kd-contratistas-generales-srlt-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/lari-contratistas.png'
                            alt='lari-contratistas-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/luzam.jpg'
                            alt='luzam-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/manager-ingenieria-y-construccion.png'
                            alt='manager-ingenieria-y-construccion-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/manufacturas-electricas.png'
                            alt='manufacturas-electricas-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/marquisa.png'
                            alt='marquisa-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/municipalidad-distrital-de-san-sebastian.png'
                            alt='municipalidad-distrital-de-san-sebastian-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/olamsa.gif'
                            alt='olamsa-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/omega-peru.jpg'
                            alt='omega-peru-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/oyt.png'
                            alt='oyt-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/peru-electro-ingenieros.png'
                            alt='peru-electro-ingenieros-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/power-energy.png'
                            alt='power-energy-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/power-engineering.jpg'
                            alt='power-engineering-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/pro-inversion.png'
                            alt='pro-inversion-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/promsace.png'
                            alt='promsace-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/proyecto-especial-olmos-tinajones.png'
                            alt='proyecto-especial-olmos-tinajones-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/qr-constructoras-consultora.jpg'
                            alt='qr-constructoras-consultora-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/san-marcos.png'
                            alt='san-marcos-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/selin.png'
                            alt='selin-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/servicios-santa-gabriela-sac.png'
                            alt='servicios-santa-gabriela-sac-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/sesga.jpg'
                            alt='sesga-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/setar-sistema-yacuiba.png'
                            alt='setar-sistema-yacuiba-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/sinerge.png'
                            alt='sinerge-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/s-y-h.png'
                            alt='s-y-h-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/tactical -it.png'
                            alt='tactical-it-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/unsaac.png'
                            alt='unsaac-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/vision-quality-energy-sac.png'
                            alt='vision-quality-energy-sac-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/wordktry-mec.png'
                            alt='wordktry-mec-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/enosa.png'
                            alt='enosa-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/entel.png'
                            alt='entel-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/eos.jpg'
                            alt='eos-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/escudo.png'
                            alt='escudo-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/energy-and-information-technologies.png'
                            alt='energy-and-information-technologies-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/energingenieria.png'
                            alt='energingenieria-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/ende-corporation.png'
                            alt='ende-corporation-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/emseu.png'
                            alt='emseu-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/electro-oriente.png'
                            alt='electro-oriente-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
                <Col
                    style={{padding:'20px'}}
                >
                    <Card
                        bordered={false} 
                        hoverable
                        style={{ width: '200px', display: 'flex', justifyContent:'center'}}
                    
                    >
                        <Image
                            src='../images/logos/extras/eeh.jpg'
                            alt='eeh-logo'
                            preview={false}
                            width= {120}
                            height= {40}
                        />
                    </Card>
                </Col>
            </Row>
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