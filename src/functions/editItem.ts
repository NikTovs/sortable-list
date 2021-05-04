import { ListItemType } from '../types/types'

export const editItem = (list: Array<ListItemType>, title: string, id: string) => {
    const tmpList = [...list];
    tmpList.forEach(item => {
        if (item.id === id)
            item.title = title
    })
    return tmpList;
}