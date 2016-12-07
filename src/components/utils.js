// Global utility function for app (time handling)

// if n < 10 returns 0n as string
function o(n) {
  return n < 10 ? '0' + n : n;
}

// -3 => -03, 5 => +05
function timezoneO(n) {
  let m = n < 0 ? '-' : '+';
  if (n < 10 && n > -10) m += 0;
  if (n < 0) n *= -1;
  return m + n;
}

function formatMsToTime(ms) {
  // Seconds
  const s = Math.floor(ms / 1000 % 60);
  // Minutes
  const m = Math.floor(ms / 1000 / 60 % 60);
  // Hours
  const h = Math.floor(ms / (1000 * 60 * 60) % 24);
  // Days
  const d = Math.floor(ms / (1000 * 60 * 60 * 24));

  if (d > 0) return d + ' days ' + h + ' hours';
  if (h > 0) return h + ' hours ' + m + ' minutes';
  return o(m) + ':' + o(s);
}
