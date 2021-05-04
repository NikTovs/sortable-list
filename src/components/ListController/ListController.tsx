import { FC, useContext, useState, useEffect } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { List } from '../List/List'
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styles from './ListController.module.css'
import { ListItemType } from '../../types/types'
import { HandlersContext } from '../../context/context';
import { IndexContext } from '../../context/context';

type Props = {
    itemsToShow: ListItemType[]
}

export const ListController: FC<Props> = ({ itemsToShow }) => {
    const [localList, setList] = useState(itemsToShow);
    const { addHandle, changeListHandle } = useContext(HandlersContext);
    const minIndex = useContext(IndexContext);

    useEffect(() => {
        setList(itemsToShow);
    }, [itemsToShow])

    const OnDragEndHandler = (result: any) => {
        if (!result.destination)
            return

        const tmpList = [...localList]
        const [reorderedItem] = tmpList.splice(result.source.index, 1);
        tmpList.splice(result.destination.index, 0, reorderedItem);

        setList(tmpList);
        changeListHandle(minIndex, tmpList.length, tmpList);
    }

    return (
        <Container maxWidth="sm">
            <DragDropContext onDragEnd={OnDragEndHandler}>
                <List
                    itemsToShow={localList}
                />
            </DragDropContext>
            <Button color='primary' className={styles.addButton} onClick={addHandle}>
                Add new item
            </Button>
        </Container>
    )
}