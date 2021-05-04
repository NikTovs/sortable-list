import { FC } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { ListItem } from '../ListItem/ListItem'
import { ListItemType } from '../../types/types'

type Props ={
    itemsToShow: ListItemType[]
}


export const List: FC<Props> = ({ itemsToShow }) => {

    return (
        <Droppable droppableId='main-list'>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                    {itemsToShow.map(({ title, id }, index) =>
                        <ListItem
                            title={title}
                            id={id}
                            index={index}
                            key={id}
                        />
                    )}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}