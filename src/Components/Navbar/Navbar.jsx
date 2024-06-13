import './Navbar.css'
import navimg from '../../assets/logoimage.png'


const Navbar=()=>{
    
    return(
        <div className='nav'>
            <div className='nav-logo'>
                <img src={navimg} alt="eg" style={{width: '200px'}}  />
            </div>
            <ul className='nav-menu'>
            <li><a href="">Home</a></li>
            <li><a href="">Product</a></li>
            <li><a href="">Faq</a></li>
            <li><a href="">Contact</a></li>    
            </ul>
        </div>
    )

}

export default Navbar
