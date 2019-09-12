class Session {
  private static instance: Session = null;
  private status: boolean;
  private constructor() {
    // do something construct...
    this.status = false;
  }
  public static get Instance() {
    if (!Session.instance) {
      Session.instance = new Session();
      // ... any one time initialization goes here ...
    }
    return Session.instance;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public getStatus(): boolean {
    return this.status;
  }
}
