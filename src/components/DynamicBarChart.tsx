import { useEffect, useState } from "react";

const categorias = ["Clientes", "Contratos", "Ventas", "Conversión"];
const maxValor = 120;

export default function DynamicBarChart() {
  const [valores, setValores] = useState([0, 0, 0, 0]);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1280) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nuevosValores = categorias.map(() =>
        Math.floor(Math.random() * (maxValor - 30) + 30)
      );
      setValores(nuevosValores);
    }, 800);

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => clearInterval(interval);
  }, []);

  return (
    <svg width={isMobile ? "260" : "340"} height={isMobile ? "220" : "240"}>
      <defs>
        <linearGradient id="barra-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-primary-700)" />
          <stop offset="100%" stopColor="var(--color-primary-900)" />
        </linearGradient>
      </defs>
      <line x1="0" y1="200" x2="340" y2="200" stroke="#ccc" strokeWidth="1.5" />
      {[0.25, 0.5, 0.75, 1].map((frac, idx) => {
        const height = 180;
        const y = frac * (height - 30);
        return (
          <line
            key={`grid-${idx}`}
            x1="0"
            y1={y}
            x2="360"
            y2={y}
            stroke="#e0e0e0"
            strokeDasharray="4"
            strokeWidth="1"
          />
        );
      })}
      {valores.map((valor, i) => {
        const barWidth = 40;
        const spacing = isMobile ? 20 : 48;
        const height = 200;
        const bottomPadding = 30;
        const barHeight = (valor / maxValor) * (height - bottomPadding);
        const x = 20 + i * (barWidth + spacing);
        const y = height - barHeight;

        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              fill="url(#barra-gradient)"
              id={`bar-${i}`}
              style={{
                transition: "all 0.8s ease-in-out",
              }}
            />

            <text
              x={x + barWidth / 2}
              y={height + 20}
              textAnchor="middle"
              fontSize="10"
              fontWeight={"bold"}
              fill="#000"
            >
              {categorias[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
