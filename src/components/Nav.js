const Nav = () => {
    return ( 
        <div className="navbar">
            <div className="search">
                <input type="text" placeholder="Search"/>
            </div>
            <a href="/" className="add-photos-button">Add Photos</a>
        </div>
     );
}
 
export default Nav;