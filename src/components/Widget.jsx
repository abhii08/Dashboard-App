import React from 'react';
import { useSetRecoilState } from 'recoil';
import { categoriesState } from '../state/atoms';
import { AiOutlineClose } from 'react-icons/ai';

const Widget = ({ widget, categoryId }) => {
  const setCategories = useSetRecoilState(categoriesState);

  const removeWidget = () => {
    setCategories((prevCategories) =>
      prevCategories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: category.widgets.filter((w) => w.id !== widget.id),
          };
        }
        return category;
      })
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow relative">
      <button
        onClick={removeWidget}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
      >
        <AiOutlineClose size={20} />
      </button>
      <h3 className="text-xl font-medium text-gray-800 mb-2">
        {widget.name}
      </h3>
      <p className="text-gray-600">{widget.text}</p>
    </div>
  );
};

export default Widget;
