import React, { Component } from "react";
import AppContext from "./AppContext";
import Container from "./components/Container/Container";
import AppAlert from "./components/Globals/AppAlert/AppAlert";
import data from "./data.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bottomMenuShow: false,
      sideMenuShow: false,
      play: false,
      currenttime: 0,
      loadedCode: 0,
      currentSongId: -1,
      nextSongId: -1,
      shuffleHistory: [],
      playlistName: "",
      playlist: [],
      options: {
        shuffle: false,
        reapeatCurrent: false
      },
      alertMsg: ""
    };
    this._playTimeout = null;
  }

  componentDidMount = () => {
    this.setUserConfig(data);
  };

  setUserConfig = async data => {
    if (data && data.name && data.playlist[1]) {
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
    } else {
      this.setAlertMsg({ text: "Proszę załadować playlistę", clear: false });
    }
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

  setNextSongId = () => {};

  setActiveSongId = async index => {
    const { playlist, options } = this.state;
    const nextSongId = this.setNextSongData(playlist, index, options);
    clearTimeout(this._playTimeout);
    await this.setState({
      nextSongId: nextSongId,
      currentSongId: index,
      currenttime: 0,
      play: true
    });
    this.startSong();
  };

  controlPlaySong = async bool => {
    await this.setState({
      play: bool
    });
    if (bool) this.startSong();
    else clearTimeout(this._playTimeout);
  };

  startSong = () => {
    const { play, currenttime, playlist, currentSongId } = this.state;
    console.log("startSong", currenttime);
    if (play) {
      this._playTimeout = setTimeout(async () => {
        if (currenttime == playlist[currentSongId].time) {
          this.setNextSongActive();
          return;
        } else {
          this.setState({ currenttime: currenttime + 1 });
          this.startSong();
          return;
        }
      }, 1000);
    }
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

  shuffleOffControler = (playlist, currentSongId) => {
    let newNextSongId = 1;

    if (playlist[currentSongId + 1]) {
      newNextSongId = currentSongId + 1;
    }

    return newNextSongId;
  };

  shuffleOnControler = (playlist, currentSongId) => {
    const nextSongId = this.getRandomSong(playlist, currentSongId);
    return nextSongId;
  };

  setOption = (name, value) => {
    let {
      options,
      shuffleHistory,
      nextSongId,
      currentSongId,
      playlist
    } = this.state;
    options[name] = value ? true : false;
    if (name == "shuffle" && !value) {
      shuffleHistory = [];
      nextSongId = this.shuffleOffControler(playlist, currentSongId);
    }
    if (name == "shuffle" && value) {
      nextSongId = this.shuffleOnControler(playlist, currentSongId);
    }
    if (name == "reapeatCurrent" && value) {
      nextSongId = currentSongId;
    }
    if (name == "reapeatCurrent" && !value) {
      nextSongId = this.shuffleOffControler(playlist, currentSongId);
    }
    localStorage.setItem("options", JSON.stringify(options));
    this.setState({
      options,
      shuffleHistory,
      nextSongId
    });
  };

  resetAllSongs = async () => {
    const { playlist } = this.state;
    Object.keys(playlist).forEach(key => (playlist[key].played = false));
    await this.setState({
      playlist
    });
  };

  setNextSongActive = async () => {
    const {
      playlist,
      currentSongId,
      options,
      shuffleHistory,
      nextSongId
    } = this.state;
    playlist[currentSongId].played = true;
    await this.setState({ play: false });
    const newNextSong = this.setNextSongData(
      playlist,
      nextSongId,
      options,
      false
    );
    const newHistoryItem = {
      id: currentSongId,
      date: Date.now()
    };

    if (nextSongId <= 1 && newNextSong == -1) {
      this.resetAllSongs();

      this.setState({
        nextSongId: 2,

        shuffleHistory: []
      });
      this.setActiveSongId(1);
    } else {
      if (options.shuffle && !options.reapeatCurrent)
        shuffleHistory.push(newHistoryItem);

      this.setState({
        shuffleHistory,
        nextSongId: newNextSong < 1 ? 1 : newNextSong
      });
      this.setActiveSongId(nextSongId);
    }
  };

  setPrevSong = () => {
    const {
      playlist,
      currentSongId,
      options,
      shuffleHistory,
      currenttime
    } = this.state;
    let prevSong = 1;
    if (options.reapeatCurrent) {
      this.setActiveSongId(currentSongId);
      return;
    }

    if (currenttime > 3) {
      this.setActiveSongId(currentSongId);
      return;
    }

    if (options.shuffle) {
      const last = shuffleHistory.sort((a, b) => a.date - b.date).pop();
      if (last) {
        this.setState({
          shuffleHistory,
          currentSongId: last.id,
          currenttime: 0
        });
        return;
      } else {
        this.setAlertMsg({ text: "Historia pusta", clear: true });
      }
    }

    if (playlist[currentSongId - 1]) {
      prevSong = currentSongId - 1;
    }
    this.setActiveSongId(prevSong);

    return;
  };

  setAlertMsg = async ({ text, clear }) => {
    console.log("ALERT! ", text);
    await this.setState({
      alertMsg: text
    });
    if (clear)
      setTimeout(() => this.setAlertMsg({ text: "", clear: false }), 1500);
  };

  setBottomMenuShow = value => {
    this.setState({
      bottomMenuShow: value
    });
  };

  shufflePlay = () => {
    try {
      const { options } = this.state;
      this.setNextSongActive();
      options.shuffle = true;
      this.setState({
        options,
        bottomMenuShow: false
      });
    } catch (err) {
      console.log(err);
    }
  };

  playSongFromMenu = id => {
    this.setActiveSongId(id);
    this.setBottomMenuShow(false);
    this.setSideMenuShow(false);
  };

  timeParser = time => {
    try {
      if (typeof time != "number") {
        this.setState({
          loadedCode: 500
        });
        this.setAlertMsg({ text: "Uszkodzona playlista", clear: false });
        return "00:00";
      }

      const minutes = Math.floor(time / 60);
      const seconds = time % 60;

      return `${minutes}:${
        seconds.toString().length > 1 ? seconds : `0${seconds}`
      }`;
    } catch (err) {
      console.log(err);
      this.setState({
        loadedCode: 500
      });
      this.setAlertMsg({ text: "Uszkodzona playlista", clear: false });
      return "00:00";
    }
  };

  setSideMenuShow = bool => {
    this.setState({
      sideMenuShow: bool
    });
  };

  render() {
    const {
      loadedCode,
      playlist,
      currentSongId,
      nextSongId,
      options,
      bottomMenuShow,
      currenttime,
      play,
      sideMenuShow,
      alertMsg
    } = this.state;

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
          setPrevSong: this.setPrevSong,
          bottomMenuShow: bottomMenuShow,
          setBottomMenuShow: this.setBottomMenuShow,
          shufflePlay: this.shufflePlay,
          playSongFromMenu: this.playSongFromMenu,
          timeParser: this.timeParser,
          currenttime: currenttime,
          play: play,
          controlPlaySong: this.controlPlaySong,
          sideMenuShow,
          setSideMenuShow: this.setSideMenuShow
        }}
      >
        {alertMsg && <AppAlert text={alertMsg} setAlert={this.setAlertMsg} />}
        <div className="widnow__container">
          {loadedCode == 200 ? <Container /> : null}
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
