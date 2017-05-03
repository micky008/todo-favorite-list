export class Session {

  private static mySession: Array<any> = new Array<any>()

  public static get(key: string): any {return Session.mySession[key]}
  public static put(key: string, value: any): void {Session.mySession[key] = value}
  public static reset(key? : string): void {
    if (key != null){
      Session.mySession[key] = null
    }else {
      while (Session.mySession.length > 0) {
        Session.mySession.pop();
      }
    }
  }
}
