
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText, Modal, ModalHeader, ModalBody, ModalFooter, } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";
import "../styles/Home.css";


const Home = () => {
  const navigate = useNavigate();
   const [showIntroModal, setShowIntroModal] = useState(false);

 


  useEffect(() => {
 
     const shownBefore = sessionStorage.getItem("introModalShown");
    if (!shownBefore) {
      setShowIntroModal(true);
    sessionStorage.setItem("introModalShown", "true");
  }
}, []);


   const handleClose = () => {
    setShowIntroModal(false);
  };


  return (
  
    <Container  className="mt-5 px-3 px-md-5 opacity-80">

      

       <Row className="d-flex justify-content-center">
        <Col xs={12} sm={12} md={12} lg={12}>
          <Card className="shadow-lg p-5  card text-center
           bg-transparent glass">
            <CardBody>
              <CardTitle tag="h2" className="mb-4  Card-Title">
                
               
                ☕️ Cafe Rezervasyon Sistemi
                
              
               </CardTitle>
              <CardText className="mb-4 Card-Text">
                
                Masanızı kolayca ayırtın veya yönetici paneline erişin.
              </CardText>

              <Row className="gx-4 gy-3 justify-content-center">
                <Col xs={12} sm={10} md={10} lg={10}>

                  <Button
                  color="light bg-body-secondary text-dark-subtle"
                    className="w-100 py-3  rounded-pill btn-theme-primary"
                    onClick={() => navigate("/rezervasyon")}
                    >
                    <span aria-hidden="true">📅Rezervasyon Yap</span> 
                    <span className="visually-hidden"></span>
                 </Button>
                </Col>
                <Col xs={12} sm={12} md={10} lg={10}>
                  <Button
                  color="light"
                    className="w-100 py-3 bg-body-secondary text-dark-subtle  rounded-pill btn-theme"
                    onClick={() => navigate("/admin")}
                  >
                   🔒 Yönetici Girişi
                  </Button>
                </Col>

               

            </Row>
             </CardBody>
          </Card>
        </Col>
      </Row>

      {/* 🧊 Modal içeriği */}
      <Modal isOpen={showIntroModal} toggle={handleClose} centered>
        <ModalHeader toggle={handleClose} 
        className="shadow-sm align-items-center">BİLGİLENDİRME</ModalHeader>
       <ModalBody className="text-center">
        <FaCoffee className="m-1" size={48} color="#795548" />
         <p className="m-2 p-3 fs-5  p-Modal">
          Şelale Cafe Rezervasyon Sistemine <br />
        <span className="fw-bold text-muted-subtle p-Span">Hoşgeldiniz!</span>
        </p>
        </ModalBody>
        <ModalFooter>
          <Button color="light" 
         className="bg-body-secondary text-dark-subtle Button-Modal" onClick={handleClose}>
            Kapat
          </Button>
          </ModalFooter>
      </Modal>

</Container>

  );
};


export default Home;




    
