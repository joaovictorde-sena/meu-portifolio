import "./Header.css";

const Header = () => {
  return (
    <header className='cabecalho'>
      <a href='#'>
        <h1 className='logo'></h1>
      </a>

      <nav className='menu'>
        <ul>
          <li>
            <a href="#projects">Meus projetos</a> 
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;