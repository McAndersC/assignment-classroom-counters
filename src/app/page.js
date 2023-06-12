import Image from 'next/image'
import styles from './page.module.css'
import Counter from '@/components/counters/counter'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>MCDM</div>

      <Counter></Counter>
    </main>
  )
}
