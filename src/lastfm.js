// Injected at build time by Vite from .env (local) or Netlify env vars (prod).
// Note: a Last.fm *read* key is sent in plaintext on every request anyway, so
// this is still visible in the shipped bundle — .env just keeps it out of git.
const API_KEY = import.meta.env.VITE_LASTFM_API
const USERNAME = import.meta.env.VITE_LASTFM_USERNAME
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/'

// buildUrl takes a method name and extra params, returns a full API URL.
// URLSearchParams automatically encodes everything (spaces, special chars, etc.)
function buildUrl(method, params = {}) {
  const query = new URLSearchParams({
    method,
    user: USERNAME,
    api_key: API_KEY,
    format: 'json',
    ...params,
  })
  return `${BASE_URL}?${query}`
}

// fetch is built into the browser — no import needed (unlike the Node.js spotify.js)
export async function getTopAlbums(period = '1month', limit = 9) {
  const url = buildUrl('user.getTopAlbums', { period, limit })
  const res = await fetch(url)
  const data = await res.json()
  // Last.fm wraps results: data.topalbums.album is the array we want
  return data.topalbums.album
}

export async function getTopArtists(period = '1month', limit = 9) {
  const url = buildUrl('user.getTopArtists', { period, limit })
  const res = await fetch(url)
  const data = await res.json()
  return data.topartists.artist
}

export async function getRecentTracks(limit = 5) {
  const url = buildUrl('user.getRecentTracks', { limit })
  const res = await fetch(url)
  const data = await res.json()
  return data.recenttracks.track
}
