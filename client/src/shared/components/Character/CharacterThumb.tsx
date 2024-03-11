import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Card } from 'typings/Card';

const useStyles = makeStyles({
    "CardThumb": {
        // cursor: "pointer",
        margin: /*"0px auto 4rem"*/ ({ margin }: { margin: string | number | undefined }) => margin,
        minHeight: "94px",
        minWidth: "94px",
        height: "94px",
        width: "94px",
    },
    "CardThumbLayout": {
        height: "100%",
        position: "relative",
        width: "100%"
    },
    "CharacterThumb": {
        position: "absolute",
        top: "43px",
        left: "50%",
        maxWidth: "115px",
        zIndex: 2,
        transform: "translate(-50%, -50%)"
    },
    "RarityIcon": {
        position: "absolute",
        zIndex: 2,
        bottom: "0px",
        left: "-12px",
        width: "60px"
    },
    "TypeIcon": {
        position: "absolute",
        zIndex: 2,
        top: "-10px",
        right: "-15px",
        width: "40px"
    },
    "CardId": {
        display: "inline-block",
        textAlign: "center",
        width: "100%",
        fontSize: "0.8rem",
        padding: "0.5rem 0px",
        color: "white"
    }
});

export interface CharacterThumbProps {
    cardData: Card,
    displayLayout?: boolean,
    displayId?: boolean,
    containerDivProps?: React.HTMLAttributes<HTMLDivElement>,
    margin?: string | number | undefined
}

export const rarityResolver: Record<number, string> = {
    0: "n",
    1: "r",
    2: "sr",
    3: "ssr",
    4: "ur",
    5: "lr"
}

/**
 * Icone de carte (sans id en bas)
 * Supporte l'anim
 *
 * @export
 * @param {CardThumbProps} props
 * @return {JSX.Element}
 */
export default function CharacterThumb({ cardData, displayLayout = true, displayId = false, margin, containerDivProps }: CharacterThumbProps): JSX.Element {
    const classes = useStyles({ margin: margin });
    const imagePath = `https://dbz-dokkanbattle.com/img/layout/character_thumb_bg/cha_base_${cardData.type.toString().padStart(2, "0")}_${cardData.rarity.toString().padStart(2, "0")}.png`;
    const characterThumbPath = `https://dbz-dokkanbattle.com/img/character/thumb/card_${cardData.id}_thumb.png`;
    const rarityIconPath = `https://dbz-dokkanbattle.com/img/layout/cha_rare_${rarityResolver[cardData.rarity]}.png`;
    const typeIconPath = `https://dbz-dokkanbattle.com/img/layout/cha_type_icon_${cardData.type}.png`;

    return (
        <div {...containerDivProps} className={classes.CardThumb} style={{
            backgroundImage: `url(${imagePath})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        }}>
            {cardData &&
                <div className={classes.CardThumbLayout}>
                    <img className={classes.CharacterThumb} src={characterThumbPath} alt="" />
                    {displayLayout &&
                        <>
                            <img className={classes.RarityIcon} src={rarityIconPath} alt="" />
                            <img className={classes.TypeIcon} src={typeIconPath} alt="" />
                        </>}
                </div>}
            {displayId && <span className={classes.CardId}>{cardData.id}</span>}
        </div>
    );
}
