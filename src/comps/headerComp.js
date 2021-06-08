import headerImg from '../img/header.png'
import Menu from './menuComp'
import './headerFooterComp.css'

function Header() {


  return (
    <div>
        <Menu/>
        <img className="header" src={headerImg} alt="header" />
    </div>
    
  );
};


export default Header