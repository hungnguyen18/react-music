import React from 'react';

function DetailSong() {
    return (
        <div className="col-span-1 p-3">
            <h2 className="font-bold">Now playing</h2>
            <h2 className="text-2xl">I'll Show You</h2>
            <div className="w-[240px] mt-10">
                <img
                    className="w-full rounded-lg"
                    src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576"
                    alt=""
                />
            </div>
            <div className="flex items-center mt-10">
                <img
                    className="w-[70px] rounded-full"
                    src="https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de"
                    alt=""
                />
                <span className="text-xl ml-10">Justin Bieber</span>
            </div>
        </div>
    );
}

export default DetailSong;
