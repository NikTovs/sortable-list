import { ListItemType } from '../types/types'
import { generateRandomID as ID} from './generateID'

export const addItem = (list: Array<ListItemType>, title: string) => {
    if (title.length > 20) {
        title = title.substr(0, 20);
    }
    return [{title, id: ID()}, ...list];
}