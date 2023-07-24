import React from 'react'
import classes from './Stars.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfStroke ,faStar} from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

const Stars = (props) => {
    const fullStar=<FontAwesomeIcon className={classes.stars} icon={faStarSolid}  style={{color: "#117d52"}}/>;
  const halfStar=<FontAwesomeIcon className={classes.stars} icon={faStarHalfStroke} style={{color: "#117d52"}}/>
  const blankStar=<FontAwesomeIcon className={classes.stars} icon={faStar} style={{color: "#117d52"}}/>;
  const rating=+props.reviews;
  const ratingStar=Array.from({length:5},(_,index)=>{
    let halfrating=index+0.5;
    return(
        <span key={index}>
            {
                rating>=index+1?(fullStar):rating>=halfrating?(halfStar):(blankStar)
            }
        </span>
    );
  })
  return (
    <>{ratingStar}</>
  )
}

export default Stars