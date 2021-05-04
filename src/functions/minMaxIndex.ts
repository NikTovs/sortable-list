
export const getMinMax = (page: number, itemsToShow: number) => {
    const maxIndex = page * itemsToShow;
    const minIndex = page === 1 ? 0 : maxIndex - itemsToShow;

    return {maxIndex, minIndex};
}