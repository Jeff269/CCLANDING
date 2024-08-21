import { Typography, Divider, Row, Col, Card, Image} from 'antd'

import {
    ScheduleTwoTone,
    SafetyCertificateTwoTone,
    DashboardTwoTone,
    VideoCameraOutlined,
    LineChartOutlined,
    CarOutlined,
    QrcodeOutlined,
    RetweetOutlined,
    SnippetsOutlined,
    FormOutlined,
    FileDoneOutlined,
    FolderOpenOutlined
} from '@ant-design/icons'

const { Meta } = Card

import Header from "../components/header"
import EndPage from "../components/footer"

const { Text, Link } = Typography

const Nosotros = () => {
    return(
        <div>
            <Header/>

            <Image
                src="../images/carrusel/carrosel-1.jpg"
                alt="logo-CCITEC"
                preview={false}
                width={'100%'}
                height={600}
            />
            <Divider>
                <Typography style={{fontSize: '30px', fontWeight: 'bold'}}>
                    NOSOTROS
                </Typography>
            </Divider>
            <Row justify='center'>
                <Col style={{padding: '30px', textAlign:'center'}}>
                    <Card 
                        cover={
                        <ScheduleTwoTone
                            style={{fontSize:'80px', paddingTop:'20px'}}
                        />
                        }
                        hoverable
                        style={{ width: 300 }}
                        >
                    <Meta title="RESPONSABILIDAD" description="Responsables con las acciones programadas de tal manera que no perjudique con lo establecido." />

                    </Card>
                </Col>

                <Col style={{padding: '30px', textAlign:'center'}}>
                    <Card 
                        cover={
                        <DashboardTwoTone
                            style={{fontSize:'80px', paddingTop:'20px'}}
                        />
                        }
                        hoverable
                        style={{ width: 300 }}
                        >
                    <Meta title="PUNTUALIDAD" description="Cumplir con el desarrollo de las actividades de trabajo en el plazo establecido." />

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
                    <Meta title="CALIDAD" description="Cumplir los estándares de calidad que nos caracterizan en nuestra eficiencia de labor en la organización." />

                    </Card>
                </Col>
            </Row>
            <Col span={24} style={{textAlign:'center'}}>
                <Typography style={{fontSize: '30px', fontWeight: 'bold'}}>
                    BENEFICIOS DE ESTUDIAR CON NOSOTROS
                </Typography>
            </Col>
            <Row justify='center'>
                <Col 
                    sm={ 12 } 
                    md={ 8 } 
                    lg={ 8 }  
                    style={{padding: '30px', textAlign:'center'}}
                >
                    <Card 
                        cover={
                        <VideoCameraOutlined
                            style={{fontSize:'80px', paddingTop:'20px', color:'#1890FF'}}
                        />
                        }
                        hoverable
                        style={{ width: 300 }}
                        >
                    <Meta title="CLASES EN VIVO" description="Clases presenciales online que la vez son grabadas" />

                    </Card>
                </Col>
                <Col
                    sm={ 12 } 
                    md={ 8 } 
                    lg={ 8 }  
                    style={{padding: '30px', textAlign:'center'}}
                >
                    <Card 
                        cover={
                        <LineChartOutlined
                            style={{fontSize:'80px', paddingTop:'20px', color:'#1890FF'}}
                        />
                        }
                        hoverable
                        style={{ width: 300 }}
                        >
                    <Meta title="CASUISTICA - PRÁCTICA" description="Metodología con total interacción con los mejores ingenieros del sector, brindando las mejores experiencias" />
                    </Card>
                </Col>
                <Col 
                    sm={ 12 } 
                    md={ 8 } 
                    lg={ 8 } 
                    style={{padding: '30px', textAlign:'center'}}
                >
                    <Card 
                        cover={
                        <CarOutlined
                            style={{fontSize:'80px', paddingTop:'20px', color:'#1890FF'}}
                        />
                        }
                        hoverable
                        style={{ width: 300 }}
                        >
                    <Meta title="ENVÍO DE CERTIFICADO" description="Inversión incluye envío del certificado/diploma a nivel nacional" />
                    </Card>
                </Col>
                <Col 
                    sm={ 12 } 
                    md={ 8 } 
                    lg={ 8 } 
                    style={{padding: '30px', textAlign:'center'}}
                >
                    <Card 
                        cover={
                        <QrcodeOutlined
                            style={{fontSize:'80px', paddingTop:'20px', color:'#1890FF'}}
                        />
                        }
                        hoverable
                        style={{ width: 300 }}
                        >
                    <Meta title="CÓDIGO QR" description="Nuestros Certificados y diplomas tienen registro QR VALIDO para concurso público y privado" />
                    </Card>
                </Col>
                <Col
                    sm={ 12 } 
                    md={ 8 } 
                    lg={ 8 }  
                    style={{padding: '30px', textAlign:'center'}}
                >
                    <Card 
                        cover={
                        <RetweetOutlined
                            style={{fontSize:'80px', paddingTop:'20px', color:'#1890FF'}}
                        />
                        }
                        hoverable
                        style={{ width: 300 }}
                        >
                    <Meta title="CLASES GRABADAS" description="Acceso a todas las clases grabadas en su aula virtual" />
                    </Card>
                </Col>
                <Col 
                    sm={ 12 } 
                    md={ 8 } 
                    lg={ 8 } 
                    style={{padding: '30px', textAlign:'center'}}
                >
                    <Card 
                        cover={
                        <SnippetsOutlined
                            style={{fontSize:'80px', paddingTop:'20px', color:'#1890FF'}}
                        />
                        }
                        hoverable
                        style={{ width: 300 }}
                        >
                    <Meta title="MATERIALES DIGITALES" description="Acceso a los últimos materiales y software tratado en cada curso o diplomado" />
                    </Card>
                </Col>
                <Col 
                    sm={ 12 } 
                    md={ 8 } 
                    lg={ 8 } 
                    style={{padding: '30px', textAlign:'center'}}
                >
                    <Card 
                        cover={
                        <FormOutlined
                            style={{fontSize:'80px', paddingTop:'20px', color:'#1890FF'}}
                        />
                        }
                        hoverable
                        style={{ width: 300 }}
                        >
                    <Meta title="EVALUACIONES CALIFICADAS" description="Evaluamos su aprendizaje, para siempre llegar al conocimiento que usted requiera" />
                    </Card>
                </Col>
                <Col 
                    sm={ 12 } 
                    md={ 8 } 
                    lg={ 8 } 
                    style={{padding: '30px', textAlign:'center'}}
                >
                    <Card 
                        cover={
                        <FileDoneOutlined
                            style={{fontSize:'80px', paddingTop:'20px', color:'#1890FF'}}
                        />
                        }
                        hoverable
                        style={{ width: 300 }}
                        >
                    <Meta title="ESPECIALISTAS CALIFICADOS" description="Los mejores especialistas de cada área, con una amplia experiencia en el sector" />
                    </Card>
                </Col>
                <Col 
                    sm={ 12 } 
                    md={ 8 } 
                    lg={ 8 } 
                    style={{padding: '30px', textAlign:'center'}}
                >
                    <Card 
                        cover={
                        <FolderOpenOutlined
                            style={{fontSize:'80px', paddingTop:'20px', color:'#1890FF'}}
                        />
                        }
                        hoverable
                        style={{ width: 300 }}
                        >
                    <Meta title="AULA VIRTUAL" description="Acceso a su aula virtual las 24 horas y sin expiración de tiempo" />
                    </Card>
                </Col>
            </Row>
            <EndPage/>
        </div>
    )
}

export default Nosotros