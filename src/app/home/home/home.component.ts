import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from '../../Services/Api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2, private api: ApiService) { }
  loginClass = "login-page";
  test = 6253
  filter = [false, false, false, true]
  flightDetails = []
  ngOnInit() {
    this.renderer.removeClass(document.body, this.loginClass)
    this.GetList();
  }
  GetList() {
    this.api.GetJson().subscribe(res => {
      this.flightDetails = res.Data
      this.Sort()
    })
  }
  SwitchFilter(value) {
    let i = false
    this.filter[value] = !this.filter[value]
    for (var j = 0; j < this.filter.length; j++) {
      if (this.filter[j]) {
        i = true
      }
    }
    if (i) {
      this.Sort()
    }
    else {
      this.GetList();
    }
  }

  Sort() {
    let flightDetail = this.flightDetails
    let sum = this.flightDetails
    for (var i = 0; i < flightDetail.length; i++) {
      for (var j = 0; j < this.filter.length; j++) {
        if (this.filter[j]) {
          if (j == 0) {
            sum[i]['order'] = (+flightDetail[i]["departure"].replace(':', '')) + (+sum[i]['order'])
          }
          else if (j == 1) {
            sum[i]['order'] = (+flightDetail[i]["duration"]) + (+sum[i]['order'])
          }
          else if (j == 2) {
            sum[i]['order'] = (+flightDetail[i]["arrival"].replace(':', '')) + (+sum[i]['order'])
          }
          else if (j == 3) {
            sum[i]['order'] = (+flightDetail[i]["Price"]) + (+sum[i]['order'])
          }
        }
      }
    }
    this.flightDetails = sum.sort(dynamicSort('order'))
    function dynamicSort(property) {
      var sortOrder = 1;
      if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
      }
      return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
      }
    }
    this.flightDetails.map(function (x) {
      x.order = 0
      return x;
    })
  }

}
