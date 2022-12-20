'use client'
import HeaderLink from './HeaderLInk'
// styles will be an object and the specific styles will be on that
import styles from './header.module.css'


export default function Blog() {
    return (
        <div className={styles.header}>
            <h1>Logo</h1>
           <HeaderLink />
        </div>
    )
}