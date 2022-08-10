import { NavLink } from "react-router-dom";
import * as Bsicon from 'react-icons/bs'

const Sidebar = () => {
  return (  
    <div className="sidebar">
      <div className="siderbar__avatar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnq9pVEA16U0vH0nT0UeFY9vrTn99Za2a7QWub_dBpXSYTCZtBQULWaaRJ4ENFreEmPc&usqp=CAU" alt="foto" />
      </div>
      <ul className="sidebar__option">
        <li className="sidebar__item">
          <NavLink exact className="sidebar__item__link" activeClassName="active" to=""> 
            <Bsicon.BsUiChecksGrid className="siderbar__icon" />
             Dashboard 
           </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink exact className="sidebar__item__link" activeClassName="active" to="/skills"> 
            <Bsicon.BsAward className="siderbar__icon" />
            Skills
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink exact className="sidebar__item__link" activeClassName="active" to="/references">
            <Bsicon.BsFillPeopleFill className="siderbar__icon" />
            References 
          </NavLink>
        </li>
      </ul>
      
        
    </div>
    
  );
}
 
export default Sidebar;