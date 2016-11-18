export class LoginResponse {
  public name: string = "";
  public success: boolean = false;
  public token: string = "";
  public userType: number = 0;
  public reason: string = ""
}

export class LoginInformation {
  public username: string;
  public password: string;
}

export class CheckLoginResponse {
  public success: boolean = false;
  public userType: number = 0;
  public name: string = "";
  public reason: string = "";
}
