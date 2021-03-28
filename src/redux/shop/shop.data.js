import Apples from '../../Images/FarmProduce/Apples.jpg'
import Oranges from '../../Images/FarmProduce/Oranges.jpg'
import Bellpeppers from '../../Images/FarmProduce/Bellpeppers.jpg'
import Broccoli from '../../Images/FarmProduce/Broccoli.jpg'
import Carrots from '../../Images/FarmProduce/Carrots.jpg'
import Grapes from '../../Images/FarmProduce/Grapes.jpg'
import Kiwi from '../../Images/FarmProduce/Kiwi.jpg'
import Potatoes from '../../Images/FarmProduce/Potatoes.jpg'
import Cauliflower from '../../Images/FarmProduce/Cauliflower.jpg'
import Chillies from '../../Images/FarmProduce/Chillies.jpg'
import Straberries from '../../Images/FarmProduce/Straberries.jpg'
import Tomatoes from '../../Images/FarmProduce/Tomatoes.jpg'
import Bread from '../../Images/Bread/Bread.jpg'
import Corn from '../../Images/Bread/Corn.jpg'
import Tofu from '../../Images/Bread/Tofu.jpg'
import Bean from '../../Images/Bread/KidneyBean.jpg'
import Lentils from '../../Images/Bread/Lentils.jpg'
import Muffin from '../../Images/Bread/Muffinn.jpg'
import Pasta from '../../Images/Bread/Pasta.jpg'
import Rice from '../../Images/Bread/Rice.jpg'
import Milk from '../../Images/Dairy/Milk.jpg'
import Cheese from '../../Images/Dairy/Cheese.jpg'
import Eggs from '../../Images/Dairy/Eggs.jpg'
import Butter from '../../Images/Dairy/Butter.jpg'
import Beef from '../../Images/Meat/Beef.jpg'
import Fish from '../../Images/Meat/Fish.jpg'
import Prawns from '../../Images/Meat/prawns.jpg'
import Lamm from '../../Images/Meat/Lamm.jpg'

const SHOP_DATA = {
  farm: {
    id: 1,
    title: 'Farm',
    routeName: 'farm',
    items: [
      {
        id: 1,
        name: 'Apples',
        imageUrl: Apples,
        price: 1.2
      },
      {
        id: 2,
        name: 'Oranges',
        imageUrl: Oranges,
        price: 2.1
      },
      {
        id: 3,
        name: 'Cauliflower',
        imageUrl: Cauliflower,
        price: 1
      },
      {
        id: 4,
        name: 'Carrots',
        imageUrl: Carrots,
        price: 2
      },
      {
        id: 5,
        name: 'Chillies',
        imageUrl: Chillies,
        price: 1.2
      },
      {
        id: 6,
        name: 'Bellpeppers',
        imageUrl: Bellpeppers,
        price: 1.4
      },
      {
        id: 7,
        name: 'Broccoli',
        imageUrl: Broccoli,
        price: 1.8
      },
      {
        id: 8,
        name: 'Grapes',
        imageUrl: Grapes,
        price: 1.4
      },
      {
        id: 9,
        name: 'Tomatoes',
        imageUrl: Tomatoes,
        price: 1.6
      },
	  {
        id: 10,
        name: 'Straberries',
        imageUrl: Straberries,
        price: 2.9
      },
	   {
        id: 11,
        name: 'Kiwi',
        imageUrl: Kiwi,
        price: 2.3
      },
	   {
        id: 12,
        name: 'Potatoes',
        imageUrl: Potatoes,
        price: 1.7
      }
    ]
  },
  condiments: {
    id: 2,
    title: 'Condiments',
    routeName: 'condiments',
    items: [
      {
        id: 13,
        name: 'Bread',
        imageUrl: Bread,
        price: 2.2
      },
      {
        id: 14,
        name: 'Corn',
        imageUrl: Corn,
        price: 2.80
      },
      {
        id: 15,
        name: 'Tofu',
        imageUrl: Tofu,
        price: 1.10
      },
      {
        id: 16,
        name: 'Bean',
        imageUrl: Bean,
        price: 1.60
      },
      {
        id: 17,
        name: 'Lentils',
        imageUrl: Lentils,
        price: 1.60
      },
      {
        id: 18,
        name: 'Muffin',
        imageUrl: Muffin,
        price: 1.90
      },
      {
        id: 19,
        name: 'Pasta',
        imageUrl: Pasta,
        price: 1.90
      },
      {
        id: 20,
        name: 'Rice',
        imageUrl: Rice,
        price: 2.00
      }
    ]
  },
  bread: {
    id: 3,
    title: 'Bread',
    routeName: 'bread',
    items: [
      {
        id: 21,
        name: 'Bread',
        imageUrl: Bread,
        price: 2.20
      },
      {
        id: 22,
        name: 'Corn',
        imageUrl: Corn,
        price: 2.80
      },
      {
        id: 23,
        name: 'Tofu',
        imageUrl: Tofu,
        price: 1.10
      },
      {
        id: 24,
        name: 'Bean',
        imageUrl: Bean,
        price: 1.60
      },
      {
        id: 25,
        name: 'Lentils',
        imageUrl: Lentils,
        price: 1.60
      },
      {
        id: 26,
        name: 'Muffin',
        imageUrl: Muffin,
        price: 1.60
      },
      {
        id: 27,
        name: 'Pasta',
        imageUrl: Pasta,
        price: 1.90
      },
      {
        id: 28,
        name: 'Rice',
        imageUrl: Rice,
        price: 2.00
      }
    ]
  },
  meat: {
    id: 4,
    title: 'Meat',
    routeName: 'meat',
    items: [
      {
        id: 23,
        name: 'Beef',
        imageUrl: Beef,
        price: 2.5
      },
      {
        id: 24,
        name: 'Fish',
        imageUrl: Fish,
        price: 2.20
      },
      {
        id: 25,
        name: 'Prawns',
        imageUrl: Prawns,
        price: 3.0
      },
      {
        id: 26,
        name: 'Lamm',
        imageUrl: Lamm,
        price: 5.0
      }      
    ]
  },
  dairy: {
    id: 5,
    title: 'Dairy',
    routeName: 'dairy',
    items: [
      {
        id: 30,
        name: 'Milk',
        imageUrl: Milk,
        price: 2.5
      },
      {
        id: 31,
        name: 'Eggs',
        imageUrl: Eggs,
        price: 2.80
      },
      {
        id: 32,
        name: 'Cheese',
        imageUrl: Cheese,
        price: 2.5
      },
      {
        id: 33,
        name: 'Butter',
        imageUrl: Butter,
        price: 2.5
      }
    ]
  }
};

export default SHOP_DATA;