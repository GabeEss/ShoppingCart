import createShoppingItem from "../logic/cart-item-factory";
import bicImageOne from '../images/pencils/Gallery_1 BIC Matic Grip Mechanical Pencils, Black, 0.7mm, 5-pack .jpg';
import bicImageTwo from '../images/pencils/Gallery_2 BIC Matic Grip Mechanical Pencils, Black, 0.7mm, 5-pack .jpg';
import bicImageThree from '../images/pencils/Gallery_3 BIC Matic Grip Mechanical Pencils, Black, 0.7mm, 5-pack .jpg';
import paperImageOne from '../images/pencils/Gallery_1 PAPER MATE EverStrong 2 Pencils, Reinforced, Break-Resistant Lead When Writing, 72-Count, Black.jpg';
import paperImageTwo from '../images/pencils/Gallery_2 PAPER MATE EverStrong 2 Pencils, Reinforced, Break-Resistant Lead When Writing, 72-Count, Black.jpg';
import paperImageThree from '../images/pencils/Gallery_3 PAPER MATE EverStrong 2 Pencils, Reinforced, Break-Resistant Lead When Writing, 72-Count, Black.jpg';
import staedtlerImageOne from '../images/pencils/Gallery_1 Staedtler 13246CB18P11TH The Premium Pencil, Norica, HB2 special lead, 12.jpg';
import staedtlerImageTwo from '../images/pencils/Gallery_2 Staedtler 13246CB18P11TH The Premium Pencil, Norica, HB2 special lead, 12.jpg';
import staedtlerImageThree from '../images/pencils/Gallery_3 Staedtler 13246CB18P11TH The Premium Pencil, Norica, HB2 special lead, 12.jpg';

const bicImages = [bicImageOne, bicImageTwo, bicImageThree];
const paperImages = [paperImageOne, paperImageTwo, paperImageThree];
const staedtlerImages = [staedtlerImageOne, staedtlerImageTwo, staedtlerImageThree];

const bicPencil = createShoppingItem({
    name: "BIC Matic Grip Mechanical Pencils, Black, 0.7mm, 5-pack",
    price: 3.99,
    type: "pencil",
    gallery: bicImages
})

const paperPencil = createShoppingItem({
    name: "PAPER MATE EverStrong #2 Pencils, 72-Count, Black",
    price: 19.99,
    type: "pencil",
    gallery: paperImages
})

const staedtlerPencil = createShoppingItem({
    name: "Staedtler 13246CB18P11TH The Premium Pencil, Norica, HB2 special lead, 12",
    price: 9.88,
    type: "pencil",
    gallery: staedtlerImages
})

export { bicPencil, paperPencil, staedtlerPencil };