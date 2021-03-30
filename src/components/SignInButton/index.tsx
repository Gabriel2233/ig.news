import styles from './styles.module.scss'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton() {
  const isLoggedIn = true

  return isLoggedIn ? (
    <button className={styles.signInButton} type="button">
      <FaGithub style={{ color: "#84d361" }} />
      Sign in with GitHub
      <FiX style={{ color: "#737380" }} className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      <FaGithub style={{ color: "#eba417" }} />
      Sign in with GitHub
    </button>
  )
}
