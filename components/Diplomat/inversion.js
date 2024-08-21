import React, { useState, useEffect } from "react";
import { Typography, Col, Row } from 'antd'

const { Title, Text } = Typography

import axios from 'axios'

const Inversion = ( data ) => {

    const [ investment, setInvestment ] = useState([])

    const fetchInvestmentDiplomats =  async() => {

        await axios.get('http://18.228.178.64:1337/investment-diplomats')
            .then(res=>{
                setInvestment(res.data)
            })
    }

    useEffect(()=>{
        fetchInvestmentDiplomats()
    },[])

    return (
        <Row 
            justify='center'
            style={{
                textAlign:'center',
                //border: '1px solid #000', 
                padding: '20px',
                borderRadius : 20,           
            }}
        >
            {data.data.map(data=>  (
            <Col
                key={data.id}
                span={13}
            >
                { investment.filter(investment => investment.id == data.id).map(invest => 
                    <Row
                    justify='center'
                    key={invest.id}
                    style= {{
                        marginBottom:'100px',
                        borderBottom: '1px solid #000',
                    }}
                    >
                        <Col span={24}>
                            <Title level={3}>
                                {invest.name}
                            </Title>
                        </Col>
            
                    {   invest.name == 'Inversión en Soles'
                        ?
                        <>
                        <Col
                            span={24}
                        >
                            <Row>
                                <Col span ={12}>
                                    <Title level={4}>
                                        Inscripción: 
                                    </Title>
                                </Col>
                                <Col span ={12}>
                                    <Title level={5}>
                                        S/.{invest.inscription}.00
                                    </Title>
                                </Col>
 
                            </Row>
                        </Col>
                        <Col
                            span={24}
                        >
                            <Row>
                                <Col span ={12}>
                                    <Title level={4}>
                                        Cuotas({invest.number_quota}): 
                                    </Title>
                                </Col>
                                <Col span ={12}>
                                    <Title level={5}>
                                        S/.{invest.quota}.00
                                    </Title>
                                </Col>
 
                            </Row>
                        </Col>
                        </>
                    :
                    <>
                        <Col
                            span={24}
                        >
                            <Row>
                                <Col span ={12}>
                                    <Title level={4}>
                                        Inscripción: 
                                    </Title>
                                </Col>
                                <Col span ={12}>
                                    <Title level={5}>
                                        $ {invest.inscription}.00
                                    </Title>
                                </Col>
 
                            </Row>
                        </Col>
                        <Col
                            span={24}
                        >
                            <Row>
                                <Col span ={12}>
                                    <Title level={4}>
                                        Cuotas({invest.number_quota}): 
                                    </Title>
                                </Col>
                                <Col span ={12}>
                                    <Title level={5}>
                                        $ {invest.quota}.00
                                    </Title>
                                </Col>
 
                            </Row>
                        </Col>
                    </>
                    }
                    </Row>
                )}           
                
            </Col>
            
            ))}
           
        </Row>
    )
}

export default Inversion