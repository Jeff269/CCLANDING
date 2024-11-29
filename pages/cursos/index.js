import React,  { useState, useEffect } from 'react'
import { Card, Carousel, Image, Col, Row, Typography } from 'antd'
import Header from '/components/header'
import EndPage from '/components/footer'
import axios from 'axios'
import API_URL from '../../config'

const { Text, Link } = Typography;
const { Meta } = Card;

const Cursos = () => {
    
    const [ courses, setCourses ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect (() => {
        axios ({
          method: 'GET',
          url: API_URL+'/courses?culminate=false'
        }).then (res =>{
            setCourses(res.data.reverse())
            setLoading(false)
            console.log(res)
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
                    <Text style={{fontSize: '30px', fontWeight: 'bold'}}>
                        NUESTROS CURSOS
                    </Text>
                </Row>

                <Row justify="center">
                {
                  loading ?
                  <p> Cargando... </p>
                  :
                  <Col
                    span={24}
                  >  
                    <Row>
                    { courses.map(course =>
                        {switch (course.old) {
                            case true:
                                return
                            <p></p>
                            case false:
                                { if (course.culminate === true) 
                                    return(
                                        <Col 
                                            key={course.id}
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
                                                    //position: 'absolute'
                                                    }} 
                                                >
                                                <Card
                                                    hoverable
                                                    style={{ 
                                                        width: '100%', 
                                                    }}
                                                    cover={
                                                        <Image
                                                            src='https://i0.wp.com/admision.utem.cl/wp-content/uploads/2020/11/cual-es-el-trabajo-de-un-ingeniero-comercial.jpg?w=1280&ssl=1'
                                                            alt={course.name} 
                                                            preview={false}         
                                                        />
                                                    }
                                                >
                                                    <Meta title={course.name}/>
                                                </Card>
                                                
                                            </Link>
                                            
                                        </Col>
                                    )
                                }
                                return(
                                    <Col 
                                        key={course.id}
                                        span={8} 
                                        xs={ 24 } 
                                        sm={ 12 } 
                                        md={ 12 } 
                                        lg={ 8 }  
                                    >
                                        <Link 
                                            href={`/cursos/${course.id}`} 
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
                                                        src='https://i0.wp.com/admision.utem.cl/wp-content/uploads/2020/11/cual-es-el-trabajo-de-un-ingeniero-comercial.jpg?w=1280&ssl=1' 
                                                        alt={course.name} 
                                                        preview={false}   
                                                    />
                                                }
                                            >
                                                <Meta title={course.name}/>
                                            </Card>
                                        </Link>
                                    </Col>
                                )
                        }}
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

export default Cursos