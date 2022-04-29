public class game extends hands {
  public void games(){
    // あいこで再呼び出しされるよう無限ループ
    while(true){
      // メソッドplayer呼び出し
      int player = super.player();
      // メソッドenemy呼び出し
      int enemy = super.enemy();
      // 勝ちと負けと引き分けを計算する
      // 0: 引き分け, 1: 負け, 2: 勝ち
      int result = (player - enemy + 3) % 3;
      if (result == 0) {
        System.out.println("あいこでしょ");
        // continue;
      } else if (result == 2) {
        System.out.println("やった！勝ったよ!!");
        break;
      } else {
        System.out.println("残念負けだよ...");
        break;
      }
    }
  }
}
