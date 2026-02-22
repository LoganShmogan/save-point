export default function Home() {
  return (
    <main className="page">

      {/* SYSTEM HEADER */}
      <div className="topbar">
        <div className="logo">SAVE POINT LTD</div>
        <div className="nav">WORK • SERVICES • CONTACT</div>
      </div>

      {/* HERO */}
      <section className="block hero">
        <span className="block-id">00000001</span>
        <h1>
          DIGITAL<br />
          SYSTEM<br />
          OPTIMISATION
        </h1>
        <p>
          Modernising and upgrading existing business software.
          We bridge the gap between your current systems and
          future performance.
        </p>
        <button className="cta">REQUEST CONSULTATION</button>
      </section>

      {/* SERVICES GRID */}
      <section className="grid">

        <div className="block">
          <span className="block-id">00000002</span>
          <h2>SOFTWARE CUSTOMISATION</h2>
          <p>
            Modify internal systems to align with
            operational workflow.
          </p>
        </div>

        <div className="block accent">
          <span className="block-id">00000003</span>
          <h2>WEB DEVELOPMENT</h2>
          <p>
            High-performance websites and
            modern web applications.
          </p>
        </div>

        <div className="block">
          <span className="block-id">00000004</span>
          <h2>MAINTENANCE & SUPPORT</h2>
          <p>
            Security updates, optimisation,
            and long-term system stability.
          </p>
        </div>

        <div className="block accent">
          <span className="block-id">00000005</span>
          <h2>E-COMMERCE SYSTEMS</h2>
          <p>
            Scalable commerce platforms
            integrated into your ecosystem.
          </p>
        </div>

      </section>

      {/* CONTACT */}
      <section className="block contact">
        <span className="block-id">00000006</span>
        <h2>CONTACT</h2>
        <p>contact@savepoint.cc</p>
        <p>+64 021 065 3792</p>
      </section>

    </main>
  );
}