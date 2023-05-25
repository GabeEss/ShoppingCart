import createShoppingItem from "../logic/cart-item-factory";
import chairImageOne from '../images/chairs/Gallery_1 Office Chair, Ergonomic Desk Chair with Adjustable Lumbar Support & Seat Height, High Back Mesh Computer Chair with Flip-up Armrests-BIFMA Passed Task Chairs for Home Office (Modern, Black).jpg';
import chairImageTwo from '../images/chairs/Gallery_2 Office Chair, Ergonomic Desk Chair with Adjustable Lumbar Support & Seat Height, High Back Mesh Computer Chair with Flip-up Armrests-BIFMA Passed Task Chairs for Home Office (Modern, Black).jpg';
import chairImageThree from '../images/chairs/Gallery_3 Office Chair, Ergonomic Desk Chair with Adjustable Lumbar Support & Seat Height, High Back Mesh Computer Chair with Flip-up Armrests-BIFMA Passed Task Chairs for Home Office (Modern, Black).jpg';

const chairImages = [chairImageOne, chairImageTwo, chairImageThree];

const chairOne = createShoppingItem({
        name: "Mimoglad Office Chair",
        price: 179.99,
        type: "chair",
        gallery: chairImages,
        id: "Mimoglad Office Chair",
})

export { chairOne };