import React,  { useState, useEffect } from 'react'
import { Card, Carousel, Image, Col, Row, Typography } from 'antd'
import Header from '/components/header'
import EndPage from '/components/footer'
import axios from 'axios'
import API_URL from '../../config'

const { Text, Link } = Typography;
const { Meta } = Card;

const Diplomados = () => {
    
    const [ diplomats, setDiplomats ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect (() => {
        axios ({
          method: 'GET',
          url: API_URL+'/diplomats?_limit=1000000'
        }).then (res =>{
          setDiplomats(res.data.reverse())
          setLoading(false)
          }) 
    },[])

    return(
        <Row>
            <Col span={24}>
                <Header/>
            </Col>
            
            <Col span={24}>
                <Carousel>
                    <Image
                        src="../images/carrusel/carrosel-1.jpg"
                        alt="logo-CCITEC"
                        preview={false}
                        width={'100%'}
                        height={400}
                    />
                </Carousel>
            </Col>
            <Col>
                <Row justify="center">
                    <h2 style={{fontSize: '30px', fontWeight: 'bold'}}>
                        NUESTROS DIPLOMADOS
                    </h2>
                </Row>

                <Row 
                    justify="center"
                >
                {
                  loading ?
                  <p> Cargando... </p>
                  :
                  <Col
                    span={24}
                  >  
                    <Row>
                    { diplomats.map(diplomat => 
                        {switch (diplomat.name) {
                        case "SIN DIPLOMADO":
                            return
                        default:
                            { if (diplomat.culminate === true) 
                                return(
                                    <Col 
                                        key={diplomat.id}
                                        span={8} 
                                        xs={ 24 } 
                                        sm={ 12 } 
                                        md={ 12 } 
                                        lg={ 8 } 
                                    >
                                    <Image
                                        src="../images/finalizado/finalizado.png"
                                        width={'50%'}
                                        alt="finalizado"
                                        style={{ 
                                            zIndex: '1',
                                            position: 'absolute' 
                                        }}
                                        preview={false} 
                                    />
                                        <Link 
                                            style={{
                                                width: '90%',
                                                display:'flex', 
                                                margin:'20px',
                                                zIndex: '-1',
                                                }} 
                                            >
                                            <Card
                                                hoverable
                                                style={{ 
                                                    width: '100%',      
                                                }}
                                                cover={
                                                    <Image
                                                        src={diplomat.photo.url} 
                                                        alt={diplomat.name} 
                                                        preview={false}   
                                                    />
                                                }
                                            >
                                                <Meta title={diplomat.name}/>
                                            </Card>
                                            
                                        </Link>
                                        
                                    </Col>
                                )
                            }
                            return(
                            <Col 
                                key={diplomat.id}
                                span={8} 
                                xs={ 24 } 
                                sm={ 12 } 
                                md={ 12 } 
                                lg={ 8 }  
                            >
                                <Link 
                                    href={`/diplomados/${diplomat.id}`} 
                                    style={{
                                        display:'flex', 
                                        margin:'20px'
                                        }} 
                                    >
                                    <Card
                                        hoverable
                                        style={{ 
                                            width: '100%',  
                                        }}
                                        cover={
                                            <Image
                                                src={diplomat.photo.url} 
                                                alt={diplomat.name} 
                                                preview={false}   
                                            />
                                        }
                                    >
                                        <Meta title={diplomat.name}/>
                                    </Card>
                                </Link>
                            </Col>
                            )
                            }  
                        }
                    )}
                    </Row>
                </Col>
                }
                </Row>
            </Col>
            <EndPage/>
        </Row>
    )
}

export default Diplomados