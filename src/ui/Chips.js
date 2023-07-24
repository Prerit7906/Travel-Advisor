import React from 'react'
import classes from './Chips.module.css'
const Chips = (props) => {
  return (
    <span className={classes.chips}>{props.cuisine} &bull; </span>
  )
}

export default Chips