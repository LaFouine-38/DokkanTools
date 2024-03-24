const express = require('express');
const { executeSelect } = require('../../database/database');
const router = express.Router();
const { getTypeTableName, getItemTableFromType } = require('./utils/getItemTableFromType');
const {itemTypeCorrespondances} = require('./utils/itemTypeCorrespondances');


router.get(`/mission-rewards/limited-missions-categories`, async (req, res) => {
    let data = req.body;

    let sql = `
    SELECT
    mission_categories.id,
    mission_categories.type,
    mission_categories.name,
    mission_categories.image_path,
    MAX(missions.end_at) AS end_at,
    missions.start_at,
    CASE
        WHEN MAX(missions.end_at) > datetime('now') THEN 1
        ELSE 0
    END AS current,
    JSON_GROUP_ARRAY(
        JSON_OBJECT(
            'raw_reward_type', reward_type,
            'reward_type', reward_type,
            'total_quantity', total_quantity,
            'total_missions', total_missions,
            'reward_item_id', reward_item_id
        )
    ) AS category_rewards
FROM
    mission_categories
JOIN
    missions ON mission_categories.id = missions.mission_category_id
JOIN (
    SELECT
        mission_id,
        item_id AS reward_item_id,
        item_type AS reward_type,
        SUM(quantity) AS total_quantity,
        COUNT(DISTINCT mission_id) AS total_missions
    FROM
        mission_rewards
	JOIN missions ON mission_rewards.mission_id = missions.id
	JOIN mission_categories ON missions.mission_category_id = mission_categories.id
    GROUP BY
        item_type, mission_category_id, item_id
) AS subquery ON missions.id = subquery.mission_id
WHERE
    mission_categories.type = 'MissionCategory::ExtraMissionCategory'
GROUP BY
    mission_categories.id

    `

    const result = (await executeSelect(`${sql}`)).map(category => ({
        ...category,
        category_rewards: JSON.parse(category.category_rewards)
    })).map(category => ({
        ...category,
        current: category.current === 1,
        category_rewards: category.category_rewards.map(reward => ({
            ...reward,
            reward_type: itemTypeCorrespondances[reward.reward_type] || reward.reward_type
        }))
    }))
    res.status(200).json(result, null, 2);
})


/**
 * route pour avoir tous les types d'objets dfférents (mission.item_type) pour les missions limitées
 */
router.get(`/mission-rewards/reward-types/limited-missions`, async (req, res) => {
    let data = req.body;


    let sql = `
    SELECT DISTINCT
    mission_rewards.item_type AS raw_reward_type,
    mission_rewards.item_type AS reward_type
    FROM mission_rewards
    JOIN missions ON mission_rewards.mission_id = missions.id
    JOIN mission_categories ON missions.mission_category_id = mission_categories.id
    WHERE mission_categories.type = 'MissionCategory::ExtraMissionCategory'
`
    const result = (await executeSelect(`${sql}`)).map(reward => ({
        ...reward,
        reward_type: itemTypeCorrespondances[reward.raw_reward_type] || reward.raw_reward_type
    }));
    res.status(200).json(result, null, 2);
});

module.exports = router;