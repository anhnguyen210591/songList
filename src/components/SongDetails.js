import React from 'react'
import {connect} from 'react-redux'

const songDetails =({mySelectedSong})=>{
    console.log('title',mySelectedSong)
    if (!mySelectedSong){
        return <div>defaul page</div>
    }
    return <div>
            <h3>Details for</h3>
            <p>
                Title : {mySelectedSong.title},
                Duration : {mySelectedSong.duration}
            </p>
             </div>
}

const mapStateToProps =(state)=>{
    return {mySelectedSong : state.selectedSong}
}

export default connect (mapStateToProps)(songDetails)  