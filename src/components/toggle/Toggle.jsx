import './toggle.css';
import Light from '../../img/sun.png';
import Dark from '../../img/moon.png';
import { ThemeContext } from "../../context";
import { useContext } from 'react';

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({type: "TOGGLE"})
  }
  return (
    <div className='t'>
      <img src={Light} alt='' className='tIcon' />
      <img src={Dark} alt='' className='tIcon' />
      <div className="tButton" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25 }}>

      </div>
    </div>
  )
}

export default Toggle;
