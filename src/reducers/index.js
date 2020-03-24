import {combineReducers} from 'redux'

const songsReducer = () => {
    return [
        {title :'No Scrub', duration : '4:06'},
        {title :'Best player', duration : '5:06'},
        {title :'I am no 6', duration : '6:06'}

    ]
}


const selectedSongReducer  = (selectedSong = null,action) => {
    switch (action.type){
        case 'SONG_SELECTED':
            return action.payload
        default :
            return selectedSong

    }
}

export default combineReducers({
    songs : songsReducer,
    selectedSong : selectedSongReducer
})