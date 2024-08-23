// src/components/Dashboard.jsx

import React from 'react';
import { useRecoilValue } from 'recoil';
import { categoriesState, searchState } from '../state/atoms';
import Category from './Category';

const Dashboard = () => {
  const categories = useRecoilValue(categoriesState);
  const searchTerm = useRecoilValue(searchState).toLowerCase();

  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between px-10 py-1 h-12">
        <div>
          <div className="font-bold">
            CNAPP Dashboard
          </div>
        </div>
        </div>
        <div>
          Add Widget+
        </div>
        <div>
          Refresh
        </div>
      <div className="max-w-7xl mx-auto">
        {categories.map((category) => (
          <Category
            key={category.id}
            category={{
              ...category,
              widgets: category.widgets.filter((widget) =>
                widget.name.toLowerCase().includes(searchTerm)
              ),
            }}
          />
        ))}
      </div>
      <div>

      </div>
    </div>
    </div>
    
  );
};

export default Dashboard;
