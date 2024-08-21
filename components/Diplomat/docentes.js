import React from "react";
import { Typography, Image, Col, Row } from 'antd'

const Docentes = ( data ) => {
    return ( 
        <Row 
            justify='center'
            style={{
                padding:'0px 50px 0px 50px'
            }}
        >
            {data.data.map(data=>(  
                <Col
                    key={data.id}  
                    xs={ 24 } 
                    sm={ 24 } 
                    md={ 11 } 
                    lg={ 11 }
                    style={{
                        borderRadius : 20,
                        padding: '50px',
                        margin: '10px',
                        border: ' 1px black solid ',
                    }}
                >
                    <Row 
                        style={{
                            display:'flex',
                            alignItems:'center',
                            marginBottom: '20px',
                        }}
                    >
                        <Col 
                            xs={ 24 } 
                            sm={ 24 } 
                            md={ 24 } 
                            lg={ 12 }
                            style={{
                                display: 'flex',
                                justifyContent:'center'
                            }}
                        >
                            <Image
                                src={data.photo.url}
                                alt={data.name}
                                preview={false}
                                width={'200px'}
                                height={'230px'}
                                style={{
                                    borderRadius: 100
                                }}
                            />
                        </Col>
                        <Col 
                            xs={ 24 } 
                            sm={ 24 } 
                            md={ 24 } 
                            lg={ 12 }
                        >
                            {data.specialty.split('-').map((specialty)=>
                                <Typography 
                                    key={specialty} 
                                    style={{
                                        margin:'8px',
                                        fontWeight: 'bold'
                                    }}
                                > 
                                    {specialty}
                                </Typography>
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Typography 
                                style={{
                                    textAlign:'center',
                                    margin:'8px',
                                    fontSize:'22px',
                                    fontWeight: 'bold'
                                }}
                            > 
                                {data.name}
                            </Typography>
                        </Col>
                        <Col
                            xs={ 24 } 
                            sm={ 24 } 
                            md={ 24 } 
                            lg={ 24 }
                        >
                            {data.description.split('-').map((description)=>
                                <Typography
                                    key={description}
                                    style={{
                                        marginBottom:'8px',
                                    }}
                                >
                                    {description}
                                </Typography>   
                            )}
                        </Col>
                    </Row>
                </Col>
            ))}
        </Row>
    )
}

export default Docentes