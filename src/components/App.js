import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./Packinglist";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  const [items, setItem] = useState([]);
  function handleAddItems(item) {
    setItem((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItem((items) => items.filter((items) => items.id !== id));
  }
  function handleToggleItem(id) {
    setItem((item) =>
      item.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you  sure you want to Delete all the items ?"
    );
    if (confirmed) setItem([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItem={handleClearList}
      />
      <Footer items={items} />
    </div>
  );
}
