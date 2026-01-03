import { Component, OnInit } from '@angular/core';
import { Menu, menus } from './menus.model';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.less'
})
export class SideMenuComponent implements OnInit {
  public appMenus!: Menu[];

  ngOnInit(): void {
    this.appMenus = menus;
    console.log(this.appMenus)
  }
}
