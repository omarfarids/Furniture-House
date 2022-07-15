import React, {useContext} from 'react';
import { AppContext } from './context';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';



function SingleItem() {

    const {singleItem} = useContext(AppContext)

    const {name,
        company,
        image:img,
        price,
        id,
        shipping,
        colors,
        category} = singleItem




    return (
            <div key={id} >
                <Card className="mx-auto d-block mt-5" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    <ul>
                        <li><b>Category:</b> {category}</li>
                        <li><b>Company:</b> {company}</li>
                        <li><b>Price:</b> {price / 100}$ {shipping?'+ Free Shipping':'+ Shipping cost'}</li>
                        <li><b>available colors:</b> <div>{colors.map((color,index) => <div className='m-1' key={index} style={{backgroundColor:color,display:'inline-block',width:25,height:25,border:'1px solid black',marginLift:'5px',borderRadius:'50%'}}></div>)}</div></li>
                    </ul>
                <button className='icon btn'><Link to='/'><RiArrowGoBackFill /></Link></button>
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
    )
}

export default SingleItem