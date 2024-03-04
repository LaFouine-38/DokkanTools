import React from 'react';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  "MainBox": {
    padding: '2rem 0.8rem',
    boxSizing: 'border-box',
    margin: '0 auto 4rem',
    maxWidth: '96%',
    borderRadius: '10px',
    background: 'rgb(22, 27, 37)',
    boxShadow: '0px 3px 5px -2px rgb(54, 133, 181)',
    position: 'relative',
    '@media (min-width: 960px)': {
      padding: '2rem',
      maxWidth: '90%',
    },
    '@media (min-width: 1280px)': {
      maxWidth: '70%',
    },
    '@media (min-width: 1920px)': {
      maxWidth: '60%',
    }
  }


});
/**
 * La box centrale
 *
 * @export
 * @param {*} { children }
 * @return {*} 
 */
export default function MainBox({ children }) {

  const classes = useStyles()

  return (
    <div className={classes.MainBox}>
      {children}
    </div>
  );
}
