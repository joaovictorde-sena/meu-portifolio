import "./Header.css";
import CV from '../documents/JoaoVictordeSena_DevWebFrontEnd.pdf';
const Header = () => {
  return (
    <header className='cabecalho'>
      <a href='#'>
        <h1 className='logo'></h1>
      </a>

      <nav className='menu'>
        <ul>
          <li>
            <a href= {CV} download>
              Baixar CV
            </a>
            <a href="#projects">
              Meus projetos
            </a>
            <a href="#skills">
              Habilidades  
            </a> 
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;