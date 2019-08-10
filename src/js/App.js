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
      nextSongId: {},
      shuffleHistory: [],
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
    window.addEventListener("resize", this.updateDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  updateDimensions = () => {
    console.log("skalowanie");
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
        const nextSongId = this.setNextSongData(
          loadedPlaylist,
          currentSongId,
          options,
          false
        );
        await this.setState({
          playlist: loadedPlaylist,
          playlistName: data.name,
          currentSongId,
          options,
          nextSongId,
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
          return resolve(1);
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
      JSON.stringify([{ name: playlistName, currentSongId: 1 }])
    );
  };

  findPlayListIndex = (playlists, playlistName) => {
    const index = this.isPlaylistExist(playlists, playlistName);

    if (index == -1) {
      this.addNewPlaylsitToLocalStorage(playlists, playlistName);
      return 1;
    }
    return playlists[index].currentSongId;
  };

  isPlaylistExist = (playlists, playlistName) => {
    return playlists.findIndex(elem => elem.name === playlistName);
  };

  addNewPlaylsitToLocalStorage = (playlists, playlistName) => {
    localStorage.setItem(
      "playlists",
      JSON.stringify([...playlists, { name: playlistName, currentSongId: 1 }])
    );
  };

  setActiveSongId = index => {
    this.setState({
      currentSongId: index
    });
  };

  getUserConfig = async () => {
    const options = JSON.parse(await localStorage.getItem("options"));

    if (!options) {
      const defaultOptions = { shuffle: false, reapeatCurrent: false };
      localStorage.setItem("options", JSON.stringify(defaultOptions));
      return defaultOptions;
    }
    return options;
  };

  setNextSongData = (playlist, currentSongId, options, force) => {
    let nextSongId = 1;
    if (options.reapeatCurrent && !force) nextSongId = currentSongId;
    else if (options.shuffle)
      nextSongId = this.getRandomSong(playlist, currentSongId);
    else if (playlist[currentSongId + 1]) nextSongId = currentSongId + 1;
    return nextSongId;
  };

  getRandomSong = (playlist, currentSongId) => {
    const filteredPlayList = Object.keys(playlist)
      .filter(key => !playlist[key].played && playlist[key].id != currentSongId)
      .map(key => playlist[key]);

    const maxRange = filteredPlayList.length;
    const randomIndex = Math.floor(Math.random() * (maxRange - 0));

    return filteredPlayList[randomIndex]
      ? filteredPlayList[randomIndex].id
      : -1;
  };

  setOption = (name, value) => {
    let { options, shuffleHistory } = this.state;
    options[name] = value ? true : false;
    if (name == "shuffle" && !value) shuffleHistory = [];
    localStorage.setItem("options", JSON.stringify(options));
    this.setState({
      options,
      shuffleHistory
    });
  };

  resetAllSongs = async () => {
    const { playlist } = this.state;
    Object.keys(playlist).forEach(key => (playlist[key].played = false));
    await this.setState({
      playlist
    });
  };

  setNextSongActive = () => {
    const { playlist, currentSongId, options, shuffleHistory } = this.state;
    playlist[currentSongId].played = true;
    const nextSongId = this.setNextSongData(
      playlist,
      currentSongId,
      options,
      true
    );
    const newHistoryItem = {
      id: currentSongId,
      date: Date.now()
    };

    shuffleHistory.push(newHistoryItem);
    if (nextSongId < 0) {
      this.resetAllSongs();

      this.setState({
        shuffleHistory,
        currentSongId: 1
      });
    } else {
      this.setState({
        shuffleHistory,
        currentSongId: nextSongId
      });
    }
  };

  setPrevSong = () => {
    const { playlist, currentSongId, options, shuffleHistory } = this.state;
    let prevSong = 1;
    if (options.shuffle) {
      const last = shuffleHistory.sort((a, b) => a.date - b.date).pop();
      if (last) {
        this.setState({
          shuffleHistory,
          currentSongId: last.id
        });
        return;
      } else {
        this.setAlertMsg({ text: "Historia pusta", clear: true });
      }
    }

    if (playlist[currentSongId - 1]) {
      prevSong = currentSongId - 1;
    }
    this.setState({
      currentSongId: prevSong
    });

    return;
  };

  render() {
    const {
      loadedCode,
      playlist,
      currentSongId,
      nextSongId,
      options
    } = this.state;
    console.log(this.state);
    return (
      <AppContext.Provider
        value={{
          playlist: playlist,
          currentSongId: currentSongId,
          setActiveSongId: this.setActiveSongId,
          nextSongId: nextSongId,
          options: options,
          setOption: this.setOption,
          setNextSongActive: this.setNextSongActive,
          setPrevSong: this.setPrevSong
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
