import React, { Component } from "react";
import AppContext from "./AppContext";
import Container from "./components/Container/Container";
import data from "./data.json";
class App extends Component {
  constructor() {
    super();
    this.state = {
      loadedCode: 0,
      currentSongId: -1,
      nextSong: {},
      playlistName: "",
      playlist: [],
      options: {
        shuffle: false,
        reapeatCurrent: false
      },
      alertMsg: ""
    };
  }

  componentDidMount = () => {
    this.setUserConfig();
  };

  setUserConfig = async () => {
    if (data.name && data.playlist["1"]) {
      try {
        const currentSongId = await this.checkPlaylistsInLocalStorage(
          data.name
        );
        const options = await this.getUserConfig(); //do napisania
        const loadedPlaylist = data.playlist;

        Object.keys(loadedPlaylist).forEach(key =>
          Object.assign(loadedPlaylist[key], { played: false })
        );

        await this.setState({
          playlist: loadedPlaylist,
          playlistName: data.name,
          currentSongId,
          options,
          loadedCode: 200
        });

        this.setNextSongData();
      } catch (err) {
        this.setState({
          loadedCode: 404
        });
        this.setAlertMsg({ text: err, clear: false });
      }
    }
  };

  setAlertMsg = async ({ text, clear }) => {
    console.log("ALERT! ", text);
    await this.setState({
      alertMsg: text
    });
    if (clear)
      setTimeout(() => this.setAlertMsg({ text: "", clear: false }), 1500);
  };

  checkPlaylistsInLocalStorage = playlistName => {
    return new Promise(async (resolve, reject) => {
      try {
        const playlists = JSON.parse(await localStorage.getItem("playlists"));
        if (!playlists) {
          this.createLocalStoragePlaylist(playlistName);
          return resolve("1");
        }
        const playListIndex = this.findPlayListIndex(playlists, playlistName);
        resolve(playListIndex);
      } catch (err) {
        reject("Problem z local storage.");
      }
    });
  };

  createLocalStoragePlaylist = playlistName => {
    localStorage.setItem(
      "playlists",
      JSON.stringify([{ name: playlistName, currentSongId: "1" }])
    );
  };

  findPlayListIndex = (playlists, playlistName) => {
    const index = this.isPlaylistExist(playlists, playlistName);

    if (index == -1) {
      this.addNewPlaylsitToLocalStorage(playlists, playlistName);
      return "1";
    }
    return playlists[index].currentSongId;
  };

  isPlaylistExist = (playlists, playlistName) => {
    return playlists.findIndex(elem => elem.name === playlistName);
  };

  addNewPlaylsitToLocalStorage = (playlists, playlistName) => {
    localStorage.setItem(
      "playlists",
      JSON.stringify([...playlists, { name: playlistName, currentSongId: "1" }])
    );
  };

  setActiveSongId = index => {
    this.setState({
      currentSongId: index
    });
  };

  getUserConfig = () => {
    return {
      shuffle: true,
      reapeatCurrent: false
    };
  };

  setNextSongData = () => {
    const { playlist, currentSongId, options } = this.state;
    let nextSong = playlist["1"];
    if (options.reapeatCurrent) nextSong = playlist[currentSongId];
    else if (options.shuffle)
      nextSong = this.getRandomSong(playlist, currentSongId);
    else if (playlist[currentSongId + 1])
      nextSong = playlist[currentSongId + 1];

    this.setState({
      nextSong
    });
  };

  getRandomSong = (playlist, currentSongId) => {
    const filteredPlayList = Object.keys(playlist)
      .filter(key => !playlist[key].played && playlist[key].id != currentSongId)
      .map(key => playlist[key])
      .sort((a, b) => a.id - b.id);

    const maxRange = filteredPlayList.length;
    const randomIndex = Math.floor(Math.random() * (maxRange - 0));

    return filteredPlayList[randomIndex];
  };

  render() {
    const { loadedCode, playlist, currentSongId, nextSong } = this.state;
    return (
      <AppContext.Provider
        value={{
          playlist: playlist,
          currentSongId: currentSongId,
          setActiveSongId: this.setActiveSongId,
          nextSong: nextSong
        }}
      >
        <div className="widnow__container">
          {loadedCode == 200 ? <Container /> : null}
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
