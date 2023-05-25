import React from 'react';
import { Link } from 'react-router-dom';
import '../css/DisplayItem.css';

const DisplayItem = ({product}) => {
    const {name, price, gallery, id} = product;

    console.log(product);

    return(
        <div className='item'>
            <Link to={`/Items/${id}`}>
                <img alt="" src={gallery[0]} />
                <h3 className='name'>{name}</h3>
                <div className='price'>{price}</div>
            </Link>
      </div>
    )
}

export default DisplayItem;