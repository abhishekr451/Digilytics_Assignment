import { Component, OnInit,Renderer2 } from '@angular/core';
import { ApiService } from '../Services/Api.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }
  model: any = {}
  
  ngOnInit() {
  }
  login() {
    this.api.GetJson().subscribe(res => {//Password shoud be encrypted in Md5 hashing & salting should be done
      if (this.model.username === res.users[0].name && this.model.password === res.users[0].password) {
        localStorage.setItem('token','1');
        this.router.navigate(['home'])
      }
      else {
        alert("Invalid Credentials")
      }
    })
  }
}
