import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {

  }

  sendToPage(page: string) {
    switch (page) {
      case 'facebook':
        window.open("https://www.facebook.com/Da4le", "_self");
        break;
      case 'linkedin':
        window.open("https://www.linkedin.com/in/daniel-tapia-5687b91b4/", "_self");
        break;
      case 'instagram':
        window.open("https://www.instagram.com/dannyalejo7/", "_self");
        break;
      case 'whatsapp':
        window.open("https://www.facebook.com/Da4le", "_self");
        break;
      default:
        break;
    }
  }
}
