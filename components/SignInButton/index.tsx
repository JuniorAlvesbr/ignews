import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const userIsLogged = false;

  return userIsLogged ? (
    <button
      type="button"
      className={styles.signInButton}>
      <FaGithub color="#04D361" className={styles.gitIcon} />
      junioralvesbr
      <FiX color="#737388" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}>
      <FaGithub color="#EBA417" className={styles.gitIcon} />
      Sign in with Github
    </button>
  )
}