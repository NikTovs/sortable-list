import { ListItemType } from '../types/types'

const ITEM_ARRAY = 'ITEM_ARRAY_LIST';

export const updateLocalStorage =
    (array: ListItemType[], key: string = ITEM_ARRAY) => {
        window.localStorage.setItem(key, JSON.stringify(array));
    }

export const getItemFromLocalStorage = (key: string = ITEM_ARRAY) => {
    const storageArray: string | null = window.localStorage.getItem(key);
    if (storageArray !== null)
        return JSON.parse(storageArray)
    return null;
}