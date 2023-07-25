import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { Autocomplete } from '@react-google-maps/api';
import classes from './MainHeader.module.css'
import './MainHeader.css'

const MainHeader = (props) => {
    const [place, setPlace] = useState(null);
    const dispatch = useDispatch();
    const [isHotel, setIsHotel] = useState(false);

    const searchFocusHandler = () => {
        const icon = document.getElementById('i');
        icon.style.display = 'block';
        
    };
    const searchBlurHandler = () => {
        const icon = document.getElementById('i');
        icon.style.display = 'none';
        
    };
    const filterChangeHandler = (e) => {
        if (e.target.value === 'hotels') {
            setIsHotel(true);
        }
        else {
            setIsHotel(false);
        }
        dispatch(cartActions.setType(e.target.value));
    };
    const placeChnageHandler = () => {
        if (place.getPlace()) {
            const lat = place.getPlace().geometry.location.lat();
            const lng = place.getPlace().geometry.location.lng();
            props.setCoordinates({ lat, lng });
        }
    }
    const [date,setDate]=useState('text')
    const [isVal,setIsVal]=useState(false);
    const datefocusHandler=()=>{
        setDate('date');
    }
    const dateBlurHandler=()=>{
        if(isVal!==true){
        setDate('text');
        }
    }
    const dateChangeHandler=(event)=>{
        if(event.target.value!==''){
            setDate('date');
            setIsVal(true);
        }
        else{
            setIsVal(false);
        }
    }
    return (

        <div className={`${classes.header} 'conatiner py-3'`}>
            <div className='row'>
                <div className='col-2 date'>
                    <div className={`${classes.box} ${classes.date}`}>
                        {isHotel && <input onChange={dateChangeHandler} onClick={datefocusHandler} onBlur={dateBlurHandler} type={date} placeholder='Enter date' />}
                        {isHotel && date==='text' && <FontAwesomeIcon className={classes.calenderIcon} icon={faCalendar} style={{color: "#373737",}} />}
                    </div>
                </div>
                <div className='col-7'>
                    <Autocomplete onLoad={(value) => { setPlace(value) }} onPlaceChanged={placeChnageHandler}>
                        <div className={classes.box}>
                            <FontAwesomeIcon id='i' className={classes.searchIcon} icon={faMagnifyingGlass} style={{ color: "#8d8d8d", display: "none" }} />
                            <input className={classes.search}
                                onMouseOver={searchFocusHandler}
                                onMouseOut={searchBlurHandler}
                                placeholder='Search here' type='search'></input>
                        </div>
                    </Autocomplete>
                </div>
                <div className="col-1">
                    <div className={`${classes.box} ${classes.filtertext} mx-0`}>
                        <p>Filter</p>
                    </div>
                </div>
                <div className='col-2 filter'>
                    <div className={classes.box}>
                        <select defaultValue='restaurants' className="form-select form-select-sm" onChange={filterChangeHandler} style={{ borderRadius: "20px", padding: "0.6rem" }} aria-label=".form-select-sm example">
                            <option value="restaurants"> Restaurants</option>
                            <option value="hotels"> Hotels</option>
                            <option value="attractions"> Attractions</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MainHeader