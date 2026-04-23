export default function HomePage() {
  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <h1>MH LEGAL</h1>
        <p>Corporate Insurance Brokerage</p>
      </header>

      <section style={styles.section}>
        <h2>About Us</h2>
        <p>
          MH LEGAL is a corporate insurance brokerage that partners with leading insurers
          to drive market reach and sales performance.
        </p>
        <p>
          We manage a nationwide network of over 100 professionally trained field agents
          delivering compliant, client-focused insurance services.
        </p>
        <p>
          Through our partnership with Mthashana TVET College, we provide structured in-service training
          and career development opportunities.
        </p>
      </section>

      <section style={styles.section}>
        <h2>What We Do</h2>
        <ul>
          <li>Insurance Sales & Distribution</li>
          <li>Agent Training & Development</li>
          <li>Corporate Insurance Solutions</li>
          <li>Nationwide Field Operations</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Our Network</h2>
        <p>Over 100 trained field agents operating across South Africa.</p>
      </section>

      <section style={styles.section}>
        <h2>Apply for a Job</h2>
        <p>Join our growing network of professionals.</p>
        <form style={styles.form}>
          <input type="text" placeholder="Full Name" style={styles.input} />
          <input type="email" placeholder="Email Address" style={styles.input} />
          <input type="tel" placeholder="Phone Number" style={styles.input} />
          <textarea placeholder="Why do you want to join MH LEGAL?" style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Submit Application</button>
        </form>
      </section>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} MH LEGAL. All rights reserved.</p>
      </footer>
    </main>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "0",
    margin: "0",
    lineHeight: "1.6",
    color: "#111",
  },
  header: {
    backgroundColor: "#0f172a",
    color: "white",
    padding: "60px 20px",
    textAlign: "center",
  },
  section: {
    padding: "40px 20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    minHeight: "100px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#0f172a",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f1f5f9",
    marginTop: "40px",
  },
