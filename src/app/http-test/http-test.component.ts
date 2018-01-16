import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {
  imgURL: string = 'http://placekitten.com/420/300'
  someData: string = 'hello';
  imageFolder = 'http://media.mw.metropolia.fi/wbma/uploads/';
  constructor(private http: HttpClient) { }

  getJson() {
    this.http.get('assets/package.json').subscribe((data) => {
      console.log(data);
      this.someData = data.license;
    });
  }

  getImage() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media/').subscribe((data) => {
      console.log(data);
      this.imgURL = this.imageFolder + data[0].filename;
    });
  }

  ngOnInit() {
    this.getJson();
    this.getImage();
  }

}
