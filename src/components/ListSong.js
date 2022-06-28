import React, { useContext, useEffect, useState } from 'react';
import { Songs } from '../context';

function ListSong() {
    const { DataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setIdSong] = useState(null);

    const handlePlaySong = (id) => {
        setIdSong(id);

        handleSetSong(id);
    };

    useEffect(() => setIdSong(song.id), [song]);

    return (
        <div className="col-span-2 overflow-y-scroll">
            <table className="table-auto w-full">
                <thead className="h-12">
                    <tr>
                        <th className="w-[10%]">#</th>
                        <th className="text-left">Title</th>
                        <th className="w-[10%] text-left">Author</th>
                        <th className="w-[10%] text-right">
                            <i className="fa-regular fa-clock"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {DataSongs.map((song, i) => (
                        <tr
                            className={`h-12 hover:text-red-600 cursor-pointer ${
                                idSong === song.id && 'text-red-600'
                            }`}
                            key={i}
                            onClick={() => handlePlaySong(song.id)}
                        >
                            <td className="text-center">{i + 1}</td>
                            <td>{song.name}</td>
                            <td>{song.author}</td>
                            <td className="text-right">004</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListSong;
