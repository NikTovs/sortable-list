import { generateItems } from './generateItems'
import { getItemFromLocalStorage, updateLocalStorage } from '../LocalStorageHandler/Api'

const NUMBER_OF_ITEMS_TO_GEN = 100;

export const initializeList = () => {   
    const listArray = getItemFromLocalStorage();
    if (listArray === null) {
        const newArray = generateItems(NUMBER_OF_ITEMS_TO_GEN);
        updateLocalStorage(newArray);
        return newArray;
    } 
    return listArray;
}