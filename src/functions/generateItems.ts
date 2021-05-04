import { generateRandomID as ID } from './generateID'

export const generateItems = (numberToGen: number) => {
    const list = [];
    for (let i = 0; i < numberToGen; i++) {
        list.push({
            title: "task#" + i,
            id: ID()
        })
    }

    return list;
}