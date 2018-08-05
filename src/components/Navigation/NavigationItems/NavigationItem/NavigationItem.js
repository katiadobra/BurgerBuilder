import React from 'react';
import classes from './NavigationItem.css';

const NavigationItems = props =>
  <li className={classes.NavigationItem}>
    <a href={props.link} className={props.active ? classes.active : null}>
      {props.children}
    </a>
  </li>;

export default NavigationItems;
