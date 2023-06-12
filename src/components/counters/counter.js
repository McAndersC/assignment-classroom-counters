'use client';
import styles from './counters.module.css'; 

export default function Counter() {

    return (

        <div className={styles.counter}>
            <p>Vi har klikket 0 gange</p>
            <button>Tæl Op</button>
        </div>
        
    );
}