import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { AlertifyService, MessageType } from "src/app/services/alertify.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    private alertify: AlertifyService) {}

  ngOnInit() {
    this.createLoginFroms();
  }

  createLoginFroms(){
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  login(){
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value);

      this.authService.login(loginModel).subscribe(response => {

        this.alertify.message(response.message, {
          messageType: MessageType.Success,
        });
        localStorage.setItem("token", response.data.token);
      }, responseError => {

        this.alertify.message(responseError.error
        , {
          messageType: MessageType.Error,
        });
      })
    }
  }

}
 