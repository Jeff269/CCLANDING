import React, { useState, useEffect } from 'react';
import { Image, Modal, Typography, Row, Col, Button } from 'antd';

const { Text, Link } = Typography;

const ModalPromocion = () => {

    const [ loading, setLoading ] = useState(true)

    // const [modal, setModal] = useState(()=>{
    //     if(typeof window !== 'undefined'){
    //         let mode = localStorage.getItem('modal')
    //         if( mode != 1){
    //             return true 
    //         }else{
    //             return false 
    //         }
            
    //     }else{
    //         setLoading(!loading)
    //     }
    // })
    // useEffect (() => { 
        
    // },[loading])

    const showModal = () => {
        setModal(true)
    };

    // const handleCancel = () => {
    //     setModal(false)
    //     localStorage.setItem('modal', 1);
    // };
    // console.log(modal)
    return (
    <Modal 
        // visible={modal} 
        visible={false}
        footer={null} 
        // onCancel={handleCancel}
    >
        <Row justify="center"> 
                <Image
                    src="../images/logo-CCITEC/logo-CCITEC.png"
                    alt="logo-CCITEC"
                    preview={false}
                    width= {'50%'}
                />                
        </Row>
        <Row justify="center">
            <Col
                span={24}
            >
            <Text
                style={{
                    fontWeight: 'bold',
                    color: '#1176EF'
                }}
            >
                10% de dscto. a publico general y 15% de dscto. a alumnos CCITEC22
            </Text>
            </Col>
            <Col>
            <Text>
                Inicio 26 de Octubre
            </Text>
            </Col>
            
        </Row>
        <Row justify="center">
            <iframe src="https://free.timeanddate.com/countdown/i85mpz3q/n504/cf12/cm0/cu4/ct0/cs0/ca0/co0/cr0/ss0/cac000/cpc000/pct/tcfff/fs200/szw320/szh135/iso2022-10-26T23:59:59" allowtransparency="true" frameBorder="0" width="217" height="70"></iframe>

            <div style={{
                width:217, 
                height: 70,
                position: 'absolute'
            }}>

            </div>
        </Row>
        
        <Row justify="center">
            <Button style={{color:'white', fontWeight:'bold', fontSize: 16}}type="primary" href="/cursos/632c9424c37c140016b67dfe">Ver Curso</Button>
        </Row>
    </Modal>
    )
}

export default ModalPromocion