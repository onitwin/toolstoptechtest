import React from 'react';
import './footerstyle.scss';
import FooterColumn from './FooterColumn';

//CHILD OF <MainContainer>
//contains (currently) 4 <FooterColumn> elements of variable data

const ToolstopFooter=()=>{
  //dummy data for populating footer columns
  const openingHours=["Monday-Friday 8am-5pm"];
  const help=["About Us","Contact us","Customer Services","FAQs"]
  const shopping=["Blog","Shop by Brand","Terms and Conditions"]
  const delivery=["Track your order","Delivery and Collection","Returns and refunds"]

  return(
    <div className="footer-container">
    <div className="footer-contents-wrapper">
    <FooterColumn heading="Opening Hours" text={openingHours}/>
    <FooterColumn heading="Help" text={help}/>
    <FooterColumn heading="Shopping" text={shopping}/>
    <FooterColumn heading="Delivery" text={delivery}/>
    </div>
    </div>
  )
}

export default ToolstopFooter;
