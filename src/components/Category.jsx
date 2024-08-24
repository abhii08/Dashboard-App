import React from 'react';
import Widget from './Widget';
import AddWidget from './AddWidget';

const Category = ({ category }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {category.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
        <AddWidget categoryId={category.id} />
      </div>
    </div>
  );
};

export default Category;
