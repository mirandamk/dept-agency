import React from 'react'
import PropTypes from 'prop-types'
import Header from './HeaderPhoto/Header'

import './HeaderContainer.css'

function HeaderContainer(props) {
    return (
        <div className="header-container">
          <Header /> 
        </div>
    )
}

HeaderContainer.propTypes = {
    
}

export default HeaderContainer
