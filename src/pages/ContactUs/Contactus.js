import React from 'react'
import contactUs from "../../Assets/images/contactUs.jpg";
import { Card,Form} from 'antd';

import "./Contactus.scss"
function Contactus() {
    return (
        <div>
            <img src={contactUs} alt="contactUs" className="contactus-img"/>
            <p className="contact-query">How can i help?<br/> PLease fill the form for any query.<br/>Will be respond shortly</p>
            <Card className="contact-card">
               <Form>
                   <label className="label-form">Enter Name</label>
               </Form>
                
            </Card>
        </div>
    )
}

export default Contactus
