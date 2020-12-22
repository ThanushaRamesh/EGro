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
          title: 'farm produce  ',
          imageUrl: Farm,
          id: 1
        },
        {
          title: 'Condiments',
          imageUrl: Condiments,
          id: 2
        },
        {
          title: 'Bread/Grain',
          imageUrl: Bread,
          id: 3
        },
        {
          title: 'Meat/Protein',
          imageUrl: Meat,
          size: 'large',
          id: 4
        },
        {
          title: 'Dairy',
          imageUrl: Dairy,
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;