import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


export default function Game() {

//   const [gameUrl, setGameUrl] = useState("../../snes-rpg/levels/open-field.html");
//   const [currentScore, setCurrentScore] = useState(0)

//   const userName = useSelector((state) => state.name);
//   const stageName = useSelector((state) => state.stagename);
//   const battleScore = useSelector((state) => state.battlescore);
//   const rpgScore = useSelector((state) => state.rpgscore);
//   const shooterScore = useSelector((state) => state.shooterScore);
//   const dispatch = useDispatch();

//   const audioTrackList = ["the-bards-tale.mp3", "battle-theme.mp3",]
//   const audioEl = new Audio(audioTrackList)
//   let currentMusic = audioTrackList[0];


// function changeTrack(track) {
//   audioEl.src = audioTrackList[track];
//   audioEl.preload = "";
//   audioEl.volume = 0.1;
//   if (!audioEl.currentTime) {
//     audioEl.play();
//     }
// }

  return (
    <>
    <p>This is the game page</p>
    </>
  );
}
