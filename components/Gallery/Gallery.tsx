import Image from "next/image";
import { IMAGES } from "@/data/images";
import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <p className={styles.title}>
        Washington is a city of institutions, and these photographs look for the people
        inside them — in the moments before and after the official record. Some were made
        elsewhere, but the subject is the same: ordinary life, briefly caught.
      </p>
      {IMAGES.map((img, i) => (
        <div key={i} className={styles.item}>
          <Image
            src={img.src}
            alt={img.alt}
            width={1600}
            height={900}
            sizes="(max-width: 1200px) 100vw, 1200px"
            className={styles.img}
            priority={i === 0}
            placeholder={i > 0 ? "blur" : "empty"}
            blurDataURL={
              img.blurDataURL ??
              "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            }
          />
          <p className={styles.caption}>{img.caption}</p>
        </div>
      ))}
    </div>
  );
}
