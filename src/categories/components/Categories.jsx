import React from 'react';
import Category from './Category.jsx';
import './categories.css';
import Search from '../../widgets/containers/Search-container.jsx';

function Categories(props) {
  return (
    <div className="Categories">
      <Search/>
      {
        props.categories.map((item) => (
          <Category
            key={item.id}
            {...item}
            handleOpenModal={props.handleOpenModal}
          />)
        )
      }
    </div>
  );
}

export default Categories;
