import NewProduct from './components/NewProduct';
import Products from './components/Products';
import React from 'react';


function App() {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    { 
      id: 'p2', 
      title: 'Surf Excel', 
      amount: 200, 
      date: new Date(2021, 2, 2) },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Aerial',
      amount: 450,
      date: new Date(2021, 5, 5),
    }
  ];
  function printProductdata(data){
    console.log("inside app.js")
    console.log(data) 
    //liftibg the state up concept or prop drilling i.e child communicating
    //with parent via functions
    // and parent can communicate with child via props
  }
  return  <div>
  <NewProduct printProduct={printProductdata}/>
  <Products items={products} />
</div>;
}

export default App;
