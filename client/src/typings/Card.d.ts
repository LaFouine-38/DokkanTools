export interface SellableCard extends Card {
    value: number
}

export interface Card {
    id: string | number
    type: number
    rarity: keyof typeof rarityResolver
}

export const rarityResolver: Record<number, string> = {
    0: "n",
    1: "r",
    2: "sr",
    3: "ssr",
    4: "ur",
    5: "lr"
}