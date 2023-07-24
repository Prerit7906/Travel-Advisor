import React from 'react'
import classes from './LocationList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from './ListItem'
import DistanceFilter from './DistanceFilter'
import loader from '../../assets/Spinner-2.gif'
import { cartActions } from '../../store';
const LocationList = (props) => {
  const items=useSelector(state=>state.cart.items);
  const number=useSelector(state=>state.cart.number);
  const distance=useSelector(state=>state.cart.distance);
  const dispatch=useDispatch();
  const filteredItems=items.filter((item)=>item.distance<=distance);
  dispatch(cartActions.changeNumber(filteredItems.length));
  const listItem=filteredItems.map((item,index)=>{
    return (
      <ListItem 
      key={item.location_id}
      index={index}
      item={item}
      />
       
    );
  })
  const place=number==='1'?'place':'places';
  return (
    <div className={classes.listouter}>
      <DistanceFilter/>
      <p className='text-muted' style={{margin:"0",padding:"0", fontSize:"smaller" }}>{number} {place} sorted by traveler favorites <FontAwesomeIcon className={classes.infoIcon} icon={faCircleInfo} style={{color: "black",height:"0.8rem"}} /></p>
      <div className={classes.list}>
      {props.isLoading && <img className={classes.loader} src={loader} alt='Loader' />}
     {!props.isLoading && listItem}
      </div>
    </div>
    
  )
}

export default LocationList