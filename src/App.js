import React, { useState } from 'react';
import './style.css';
import Chip from './Chip.js';
const containers = [
  {
    value: 'Actor',
  },
  {
    value: 'Sport',
  },
  {
    value: 'Politician',
  },
];
export default function App() {
  const [data, setData] = useState([
    {
      name: 'ronaldo',
      category: 'Sport',
    },
    {
      name: 'mulayam',
      category: 'Politician',
    },
    {
      name: 'Ranbir',
      category: 'Actor',
    },
    {
      name: 'Sachin',
      category: 'Sport',
    },
    {
      name: 'Salman',
      category: 'Actor',
    },
    {
      name: 'Modi',
      category: 'Politician',
    },
  ]);
  const dropHandle = (e, status) => {
    console.log(e.dataTransfer.getData('text'), status);
    let newData = data.filter((myData) => {
      if (myData.name === e.dataTransfer.getData('text')) {
        myData.category = status;
        return myData;
      }
      return myData;
    });
    setData(newData);
    // console.log('dropppppppppppppppp[p');
  };
  const dragHandle = (e) => {
    e.preventDefault();
    console.log('drag');
  };
  return (
    <div className="wrapper">
      {containers.map((e) => {
        console.log(e.value);
        return (
          <div
            onDrop={(ev) => dropHandle(ev, e.value)}
            onDragOver={dragHandle}
            className="container"
          >
            <h2>{e.value}</h2>
            <hr />
            <Chip
              items={data.filter((el) => {
                return el.category === e.value;
              })}
            />
          </div>
        );
      })}
    </div>
  );
}
