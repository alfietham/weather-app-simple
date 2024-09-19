export const metersPerSecToKph = (speedMps: number) =>
  speedMps !== undefined ? Math.round(speedMps * 3.6) : 'N/A'
