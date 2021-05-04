import React from 'react';
import Table from './Table';
import './App.css';

function App() {
  const data_1 = [
    {
      name:  "John",
      age:  29,
      movie_rating:  4,
      city:  "Vancouver",
      region:  "British Columbia",
      country:  "Canada",
    },
    {
      name:  "Sarah",
      age:  32,
      movie_rating:  5,
      city:  "Frankfurt",
      region:  "Hesse",
      country:  "Germany",
    },
    {
      name:  "Dave",
      age:  44,
      movie_rating:  4,
      city:  "San Diego",
      region:  "California",
      country:  "United States",
    },
  ];

  const data_2 = [
    {
      item:  "apple",
      inventory:  12,
      size:  "medium",
    },
          {
      item:  "blueberry",
      inventory:  103,
      size:  "small",
    },
        {
      item:  "grapefruit",
      inventory:  4,
      size:  "large",
    },
    {
      item:  "strawberry",
      inventory:  14,
      size:  "small"
    },
  ];


  return (
    <div className="App">
      <header className="App-header">
          <Table 
              data={data_1} 
              columns ={"Name | Rating | Age | City | State/Province | Country"}    
          />
          <Table 
              data={data_2} 
              columns ={"Food Product | Size | Inventory"}    
          />
      </header>
    </div>
  );
}

export default App;
