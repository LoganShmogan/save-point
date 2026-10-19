import styles from "@/app/serviceComponent/service.module.css";
import buttons from "@/app/shared/button.module.css";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Automation",
    description:
      "Smart devices for your home or business (IoT), such as Arduino, Raspberry Pi, Elegoo and more, set up to do the repetitive jobs for you.",
    image: "/ads/Hourglass (1250 x 1250).png",
    alt: "Pixel-art hourglass, representing time saved by automation",
  },
  {
    title: "Custom Software",
    description:
      "Systems built for the way you work, including databases, customer management (CRM), point of sale (POS) and more.",
    image: "/ads/Lightbulb (1250 x 1250).png",
    alt: "Pixel-art lightbulb, representing custom software ideas",
  },
  {
    title: "Web Applications",
    description:
      "Websites and online tools that work on phones, tablets and computers, for new startups or established businesses.",
    image: "/ads/Coin (1250 x 1250).png",
    alt: "Pixel-art gold coin, representing web applications for business",
  },
];

const Service = () => {
  return (
    <section id="services" className={styles.section}>
      {/*Services heading*/}
      <div className={styles.heading}>
        <p className={styles.eyebrow}>What we do</p>
        <h2 className={styles.title}>Services</h2>
        <p className={styles.lead}>
          Three ways we can help. Not sure which you need? Get in touch and
          we&apos;ll talk it through with you. No jargon, no obligation.
        </p>
      </div>
      {/*Services cards*/}
      <div className={styles.grid}>
        {services.map((service) => (
          <article key={service.title} className={styles.card}>
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
              <p className={styles.cardText}>{service.description}</p>
              <Link href="/pricing" className={buttons.buttonDark}>
                View packages
                <span className="visually-hidden"> for {service.title}</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Service;
