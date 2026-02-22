import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faCheckCircle,
  faCogs,
  faShoppingCart,
  faLaptopCode,
  faShieldAlt,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="page">

      {/* HEADER STRIP */}
      <div className="topbar">
        <div>SAVE POINT LTD</div>
        <div>WORK • SERVICES • CONTACT</div>
      </div>

      {/* HERO BLOCK */}
      <section className="block hero">
        <span className="block-id">00000001</span>
        <h1>DIGITAL SYSTEM OPTIMISATION</h1>
        <p>
          Modernising and upgrading existing business software.
          We bridge the gap between your current systems and
          future performance.
        </p>
        <button className="cta">REQUEST CONSULTATION</button>
      </section>

      {/* GRID SECTION */}
      <section className="grid">
        <div className="block">
          <span className="block-id">00000002</span>
          <h2>SOFTWARE CUSTOMISATION</h2>
          <p>
            Modify existing internal systems to align with
            your operational workflow.
          </p>
        </div>

        <div className="block accent-purple">
          <span className="block-id">00000003</span>
          <h2>WEB DEVELOPMENT</h2>
          <p>
            High-performance websites and applications built
            using modern stacks.
          </p>
        </div>

        <div className="block">
          <span className="block-id">00000004</span>
          <h2>MAINTENANCE & SUPPORT</h2>
          <p>
            Security updates, optimisation, documentation,
            and long-term system support.
          </p>
        </div>

        <div className="block accent-yellow">
          <span className="block-id">00000005</span>
          <h2>E-COMMERCE SYSTEMS</h2>
          <p>
            Scalable commerce solutions integrated into
            existing business ecosystems.
          </p>
        </div>
      </section>

      {/* CONTACT BLOCK */}
      <section className="block contact">
        <span className="block-id">00000006</span>
        <h2>CONTACT</h2>
        <p>contact@savepoint.cc</p>
        <p>+64 021 065 3792</p>
      </section>

    </main>
  );
}