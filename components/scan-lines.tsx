interface ScanLinesProps {
  density?: number
  opacity?: number
}

export function ScanLines({ density = 1, opacity = 0.05 }: ScanLinesProps) {
  // Generate an SVG with horizontal lines for the scan line effect
  const lineHeight = 3 * density
  const lineGap = 3 * density
  const totalHeight = 1000 // Large enough to cover any container

  const lines = []
  for (let i = 0; i < totalHeight / (lineHeight + lineGap); i++) {
    const yPos = i * (lineHeight + lineGap)
    lines.push(`<rect x="0" y="${yPos}" width="100%" height="${lineHeight}" fill="white" />`)
  }

  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 ${totalHeight}" preserveAspectRatio="none">
      ${lines.join("")}
    </svg>
  `

  const base64Svg = Buffer.from(svgContent).toString("base64")

  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 mix-blend-overlay"
      style={{
        backgroundImage: `url(data:image/svg+xml;base64,${base64Svg})`,
        backgroundSize: `100% 100%`,
        opacity,
      }}
    />
  )
}
