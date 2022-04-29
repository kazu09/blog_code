import java.io.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
// 相手と自分のじゃんけんを出すクラス
public class hands {
  public int player() {
    // 自分で入力（カタカナ入力）
    BufferedReader player = new BufferedReader(new InputStreamReader(System.in));
    System.out.println("グー、チョキ、パーどれを出す？");
    // HashMapの宣言
    // Stringをintに変換するため
    Map<String, Integer> map = new HashMap<>();
 
    // 要素を追加
    // {グー=0, チョキ=1, パー=2}
    map.put("グー", 0);
    map.put("チョキ", 1);
    map.put("パー", 2);
    try {
      // 入力した文字を文字列で入れる
      String playerHands = player.readLine();
      // String型をintに変換
      int hand = map.get(playerHands);
      System.out.println("あなたは"+playerHands+"です！");
      return hand;
    } catch (IOException e) {
      System.out.println(e.getMessage());
    }
    return 0;
  }

  public int enemy() {
    // 相手はint型
    // グー : 0 , チョキ : 1 , パー : 2
    int[] enemyHands = {0, 1, 2};
    // 出力する数値をランダム
    Random enemypom = new Random();
    int hand = enemyHands[enemypom.nextInt(3)];
    // 相手が出したものをわかるようにするための出力
    if(0==hand){
      System.out.println("コンピューターはグーです！");
    } else if (1==hand){
      System.out.println("コンピューターはチョキです！");
    } else if (2==hand){
      System.out.println("コンピューターはパーです！");
    };
    return hand;
  }
}