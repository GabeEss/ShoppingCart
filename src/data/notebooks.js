import createShoppingItem from "../logic/cart-item-factory";
import notebookImageOne from '../images/notebooks/Gallery_1 Hilroy Coil 1-subject Wide Ruled Notebook, 10.5 X 8 Inches, 3 Hole Punched, 200 Pages (100 Sheets), 1 Notebook.jpg';
import noteBookImageTwo from '../images/notebooks/Gallery_2 Hilroy Coil 1-subject Wide Ruled Notebook, 10.5 X 8 Inches, 3 Hole Punched, 200 Pages (100 Sheets), 1 Notebook.jpg';
import noteBookImageThree from '../images/notebooks/Gallery_3 Hilroy Coil 1-subject Wide Ruled Notebook, 10.5 X 8 Inches, 3 Hole Punched, 200 Pages (100 Sheets), 1 Notebook.jpg';

const notebookImages = [notebookImageOne, noteBookImageTwo, noteBookImageThree];

const notebookOne = createShoppingItem({
        name: "Hilroy Coil 1-subject Wide Ruled Notebook, 200 Pages (100 Sheets)",
        price: 2.96,
        type: "notebook",
        gallery: notebookImages,
        id: "Hilroy Coil 1-subject Wide Ruled Notebook, 200 Pages (100 Sheets)",
        quantity: 0,
})

export { notebookOne };