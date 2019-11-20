module.exports.function = function buildJobsDone() {
  var audioInfo = {};
  var audioItemStructure = {
    id: 1,
    stream: [
      {
        url: "https://storage.googleapis.com/hithere123/jobs-done_1.mp3",
        format: "mp3"
      }
    ],
    title: "Jobs Done",
    subtitle: "Work Complete",
    artist: "Peasant",
    albumName: "Warcraft 3",
    albumArtUrl: "www.notexist.com"
  }
  audioInfo.audioItem = audioItemStructure

  audioInfo.category = 'RADIO';
  audioInfo.displayName = 'Jobs Done';
  audioInfo.doNotWaitForTTS = false;

  return audioInfo;
}