import NewItem from './components/NewItem';
import Item from './components/item';
import ItemList from './components/ItemList';
import { useState } from 'react';



    function App() {
        const [DUMMY_DATA , setDUMMY_DATA] = useState([

          ])

        const SaveInnerDataHandler = (e) => {
            setDUMMY_DATA([...DUMMY_DATA , e])
            console.log(e)
        }

        return(
            <div >
                <ItemList items={DUMMY_DATA}></ItemList>
                <NewItem onSaveInnerData={SaveInnerDataHandler}></NewItem>
            </div>
        )
    }

export default App;
