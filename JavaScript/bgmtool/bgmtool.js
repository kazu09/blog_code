var myAudio = new Audio();
// 一時停止する時の変数初期値は0に設定して始めて押すときは止まるように設定
var pauseNum = 0
// 1秒ごとのbgm監視のグローバル変数
var endChangeButton;

//bgmを格納して再生するbgmをplay関数に渡す関数
function bgmArray(){
  playChangeButton(0)
  var SelectBGM = document.BGMForm.bgm;
  //BGMの番号を取得する
  var BGMNum = SelectBGM.selectedIndex;
  //BGMを配列に入れる
  var BGMArray = [
                    'bgm/おやすみDay.mp3',
                    'bgm/ぴよぴよサーキット.mp3',
                    'bgm/海底の神殿.mp3',
                  ]
  play(BGMArray[BGMNum])
}

//bgmを再生する関数
function play(BGMPath){
  // ボタンが活性化する再生ボタンのみ非活性
  buttonSwitching(0)
  // BGMのpathを取得する
  var BGMPath = BGMPath
  myAudio.src = BGMPath;
  // bgmを流す
  myAudio.play()
  playChangeButton(true)
  // 1秒ごとに実行して音楽が終了したらボタンが切り替わる
  endChangeButton = setInterval(function(){
    // bgmの流れている時間を表示させる
    console.log("myAudio.currentTime",myAudio.currentTime)
    // bgmが終了しているかチェックするfalseがbgmが流れている状態trueが終了した状態
    console.log("myAudio.ended",myAudio.ended)
    // 1秒ごと実行させてbgmの終わりを監視するbgmが終わったらif文に入る
    if(myAudio.ended){
      // 再生ボタンを終了状態にする
      playChangeButton(false)
      // 1秒ごとに監視していたものを終了する
      clearInterval(endChangeButton);
      // 停止ボタンと一時停止ボタンを非活性にする
      buttonSwitching(1)
    }
  }, 1000);
}

// bgmを停止する関数
function stop() {
  // 一時停止をする
  myAudio.pause();
  // 秒数を0に戻す
  myAudio.currentTime = 0;
  // 再生ボタンの画像を入れ替える（再生ボタン）
  playChangeButton(false)
  // bgmの監視の解除をする
  clearInterval(endChangeButton);
  // ボタン非活性化する再生ボタンのみ活性
  buttonSwitching(1)
}

// bgmを一時停止する関数
function pause() {
  var pauseButton = document.getElementById('pauseButton')
  var pausedSrc = 'img/一時停止中.svg'
  var pauseSrc = 'img/一時停止.svg'
  if(pauseNum == 0){
    // 一時停止
    pauseNum = 1
    myAudio.pause();
    // 一時停止画像
    pauseButton.src = pausedSrc
  } else {
    // 一時停止解除
    pauseNum = 0
    myAudio.play();
    // 一時停止解除画像
    pauseButton.src = pauseSrc
  }
}

// bgmをミュートにする
function muted() {
  var buttonId = document.getElementById('mutedButton')
  var muteOffSrc = 'img/ボリュームオフ.svg'
  var muteOnSrc = 'img/ボリュームオン.svg'
  // Audioのミュートを取得しifで分岐させる
  if(myAudio.muted){
    // ミュートをオンにする
    myAudio.muted = false
    buttonId.src = muteOnSrc
  } else {
    // ミュートをオフにする
    myAudio.muted = true
    buttonId.src = muteOffSrc
  }
}

// bgmをループにする
function loop() {
  var loopButton = document.getElementById('loopButton')
  var loopOffSrc = 'img/リピートオフ.svg'
  var loopOnSrc = 'img/リピートオン.svg'
  console.log("myAudio.loop",myAudio.loop)
  // Audioの現在のtrue,falseチェックする
  if(myAudio.loop){
    //ループを解除する
    myAudio.loop = false
    // ループオフ画像
    loopButton.src = loopOffSrc
  } else {
    //ループさせる
    myAudio.loop = true
    // ループオン画像
    loopButton.src = loopOnSrc
  }
}

// 再生ボタンを切り替える関数
function playChangeButton(play){
  // 引数のplayはtrue,falseで対応trueが再生中falseが停止中
  var playedImage = 'img/再生中ボタン.svg';
  var notPlayedImage = 'img/再生ボタン.svg';
  var playButton = document.getElementById('playButton')
  if(play){
    playButton.src = playedImage
  } else {
    playButton.src = notPlayedImage
  }
}

// ボタンの活性、非活性を切り替える関数
function buttonSwitching(switchNum){
  var stopButton = document.getElementById("playButton");
  var stopButton = document.getElementById("stopButton");
  var pauseButton = document.getElementById('pauseButton');
  switch (switchNum) {
    // ボタンが活性化する再生ボタンのみ非活性
    case 0:
      stopButton.disabled = false;
      pauseButton.disabled = false;
      playButton.disabled = true;
      break;
    // ボタン非活性化する再生ボタンのみ活性
    case 1:
      stopButton.disabled = true;
      pauseButton.disabled = true;
      playButton.disabled = false;
      break;
  }
}


