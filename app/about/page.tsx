import { Metadata } from "next";
import styles from './About.module.css';

export const metadata: Metadata = {
    title: 'About/Contact - Alex Capece',
};

export default function AboutPage() {
    return (
        <section className={styles.about}>
            <div className={styles.grid}>

                <h1 className={styles.name}>Alex<br />Capece</h1>

                <div className={styles.bio}>
                    <p>
                        Alex Capece is a Washington, D.C.-based photographer and Captain
                        with the D.C. Fire and EMS Department. His work documents public
                        life, civic moments, and the spaces where the ordinary and
                        extraordinary intersect — from the streets of the American capital
                        to across Europe.
                    </p>
                    <p>
                        His photographs have been featured in{' '}
                        <em>The Washington Post Magazine</em>, among other publications.
                    </p>
                </div>

                <div className={styles.contact}>
                    <p className={styles.contactLabel}>Contact</p>
                    <a href="mailto:alex.capece@gmail.com" className={styles.contactEmail}>alex.capece@gmail.com</a>
                </div>

                <hr className={styles.divider} />
                <p className={styles.footnote}>
                    For assignment inquiries, licensing, or general correspondence
                </p>

            </div>
        </section>
    )
}