import React from 'react'
import imageFiller from '../../assets/image.jpg'
import Chips from '../../ui/Chips';
import classes from './ListItem.module.css'
import Stars from '../../ui/Stars';
import { faPhone,faArrowRight,faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './ListItem.css';
const List = (props) => {
  const item=props.item;
  const chips=item.cuisine?.map((item,index)=>{
    return (
      <Chips cuisine={item.name} key={index}/>
    )
  });
  const splitPrice=item.price?.split('-');
  const city=item.address_obj?.city?`${item.address_obj.city},`:'';
  return (
    <div className={classes.listItem}>
  <div className='card' style={{ border: "none" }}>
    <div className={classes.like}>
  <FontAwesomeIcon className={classes.heart} icon={faHeart} style={{color:"black"}} />
    </div>
  <div className={classes.imagearrows} style={{position:"absolute"}}> 
  <FontAwesomeIcon className={classes.icons} icon={faArrowLeft}  style={{color:"white"}}/>
  <FontAwesomeIcon className={classes.icons} icon={faArrowRight}  style={{color:"white"}}/>
  </div>
  <img src={item.photo ? item.photo.images.large.url : imageFiller} className="card-img" alt="Place_image" />

  <div className='card-body d-flex flex-column align-items-start py-0' >
    <div className={classes.nameNRating}>
      <div className='card-title' style={{lineHeight:'120%'}}>{props.index + 1 + '.'} {item.name}</div>
      <div className={classes.rating}>
        {item.rating && <Stars reviews={item.rating}></Stars>}
        {item.num_reviews && item.num_reviews!=='0' && <span className={classes.reviews}>{item.num_reviews}</span>}
      </div>
    </div>
      {item.bearing && <span  style={{fontSize:"smaller", color:"#117d52",fontWeight:"bold"}}>{item.bearing.toUpperCase()} facing</span>}<br/>
    <div className='card-text'>
      {chips} 
    </div> 
    {item.address_obj? <div className={classes.address}>{city} {item.address_obj.country}</div>:item.location_string?<div className={classes.address}>{item.location_string}</div>:''}
    {splitPrice && <span className={classes.price}>Pricing from {splitPrice[0]} to {splitPrice[1]}</span>}
    {item.phone && <span className={classes.phone}><FontAwesomeIcon icon={faPhone} style={{color: "#117d52",}} />  {item.phone}</span>}
  </div>
</div>


    </div>
  )
}

export default List