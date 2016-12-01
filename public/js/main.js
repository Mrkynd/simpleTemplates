$(document).ready(function () {
  $('.ui.dropdown').dropdown();
})

var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'teal',
  progressColor: '#aaa'
});

wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');

//http://wavesurfer-js.org/docs/
