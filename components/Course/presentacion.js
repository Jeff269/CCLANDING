import React from "react";
import { Typography, Image, Col, Row, List } from 'antd'
import {
    ToolOutlined
} from '@ant-design/icons'

const { Title } = Typography

const Presentacion = ( data ) => {

    return ( 
        <Row 
            justify='center'
            style={{
                padding:'0px 50px 0px 50px',
                alignItems:'center' 
            }}
        >
            <Col span={10}>
                <Image
                    src='{data.data.photo.url}'
                    alt={data.data.name}
                    preview={false}
                    width={'80%'}
                    height={'100%'}
                />
            </Col>
            <Col 
                span={10}
            >
                <Row 
                    justify="center" 
                    style={{
                        textAlign:'center'
                        }}
                >
                    <Col span={10} >
                        <Title level={5}>
                            FECHA DE INICIO
                        </Title>
                        <Typography>
                            {data.data.class_start}
                        </Typography>
                    </Col>
                    <Col span={10}>
                        <Title level={5}>
                            DIPLOMA OTORGADO
                        </Title>
                        <Typography>
                            CD Pasco - Colegio de Ingenieros
                        </Typography>
                    </Col>
                </Row>
            </Col>
            <Col span={20}>
                <Title level={5}>
                    DIRIGIDO PARA:
                </Title>
                {/*
                <List
                    dataSource={data.data.directed_to.split('-')}
                    renderItem={item => (
                        <Typography>
                            <ToolOutlined 
                                style={{fontSize:'15px', padding: 10}}
                            />
                            {item}
                        </Typography> 
                        
                    )}
                />  
                */}
            </Col>
        </Row>
        
    )
}

export default Presentacion