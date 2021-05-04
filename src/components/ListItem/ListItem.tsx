import { FC, useContext, useState } from 'react'
import { SortableItem } from '../../types/types'
import { Draggable } from 'react-beautiful-dnd'
import styles from './ListItem.module.css'
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper'
import { HandlersContext } from '../../context/context';

export const ListItem: FC<SortableItem> = ({ title, id, index }) => {

    const [titleToggle, setToggle] = useState(true);

    const { deleteHandle, editHandle } = useContext(HandlersContext);

    const onDblClickHandler = () => {
        setToggle(!titleToggle);
    }

    const onChangeInput = (event: any) => {
        editHandle(event.target.value, id);
    }

    const deleteButtonHandler = () => {
        deleteHandle(id);
    }

    const keyPressHandler = (event: any) => {
        if (event.key === 'Enter')
            setToggle(!titleToggle);
    }

    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided) => (
                <Paper elevation={2}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    className={styles.container}
                    onDoubleClick={onDblClickHandler}>
                    {titleToggle ?
                        <p className={styles.title}>{title}</p> :
                        <Input placeholder={title}
                            className={styles.input}
                            onChange={onChangeInput}
                            onKeyPress={keyPressHandler}
                            autoFocus={true} />
                    }

                    <Button
                        variant="contained"
                        color="secondary"
                        size="medium"
                        startIcon={<DeleteIcon />}
                        onClick={deleteButtonHandler}>
                        Delete
                    </Button>
                </Paper>
            )}
        </Draggable>
    )
}