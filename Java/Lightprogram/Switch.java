import java.io.*;

public class Switch {
  public int PushSwitch() {
    BufferedReader SW = new BufferedReader(new InputStreamReader(System.in));
    System.out.println("スイッチを入力してください。[ライトON : 1 ,ライトOFF : 0]");
    try {
      String strswi = SW.readLine();
      int Switch = Integer.parseInt(strswi);
      return Switch;
    } catch (IOException e) {
      System.out.println(e.getMessage());
    }
    return 0;
  }
}
