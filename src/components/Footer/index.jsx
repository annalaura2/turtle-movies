import { FooterContainer } from './styles'

import { FaGithub } from 'react-icons/fa'

export function Footer() {
  return (
    <footer>
      <FooterContainer>
      <h5>
        &copy; 2025 {' '}
        <a href="https://portfolio-anna-laura.vercel.app/" target="_blank">
         Anna Laura 
        </a>
      </h5>
      <p>
        <a href="https://github.com/annalaura2/turtle-movies" target="_blank">
          <FaGithub />
        </a>
      </p>
    </FooterContainer>
    </footer>
  )
}
