export type ListItemType = {
    title: string,
    id: string
}

export type ListOfItems = {
    ItemsArray: ListItemType[],
}

export type ArrayOfListItem = ListItemType[]

export interface SortableItem extends ListItemType {
    index: number
}

export type ContextHandlers = {
    addHandler: (title: string) => void
    deleteHandler: (id: string) => void
    editHandler: (id: string, title: string) => void
}
