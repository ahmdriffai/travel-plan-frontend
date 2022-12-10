import React from 'react';
import CategoryApi from '../data/category-api';

export default function Filter({ value, categoryChange }) {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    CategoryApi.getAllCategories().then((data) => {
      setCategories(data.data.categories);
    });
  });
  return (
    <div>
      <h2 className="font-bold text-lg mb-2">Filter</h2>
      <div className="w-40 min-h-8 border border-gray-300 rounded p-3">
        <h3 className="font-semibold">Kategori</h3>
        <ul>
          {
            categories.map((category) => (
              <li key={category.id} className="p-2">
                <input type="radio" name="category" id={category.id} value={category.name} checked={value === category.name} onChange={categoryChange} />
                <label htmlFor={category.id} className="ml-2 capitalize text-md font-light">{category.name}</label>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
