import React from "react";
import { Typography, Image, Col, Row, Collapse, Button } from 'antd'

const { Title, Text, Link } = Typography
const { Panel } = Collapse;

const Inversion = ( data ) => {

    return ( 
        <Row
            justify='center'
        >
            {data.data.map(data=>(      
                <Col
                    key={data.id}  
                    xs={ 24 } 
                    sm={ 24 } 
                    md={ 11 } 
                    lg={ 11 }
                    style={{
                        padding: '0px',
                        margin: '3px',
                    }}
                >
                    <Collapse defaultActiveKey={['1']}>
                        <Panel header={<b>{data.name}</b>} key={1}>
                            <div>
                                <div className="content" dangerouslySetInnerHTML={{__html: (data.content)}}></div>
                            </div>

                        </Panel>
                    </Collapse>  
                </Col>
            ))}
            <Col
                xs={ 24 } 
                sm={ 24 } 
                md={ 22 } 
                lg={ 22 }
                style={{
                    margin: '3px',
                }}
            >
                <Button
                    type="primary"
                    size='large'
                    shape="round"
                    target="_blank"
                    href={data.url_brochure}
                >
                    [Click]Descargar el Brochure
                </Button>
            </Col>
            
        </Row>
    )
}

export default Inversion