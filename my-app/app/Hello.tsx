import { useState, useEffect } from "react";

const letters = ["H", "E", "L", "L", "O"];

export default function HelloPage() {
  const [visible, setVisible] = useState(false);
  const [ring, setRing] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
    setTimeout(() => setRing(true), 1000);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Georgia', serif",
      overflow: "hidden",
      position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Lato:wght@300&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .letter {
          display: inline-block;
          font-family: 'Playfair Display', serif;
          font-size: clamp(80px, 15vw, 180px);
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 2px #fff;
          opacity: 0;
          transform: translateY(60px) rotate(-8deg);
          transition: opacity 0.6s ease, transform 0.6s ease;
          cursor: default;
          position: relative;
        }
        .letter.show {
          opacity: 1;
          transform: translateY(0) rotate(0deg);
        }
        .letter:hover {
          color: #f0c040;
          -webkit-text-stroke: 2px #f0c040;
          transform: scale(1.15) rotate(-4deg) !important;
          transition: all 0.2s ease !important;
        }

        .subtitle {
          font-family: 'Lato', sans-serif;
          font-weight: 300;
          font-size: clamp(14px, 2vw, 20px);
          letter-spacing: 0.4em;
          color: #888;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 1.2s, transform 0.8s ease 1.2s;
          margin-top: 24px;
        }
        .subtitle.show {
          opacity: 1;
          transform: translateY(0);
        }

        .ring-wrapper {
          position: relative;
          margin-bottom: 40px;
        }

        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinRingReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }

        .ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid transparent;
          pointer-events: none;
          opacity: 0;
          transition: opacity 1s ease;
        }
        .ring.show {
          opacity: 1;
        }
        .ring-1 {
          width: 340px; height: 340px;
          top: 50%; left: 50%;
          margin: -170px 0 0 -170px;
          border-color: rgba(240,192,64,0.4);
          animation: spinRing 8s linear infinite;
          border-top-color: #f0c040;
        }
        .ring-2 {
          width: 420px; height: 420px;
          top: 50%; left: 50%;
          margin: -210px 0 0 -210px;
          border-color: rgba(255,255,255,0.1);
          animation: spinRingReverse 12s linear infinite;
          border-right-color: rgba(255,255,255,0.4);
        }
        .ring-3 {
          width: 500px; height: 500px;
          top: 50%; left: 50%;
          margin: -250px 0 0 -250px;
          border-color: rgba(240,192,64,0.1);
          animation: spinRing 20s linear infinite;
          border-bottom-color: rgba(240,192,64,0.3);
        }

        .center-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #f0c040;
          position: absolute;
          top: 50%; left: 50%;
          margin: -4px 0 0 -4px;
          animation: pulse 2s ease-in-out infinite;
          opacity: 0;
          transition: opacity 1s ease 0.8s;
        }
        .center-dot.show { opacity: 1; }

        .letters-row {
          display: flex;
          gap: clamp(8px, 2vw, 24px);
          position: relative;
          z-index: 2;
        }

        .bg-noise {
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
          opacity: 0.4;
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      <div className="bg-noise" />

      <div className="ring-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className={`ring ring-1 ${ring ? "show" : ""}`} />
        <div className={`ring ring-2 ${ring ? "show" : ""}`} />
        <div className={`ring ring-3 ${ring ? "show" : ""}`} />
        <div className={`center-dot ${ring ? "show" : ""}`} />

        <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <div className="letters-row">
            {letters.map((l, i) => (
              <span
                key={i}
                className={`letter ${visible ? "show" : ""}`}
                style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
              >
                {l}
              </span>
            ))}
          </div>
          <p className={`subtitle ${visible ? "show" : ""}`}>
            this page is ringing
          </p>
        </div>
      </div>
    </div>
  );
}