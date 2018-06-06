export const changePlaylistAction = chosenPlaylist => ({
    type: 'CHANGE_PLAYLIST',
    chosenPlaylist
})

export const changeAlbumAction = album => ({
    type: 'FIND_ALBUMSTRACKS',
    album
})

export const changeTrackAction = (track, cover_xl, cover_medium) => ({
    type: 'CHANGE_TRACK',
    track,
    cover_xl, 
    cover_medium
})

export const prevTrackAction = prev => ({
    type: 'PREV_TRACK',
    prev
})

export const changeArtistPlaylistAction = data => ({
    type: 'ARTIST_PLAYLIST',
    data
})