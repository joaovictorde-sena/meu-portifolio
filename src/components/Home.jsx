import "./Home.css"
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub} from "react-icons/fa";

const Home = () => {
  return (
    <section className='home'>
        <div className='informacoes'>
            <h1>Olá! Sou João Victor</h1>
            <p>Um desenvolvedor frontend em formação apaixonado por tecnologia.</p>
            <p>
            Estou sempre me desafiando com novos projetos e buscando feedback na
            comunidade de programação, além de compartilhar meus conhecimentos. 😁
            </p>
            <p>Ah, também sou fã de jogos, filmes, séries e futebol</p>

            <ul className='redes-sociais'>
                <li>
                    <a 
                    href='https://www.linkedin.com/in/joao-victor-de-sena/' title='Ir para o LinkedIn' target='blank'>
                    <FaLinkedinIn />
                    </a>
                </li>

                <li>
                    <a 
                    href='https://wa.me/5581984361766'
                    title='Enviar Mensagem no WhatsApp'
                    target='_blank'
                    >
                    <FaWhatsapp />
                    </a>
                </li>

                <li>
                    <a 
                    href='https://github.com/joaovictorde-sena'
                    title='Ir para o GitHub' target='blank'>
                    <FaGithub />
                    </a>
                </li>
            </ul>
        </div>

        <div className='container-foto'>
          <div className='foto sombra-interna'>
            <img src="src/images/foto-perfil.png" alt="foto do portfólio do João" />
          </div>
        </div>
    </section>
  )
}

export default Home;