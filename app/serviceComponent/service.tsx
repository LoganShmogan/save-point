import styles from "@/app/serviceComponent/service.module.css";
import buttons from "@/app/shared/button.module.css";
import Image from "next/image";
import Link from "next/link";
import { services, type ServiceInfo } from "@/app/services/servicesData";
import { starters } from "@/app/pricing/packages";

// Cheapest way in: the ready-made starter or the custom "from" price
const toNumber = (price: string) => Number(price.replace(/[^0-9]/g, ""));

const lowestPrice = (service: ServiceInfo) => {
  const starter = starters.find((s) => s.id === service.starterId);
  if (starter && toNumber(starter.price) < toNumber(service.customFrom)) {
    return starter.price;
  }
  return service.customFrom;
};

const Service = () => {
  return (
    <section id="services" className={styles.section}>
      {/*Services heading*/}
      <div className={styles.heading}>
        <p className={styles.eyebrow}>What we do</p>
        <h2 className={styles.title}>Services</h2>
        <p className={styles.lead}>
          Automation is at the heart of everything we build, backed by the
          kiosks, apps, software and websites to make it work. Not sure which
          you need? We&apos;ll talk it through with you. No jargon, no
          obligation.
        </p>
      </div>
      {/*Services cards: automation first and featured*/}
      <div className={styles.grid}>
        {services.map((service, index) => (
          <article
            key={service.id}
            className={`${styles.card} ${index === 0 ? styles.featured : ""}`}
          >
            <div className={styles.cardImage}>
              <Image
                src={service.image}
                alt={service.alt}
                width={140}
                height={140}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.summary}</p>
              <p className={styles.cardPrice}>From {lowestPrice(service)}</p>
              <Link
                href={`/services#${service.id}`}
                className={buttons.buttonDark}
              >
                Learn more
                <span className="visually-hidden"> about {service.title}</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Service;
