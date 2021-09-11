import React from 'react'
import { Card } from 'antd';

function CardForms(props) {
    return (
        <div>
            <Card style={{width:'400px',height:'500px',marginLeft:'340px',marginTop:'70px'}}>
                <img style={{width:'360px',height:'470px'}} src={props.img} alt="card-img"/>
            </Card>
        </div>
    )
}

export default CardForms
