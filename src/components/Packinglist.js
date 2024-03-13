import { useState } from "react";
import Item from "./item";
// const initailItem = [
//   {
//     id: 1,
//     description: "Passport",
//     quantity: 2,
//     packed: false,
//   },
//   {
//     id: 2,
//     description: "Novel",
//     quantity: 1,
//     packed: true,
//   },
//   {
//     id: 3,
//     description: "Clothes",
//     quantity: 10,
//     packed: true,
//   },
// ];
//insted of using the initial items we will be using items now
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItem,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  //if item is sorted by input order then then will keep it same as original array and use that soretedItem.map instaed of items.map
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              key={item.id}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
        <div className="action">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">sort by input order</option>
            <option value="description">sort by description</option>
            <option value="packed">sort by packed status</option>
          </select>
          <button onClick={onClearItem}>Clear List</button>
        </div>
      </div>
    </>
  );
}
