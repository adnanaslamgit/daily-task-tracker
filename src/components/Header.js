/* eslint-disable no-unused-vars */

import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation  } from "react-router-dom";
const Header = ({title, onAdd, showAdd}) => {

const Location = useLocation()
   return(
       <header className='header'>
           <h1>{title}</h1>
            {Location.pathname === '/' && (
                 <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
            )
            }
       </header>
   ) 
}
Header.defaultProps ={
    title : 'Task Tracker'
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}


// const headingStyle = {
//     color: 'red',
//     backgroundColor: '#000000'
// }

export default Header;
