import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoriesState, searchState } from '../state/atoms';
import Category from './Category';
import DashboardBar from './DashboardBar';

const Dashboard = () => {
  const categories = useRecoilValue(categoriesState);
  const searchTerm = useRecoilValue(searchState).toLowerCase();
  const setCategories = useSetRecoilState(categoriesState);

  const addWidget = (categoryId, widgetName, widgetText) => {
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
  };

  return (
      <div className="p-6 bg-slate-100 min-h-screen">
        <DashboardBar addWidget={addWidget} />
        <div className="max-w-7xl mx-auto">
          {categories.map((category) => (
            <Category
              key={category.id}
              category={{
                ...category,
                widgets: category.widgets.filter((widget) =>
                  widget.name.toLowerCase().includes(searchTerm)
                ),
              }}/>
            ))}
        </div>
    </div>
  );
};

export default Dashboard;
