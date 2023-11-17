import Item from "./item";

const ItemList = (props) =>{
    return(
        <div>
            {props.items.map((item)=>(
                <Item
                key={item.id}
                title={item.title}
                amount={item.amount}
                />
            ))}
        </div>
    );
}

export default ItemList;