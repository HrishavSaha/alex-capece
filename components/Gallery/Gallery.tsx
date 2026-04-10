import Image from "next/image";
import { IMAGES } from "@/data/images";
import styles from './Gallery.module.css';

export default function Gallery() {
    return (
        <div className={styles.gallery}>
            {IMAGES.map((img, i) => (
                <div key={i} className={styles.item}>
                    <Image src={img.src} alt={img.alt} width={1600} height={900} className={styles.img} priority={i < 3} />
                </div>
            ))}
        </div>
    );
}