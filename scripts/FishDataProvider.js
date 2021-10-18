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
        length: 5,
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Tuna"

    }

]

// This is new code. Add this.
export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    // const holyFish = []

    // for (let singleFishObject of fishCollection) {
    //     if(singleFishObject.length % 3 === 0){
    //     holyFish.push(singleFishObject)
    //     }
    // }

    const holyFish = fishCollection.filter(singleFishObject => singleFishObject.length % 3 === 0)
    
    console.log(holyFish)
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish

    const soldiers = []
    for (let singleFishObject of fishCollection) {
        if(singleFishObject.length % 5 === 0 && singleFishObject.length % 3 !== 0){
        soldiers.push(singleFishObject)
        }
    }
    console.log(soldiers)
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5

    const regularFish = []

    for (let singleFishObject of fishCollection) {
        if(singleFishObject.length % 5 !== 0 && singleFishObject.length % 3 !== 0){
        regularFish.push(singleFishObject)
        }
    }
    console.log(regularFish)
    return regularFish
}



