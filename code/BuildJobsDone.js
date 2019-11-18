module.exports.function = function buildJobsDone(JobsDoneAudio) {
  var audioInfo = {};

  audioInfo.audioItem = JobsDoneAudio.map(function (audioItem) {
    let audioItemStructure = { //required properties of audioItem
      id: audioItem.id,
      stream: audioItem.stream,
      title: audioItem.title,
      artist:audioItem.artist,
      albumArtUrl: audioItem.albumArtUrl
    }
    //optional properties of audioItem
    if (audioItem.subtitle) {
      audioItemStructure.subtitle = audioItem.subtitle
    }
    if (audioItem.albumName) {
      audioItemStructure.albumName = audioItem.albumName
    }
    if (audioItem.duration) {
      audioItemStructure.duration = audioItem.duration
    }
    return audioItemStructure
  });

  audioInfo.category = 'RADIO';
  audioInfo.displayName = 'Jobs Done';
  audioInfo.doNotWaitForTTS = true;

  return audioInfo;
}