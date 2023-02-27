import React from 'react';
function Chip({ items, key }) {
  const startDragHandle = (e, item) => {
    e.dataTransfer.setData('text', item.name);
    console.log('=>', e.target);
  };
  return (
    <div className="chip-wrapper">
      {items &&
        items.map((item) => {
          return (
            <div
              onDragStart={(e) => startDragHandle(e, item)}
              draggable
              className="chip"
            >
              {item.name}
            </div>
          );
        })}
    </div>
  );
}
export default Chip;
