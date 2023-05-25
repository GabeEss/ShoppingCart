import createShoppingItem from "../logic/cart-item-factory";
import bicImageOne from '../images/pens/Gallery_1 BIC Cristal Ball Stick Pens, Medium Point (1.0mm), Assorted Colors, 10-Pack, Great for Everyday Writing.jpg';
import bicImageTwo from '../images/pens/Gallery_2 BIC Cristal Ball Stick Pens, Medium Point (1.0mm), Assorted Colors, 10-Pack, Great for Everyday Writing.jpg';
import bicImageThree from '../images/pens/Gallery_3 BIC Cristal Ball Stick Pens, Medium Point (1.0mm), Assorted Colors, 10-Pack, Great for Everyday Writing.jpg';
import moustacheImageOne from '../images/pens/Gallery_1 Moustache Gel Pens, 0.7mm Tip, Black, 12:box Moustache.jpeg';
import moustacheImageTwo from '../images/pens/Gallery_2 Gel Pens, 0.7mm Tip, Black, 12:Box - Moustache.jpeg';
import moustacheImageThree from '../images/pens/Gallery_3 Gel Pens, 0.7mm Tip, Black, 12:Box - Moustache.jpeg';
import mrPenImageOne from '../images/pens/Gallery_1 Mr Pen No Bleed Pens, Bible Pens, Fine Tip, Assorted Color, Pack Of 6.jpg';
import mrPenImageTwo from '../images/pens/Gallery_2 Mr. Pen No Bleed Pens, Bible Pens, Fine Tip, Assorted Color, Pack of 6.jpg';
import mrPenImageThree from '../images/pens/Gallery_3 Mr. Pen No Bleed Pens, Bible Pens, Fine Tip, Assorted Color, Pack of 6.jpg';

const bicImages = [bicImageOne, bicImageTwo, bicImageThree];
const moustacheImages = [moustacheImageOne, moustacheImageTwo, moustacheImageThree];
const mrPenImages = [mrPenImageOne, mrPenImageTwo, mrPenImageThree];

const bicPen = createShoppingItem({
    name: "BIC Cristal Ball Stick Pens, Medium Point (1.0mm), Assorted Colors, 10-Pack",
    price: 1.98,
    type: "pen",
    gallery: bicImages
})

const moustachePen = createShoppingItem({
    name: "Gel Pens, 0.7mm Tip, Black, 12/Box - Moustache",
    price: 3.49,
    type: "pen",
    gallery: moustacheImages
})

const mrPen = createShoppingItem({
    name: "Mr. Pen No Bleed Pens, Bible Pens, Fine Tip, Assorted Color, Pack of 6",
    price: 14.81,
    type: "pen",
    gallery: mrPenImages
})

export { bicPen, moustachePen, mrPen };