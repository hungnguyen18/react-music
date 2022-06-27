import React from 'react';

function ListSong() {
    return (
        <div className="col-span-2">
            <table className="table-auto w-full">
                <thead className="h-12">
                    <tr>
                        <th className="w-[10%]">#</th>
                        <th className="text-left">Title</th>
                        <th className="w-[10%]">Author</th>
                        <th className="w-[10%]">
                            <i class="fa-regular fa-clock"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">001</td>
                        <td>002</td>
                        <td>003</td>
                        <td>004</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ListSong;
