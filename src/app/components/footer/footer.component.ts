import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

export class FooterComponent {
  constructor(private router:Router){

  }

  routeSocial(social:string) {
    const socialList:{[key:string]:string} = {
      linkedin:"https://www.linkedin.com/in/shahraj-singh/",
      instagram:"https://www.instagram.com/shahraj_singh/",
      whatsapp:"https://wa.me/19029895192"
    }
    
    this.router.navigate([]).then(() => {  window.open(socialList[social], '_blank'); });
  }

}
