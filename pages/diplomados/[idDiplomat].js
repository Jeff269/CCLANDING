import React, { useState, useEffect  } from "react";
import { Typography, Image, Col, Row, Tabs  } from 'antd'
import Header from '/components/header'
import EndPage from '/components/footer'

import { useRouter } from 'next/router'

import axios from 'axios'

import {
    ToolOutlined
} from '@ant-design/icons'


const { TabPane } = Tabs;
const { Title } = Typography

import Inversion from "/components/Diplomat//inversion"
import Modulos from "/components/Diplomat//modulos"
import Docentes from "/components/Diplomat//docentes"
import API_URL from "../../config";

const DiplomatItem = () => {

    const router = useRouter()

    const [ diplomat, setDiplomat ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const [ allDirect, setAllDirect ] = useState([])
    const [ classStart, setClassStart ] = useState([])

    const months = [
        { 'id':'01', 'mes':'Enero' },
        { 'id':'02', 'mes':'Febrero' },
        { 'id':'03', 'mes':'Marzo' },
        { 'id':'04', 'mes':'Abril' },
        { 'id':'05', 'mes':'Mayo' },
        { 'id':'06', 'mes':'Junio' },
        { 'id':'07', 'mes':'Julio' },
        { 'id':'08', 'mes':'Agosto' },
        { 'id':'09', 'mes':'Setiembre' },
        { 'id':'10', 'mes':'Octubre' },
        { 'id':'11', 'mes':'Noviembre' },
        { 'id':'12', 'mes':'Diciembre' }

    ]

    const fetchDataDiplomat =  async() => {
        const id = await router.query.idDiplomat 
        if(id != undefined){

            let url =  await API_URL+`/diplomats/${id}`
    
            axios.get(url)
                .then(res=>{
                    setDiplomat(res.data)

                    if( diplomat.directed_to != undefined ){
                        const fetchDirectTo = async () =>{
                            const direct2 = await diplomat.directed_to
                            const direct1 = await direct2.split('-')
                            direct1.shift()
                            
                            setAllDirect(direct1)
                        }

                        fetchDirectTo()   
                    }else {
                        setLoading(!loading)
                    } 

                    if( diplomat.class_start != undefined ){
                        const fetchClassesStart = async () =>{
                            const class_start2 = await diplomat.class_start
                            const class_start = await class_start2.split('-')

                            setClassStart(class_start)
                            
                        }

                        fetchClassesStart()  
                    }else {
                        setLoading(!loading)
                    } 
                })  
        }else {
            setLoading(!loading)
        }    
    }
    
    useEffect (() => { 
        fetchDataDiplomat()
    },[loading])

    for( var i= 0; i < months.length ; i++){
        if(classStart[1] == months[i].id){

            const medium = [];
            classStart[1]= months[i].mes;
            classStart[2] = parseInt(classStart[2].substr(0,2));
            
            medium[0] = classStart[0];
            medium[1] = classStart[1];
            medium[2] = classStart[2];

            setClassStart(medium)
        }
    } 

    return(
        <Row>
            <Col span={24}>
                <Header/>
            </Col>
            
            <Col>
                <Row
                    style={{
                        margin: 20
                    }}
                >
                    <Typography style={{fontSize: '30px', fontWeight: 'bold'}}>
                        {diplomat.name}
                    </Typography>
                
                    <Col>
                        <Tabs defaultActiveKey="1" centered>
                            <TabPane tab={
                                <Typography style={{fontSize: '15px', fontWeight: 'bold'}}>
                                PRESENTACIÓN
                            </Typography>} key="1" >
                                <Row 
                                    justify='center' 
                                    style={{
                                        padding:'0px 50px 0px 50px',
                                        alignItems:'center' 
                                    }}
                                >
                                    <Col 
                                        xs={ 24 } 
                                        sm={ 24 } 
                                        md={ 10 } 
                                        lg={ 10 }
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            paddingBottom:'20px'
                                        }}
                                    >
                                        { diplomat.photo != undefined
                                        ?
                                        <Image
                                            src='https://capacitateparaelempleo.org/assets/DiplomasImages/18f5f4b4-eadf-41ea-8497-4c9480cc5c4f.png'
                                            alt={diplomat.name}
                                            preview={false}
                                            width={'80%'}
                                            height={'100%'}
                                        />
                                        :
                                        <Image
                                            src='{diplomat.photo.url}'
                                            alt={diplomat.name}
                                            preview={false}
                                            width={'80%'}
                                            height={'100%'}
                                        />

                                        }
                                        
                                    </Col>
                                    
                                    <Col 
                                        xs={ 24 } 
                                        sm={ 24 } 
                                        md={ 10 } 
                                        lg={ 10 }
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Row justify="center" style={{textAlign:'center'}}>
                                            <Col 
                                                xs={ 24 } 
                                                sm={ 24 } 
                                                md={ 10 } 
                                                lg={ 10 }
                                                style={{
                                                    paddingBottom:'20px'
                                                }}
                                            >
                                                <Image
                                                    src='../icon/calendario.png'
                                                    alt='eeh-logo'
                                                    preview={false}
                                                    width= {'70px'}
                                                    
                                                />
                                                <Title level={5}>
                                                    FECHA DE INICIO
                                                </Title>
                                                { classStart.length != 1 ?
                                                <Typography>
                                                    {classStart[2]} de {classStart[1]}
                                                </Typography>
                                                :
                                                <p>Cargando...</p>
                                                }
                                            </Col>
                                            <Col
                                                xs={ 24 } 
                                                sm={ 24 } 
                                                md={ 10 } 
                                                lg={ 10 }
                                                style={{
                                                    paddingBottom:'20px'
                                                }}
                                            >
                                                <Image
                                                    src='../icon/diploma.png'
                                                    alt='eeh-logo'
                                                    preview={false}
                                                    width= {'70px'}
                                                    
                                                />
                                                <Title level={5}>
                                                    DIPLOMA OTORGADO
                                                </Title>
                                                <Typography>
                                                    CD Pasco - Colegio de Ingenieros
                                                </Typography>
                                                <Typography>
                                                    CCITEC
                                                </Typography>
                                            </Col>
                                        </Row>
                                        
                                    </Col>
                                    <Col span={20}>
                                        <Title level={5}>
                                            DIRIGIDO PARA:
                                        </Title>
                                        {
                                            diplomat.directed_to != undefined ?
                                            <>
                                                {allDirect.map((direct) =>
                                                    <li key={direct}>
                                                        
                                                        <Typography>
                                                            <ToolOutlined 
                                                                style={{fontSize:'15px', padding: 10}}
                                                            />
                                                            {direct}
                                                        </Typography>
                                                        
                                                    </li>
                                                )}
                                            </>
                                            :
                                            <p>Cargando...</p>
                                        }
                                    </Col>

                                </Row>
                                
                            </TabPane>
                            
                            <TabPane tab={
                            <Typography style={{fontSize: '15px', fontWeight: 'bold'}}>
                                INVERSIÓN
                            </Typography>} key="2" >
                                <Inversion data={diplomat.investment_diplomats} />
                            </TabPane>
                            <TabPane tab={
                                <Typography style={{fontSize: '15px', fontWeight: 'bold'}}>
                                MÓDULOS
                            </Typography>} key="3" >
                                <Modulos data={diplomat.temary_diplomats} url_brochure={diplomat.url_brochure}/>
                            </TabPane>
                            <TabPane tab={
                                <Typography style={{fontSize: '15px', fontWeight: 'bold'}}>
                                DOCENTES
                            </Typography>} key="4" >
                                <Docentes data={diplomat.teaching_engineers} />
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>      
            </Col>
            <EndPage/>
    </Row>
        
    )
}

export default DiplomatItem
