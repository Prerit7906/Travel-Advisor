import React from 'react'
import { useState } from 'react';
import classes from './Filter.module.css'
import { useDispatch} from 'react-redux';
import { cartActions } from '../../store';

const Filter = () => {
  const dispatch=useDispatch();
    const [distance, setDistance] = useState(5);
    const sliderChangeHandler=(event)=>{
      setDistance(event.target.value);
      dispatch(cartActions.changeDistance(event.target.value));
    }
  return (
    <div className={classes.slider}>
        <div className='container' style={{padding:"0"}}>
            <p className='text-muted'>Distance</p>
           <p className='text-muted'>{distance}KM</p>
        </div>
        <input type="range" min="1" max="5" step={1} value={distance}  onChange={sliderChangeHandler}/>
    </div> 
   
  )
}

export default Filter