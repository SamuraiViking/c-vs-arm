import React from 'react'
import cLogo from '../c.png'
import asmLogo from '../asm.png'

function Header() {
    return (
        <div className="header">
            <div className="c-logo">
                <img className="logo" src={cLogo} alt="c logo"/>
            </div>
            <div className="versus-text">
                <span>VS</span>
            </div>
            <div className="asm-logo">
                <img className="logo" src={asmLogo} alt="c logo"/>
            </div>
        </div>
    )
}

export default Header