import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import '../css/DisplayItem.css';

const DisplayItem = ({product}) => {
    const {name, price, gallery, id} = product;

    const { setProductInfo } = useContext(ProductContext);

    const handleClick = () => {
        setProductInfo(product);
    };


    return(
        <div className='item'>
            <Link to={`/Items/${id}`} onClick={handleClick}>
                <img alt="" src={gallery[0]} />
                <h3 className='name'>{name}</h3>
                <div className='price'>{price}</div>
            </Link>
      </div>
    )
}

export default DisplayItem;