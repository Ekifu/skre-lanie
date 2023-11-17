
import { useState } from "react";
function NewItem(props){
    const [Item, NewItem] = useState({
        title: '',
        amount: ''
    })
    const change1 = (e) =>{
        NewItem((prevState) =>
        {return{
            ...prevState, title: e.target.value
        }})
    }
    const change2 = (e) =>{
        NewItem((prevState) =>
        {return{
            ...prevState, amount: e.target.value
        }})
    }
    const Create = () =>{
        props.onSaveInnerData(Item)
    }
    return(
        <div >
            Nazwa<input required onChange={change1} placeholder="Wpisz nazwe" ></input>
            <br></br>
            Ilość<input required onChange={change2}  placeholder="Wpisz Ilosc" ></input>
            <br></br>
            <button onClick={Create} >Dodaj</button>

        </div>

    );
}
export default NewItem;