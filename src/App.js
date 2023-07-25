import { Fragment, useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import styles from './App.module.css'
import MainHeader from './components/Header/MainHeader';
import LocationList from './components/LocationList/LocationList';
import Map from './components/GoogleMap/Map';
import { fetchDataByBound } from './api';
import { cartActions } from './store/index';

function App() {
  const type=useSelector(state=>state.cart.type)
  const [coordinates,setCoordinates]=useState({});
  const [bound,setBound]=useState({});
  const [isLoading,setIsLoading]=useState(false);
  const dispatch=useDispatch();
  useEffect(()=>{
    //Getting the the current location when the page reloads
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude,lng:longitude});
    });
  },[]);
  useEffect(()=>{
    //calling the data from the api and handling errors
    setIsLoading(true);
    if(bound.ne && bound.sw){
    fetchDataByBound(type,bound.ne,bound.sw).then((data)=>{
      const filteredItems=data.filter(item=>(item.rating>0 && item.name));
      dispatch(cartActions.replaceCart({items:filteredItems}));
      setIsLoading(false);
    });
  }
    },[bound,dispatch,type]);
  
  return (
    <Fragment>
      <MainHeader  setCoordinates={setCoordinates}/>
      <div className={styles.main}>
        <LocationList isLoading={isLoading}/>
        <Map 
        coordinates={coordinates}
        setBound={setBound}
        setCoordinates={setCoordinates}
        />
      </div>
    </Fragment>
  );
}

export default App;
