import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireService } from '../../services/angular-fire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  form!: FormGroup;
  public isLogged: boolean = false;

  constructor(
    public angularFireService: AngularFireService,
    // public firestoreService: FirestoreService
  ) {this.checkLoggedIn();}

  async checkLoggedIn() {
    this.isLogged = await this.angularFireService.isLoggedIn();
  }

  SignOut() {
    this.angularFireService.SignOut();
  }

  SignIn() {
    this.angularFireService.SignIn(this.email?.value, this.password?.value);
  }

  GoogleAuth() {
    this.angularFireService.GoogleAuth();
  }

  SignUp() {
    this.angularFireService.SignUp(this.email?.value, this.password?.value);
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      // usuario : new FormControl('',)
      email: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
      password: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}