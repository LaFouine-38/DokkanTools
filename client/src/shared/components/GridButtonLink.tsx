import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { SellableItem } from 'typings/SellableItem'

const useStyles = makeStyles({
    "GridButtonLink": {
        backgroundColor: "rgb(29, 38, 47)",
        borderRadius: "3px",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        placeContent: "center",
        WebkitBoxPack: "center",
        cursor: "pointer",
        position: "relative",
        marginBottom: "2rem",
        textAlign: "center",
        height: "120px",
        boxSizing: "border-box",
        boxShadow: "rgb(54, 133, 181) 0px 3px 5px -2px",
        transition: "all 0.5s ease 0s",
        '&:hover': {
            backgroundColor: "rgb(8, 22, 33)"
        }
    },
    "GridButtonLinkText": {
        fontSize: "1rem",
        zIndex: 2
    }
})

interface GridButtonLinkProps extends JSX.Element {
    index: string | number,
    textName: string,
    path: string,
}

export default function GridButton({ index, textName, path, ...props }: GridButtonLinkProps): JSX.Element {

    let classes = useStyles()

    return (
        <a style={{ textDecoration: "none", color: 'white' }} className={classes.GridButtonLink} href={path}>
            <span className={classes.GridButtonLinkText}>{textName}</span>
        </a>
    );
}
