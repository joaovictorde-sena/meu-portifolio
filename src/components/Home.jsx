import "./Home.css"
import fotoPerfil from "../images/foto-perfil.png"
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub} from "react-icons/fa";

const Home = () => {
  return (
    <section className='home'>
        <div className='informacoes'>
            <h1>Olá! Sou João Victor</h1>
            <p>Sou graduando em Licenciatura da Computação pela Universidade Federal Rural de Pernambuco</p>
            <p>
            Estou em busca de novas oportunidades em Desenvolvimento Web, com o objetivo de aplicar meus conhecimentos em soluções práticas, aprender continuamente e agregar valor por meio do trabalho em equipe e da adoção de boas práticas do mercado.
            </p>

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
            <img src={fotoPerfil} alt="foto do portfólio do João" />
          </div>
        </div>
    </section>
  )
}

export default Home;