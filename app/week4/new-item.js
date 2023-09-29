"use client";

import { useState } from "react";

export default function NewEvent() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [created, setCreated] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    let newValue = parseInt(event.target.value);

    if (isNaN(newValue)) {
      alert("Quantity must be a number and must be between 1 and 99");
      setQuantity("");
    } else if (newValue < 1 || newValue > 99) {
      alert("Quantity must be between 1 and 99");
      setQuantity("");
    } else if (0 < newValue || newValue < 100) {
      setQuantity(newValue);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const resetForm = () => {
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (quantity != "") {
      const newEvent = {
        name,
        quantity,
        category,
      };

      console.log(newEvent);
      setCreated((current) => !current);
      alert(
        `Added item: ${newEvent.name}, quantity: ${newEvent.quantity}, category: ${newEvent.category}`
      );
      resetForm();
    } else {
      alert("Quantity is required");
    }
  };

  return (
    <main>
      <div className='flex items-center justify-center mt-14'>
        <form className='p-12 border rounded-lg mx-auto bg-orange-600'>
          <div>
            <label htmlFor='username' className='block text-white'>
              Name
            </label>
            <input
              id='username'
              className='block border rounded-lg mb-2 '
              value={name}
              required
              placeholder='Type name'
              type='text'
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor='quantity' className='block text-white'>
              Quantity
            </label>
            <input
              id='quantity'
              className='block border rounded-lg mb-2 w-56'
              value={quantity}
              required
              placeholder='Type the quantity'
              type='number'
              onChange={handleQuantityChange}
              min={1}
              max={99}
            />
          </div>
          <div>
            <label htmlFor='category' className='block text-white'>
              Category
            </label>
            <select
              id='category'
              className='block border rounded-lg w-56 mb-6'
              value={category}
              onChange={handleCategoryChange}
            >
              <option value='produce'>Produce</option>
              <option value='dairy'>Dairy</option>
              <option value='bakery'>Bakery</option>
              <option value='meat'>Meat</option>
              <option value='frozenFoods'>Frozen Foods</option>
              <option value='cannedGoods'>Canned Goods</option>
              <option value='dryGoods'>Dry Goods</option>
              <option value='beverages'>Beverages</option>
              <option value='snacks'>Snacks</option>
              <option value='household'>Household</option>
              <option value='other'>Other</option>
            </select>
          </div>
          <div>
            <button
              type='submit'
              className='block border rounded-lg mt-4 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 w-56'
              onClick={handleSubmit}
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
