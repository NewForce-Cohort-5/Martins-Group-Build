const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        length: 4,
        locationHarvested: "creek out back",
        typeOfFish: "Beta"

    },
    {
        name: "Poppy",
        food: "seeds",
        length: 3,
        locationHarvested: "Ohio River",
        typeOfFish: "Sun Fish"

    },
    {
        name: "Sam",
        food: "other fish",
        length: 7,
        locationHarvested: "South of France",
        typeOfFish: "Clown"

    },
    {
        name: "Marney",
        food: "Jelly Fish",
        length: 9,
        locationHarvested: "Atlantic",
        typeOfFish: "Big Fish"

    },
    {
        name: "Bruce",
        food: "Anything it wants ",
        length: 120,
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark"

    },
    {
        name: "Nancy",
        food: "Anything it wants ",
        length: 2,
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Jelly"

    },
    {
        name: "Duke",
        food: "Anything it wants ",
        length: 4,
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Koi"

    },
    {
        name: "Samson",
        food: "Anything it wants ",
        length: 7,
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Tuna"

    }

]

// This is new code. Add this.
export const useFish = () => {
    return fishCollection.slice()
}