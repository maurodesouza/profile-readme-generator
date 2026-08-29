import '#/styles/global.css';

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body data-theme="dark" className="palette-surface">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            gap: '0.5rem',
            padding: '1rem',
            textAlign: 'center',
          }}
        >
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>404</h1>
          <p style={{ margin: 0 }}>Page not found.</p>
        </div>
      </body>
    </html>
  );
}
