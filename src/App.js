import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import Navbar from './components/Navbar';
import { Songs } from './context';
import DataSongs from './data/songs.json';

function App() {
    return (
        <div className="App">
            <Songs.Provider value={{ DataSongs }}>
                <Navbar />

                <div className="grid grid-cols-3 h-screen-navbar-player">
                    <DetailSong />
                    <ListSong />
                </div>
            </Songs.Provider>
        </div>
    );
}

export default App;
