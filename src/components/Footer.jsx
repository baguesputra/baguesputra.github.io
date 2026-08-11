export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-brand">
          <span className="brand-dot" /> bagues<em>putra</em>
        </p>
        <p className="footer-meta">
          Designed &amp; built with React · <span className="gradient-text">Bagues Putra</span> © {year}
        </p>
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
          ↑
        </button>
      </div>
    </footer>
  )
}
