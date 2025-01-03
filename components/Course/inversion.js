import React, { useEffect, useState } from "react";
import { Typography, Col, Row, Card, Image } from 'antd'
import API_URL from "../../config";

const { Title, Text, Link } = Typography
import {
    CheckCircleOutlined
} from '@ant-design/icons'

import axios from 'axios'

const Inversion = ( data ) => {

    const [ investment, setInvestment ] = useState([])

    const fetchData =  async() => {

        await axios.get(API_URL+'/investment-courses')
            .then(res=>{
                setInvestment(res.data)
            })
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <Row  
            justify='center'
            style={{
                alignItems:'center',
                justifyContent:'center',
                //width: '100wh'
            }}
        >
            <Col
                xs={ 24 } 
                sm={ 24 } 
                md={ 20 } 
                lg={ 20 }
                style={{
                    display:'flex',
                    justifyContent:'center',
                }}
            >
                <Row>
                {data.data.map(data=>  (
                
                    <Col
                        xs={ 24 } 
                        sm={ 24 } 
                        md={ 12 } 
                        lg={ 12 }
                        key={investment.id}
                        style={{
                            padding:'0px 50px 20px 50px'
                        }}
                    >
                    { investment.filter(investment => investment.id === data.id).map(investment => 

                        <Card 
                            key={investment.id}
                            title={investment.name} 
                            bordered={true} 
                            hoverable
                        >
                        {   investment.name == 'Profesionales' || investment.name =='Estudiantes (pregrado)'?
                        <>
                            {investment.investment_course_items.map(item=>( 
                                <Col 
                                    key={item.id}
                                    span={24}
                                    style={{
                                        borderBlockEnd:'1px solid #eee',
                                        marginBottom:'5px'
                                    }}
                                >
                                    
                                    <Row>
                                        <Col span={12}>
                                            <Typography>
                                            <CheckCircleOutlined 
                                                style={{fontSize:'15px', padding: 10, color:'#2b60ae'}}
                                            />
                                                {item.name}
                                            </Typography>
                                        </Col>
                                        <Col span={12}>
                                            <Typography
                                                style={{textAlign:'end'}}
                                            >
                                                <b>S/.{item.price}.00</b>
                                            </Typography>
                                        </Col>
                                    </Row>
                                    
                                </Col>
                            
                            ))}
                        </>
                        :
                        <>
                        {investment.investment_course_items.map(item=>( 
                            <Col 
                                key={item.id}
                                span={24}
                                style={{
                                    borderBlockEnd:'1px solid #eee',
                                    marginBottom:'5px'
                                }}
                            >
                                <Row>
                                    <Col span={12}>
                                        <Typography>
                                        <CheckCircleOutlined 
                                            style={{fontSize:'15px', padding: 10, color:'#2b60ae'}}
                                        />
                                            {item.name}
                                        </Typography>
                                    </Col>
                                    <Col span={12}>
                                        <Typography
                                            style={{textAlign:'end'}}
                                        >
                                            <b>{ item.name.toLowerCase().includes('inversión') ? '$':'S/.' }{item.price}.00</b>
                                        </Typography>
                                    </Col>
                                </Row>
                                
                            </Col>
                        ))}
                        </>
                        }
                        </Card>           
                    )} 
                    </Col>
                ))} 
                </Row>
            </Col>
            <Col 
                xs={ 12 } 
                sm={ 12} 
                md={ 4 } 
                lg={ 4 }
            >
                {
                    data.discount_date == 'free' ?
                    <Link
                        href="https://api.whatsapp.com/send?phone=51951004548"
                        target="_blank"
                    >
                        <Image
                            src='../images/gif-promocion/free.gif'
                            alt='promocion'
                            preview={false}
                            width= {'100%'}
                            style={{
                                borderRadius:'20px'
                            }}
                    />  
                    </Link>
                    :
                    <>
                    <Typography style={{fontSize: '15px', fontWeight: 'bold', textAlign:'center'}}>
                        Obtén el:
                    </Typography>  
                    <Link
                        href="https://api.whatsapp.com/send?phone=51951004548"
                        target="_blank"
                    >
                        <Image
                            src='../images/gif-promocion/gif-10.gif'
                            alt='promocion'
                            preview={false}
                            width= {'100%'}
                            style={{
                                borderRadius:'20px'
                            }}
                    />  
                    </Link>
                    
                    <Typography style={{fontSize: '15px', fontWeight: 'bold', textAlign:'center'}}>
                        hasta el <u>{data.discount_date}</u>
                    </Typography>
                    </>
                }    
            </Col>  
        </Row>
    )
}

export default Inversion