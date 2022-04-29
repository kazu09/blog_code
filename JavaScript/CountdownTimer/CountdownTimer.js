var time; //タイマーを格納する変数（タイマーID）の宣言
var myAudio = new Audio();
//カウントダウン関数を1000ミリ秒毎に呼び出す関数
function CountStart() {
  ChangeButton(true);
  time=setInterval("CountDown()",1000);
}

//タイマー停止関数
function CountStop() {
  ChangeButton(false);
  clearInterval(time);
}

// ボタンの切り替え関数
function ChangeButton(buttonSwitch) {
  // スタートボタンのelement
  var startButton = document.timer.elements[2]
  // ストップボタンのelement
  var stopButton = document.timer.elements[3]
  // ボタンのフラグ
  var flag = buttonSwitch
  startButton.disabled = flag
  stopButton.disabled = !flag
}

//カウントダウン関数
function CountDown()
{
  var min=document.timer.elements[0].value;
  var sec=document.timer.elements[1].value;
  if( (min=="") && (sec=="") ) {
    alert("時刻を設定してください！");
    reset();
  } else {
    if (min=="") min=0;
    min=parseInt(min);
    
    if (sec=="") sec=0;
    sec=parseInt(sec);
    
    tmWrite(min*60+sec-1);
  }
}

function MusiArray(){
  var selectMusic = document.MusicForm.music;
  var MusicNum = selectMusic.selectedIndex;
  var music0 = 'alarm/おやすみDay.mp3'
  var music1 = 'alarm/ぴよぴよサーキット.mp3'
  var music2 = 'alarm/海底の神殿.mp3'
  var musicArray = [music0,music1,music2]
  return musicArray[MusicNum]
}

//残り時間を書き出す関数
function tmWrite(int) {
  int=parseInt(int);
  if (int<=0) {
    reset();
    // オーディオがなる
    audio(true)
    // オーディオストップボタンが作成される
    makeButton()
  } else {
    //残り分数はintを60で割って切り捨てる
    document.timer.elements[0].value=Math.floor(int/60);
    //残り秒数はintを60で割った余り
    document.timer.elements[1].value=int % 60;
  }
}

//オーディオストップボタン作成関数
function makeButton(){
  const timerForm = document.getElementById("timerform");
  const input = document.createElement("input");
  timerForm.appendChild(input);
  input.setAttribute('type','button')
  input.setAttribute('value','タイマーをとめる')
  input.setAttribute('id','stop_music')
  // 引数をfalseにしてオーディオが止まる
  input.setAttribute('onclick','audio(false)')
}

//オーディオ再生ストップ関数
function audio(flag){
  var alermMusic = MusiArray()
  myAudio.src = alermMusic;
  if(flag){
    myAudio.play()
  } else {
    myAudio.pause()
    myAudio.currentTime = 0;
    // オーディオストップボタンの削除
    document.getElementById('stop_music').remove();
  }
}

//フォームを初期状態に戻す
function reset() {
  document.timer.elements[0].value="0";
  document.timer.elements[1].value="0";
  document.timer.elements[2].disabled=false;
  clearInterval(time);
}  