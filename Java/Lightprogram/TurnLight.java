public class TurnLight extends Switch {
  public void LightOnOff(){
    System.out.println("LightOnOff");
    int Switch = super.PushSwitch();
    if(Switch == 0){
      System.out.println("0を選択しました");
      System.out.println("ライトを切りました");
    } else if (Switch == 1){
      System.out.println("1を選択しました");
      System.out.println("ぴかっ");
    } else {
      System.out.println("不当な数値が選択されました");
      System.out.println("ライトが切れました");
    }
  }
}
