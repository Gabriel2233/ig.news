import styles from './styles.module.scss'

type ButtonProps = {
  priceId: string
}

export function SubscribeButton({ priceId }: ButtonProps) {

  console.log(priceId)
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  )
}
