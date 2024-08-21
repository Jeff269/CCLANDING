import React, { useState, useEffect  } from "react";
import { Typography, Col, Row, Tabs  } from 'antd'
import Header from '/components/header'
import EndPage from '/components/footer'

import { useRouter } from 'next/router'

import axios from 'axios'

const { TabPane } = Tabs;

import Inversion from "/components/Diplomat//inversion"
import Modulos from "/components/Diplomat//modulos"
import Docentes from "/components/Diplomat//docentes"
import Presentacion from "./presentacion"

const DiplomatItem = () => {

    const router = useRouter()
    const [ diplomat, setDiplomat ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const fetchData =  async() => {
        const id =  await router.query.idDiplomat
        if( id != undefined ){
            let url = await `http://18.228.178.64:1337/diplomats/${id}`
    
            axios.get(url)
                .then(res=>{
                    setDiplomat(res.data) 
                    if( diplomat.directed_to == undefined || diplomat.class_start == undefined || diplomat.photo == undefined){
                        setLoading(!loading)
                    }
                    
                })    
        }else{
            setLoading(!loading)
        }
            
    }

    useEffect(() => { 
        fetchData()
    },[loading])

    console.log(diplomat)
    return(
        <Row>
            <Header/>
            <Col>
                <Row
                    style={{
                        margin: 20
                    }}
                >
                    <Col>
                        <Typography style={{fontSize: '30px', fontWeight: 'bold'}}>
                            {diplomat.name}
                        </Typography>
                    </Col>
                    <Col>
                        <Tabs defaultActiveKey="1" centered>
                            <TabPane tab="PRESENTACIÓN" key="1" >
                                <Presentacion data={diplomat} />                          
                            </TabPane> 
                            <TabPane tab="INVERSIÓN" key="2" > 
                                <Inversion data={diplomat.investment_diplomats} />
                            </TabPane>
                            <TabPane tab="MÓDULOS" key="3">
                                <Modulos data={diplomat.temary_diplomats} url_brochure={diplomat.url_brochure}/>
                            </TabPane>
                            <TabPane tab="DOCENTES" key="4">
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
