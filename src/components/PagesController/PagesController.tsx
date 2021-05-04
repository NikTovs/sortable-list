import { FC, useState, useEffect } from 'react'
import { ListItemType } from '../../types/types'
import { PagesControllerRender } from './PagesControllerRender'
import { IndexContext } from '../../context/context';
import { getMinMax } from '../../functions/minMaxIndex'

type Props = {
    itemsArray: ListItemType[]
}
const ITEMS_ON_PAGE = 10;

export const PagesController: FC<Props> = ({ itemsArray }) => {

    const [page, setPage] = useState(1);
    const [minIndex, setMinIndex] = useState(0);
    const [itemsToShow, setShowItems] = useState<ListItemType[]>(itemsArray.slice(0, ITEMS_ON_PAGE));

    const onChangeHandler = (e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }
    useEffect(() => {
        setShowItems(currentItemsShow());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, itemsArray])

    const currentItemsShow = (numberItemsToShow: number = ITEMS_ON_PAGE) => {
        const tmpArr = [...itemsArray];
        const { maxIndex, minIndex } = getMinMax(page, numberItemsToShow);
        setMinIndex(minIndex);
        const res = tmpArr.slice(minIndex, maxIndex);
        return res;
    }

    const pagesNumber = () => {
        let numberOfPages = Math.floor(itemsArray.length / ITEMS_ON_PAGE);
        if (itemsArray.length % ITEMS_ON_PAGE !== 0)
            numberOfPages++;
        return numberOfPages;
    }

    return (
        <>
            <IndexContext.Provider value={minIndex}>
                <PagesControllerRender
                    onChangeHandler={onChangeHandler}
                    pagesNumber={pagesNumber}
                    itemsToShow={itemsToShow} />
            </IndexContext.Provider>
        </>
    )
}