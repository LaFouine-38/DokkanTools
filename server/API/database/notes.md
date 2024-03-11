exemple id=223: event de kamesennin (liens/statues)

sugoroku (peut d'interpréter ~jeu de plateau en jap dans le contexte de dokkan, source chatgpt) = la carte des niveaux

eventkagi = porte des souvenirs (?)

rm = bataille royale

# area_tabs

> onglets d'events (porte des souvenirs aussi ("limité"))

# mission_boards

> quotidien/régulières/limitées/kaio shin/porte des souvenirs

# mission_board_campaigns

> probablement le truc de bienvenue pour farm goku LR END F2P au début du jeu

# mission_categories

> Où sont rangées les missions
> ça semble être les events (missions d'un event, d'une campagne, polunga X ème edition...)

-   <details>
    <summary><strong><span id="mission_categories.id">id</span></strong>: de la catégorie</summary>

    -   pour les events: `id de l'event`
    -   pour les catégories de missions

        -   Quotidiennes
        -   <details>
            <summary>Régulières</summary>

            > [type](#mission_categories.type) = MissionCategory::NormalMissionCategory

            -   Régulières Missions
            -   Missions Tout-Puissant
            -   Missions Maître Kaïo
            </details>

        -   Missions de Quêtes: épreuve de kaio shin
        -   Limitées

  </details>

-   **<span id="mission_categories.type">type</span>**: type de la catégorie

-   **<span id="mission_categories.type">name</span>**: nom de la catégorie

# mission_category_rewards

> Probablement les items affichés sur les bannières d'events/campagnes dans la page de mission
> à cause du fait qu'il y a 4 items max (comme sur les bannières, dans un event tu gagnes plus que 4 trucs différents)

-   **<span id="mission_category_rewards.id">id</span>**: ?
-   **<span id="mission_category_rewards.mission_category_id">mission_category_id</span>**: id de la categorie ([mission_categories](#mission_categories).[id](#mission_categories.id))
-   <details>
    <summary><strong>item1</strong></summary>

    -   **<span id="mission_category_rewards.item1_id">item1_id</span>**: id de l'item 1
    -   **<span id="mission_category_rewards.item1_type">item1_type</span>**: type de l'item 1
    </details>

-   <details>
    <summary><strong>item2</strong></summary>

    -   **<span id="mission_category_rewards.item2_id">item2_id</span>**: id de l'item 2
    -   **<span id="mission_category_rewards.item2_type">item2_type</span>**: type de l'item 2
    </details>

-   <details>
    <summary><strong>item3</strong></summary>

    -   **<span id="mission_category_rewards.item3_id">item3_id</span>**: id de l'item 3
    -   **<span id="mission_category_rewards.item3_type">item3_type</span>**: type de l'item 3
    </details>

-   <details>
    <summary><strong>item4</strong></summary>

    -   **<span id="mission_category_rewards.item4_id">item4_id</span>**: id de l'item 4
    -   **<span id="mission_category_rewards.item4_type">item4_type</span>**: type de l'item 4
    </details>

# mission_rewards

> Chaque récompense de mission (une mission avec plusieurs récompenses aura plusieurs entrées avec le même mission_id)

-   **<span id="mission_rewards.id">id</span>**: id de la récompense
-   **<span id="mission_rewards.mission_id">mission_id</span>**: id de la mission ([missions](#missions).[id](#missions.id))
-   **<span id="mission_rewards.item_id">item_id</span>**: id de l'item en récompense
-   **<span id="mission_rewards.item_type">item_type</span>**: type de l'item
-   **<span id="mission_rewards.quantity">quantity</span>**: quantité de l'item donné en récompense
-   **<span id="mission_rewards.card_exp_init">card_exp_init</span>**: ?

# missions

> [!CAUTION]
> area_id n'est pas forcément égal a mission_category_id
> pour vraiment trouver le niveau, utiliser area_id

-   **<span id="missions.id">id</span>**: id de la mission
-   **<span id="missions.area_id">area_id</span>**: id du niveau
-   **<span id="missions.mission_category_id">mission_category_id</span>**: id de la catégorie ([mission_categories](#mission_categories).[id](#mission_categories.id))
-   **<span id="missions.type">type</span>**: type de missions
-   **<span id="missions.name">name</span>**: nom de la mission

# eventkagi_items

> liste des clés

# areas

> zones de quêtes/"zones" d'event(tout ce qui contient des niveaux/qui n'est pas un niveau, ex: battle road)

-   **<span id="areas.id">id</span>**: id de la zone

# quests

> niveaux (une entrée/ligne = un niveau du jeu)

-   **<span id="quests.area_id">area_id</span>**: id de l'event du niveau/zone de quête ([areas](#areas).[id](#areas.id))

# cards

> cartes du jeu

-   **<span id="cards.id">id</span>**: id de la carte
-   <details>
    <summary><strong><span id="cards.element">element</span></strong>: type de la carte</summary>

    > [!NOTE]
    > le type suit ce format XX (Classe_numType_num) ex: INT = 2 / super INT = 12

    -   <details>
        <summary>BASE</summary>

        -   AGI: `00`
        -   TEC: `01`
        -   INT: `02`
        -   PUI: `03`
        -   END: `04`
        </details>

    -   <details>
        <summary>SUPER</summary>

        -   AGI: `10`
        -   TEC: `11`
        -   INT: `12`
        -   PUI: `13`
        -   END: `14`
        </details>

    -   <details>
        <summary>EXTREME</summary>

        -   AGI: `20`
        -   TEC: `21`
        -   INT: `22`
        -   PUI: `23`
        -   END: `24`
        </details>

    </details>
-   <details>
    <summary><strong><span id="cards.rarity">rarity</span></strong>: rareté de la carte</summary>

    -   N: `0`
    -   R: `1`
    -   SR: `2`
    -   SSR: `3`
    -   UR: `4`
    -   LR: `5`

    </details>
