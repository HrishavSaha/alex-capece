'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => { setMenuOpen(false) }, [pathname]);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <Link href='/' className={styles.brand}>Alex Capece</Link>

            <button className={`${styles.toggle} ${menuOpen ? styles.open : ''}`} onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
                <span /><span /><span />
            </button>

            <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
                <li>
                    <Link href='/' className={pathname === '/' ? styles.active : ''}>Work</Link>
                </li>
                <li>
                    <Link href='/about' className={pathname === '/about' ? styles.active : ''}>About&nbsp;/&nbsp;Contact</Link>
                </li>
            </ul>
        </nav>
    );
}