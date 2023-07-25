import React from 'react'
import GoogleMapReact from 'google-map-react';
import classes from './Map.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
const Map = (props) => {
  const locations=useSelector(state=>state.cart.items);
  const mapChangeHandler=(event)=>{
    props.setCoordinates({lat:event.center.lat,lng:event.center.lng});
    props.setBound({ne:event.marginBounds.ne,sw:event.marginBounds.sw});
  };
  return (
    <div className={classes.map}>
    <GoogleMapReact
      bootstrapURLKeys={{key:'AIzaSyDccLXsKA6yrkSATYZf426v9218glcNiTw'}}
      defaultCenter={{lat:0,lng:0}}
      center={props.coordinates}
      defaultZoom={10}
      margin={[50,50,50,50]}
      options={''}
      onChange={mapChangeHandler}
      onChildClick={()=>{}}
    >
      {locations?.map((location,index)=>(
        <div lat={Number(location.latitude)} lng={Number(location.longitude)} key={`marker-${index}`}>
          <FontAwesomeIcon className={classes.locator} icon={faLocationDot} style={{color: "rgb(4, 76, 48)", height:"2.5rem"}} />
        </div>
      ) 
    )}
    </GoogleMapReact>
    </div>
  )
}

export default Map