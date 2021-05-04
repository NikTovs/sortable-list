import { PagesController } from './components/PagesController/PagesController'
import { initializeList } from './functions/initializeList'
import { ListItemType } from './types/types'
import Container from '@material-ui/core/Container';
import styles from './App.module.css'
import { FC, useState, useEffect } from 'react';
import { addItem } from './functions/addItem'
import { editItem } from './functions/editItem'
import { HandlersContext } from './context/context'
import { updateLocalStorage } from './LocalStorageHandler/Api'

const App: FC = () => {

  const [list, setList] = useState<ListItemType[]>(initializeList());

  useEffect(() => {
    updateLocalStorage(list);
    console.log('List is', list);
  }, [list])

  const addNewItemHandler = () => {
    const res = window.prompt("Write the title!\n (20 letters max)");
    if (!res)
      return;
    setList(addItem(list, res));
  }

  const deleteItemHandler = (id: string) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList);
  }

  const editItemHandler = (title: string, id: string) => {
    setList(editItem(list, title, id));
  }

  const changeListHandler = (from: number, num: number, array: []) => {
    const tmpList = [...list];
    tmpList.splice(from, num, ...array);
    setList(tmpList);
  }

  const handlersObject = {
    addHandle: addNewItemHandler,
    deleteHandle: deleteItemHandler,
    editHandle: editItemHandler,
    changeListHandle: changeListHandler
  }

  return (
    <HandlersContext.Provider value={handlersObject}>
      <div className={styles.App}>
        <Container className={styles.container}>
          <h1 className={styles.title}>Sortable List</h1>
          <PagesController itemsArray={list} />
        </Container>
      </div>
    </HandlersContext.Provider>
  );

}

export default App;
