import "../css/Sidebar.css";

const Sidebar = ({onSelectProduct}) => {
    return(
        <div className="sidebar">
            <button onClick={() => onSelectProduct('all')}className="sidebar-buttons" id="all-button">All Products</button>
            <button onClick={() => onSelectProduct('chairs')} className="sidebar-buttons">Chairs</button>
            <button onClick={() => onSelectProduct('erasers')}className="sidebar-buttons">Erasers</button>
            <button onClick={() => onSelectProduct('highlighters')} className="sidebar-buttons">Highlighters</button>
            <button onClick={() => onSelectProduct('notebooks')} className="sidebar-buttons">Notebooks</button>
            <button onClick={() => onSelectProduct('pencils')} className="sidebar-buttons">Pencils</button>
            <button onClick={() => onSelectProduct('pens')} className="sidebar-buttons">Pens</button>
        </div>
    )
}

export default Sidebar;