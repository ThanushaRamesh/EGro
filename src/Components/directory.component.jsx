import React from 'react';

import MenuItem from './menu-item.component.jsx';
import Farm from '../Images/Menu-Items/33.jpg';
import Condiments from '../Images/Menu-Items/111.jpg';
import Bread from '../Images/Menu-Items/998.jpg';
import Meat from '../Images/Menu-Items/1.jpg';
import Dairy from '../Images/Menu-Items/22.jpg';

import '../Styles/directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'farm produce',
          imageUrl: Farm,
          id: 1,
          linkUrl: 'farm'
        },
        {
          title: 'Condiments',
          imageUrl: Condiments,
          id: 2,
          linkUrl: 'condiments'
        },
        {
          title: 'Bread/Grain',
          imageUrl: Bread,
          id: 3,
          linkUrl: 'bread'
        },
        {
          title: 'Meat/Protein',
          imageUrl: Meat,
          size: 'large',
          id: 4,
          linkUrl: 'meat'
        },
        {
          title: 'Dairy',
          imageUrl: Dairy,
          size: 'large',
          id: 5,
          linkUrl: 'dairy'
        }
      ]
    };
  
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;