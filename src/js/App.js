import React, { Component } from "react";
import AppContext from "./AppContext";
import Container from "./components/Container/Container";
import data from "./data.json";
class App extends Component {
  constructor() {
    super();
    this.state = {
      loadedCode: 0,
      activeSongIndex: null,
      playlistName: "",
      playlist: [],
      alertMsg: ""
    };
  }

  componentDidMount = () => {
    this.setPlaylist();
  };

  setPlaylist = async () => {
    if (data.name && Array.isArray(data.playlist)) {
      try {
        const index = await this.checkPlaylistsInLocalStorage(data.name);

        this.setState({
          playlist: data.playlist,
          playlistName: data.name,
          activeSongIndex: index,
          loadedCode: 200
        });
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
          return resolve(0);
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
      JSON.stringify([{ name: playlistName, currentSong: 0 }])
    );
  };

  findPlayListIndex = (playlists, playlistName) => {
    const index = this.isPlaylistExist(playlists, playlistName);

    if (index == -1) {
      this.addNewPlaylsitToLocalStorage(playlists, playlistName);
      return 0;
    }
    return index;
  };

  isPlaylistExist = (playlists, playlistName) => {
    return playlists.findIndex(elem => elem.name === playlistName);
  };

  addNewPlaylsitToLocalStorage = (playlists, playlistName) => {
    localStorage.setItem(
      "playlists",
      JSON.stringify([...playlists, { name: playlistName, currentSong: 0 }])
    );
  };

  setActiveSongIndex = index => {
    this.setState({
      activeSongIndex: index
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          playlist: this.state.playlist,
          activeSongIndex: this.state.activeSongIndex,
          setActiveSongIndex: this.setActiveSongIndex
        }}
      >
        <div className="widnow__container">
          <Container />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
