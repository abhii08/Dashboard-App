import React from 'react';
import { useSetRecoilState } from 'recoil';
import { categoriesState } from '../state/atoms';
import { AiOutlineClose } from 'react-icons/ai';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';

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

  const getImageForWidget = (widgetName) => {
    switch (widgetName) {
      case 'Cloud Accounts':
        return img1;
      case 'Cloud Account Risk Assessment':
        return img2;
        case 'Top 5 Namespace Specific Alerts':
        return img3;
        case 'Workload Alerts':
        return img3;
        case 'Image Risk Assessment':
        return img4;
        case 'Image Security issues':
        return img5;
      default:
        return null;
    }
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
      <img src={getImageForWidget(widget.name)} alt={widget.name} className="my-2 w-64 h-48" />
      
    </div>
  );
};

export default Widget;
