import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../context';

function Playing() {
    const { song, handleSetSong } = useContext(Songs);

    const handleNext = () => {
        handleSetSong(song.id + 1);
    };

    const handlePrevious = () => {
        handleSetSong(song.id - 1);
    };

    return (
        <div>
            <AudioPlayer
                src={song.url}
                layout="horizontal"
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={handleNext}
                onClickPrevious={handlePrevious}
            />
        </div>
    );
}

export default Playing;
