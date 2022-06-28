import React, { useContext } from 'react';
import { Songs } from '../context';

function DetailSong() {
    const { song } = useContext(Songs);

    return (
        <div className="col-span-1 p-3">
            <h2 className="font-bold">Now playing</h2>
            <h2 className="text-2xl">{song.name}</h2>
            <div className="w-[240px] mt-10">
                <img
                    className="w-full rounded-lg"
                    src={song.links.images[0].url}
                    alt=""
                />
            </div>
            <div className="flex items-center mt-10">
                <img
                    className="w-[70px] rounded-full"
                    src={song.links.images[1].url}
                    alt=""
                />
                <span className="text-xl ml-10">{song.author}</span>
            </div>
        </div>
    );
}

export default DetailSong;
