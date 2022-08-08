//this is going to be reused bc is the same at every page

function LeftMenu() {
    return (
        <div className='leftMenu'>
        <p>Logo</p>  
         <a href="#">Home</a>
         <nav className='leftMenu-nav'>
           <ul className='leftMenu-list'>
             <li>Explore</li>
             <li>Notifications</li>
             <li>Messages</li>
             <li>Bookmarks</li>
             <li>Lists</li>
             <li>Profile</li>
             <li>More</li>
           </ul>
         </nav>
 
         <button>Tweet</button>
 
         <footer className='leftMenu-footer'>
           <p>user logo</p>
           <p>user name</p>
           <p>username</p>
           
         </footer>
         
       </div>
 

    )
}

export default LeftMenu