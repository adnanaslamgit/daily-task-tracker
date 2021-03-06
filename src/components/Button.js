/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
const Button = ({color, text, onClick}) => {

    return (
        <button onClick={onClick} style={{backgroundColor:color}} className='btn'>
            {text}
        </button>
    )
}

Button.defaultPropTypes = {
    color: 'yellow'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
