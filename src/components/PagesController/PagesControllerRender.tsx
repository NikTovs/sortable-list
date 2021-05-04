import { FC } from 'react';
import { ListItemType } from '../../types/types'
import { ListController } from '../ListController/ListController'
import { Pagination } from '@material-ui/lab';
import styles from './PagesController.module.css'

type Props = {
    itemsToShow: ListItemType[]
    onChangeHandler: (e: React.ChangeEvent<unknown>, value: number) => void
    pagesNumber: () => number
}

export const PagesControllerRender: FC<Props> = ({itemsToShow, onChangeHandler, pagesNumber}) => {
    return (
        <>
            <ListController itemsToShow={itemsToShow}/>
            <Pagination count={pagesNumber()}
                shape="rounded"
                className={styles.pagination}
                onChange={onChangeHandler} />
        </>
    )
}