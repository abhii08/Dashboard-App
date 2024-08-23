// src/components/AddWidget.jsx

import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { categoriesState } from '../state/atoms';
import { AiOutlinePlus } from 'react-icons/ai';

const AddWidget = ({ categoryId }) => {
  const setCategories = useSetRecoilState(categoriesState);
  const [isOpen, setIsOpen] = useState(false);
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const toggleForm = () => setIsOpen(!isOpen);

  const addWidget = (e) => {
    e.preventDefault();

    if (!widgetName.trim() || !widgetText.trim()) return;

    const newWidget = {
      id: `widget-${Date.now()}`,
      name: widgetName,
      text: widgetText,
    };

    setCategories((prevCategories) =>
      prevCategories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: [...category.widgets, newWidget],
          };
        }
        return category;
      })
    );

    setWidgetName('');
    setWidgetText('');
    setIsOpen(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
      {isOpen ? (
        <form onSubmit={addWidget} className="w-full">
          <div className="mb-2">
            <label className="block text-gray-700 mb-1">Widget Name</label>
            <input
              type="text"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1">Widget Text</label>
            <textarea
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={toggleForm}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={toggleForm}
          className="text-blue-500 hover:text-blue-600 flex items-center"
        >
          <AiOutlinePlus size={24} className="mr-2" />
          Add Widget
        </button>
      )}
    </div>
  );
};

export default AddWidget;
