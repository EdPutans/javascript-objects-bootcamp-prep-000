var playlist = ({'Rogue':'Nemesis'},{'Kuuro':'Possession'},{'Stonebank':'Falling Sky'})

function updatePlaylist(playlist,artistName,songName) {
  playlist[artistName]=songName
  return playlist
}

console.log(playlist)

function removeFromPlaylist(playlist,artistName) {
  playlist = delete playlist.artistName
  return playlist
}