import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  activation: boolean = true;
  start: any = 'true';
  about: any = 'false';
  projects: any = 'false';
  contact: any = 'false';
  seccion: any;
  page: any = 'start';
  screenSize: number = 0;
  initialSize: number = window.innerHeight;
  event: string = '';
  chargetime: boolean = true;
  pageSize: any;
  pageState: boolean = true;
  pageOnlyOneRepeat: boolean = true;
  constructor() {
    window.onscroll = () => {
      this.pageSize = document.getElementById('start')?.getBoundingClientRect().height;
      var y = window.scrollY;
      switch (this.page) {
        case 'start':
          this.EnterPresentation();
          this.ExitAbout();
          this.ExitProjects();
          this.ExitContact();
          break;
        case 'about':
          this.ExitPresentation();
          this.EnterAbout();
          this.ExitProjects();
          this.ExitContact();
          break;
        case 'projects':
          this.ExitAbout();
          this.ExitPresentation();
          this.EnterProjects();
          this.ExitContact();
          break;
        case 'contact':
          this.ExitPresentation();
          this.ExitAbout();
          this.ExitProjects();
          this.EnterContact();
          break;
        default:
          break;
      }
    };
  }

  ngOnInit(): void {

    if (localStorage.getItem('page') != null) {
      this.page = localStorage.getItem('page');
      this.CheckControlPages();
    }
  }

  catchPage(event: any) {
    this.page = event;
    this.CheckControlPages();
  }

  defaultTouch = { x: 0, y: 0, time: 0 };

  @HostListener('touchstart', ['$event'])
  @HostListener('touchend', ['$event'])
  @HostListener('touchcancel', ['$event'])
  handleTouch(event: any) {
    let touch = event.touches[0] || event.changedTouches[0];

    // check the events
    if (event.type === 'touchstart') {
      this.defaultTouch.x = touch.pageX;
      this.defaultTouch.y = touch.pageY;
      this.defaultTouch.time = event.timeStamp;
    } else if (event.type === 'touchend') {
      let deltaX = touch.pageX - this.defaultTouch.x;
      let deltaY = touch.pageY - this.defaultTouch.y;
      let deltaTime = event.timeStamp - this.defaultTouch.time;

      // simulte a swipe -> less than 500 ms and more than 60 px
      if (deltaTime < 500) {
        if (Math.abs(deltaY) > 40) {
          // delta y is at least 60 pixels
          if (this.chargetime === true) {
            if (this.page == 'start') {
              if (deltaY < 0) {
                this.page = 'about';
                this.activation = false;
                this.MoveScreen(this.page);
                this.CheckControlPages();
              }
            } else if (this.page == 'about') {
              if (deltaY < 0) {
                this.page = 'projects';
                this.MoveScreen(this.page);
                this.CheckControlPages();
              } else {
                this.page = 'start';
                this.activation = true;
                this.MoveScreen(this.page);
                this.CheckControlPages();
              }
            } else if (this.page == 'projects') {
              if (deltaY < 0) {
                this.page = 'contact';
                this.MoveScreen(this.page);
                this.CheckControlPages();
              } else {
                this.page = 'about';
                this.MoveScreen(this.page);
                this.CheckControlPages();
              }
            } else if (this.page == 'contact') {
              if (deltaY > 0) {
                this.page = 'projects';
                this.MoveScreen(this.page);
                this.CheckControlPages();
              }
            }
            this.chargetime = false;
            setTimeout(() => {
              this.chargetime = true;
            }, 1000);
          }
        }
      }
    }
  }

  doSwipeUp(event: any) {
    console.log('swipe up', event);
  }

  doSwipeDown(event: any) {
    console.log('swipe down', event);
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    if (this.initialSize != event.target.innerHeight) {
      this.page = this.page;
      this.MoveScreenFast(this.page);
      this.initialSize = event.target.innerHeight;
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === 'ArrowUp') {
      if (this.chargetime === true && this.page != 'start') {
        if (this.page == 'about') {
          this.page = 'start';
          this.activation = true;
          this.MoveScreen(this.page);
          this.CheckControlPages();
        } else if (this.page == 'projects') {

          this.page = 'about';
          this.MoveScreen(this.page);
          this.CheckControlPages();
        } else if (this.page == 'contact') {
          this.page = 'projects';
          this.MoveScreen(this.page);
          this.CheckControlPages();
        }
        this.chargetime = false;
        setTimeout(() => {
          this.chargetime = true;
        }, 1000);
      }
    }

    if (event.code === 'ArrowDown') {
      if (this.chargetime === true && this.page != 'contact') {
        if (this.page == 'start') {
          this.page = 'about';
          this.activation = false;
          this.MoveScreen(this.page);
          this.CheckControlPages();
        } else if (this.page == 'about') {
          this.page = 'projects';
          this.MoveScreen(this.page);
          this.CheckControlPages();
        } else if (this.page == 'projects') {
          this.page = 'contact';
          this.MoveScreen(this.page);
          this.CheckControlPages();
        }
        this.chargetime = false;
        setTimeout(() => {
          this.chargetime = true;
        }, 1000);
      }
    }
  }

  //Funcion para activar cambio de pantalla al mover el scroll
  @HostListener('wheel', ['$event']) onMousewheel(event: any) {
    if (this.chargetime === true) {
      if (this.page == 'start') {
        if (event.deltaY > '0') {
          this.page = 'about';
          this.activation = false;
          this.MoveScreen(this.page);
          this.CheckControlPages();
        }
      } else if (this.page == 'about') {
        if (event.deltaY > '0') {
          this.page = 'projects';
          this.MoveScreen(this.page);
          this.CheckControlPages();
        } else {
          this.page = 'start';
          this.activation = true;
          this.MoveScreen(this.page);
          this.CheckControlPages();
        }
      } else if (this.page == 'projects') {
        if (event.deltaY > '0') {
          this.page = 'contact';
          this.MoveScreen(this.page);
          this.CheckControlPages();
        } else {
          this.page = 'about';
          this.MoveScreen(this.page);
          this.CheckControlPages();
        }
      } else if (this.page == 'contact') {
        if (event.deltaY < '0') {
          this.page = 'projects';
          this.MoveScreen(this.page);
          this.CheckControlPages();
        }
      }
      this.chargetime = false;
      setTimeout(() => {
        this.chargetime = true;
      }, 1000);
    }
  }

  //Funcion para almacenar pagina activa en localstorage y en las variables
  CheckControlPages() {
    if (this.page == 'start') {
      this.start = 'true';
      this.about = 'false';
      this.projects = 'false';
      this.contact = 'false';
      localStorage.setItem('page', 'start');
    } else if (this.page == 'about') {
      this.start = 'false';
      this.about = 'true';
      this.projects = 'false';
      this.contact = 'false';
      localStorage.setItem('page', 'about');
    } else if (this.page == 'projects') {
      this.start = 'false';
      this.about = 'false';
      this.projects = 'true';
      this.contact = 'false';
      localStorage.setItem('page', 'projects');
    } else if (this.page == 'contact') {
      this.start = 'false';
      this.about = 'false';
      this.projects = 'false';
      this.contact = 'true';
      localStorage.setItem('page', 'contact');
    }
  }


  //Funcion que mueve la pantall
  MoveScreen(screen: string) {
    this.seccion = document.getElementById(screen);
    if (screen == 'start') {
      this.screenSize = 0;
    } else if (screen == 'about') {
      this.screenSize = this.seccion.getBoundingClientRect().height;
    } else if (screen == 'projects') {
      this.screenSize = this.seccion.getBoundingClientRect().height * 2;
    } else if (screen == 'contact') {
      this.screenSize = this.seccion.getBoundingClientRect().height * 3;
    }
    window.scrollTo({ left: 0, top: this.screenSize, behavior: 'smooth' });
  }

  //Funcion que mueve la pantalla de manera rapida
  MoveScreenFast(screen: string) {
    this.seccion = document.getElementById(screen);
    if (screen == 'start') {
      this.screenSize = 0;
    } else if (screen == 'about') {
      this.screenSize = this.seccion.getBoundingClientRect().height;
    } else if (screen == 'projects') {
      this.screenSize = this.seccion.getBoundingClientRect().height * 2;
    } else if (screen == 'contact') {
      this.screenSize = this.seccion.getBoundingClientRect().height * 3;
    }
    window.scrollTo({ left: 0, top: this.screenSize });
  }

  EnterPresentation() {
    document.getElementById("astro")?.classList.remove('animate-back-to-right');
    document.getElementById("data")?.classList.remove('animate-back-to-left');
    document.getElementById("astro")?.classList.add('animate-rigth-to-left');
    document.getElementById("data")?.classList.add('animate-left-to-right');
  }

  EnterAbout() {
    document.getElementById("card")?.classList.add('animate-enter-card');
    document.getElementById("card")?.classList.remove('animate-exit-card');
    document.getElementById("about-title")?.classList.add('animate-left-to-right');
    document.getElementById("about-title")?.classList.remove('animate-back-to-left');
    document.getElementById("first-line-about")?.classList.add('animate-enter-card');
    document.getElementById("first-line-about")?.classList.remove('animate-exit-card');
    document.getElementById("second-line-about")?.classList.add('animate-enter-card');
    document.getElementById("second-line-about")?.classList.remove('animate-exit-card');
    document.getElementById("subtitle-about")?.classList.add('animate-left-to-right');
    document.getElementById("subtitle-about")?.classList.remove('animate-back-to-left');
  }

  EnterProjects() {
    document.getElementById("card-project")?.classList.add('animate-enter-card');
    document.getElementById("card-project")?.classList.remove('animate-exit-card');
    document.getElementById("about-title-project")?.classList.add('animate-left-to-right');
    document.getElementById("about-title-project")?.classList.remove('animate-back-to-left');
    document.getElementById("first-line-about-project")?.classList.add('animate-enter-card');
    document.getElementById("first-line-about-project")?.classList.remove('animate-exit-card');
    document.getElementById("second-line-about-project")?.classList.add('animate-enter-card');
    document.getElementById("second-line-about-project")?.classList.remove('animate-exit-card');
    document.getElementById("subtitle-about-project")?.classList.add('animate-left-to-right');
    document.getElementById("subtitle-about-project")?.classList.remove('animate-back-to-left');
  }

  EnterContact() { }

  ExitPresentation() {
    document.getElementById("astro")?.classList.add('animate-back-to-right');
    document.getElementById("data")?.classList.add('animate-back-to-left');
    document.getElementById("astro")?.classList.remove('animate-rigth-to-left');
    document.getElementById("data")?.classList.remove('animate-left-to-right');
  }

  ExitAbout() {
    document.getElementById("card")?.classList.remove('animate-enter-card');
    document.getElementById("card")?.classList.add('animate-exit-card');
    document.getElementById("about-title")?.classList.remove('animate-left-to-right');
    document.getElementById("about-title")?.classList.add('animate-back-to-left');
    document.getElementById("first-line-about")?.classList.remove('animate-enter-card');
    document.getElementById("first-line-about")?.classList.add('animate-exit-card');
    document.getElementById("second-line-about")?.classList.remove('animate-enter-card');
    document.getElementById("second-line-about")?.classList.add('animate-exit-card');
    document.getElementById("subtitle-about")?.classList.remove('animate-left-to-right');
    document.getElementById("subtitle-about")?.classList.add('animate-back-to-left');
  }

  ExitProjects() {
    document.getElementById("card-project")?.classList.remove('animate-enter-card');
    document.getElementById("card-project")?.classList.add('animate-exit-card');
    document.getElementById("about-title-project")?.classList.remove('animate-left-to-right');
    document.getElementById("about-title-project")?.classList.add('animate-back-to-left');
    document.getElementById("first-line-about-project")?.classList.remove('animate-enter-card');
    document.getElementById("first-line-about-project")?.classList.add('animate-exit-card');
    document.getElementById("second-line-about-project")?.classList.remove('animate-enter-card');
    document.getElementById("second-line-about-project")?.classList.add('animate-exit-card');
    document.getElementById("subtitle-about-project")?.classList.remove('animate-left-to-right');
    document.getElementById("subtitle-about-project")?.classList.add('animate-back-to-left');
  }

  ExitContact() { }
}
