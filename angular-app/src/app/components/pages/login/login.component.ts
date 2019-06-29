import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
    // email: 'admin@user.com',
    // password: 'secret'
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  submit() {
    this.http.post('http://localhost:8000/api/login', this.credentials)
      .subscribe((data) => {
        const token = data.token;
      });
    return false;
  }


}
