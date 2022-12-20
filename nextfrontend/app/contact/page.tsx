'use client'
import Link from 'next/link'
//by default, always makes components Server Side
import { useRouter } from 'next/navigation'

export default function Blog() {
    const router = useRouter()
    return (
    <div>
        <h1>Contact</h1> 
            <Link href="/">
                <h1>Home</h1> 
            </Link>
    </div>

    )
}