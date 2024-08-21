import { Typography, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import {Head} from 'next/head';

import {
    PhoneTwoTone,
    MailTwoTone,
    EnvironmentTwoTone
} from '@ant-design/icons';

const { Text, Link } = Typography;

const TopHead = () => {
    return(
        <>
            <title>CCITEC PERU</title>
            <Row 
                justify='center'
                style={{
                    textAlign: 'center',
                    
                }}>
                <Col  
                    xs={ 0 } 
                    sm={ 0 } 
                    md={ 24 } 
                    lg={ 24 }
                    style={{
                        margin: '5px 0px 5px 0px'
                        }}
                    >
                    <Link 
                        href="https://api.whatsapp.com/send?phone=51951004548" 
                        target="_blank" 
                        style={{
                            margin: '5px'
                        }}
                    >
                        <PhoneTwoTone 
                            style={{fontSize:'20px'}}
                            twoToneColor="#000"      
                        />
                        <Text> +51 951 004 548 </Text>
                    </Link>
                    <Link 
                        href="mailto:eeventosacademicos@gmail.com"
                        style={{
                            margin: '8px'
                        }}    
                    >
                        <MailTwoTone 
                                style={{fontSize:'20px'}}
                                twoToneColor="#000" 
                        />
                        <Text> eeventosacademicos@gmail.com </Text>
                    </Link>
                    <Link 
                        href="https://goo.gl/maps/iv549e5WSCFR4J5a7" 
                        target="_blank"
                        style={{
                            margin: '5px'
                        }} 
                    >
                        <EnvironmentTwoTone 
                        style={{fontSize:'20px'}}
                        twoToneColor="#000"
                        />
                        <Text> Jr. Torongil 260 - UMUTO, Huancayo, Perú</Text>
                    </Link>
                </Col>
            </Row >
        </>
    )
}

export default TopHead