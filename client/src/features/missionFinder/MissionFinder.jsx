import React, { useEffect, useState } from 'react';
import MainBox from '../../shared/components/MainBox.jsx';
import MainBoxContainer from '../../shared/components/MainBoxContainer.jsx';
import SelectInput from '../../shared/components/inputs/SelectInput.tsx';
import MainTitle from '../../shared/components/MainTitle.jsx';
import { Grid, MenuItem } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles';
import GridCardLink from '../../shared/components/GridCardLink.tsx';

const useStyles = makeStyles({
    "grid-container": {
        width: '100%',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem',
        boxSizing: 'borderBox',
    },
});

export default function MissionFinder() {
    const classes = useStyles();

    const [rewardTypes, setRewardTypes] = useState([]);
    const [selectedRewardType, setSelectedRewardType] = useState('all');
    const [allCategories, setAllCategories] = useState([])

    useEffect(() => {
        fetch('/api/missions/mission-rewards/reward-types/limited-missions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json()).then(res => setRewardTypes(["all", ...res]));
        fetch('/api/missions/mission-rewards/limited-missions-categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json()).then(res => setAllCategories(res));
    }, []);

    const categoriesWithTotal = (categories, allowedTypes) => {
        let currentFiltered = categories.filter(category => category.current)
        if (allowedTypes.includes("all")) {
            return currentFiltered;
        }
        return categories
            .map(category => {
                // Filtrer les récompenses de la catégorie par les types autorisés
                const filteredRewards = category.category_rewards.filter(reward => allowedTypes.includes(reward.raw_reward_type));

                // Calculer le total des récompenses et des missions correspondant aux types autorisés
                const totalQuantity = filteredRewards.reduce((acc, reward) => acc + reward.total_quantity, 0);
                const totalMissions = filteredRewards.reduce((acc, reward) => acc + reward.total_missions, 0);

                // Retourner la catégorie mise à jour avec les totaux calculés
                return {
                    ...category,
                    category_rewards: filteredRewards,
                    total_quantity: totalQuantity,
                    total_missions: totalMissions
                };
            })
            .filter(category => category.category_rewards.length > 0); // Filtrer les catégories sans récompenses
    };

    const handleChange = async (event) => {
        setSelectedRewardType(event.target.value);
    };

    return (
        <MainBoxContainer>
            <MainBox>
                <MainTitle>TROUVER DES MISSIONS</MainTitle>
                <div className={classes["grid-container"]}>
                    <Grid container justifyContent={{ xs: 'center' }} spacing={{ xs: 4 }}>
                        <Grid item xs={11} sm={5} md={3}>
                            <SelectInput
                                label="Type de récompense"
                                defaultValue="all"
                                value={selectedRewardType}
                                onChange={handleChange}
                            >
                                <MenuItem key={"all"} value="all">Tous</MenuItem>
                                {rewardTypes?.slice(1).map(type => (
                                    <MenuItem key={type.raw_reward_type} value={type.raw_reward_type}>
                                        {type.reward_type}
                                    </MenuItem>
                                ))}
                            </SelectInput>
                        </Grid>
                    </Grid>
                </div>
                <Grid container alignItems={{ xs: 'center' }} justifyContent={{ xs: 'center' }} spacing={{ xs: 4 }}>
                    {categoriesWithTotal(allCategories, [selectedRewardType]).map((category, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <GridCardLink href={`https://dbz-dokkanbattle.com/limited-missions/${category.id}`} target="_BLANK">
                                <>
                                <img src={`https://dbz-dokkanbattle.com/img/missions/mission_banner_event_${category.id}.png`} alt={`${category.id}`}></img>
                                {category.total_missions && category.total_quantity &&    
                                    <div style={{marginTop: "10px", display: 'flex', justifyContent: 'space-evenly'}}>
                                        <span>Missions: {category.total_missions}</span>
                                        <span>Quantité: {category.total_quantity}</span>
                                    </div>
                                }
                                </>
                            </GridCardLink>
                        </Grid>
                    ))}
                </Grid>
            </MainBox>
        </MainBoxContainer>
    );
}
