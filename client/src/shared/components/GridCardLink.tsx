import React from 'react'
import makeStyles from '@mui/styles/makeStyles'

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

interface GridButtonLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    index: string | number;
    // url: string;
    children: JSX.Element[];
}

export default function GridCardLink({ children, index, ...props }: GridButtonLinkProps): JSX.Element {

    let classes = useStyles()

    return (
        <a style={{ textDecoration: "none", color: 'white' }} className={classes.GridButtonLink} {...props}>
            {children}
        </a>
    );
}
