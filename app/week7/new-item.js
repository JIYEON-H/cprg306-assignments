"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [created, setCreated] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const resetForm = () => {
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const randomId = () => {
    const randomNum = Math.floor(Math.random() * 1000000);
    return randomNum;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEvent = {
      id: randomId(),
      name,
      quantity,
      category,
    };

    console.log(newEvent);
    onAddItem(newEvent);
    setCreated((current) => !current);
    resetForm();
  };

  return (
    <main>
      <div className='flex p-2'>
        <form
          className='p-2 border rounded-lg  bg-orange-600'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-wrap mx-2'>
            <div className='w-full md:w-1/4 px-2'>
              <label htmlFor='username' className='block text-white'>
                Name
              </label>
              <input
                id='username'
                className='block border rounded-lg mb-2 w-full'
                value={name}
                required
                placeholder='Type name'
                type='text'
                onChange={handleNameChange}
              />
            </div>
            <div className='w-full md:w-1/4 px-2'>
              <label htmlFor='quantity' className='block text-white'>
                Quantity
              </label>
              <input
                id='quantity'
                className='block border rounded-lg mb-2 w-full'
                value={quantity}
                required
                placeholder='Type the quantity'
                type='number'
                onChange={handleQuantityChange}
                min={1}
                max={99}
              />
            </div>
            <div className='w-full md:w-1/4 px-2'>
              <label htmlFor='category' className='block text-white'>
                Category
              </label>
              <select
                id='category'
                className='block border rounded-lg w-full mb-6'
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
            <div className='w-full md:w-1/4 px-2 flex justify-center'>
              <button
                type='submit'
                className='block border rounded-lg my-4 bg-orange-500 hover:bg-orange-400 text-white font-bold py-1 px-3 '
              >
                Add Item
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
