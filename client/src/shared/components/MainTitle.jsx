import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
const useStyles = makeStyles({
    "MainTitle": {
        color: "rgb(255, 255, 255)",
        fontSize: "1.2rem",
        fontWeight: "500",
        textAlign: "center",
        margin: "0px auto 2rem",
        textShadow: "rgb(0, 0, 0) -1px -1px 0px, rgb(0, 0, 0) 1px -1px 0px, rgb(0, 0, 0) -1px 1px 0px, rgb(0, 0, 0) 1px 1px 0px",
        textTransform: "uppercase",
        "@media (min-width: 600px)": {
            marginBottom: "3.5rem",
            fontSize: "1.8rem",
        }
    },


});
/**
 * Le conteneur de la box centrale
 *
 * @export
 * @param {*} { children }
 * @return {*} 
 */
export default function MainTitle({ children }) {

    const classes = useStyles()

    return (
        <div className={classes.MainTitle}>
            {children}
        </div>
    );
}
