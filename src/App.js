import './Products.css';

import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import 'mdbreact/dist/css/mdb.css'


function App() {

  const [product, setProduct] = useState([
    
     

    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgql6A-jwJS7x8IA0M4pRIwDOHRtz1oY4hqA&usqp=CAU',
      name: ' Masala Tikha ',
      category: 'PaniPuri',

      price: 59
    },
 
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgql6A-jwJS7x8IA0M4pRIwDOHRtz1oY4hqA&usqp=CAU',
      name: ' Masala Tikha ',
      category: 'PaniPuri',

      price: 59
    },
 
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgql6A-jwJS7x8IA0M4pRIwDOHRtz1oY4hqA&usqp=CAU',
      name: ' Masala Tikha ',
      category: 'PaniPuri',

      price: 59
    },
 
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgql6A-jwJS7x8IA0M4pRIwDOHRtz1oY4hqA&usqp=CAU',
      name: ' Masala Tikha ',
      category: 'PaniPuri',

      price: 59
    },
 
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgql6A-jwJS7x8IA0M4pRIwDOHRtz1oY4hqA&usqp=CAU',
      name: ' Masala Tikha ',
      category: 'PaniPuri',

      price: 59
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoGJIUDB34O2UKte9Oc53cZPlk3ZWngng-g&usqp=CAU',
      name: 'Veg Katora',
      category: 'chowmin',

      price: 99
    },
 
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoGJIUDB34O2UKte9Oc53cZPlk3ZWngng-g&usqp=CAU',
      name: 'Veg Katora',
      category: 'chowmin',

      price: 99
    },
 
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoGJIUDB34O2UKte9Oc53cZPlk3ZWngng-g&usqp=CAU',
      name: 'Veg Katora',
      category: 'chowmin',

      price: 99
    },
 
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoGJIUDB34O2UKte9Oc53cZPlk3ZWngng-g&usqp=CAU',
      name: 'Veg Katora',
      category: 'chowmin',

      price: 99
    },
 
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoGJIUDB34O2UKte9Oc53cZPlk3ZWngng-g&usqp=CAU',
      name: 'Veg Katora',
      category: 'chowmin',

      price: 99
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHHM-nV8XiT988AJ2vS8Lv3YKJSRTqEnLZGw&usqp=CAU',
      name: 'Puffin panner XL',
      category: 'Pizza',

      price: 299 
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHHM-nV8XiT988AJ2vS8Lv3YKJSRTqEnLZGw&usqp=CAU',
      name: 'Puffin panner XL',
      category: 'Pizza',

      price: 299 
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHHM-nV8XiT988AJ2vS8Lv3YKJSRTqEnLZGw&usqp=CAU',
      name: 'Puffin panner XL',
      category: 'Pizza',

      price: 299 
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHHM-nV8XiT988AJ2vS8Lv3YKJSRTqEnLZGw&usqp=CAU',
      name: 'Puffin panner XL',
      category: 'Pizza',

      price: 299 
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHHM-nV8XiT988AJ2vS8Lv3YKJSRTqEnLZGw&usqp=CAU',
      name: 'Puffin panner XL',
      category: 'Pizza',

      price: 299 
    },
 
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqz6p8AP2IkxPCyTlS2opEK75VXfaAWmFaw&usqp=CAU',
      name: 'Allu Tikki ',
      category: 'Burger',

      price: 299
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqz6p8AP2IkxPCyTlS2opEK75VXfaAWmFaw&usqp=CAU',
      name: 'Allu Tikki ',
      category: 'Burger',

      price: 299
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqz6p8AP2IkxPCyTlS2opEK75VXfaAWmFaw&usqp=CAU',
      name: 'Allu Tikki ',
      category: 'Burger',

      price: 299
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqz6p8AP2IkxPCyTlS2opEK75VXfaAWmFaw&usqp=CAU',
      name: 'Allu Tikki ',
      category: 'Burger',

      price: 299
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqz6p8AP2IkxPCyTlS2opEK75VXfaAWmFaw&usqp=CAU',
      name: 'Allu Tikki ',
      category: 'Burger',

      price: 299
    },
  
 
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGRMd-jYsKlnMZVR3cTHiBaxlNZMyUo7U1g&usqp=CAU',
      name: 'Panner Puffed',
      category: 'Veg Roll',

      price: 299
    },
    
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGRMd-jYsKlnMZVR3cTHiBaxlNZMyUo7U1g&usqp=CAU',
      name: 'Panner Puffed',
      category: 'Veg Roll',

      price: 299
    },
    
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGRMd-jYsKlnMZVR3cTHiBaxlNZMyUo7U1g&usqp=CAU',
      name: 'Panner Puffed',
      category: 'Veg Roll',

      price: 299
    },
    
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGRMd-jYsKlnMZVR3cTHiBaxlNZMyUo7U1g&usqp=CAU',
      name: 'Panner Puffed',
      category: 'Veg Roll',

      price: 299
    },
    
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGRMd-jYsKlnMZVR3cTHiBaxlNZMyUo7U1g&usqp=CAU',
      name: 'Panner Puffed',
      category: 'Veg Roll',

      price: 299
    },
    
    
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWuGaJ-UoJB_Z2pYp0xB0aDKNheOiEii3_Cw&usqp=CAU',
      name: 'Aalu Tuffins',
      category: 'Samosha',

      price: 60
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWuGaJ-UoJB_Z2pYp0xB0aDKNheOiEii3_Cw&usqp=CAU',
      name: 'Aalu Tuffins',
      category: 'Samosha',

      price: 60
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWuGaJ-UoJB_Z2pYp0xB0aDKNheOiEii3_Cw&usqp=CAU',
      name: 'Aalu Tuffins',
      category: 'Samosha',

      price: 60
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWuGaJ-UoJB_Z2pYp0xB0aDKNheOiEii3_Cw&usqp=CAU',
      name: 'Aalu Tuffins',
      category: 'Samosha',

      price: 60
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWuGaJ-UoJB_Z2pYp0xB0aDKNheOiEii3_Cw&usqp=CAU',
      name: 'Aalu Tuffins',
      category: 'Samosha',

      price: 60
    },
  
    
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78XmWppDDDO3VdIHnRCaFz6sG7CvkvD3WAA&usqp=CAU',
      name: 'Seasoned mango',
      category: 'Juice',

      price: 80
    },
 
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78XmWppDDDO3VdIHnRCaFz6sG7CvkvD3WAA&usqp=CAU',
      name: 'Seasoned mango',
      category: 'Juice',

      price: 80
    },
 
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78XmWppDDDO3VdIHnRCaFz6sG7CvkvD3WAA&usqp=CAU',
      name: 'Seasoned mango',
      category: 'Juice',

      price: 80
    },
 
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78XmWppDDDO3VdIHnRCaFz6sG7CvkvD3WAA&usqp=CAU',
      name: 'Seasoned mango',
      category: 'Juice',

      price: 80
    },
 
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78XmWppDDDO3VdIHnRCaFz6sG7CvkvD3WAA&usqp=CAU',
      name: 'Seasoned mango',
      category: 'Juice',

      price: 80
    },
 
    
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAx0Li0Ku0R3Fm_AFp8ryKxff31eyqrTrtww&usqp=CAU',
      name: 'Mixed Flavour',
      category: 'Milk Shake',

      price: 100
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAx0Li0Ku0R3Fm_AFp8ryKxff31eyqrTrtww&usqp=CAU',
      name: 'Mixed Flavour',
      category: 'Milk Shake',

      price: 100
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAx0Li0Ku0R3Fm_AFp8ryKxff31eyqrTrtww&usqp=CAU',
      name: 'Mixed Flavour',
      category: 'Milk Shake',

      price: 100
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAx0Li0Ku0R3Fm_AFp8ryKxff31eyqrTrtww&usqp=CAU',
      name: 'Mixed Flavour',
      category: 'Milk Shake',

      price: 100
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAx0Li0Ku0R3Fm_AFp8ryKxff31eyqrTrtww&usqp=CAU',
      name: 'Mixed Flavour',
      category: 'Milk Shake',

      price: 100
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMt8IspvjvdZsvZB_IX_gzhIXTp7lfeD4PHw&usqp=CAU',
      name: 'Indian Spices',
      category: 'Rice Meal',

      price: 140
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMt8IspvjvdZsvZB_IX_gzhIXTp7lfeD4PHw&usqp=CAU',
      name: 'Indian Spices',
      category: 'Rice Meal',

      price: 140
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMt8IspvjvdZsvZB_IX_gzhIXTp7lfeD4PHw&usqp=CAU',
      name: 'Indian Spices',
      category: 'Rice Meal',

      price: 140
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMt8IspvjvdZsvZB_IX_gzhIXTp7lfeD4PHw&usqp=CAU',
      name: 'Indian Spices',
      category: 'Rice Meal',

      price: 140
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMt8IspvjvdZsvZB_IX_gzhIXTp7lfeD4PHw&usqp=CAU',
      name: 'Indian Spices',
      category: 'Rice Meal',

      price: 140
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxie_TdiySBey8mSD5hq-etaYPn3iRAvgs2w&usqp=CAU',
      name: 'Round Tandoor',
      category: 'Roti Meal',

      price: 125
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxie_TdiySBey8mSD5hq-etaYPn3iRAvgs2w&usqp=CAU',
      name: 'Round Tandoor',
      category: 'Roti Meal',

      price: 125
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxie_TdiySBey8mSD5hq-etaYPn3iRAvgs2w&usqp=CAU',
      name: 'Round Tandoor',
      category: 'Roti Meal',

      price: 125
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxie_TdiySBey8mSD5hq-etaYPn3iRAvgs2w&usqp=CAU',
      name: 'Round Tandoor',
      category: 'Roti Meal',

      price: 125
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxie_TdiySBey8mSD5hq-etaYPn3iRAvgs2w&usqp=CAU',
      name: 'Round Tandoor',
      category: 'Roti Meal',

      price: 125
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfDAJfEntCTQeMRPiQsJRUgweSYHqTDDAMqg&usqp=CAU',
      name: 'Odisha Spices',
      category: 'Pakhal Rice meal',

      price: 100
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfDAJfEntCTQeMRPiQsJRUgweSYHqTDDAMqg&usqp=CAU',
      name: 'Odisha Spices',
      category: 'Pakhal Rice meal',

      price: 100
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfDAJfEntCTQeMRPiQsJRUgweSYHqTDDAMqg&usqp=CAU',
      name: 'Odisha Spices',
      category: 'Pakhal Rice meal',

      price: 100
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfDAJfEntCTQeMRPiQsJRUgweSYHqTDDAMqg&usqp=CAU',
      name: 'Odisha Spices',
      category: 'Pakhal Rice meal',

      price: 100
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfDAJfEntCTQeMRPiQsJRUgweSYHqTDDAMqg&usqp=CAU',
      name: 'Odisha Spices',
      category: 'Pakhal Rice meal',

      price: 100
    },
   
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3c29PTLPuzpqFkFPNGpDepI1-985bIF0uw&usqp=CAU',
      name: 'mango sundae',
      category: 'Ice Cream',

      price: 50
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3c29PTLPuzpqFkFPNGpDepI1-985bIF0uw&usqp=CAU',
      name: 'mango sundae',
      category: 'Ice Cream',

      price: 50
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3c29PTLPuzpqFkFPNGpDepI1-985bIF0uw&usqp=CAU',
      name: 'mango sundae',
      category: 'Ice Cream',

      price: 50
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3c29PTLPuzpqFkFPNGpDepI1-985bIF0uw&usqp=CAU',
      name: 'mango sundae',
      category: 'Ice Cream',

      price: 50
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3c29PTLPuzpqFkFPNGpDepI1-985bIF0uw&usqp=CAU',
      name: 'mango sundae',
      category: 'Ice Cream',

      price: 50
    },
 

    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYC43Nl7jer0YGJ7Wiwl6gfZHaUH1RACo6-Q&usqp=CAU',
      name: 'Ammul Delight',
      category: 'Ice Cream cone',

      price: 70
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYC43Nl7jer0YGJ7Wiwl6gfZHaUH1RACo6-Q&usqp=CAU',
      name: 'Ammul Delight',
      category: 'Ice Cream cone',

      price: 70
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYC43Nl7jer0YGJ7Wiwl6gfZHaUH1RACo6-Q&usqp=CAU',
      name: 'Ammul Delight',
      category: 'Ice Cream cone',

      price: 70
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYC43Nl7jer0YGJ7Wiwl6gfZHaUH1RACo6-Q&usqp=CAU',
      name: 'Ammul Delight',
      category: 'Ice Cream cone',

      price: 70
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYC43Nl7jer0YGJ7Wiwl6gfZHaUH1RACo6-Q&usqp=CAU',
      name: 'Ammul Delight',
      category: 'Ice Cream cone',

      price: 70
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9P5GDI4C7jZiPakM_ZZCNGalpJv5iT5UyPg&usqp=CAU',
      name: 'Cuudbury All Star',
      category: 'Chocolates',
      price: 120
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9P5GDI4C7jZiPakM_ZZCNGalpJv5iT5UyPg&usqp=CAU',
      name: 'Cuudbury All Star',
      category: 'Chocolates',

      price: 120
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9P5GDI4C7jZiPakM_ZZCNGalpJv5iT5UyPg&usqp=CAU',
      name: 'Cuudbury All Star',
      category: 'Chocolates',

      price: 120
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9P5GDI4C7jZiPakM_ZZCNGalpJv5iT5UyPg&usqp=CAU',
      name: 'Cuudbury All Star',
      category: 'Chocolates',

      price: 120
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9P5GDI4C7jZiPakM_ZZCNGalpJv5iT5UyPg&usqp=CAU',
      name: 'Cuudbury All Star',
      category: 'Chocolates',

      price: 120
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_iEWAgCS4TSzq6RlJZIkcmdtc5sW3wtzqA&usqp=CAU',
      name: 'Nestlle KitSaat',
      category: 'Chocolates',

      price: 80
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_iEWAgCS4TSzq6RlJZIkcmdtc5sW3wtzqA&usqp=CAU',
      name: 'Nestlle KitSaat',
      category: 'Chocolates',

      price: 80
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_iEWAgCS4TSzq6RlJZIkcmdtc5sW3wtzqA&usqp=CAU',
      name: 'Nestlle KitSaat',
      category: 'Chocolates',

      price: 80
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_iEWAgCS4TSzq6RlJZIkcmdtc5sW3wtzqA&usqp=CAU',
      name: 'Nestlle KitSaat',
      category: 'Chocolates',

      price: 80
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_iEWAgCS4TSzq6RlJZIkcmdtc5sW3wtzqA&usqp=CAU',
      name: 'Nestlle KitSaat',
      category: 'Chocolates',

      price: 80
    },
   

    
   


  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    
    <div>
      <Navbar count={cart.length}
        handleShow={handleShow} ></Navbar>



      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }
       

    </div>
  );
}

export default App;