import { Component, OnInit,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2) { }
  loginClass = "login-page";
  test=6253
  ngOnInit() {
    this.renderer.removeClass(document.body, this.loginClass)
  }

}
