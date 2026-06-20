// The following code is a modified version of the following link
// https://thomasmoran.dev/snippets/spotify-currently-playing/spotify-currently-playing/

import { access } from 'fs'
import fetch from 'node-fetch'
import querystring from 'querystring'

const clientID = process.env.CLIENTID
const clientSecret = process.env.CLIENT_SECRET
const refreshToken = process.env.REFRESH_TOKEN

const TOKEN_URL = `https://accounts.spotify.com/api/token`
const basicAuth = Buffer.from(`${clientID}:${clientSecret}`).toString('base64')

const NOW_PLAYING_URL = `https://api.spotify.com/v1/me/player/currently-playing`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  })

  return response.json()
}

const getCurrentSong = async () => {
    const {access_token} = await getAccessToken()

    return fetch(NOW_PLAYING_URL, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    })
}

const handler = async (req, res) => {
    const response = await getCurrentSong()

    if (response.status === 204 || response.status > 400) {
	  return res.status(200).json({ isPlaying: false })
	}

	const song = await response.json()
	const isPlaying = song.is_playing
	const title = song.item.name
	const artist = song.item.artists.map(_artist => _artist.name).join(', ')
	const album = song.item.album.name
	const albumImageUrl = song.item.album.images[0].url
	const songUrl = song.item.external_urls.spotify
	const duration = song.item.duration_ms
	const progress = song.progress_ms

	res.status(200).json({
		album,
		albumImageUrl,
		artist,
		isPlaying,
		songUrl,
		title,
		duration,
		progress
	})
}

export default handler