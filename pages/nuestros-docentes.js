import React,  { useState, useEffect } from 'react'
import { Row, Typography, Col, Card, Image, Modal, Button } from 'antd'

import Header from "../components/header"
import EndPage from "../components/footer"

import axios from 'axios'
import API_URL from '../config'

const { Text, Link } = Typography
const { Meta } = Card;

const Docentes = () => {

    const [ teachers, setTeachers ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect (() => {
        axios ({
          method: 'GET',
          url: API_URL+'/teachers'
        }).then (res =>{
            setTeachers(res.data.reverse())
            setLoading(false)
          }) 
    },[])
    
    return(
        <Row>
            <Col span={24}>
                <Header/>
            </Col>
                        
            <Col span={24}>
                <Row 
                justify='center'
                style={{
                    padding:'0px 50px 0px 50px'
                }}>
                <Col
                    span={24}
                    style={{
                        textAlign:'center',
                        margin:'20px 0px 50px 0px'
                    }}
                >
                    <Text 
                        style={{
                            fontSize: '30px', 
                            fontWeight: 'bold'
                        }}
                    >
                        NUESTRA PLANA DOCENTE
                    </Text>
                    
                </Col> 
                <Col 
                    span={24}
                    style={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        paddingBottom: 50
                    }}
                >
                    <Button 
                        type="primary"
                        shape="round" 
                        size="large"
                        href="https://forms.gle/3cXHkoLTge6jbpiNA"
                        target="_blank"
                    >
                            [Click] FORMA PARTE DE NUESTRA PLANA DOCENTE
                    </Button>
                </Col>
                
                    {teachers.map(teacher=>( 
                        <Col 
                            key={teacher.id} 
                            xs={ 24 } 
                            sm={ 12 } 
                            md={ 8 } 
                            lg={ 6 } 
                            style={{
                                display: 'flex',
                                justifyContent:'center'
                            }} 
                        >
                        
                            <Link onClick={showModal}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={
                                        <Row
                                        style={{
                                            display: 'flex',
                                            justifyContent:'center'
                                        }}
                                        >
                                            <Image
                                                preview={false}
                                                alt={teacher.name}
                                                width='200px'
                                                height='230px'
                                                src={teacher.photo.url}
                                                style={{
                                                    borderRadius: 100
                                                }}
                                            />  
                                        </Row>
                                        
                                    }
                                >
                                    <Meta title={teacher.name} />
                                </Card>
                            </Link>

                            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <Typography>{teacher.name}</Typography>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal>
                        </Col>
                    ))}
                </Row>
            </Col>
            <Col span={24}>
                <EndPage/>
            </Col>
        </Row>
    )
}

export default Docentes