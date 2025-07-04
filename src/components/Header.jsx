import React from 'react'

const Header = () => {
  return (
    <header>
        <a href="#">
            <h1 className='logo'>JV</h1>
        </a>

        <nav className='menu'>
            <ul>
                <li>
                   <a href="#projetos">Meus projetos</a> 
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header