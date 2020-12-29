import Farm from '../../Images/Menu-Items/33.jpg';
import Condiments from '../../Images/Menu-Items/111.jpg';
import Bread from '../../Images/Menu-Items/998.jpg';
import Meat from '../../Images/Menu-Items/1.jpg';
import Dairy from '../../Images/Menu-Items/22.jpg';

const INITIAL_STATE = {
    sections: [
        {
          title: 'farm produce',
          imageUrl: Farm,
          id: 1,
          linkUrl: 'shop/farm'
        },
        {
          title: 'Condiments',
          imageUrl: Condiments,
          id: 2,
          linkUrl: 'shop/condiments'
        },
        {
          title: 'Bread/Grain',
          imageUrl: Bread,
          id: 3,
          linkUrl: 'shop/bread'
        },
        {
          title: 'Meat/Protein',
          imageUrl: Meat,
          size: 'large',
          id: 4,
          linkUrl: 'shop/meat'
        },
        {
          title: 'Dairy',
          imageUrl: Dairy,
          size: 'large',
          id: 5,
          linkUrl: 'shop/dairy'
        }
      ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;