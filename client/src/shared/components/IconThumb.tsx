import React, { useEffect, useRef } from 'react';
import makeStyles from '@mui/styles/makeStyles';


const useStyles = makeStyles({
    "IconThumb": {
        // cursor: "pointer",
        margin: /*"0px auto 4rem"*/ ({ margin }: { margin: string | number | undefined }) => margin,
        minHeight: "94px",
        minWidth: "94px",
        height: "94px",
        width: "94px",
    },
});


interface IconThumbProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    margin?: string | number | undefined,
}

/**
 * pareil à CharacterThumb, avec des propriétés en moins, pour mettre un icone
 * Supporte l'anim
 *
 * @export
 * @param {CardThumbProps} props
 * @return {JSX.Element}
 */
export default function IconThumb({margin, ...props}: IconThumbProps): JSX.Element {
    const classes = useStyles({ margin: margin });

    return (
        <img className={classes.IconThumb} alt={props.alt ?? ""} {...props}/>
    )
}
