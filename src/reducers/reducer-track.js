export default function (state = {}, { type, track, cover_xl, cover_medium }) {
    switch (type) {
        case 'CHANGE_TRACK':
            return track.album ? { ...track } : { ...track, ...{ album: { cover_xl, cover_medium } }}
        default:
            return state
    }
}
