import React from 'react'
import SongList from './SongList'
import selectSong from '../actions'
import SongDetails from './SongDetails'

const App =()=>{
    return (
    <div className='ui container grid'>
            <div className='ui row'>
                <div className='ui column'>
                <SongList/>
                </div>
                <div className='ui column'>
                <SongDetails/>
                </div>
            </div>
        </div>
    )
}

export default App 