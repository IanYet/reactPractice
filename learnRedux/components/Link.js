import React from 'react'
import PropTypes from 'prop-types'

const Link = ({active, children, onClick}) => {
    if(active) {
        return <span>{children}</span>
    }

    return (
        <a
            href=""
            onclick={e => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </a>
    )
}

link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link