import styles from "@/app/shared/page.module.css";

const PageHero = ({ title, lead }: { title: string; lead?: string }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>{title}</h1>
        {lead && <p className={styles.heroLead}>{lead}</p>}
      </div>
    </div>
  );
};

export default PageHero;
