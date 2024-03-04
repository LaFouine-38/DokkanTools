import React from 'react';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  "MainBoxContainer": {
    boxSizing: 'border-box',
    padding: '10px',
    minHeight: 'calc(-100px + 100vh)',
    width: '100%',
  }


});
/**
 * Le conteneur de la box centrale/de la flèche de retour en haut
 *
 * @export
 * @param {*} { children }
 * @return {*} 
 */
export default function MainBoxContainer({ children }) {

  const classes = useStyles()

  return (
    <div className={classes.MainBoxContainer}>
      {children}
    </div>
  );
}
