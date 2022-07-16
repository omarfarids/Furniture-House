import React , { useContext} from 'react';
import { AppContext } from './context';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import { Button , Card ,ButtonToolbar } from 'react-bootstrap';
import styles from '../styles/Goods.module.css';



function Goods() {
  const {loading , data , setSingleItem,searchForm,cartItems,setCartItems,total,setTotal,setPurchase} = useContext(AppContext)

  let searchResults = data.filter(item=>{
    return item.name.toLowerCase().match(searchForm.toLowerCase())})

  if(loading){
    return <Loading />
  }
  return (
    <div className={styles.furnatureSection}>
      {
        searchForm === ''? data.map(item=>{
          const{
            name,
            company,
            image:img,
            price,
            id,
            shipping,
            colors,
            category
          } = item;
          return (
            <div className='item-card' key={id} >
              <Card className={`${styles.cardItem} m-5`} style={{ width: '18rem' }}>
              <Card.Img className={styles.cardImg} variant="top" src={img} alt={name} />
              <Card.Body>
                <Card.Title className='text-center mb-3'>{name}</Card.Title>
                <Card.Text>
                  <b>Company:</b> {company}<br/>
                  <b>Price:</b> {price / 100}$
                </Card.Text>
                <ButtonToolbar
                  className="justify-content-evenly"
                  aria-label="Toolbar with Button groups"
                >
                  <Button variant="outline-primary" onClick={()=>setSingleItem({
                    name,
                    company,
                    image:img,
                    price,
                    id,
                    shipping,
                    colors,
                    category
                  })}><Link to={`/Item/${name}`} >Details</Link></Button>
                  <Button className={styles.buyButton} variant="primary" onClick={()=>{setCartItems([...cartItems,{img,id,item:name,price}]);setTotal(total + (price / 100));setPurchase({
                        order:false,
                        submit:false,
                    })}}>Buy now</Button>
                </ButtonToolbar>
              </Card.Body>
              </Card>
            </div>
          )
        }):searchResults.map(element=>{
            const{
              name,
              company,
              image:img,
              price,
              id,
              shipping,
              colors,
              category
            } = element;
            return (
              <>
              <Card className={`${styles.cardItem} item-card m-5`} key={id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img} alt={name} />
              <Card.Body>
                <Card.Title className='text-center mb-3'>{name}</Card.Title>
                <Card.Text>
                  <b>Company:</b> {company}<br/>
                  <b>Price:</b> {price / 100}$
                </Card.Text>
                <ButtonToolbar
                  className="justify-content-evenly"
                  aria-label="Toolbar with Button groups"
                >
                  <Button variant="outline-primary" onClick={()=>setSingleItem({
                    name,
                    company,
                    image:img,
                    price,
                    id,
                    shipping,
                    colors,
                    category
                  })}><Link to={`/Item/${name}`} >Details</Link></Button>
                  <Button className={styles.buyButton} variant="primary" onClick={()=>{setCartItems([...cartItems,{img,id,item:name,price}]);setTotal(total + (price / 100));setPurchase({
                        order:false,
                        submit:false,
                    })}}>Buy now</Button>
                </ButtonToolbar>
              </Card.Body>
              </Card>
              </>)
          })
      }
      {searchResults.length === 0 && <p>Sorry , This Item Is Not Available!</p>}
    </div>
  )
}


export default Goods