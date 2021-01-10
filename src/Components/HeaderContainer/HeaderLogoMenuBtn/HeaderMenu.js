import React from 'react'
import PropTypes from 'prop-types'

import './HeaderMenu.css'

function HeaderMenu(props) {
    return (
        <div className="header-menu">
            <div className="header-menu__dept"></div>
            <button className="header-menu__menu">MENU  = </button>
        </div>
    )
}

HeaderMenu.propTypes = {
    
}

export default HeaderMenu
