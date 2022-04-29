import java.io.*;
import java.util.HashMap;
import java.util.Map;

public class Color {
  public void ChangeColor() {
    // BufferedReader SelectColor = 
    //   new BufferedReader(new InputStreamReader(System.in));
    System.out.println("[青,赤,白,黒,緑,黄]のどの色かを選択してください");
    BufferedReader player = new BufferedReader(new InputStreamReader(System.in));
    Map<String, Integer> map = new HashMap<>();
    map.put("青", 0);
    map.put("赤", 1);
    map.put("白", 2);
    map.put("黒", 3);
    map.put("緑", 4);
    map.put("黄", 5);
  }
}
