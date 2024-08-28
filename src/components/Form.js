import { useEffect, useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  
  const [items ,setItem]=useState(()=>{
    const savedItems= localStorage.getItem('items')
    return savedItems? JSON.parse(savedItems):[];
  });

  useEffect(()=>{
   localStorage.setItem('description',JSON.stringify(items))
  },[items]);

  function handleAdd(e) {
    e.preventDefault();
    //if description is blank then return blank
    if (!description) return;
    //creating the object of item
    const newItems = { description, quantity, packed: false, id: Date.now() };
    console.log(newItems);

    // Add the new item to the items array 
    setItem((prevItems) => [...prevItems, newItems]);

    //handleItem(newItems);
    onAddItems(newItems);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="form" action="" method="">
      <h3>Highlighted or special task 🚀</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option> */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button value="submit" onClick={handleAdd}>
        Add
      </button>
    </form>
  );
}
