import createShoppingItem from "../logic/cart-item-factory";
import eraserImageOne from '../images/erasers/Gallery_1 Pentel Hi-Polymer Large Eraser 2-Pack, White.jpg';
import eraserImageTwo from '../images/erasers/Gallery_2 Pentel Hi-Polymer Large Eraser 2-Pack, White.jpg';
import eraserImageThree from '../images/erasers/Gallery_3 Pentel Hi-Polymer Large Eraser 2-Pack, White.jpg';

const eraserImages = [eraserImageOne, eraserImageTwo, eraserImageThree];

const eraserOne = createShoppingItem({
        name: "Pentel Hi-Polymer Large Eraser 2-Pack, White",
        price: 2.49,
        type: "eraser",
        gallery: eraserImages,
        id: "Pentel Hi-Polymer Large Eraser 2-Pack, White",
})

export { eraserOne };