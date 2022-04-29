import java.io.*;

class Light
{
  public static void main(String[] args)
  {
    System.out.println("設定をする場合 : 0 , ライトをつける場合は : 1");
    BufferedReader Config = new BufferedReader(new InputStreamReader(System.in));

    try {
      String confWright = Config.readLine();
      int conf = Integer.parseInt(confWright);
      if(conf==0){
        
      } else if(conf==1){
        TurnLight obj = new TurnLight();
        obj.LightOnOff();
      } else {
        System.out.println("無効な入力値です。");
      }
    } catch (IOException e) {
      System.out.println(e.getMessage());
    }
   

  }
}
