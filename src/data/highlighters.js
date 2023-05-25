import createShoppingItem from "../logic/cart-item-factory";
import highlighterImageOne from '../images/highlighters/Gallery_1 Sharpie ACCENT Highlighter, Tank Highlighter Chisel, 4-Carded, Fluorescent Assorted.jpg';
import highlighterImageTwo from '../images/highlighters/Gallery_2 Sharpie ACCENT Highlighter, Tank Highlighter Chisel, 4-Carded, Fluorescent Assorted.jpg';
import highlighterImageThree from '../images/highlighters/Gallery_3 Sharpie ACCENT Highlighter, Tank Highlighter Chisel, 4-Carded, Fluorescent Assorted.jpg';

const highlighterImages = [highlighterImageOne, highlighterImageTwo, highlighterImageThree];

const highlighterOne = createShoppingItem({
        name: "Sharpie ACCENT Highlighter, 4-Carded, Fluorescent Assorted",
        price: 9.89,
        type: "highlighter",
        gallery: highlighterImages,
        id: "Sharpie ACCENT Highlighter, 4-Carded, Fluorescent Assorted",
})

export { highlighterOne };