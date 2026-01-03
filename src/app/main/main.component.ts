import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavComponent, SideMenuComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.less'
})
export class MainComponent {

}
