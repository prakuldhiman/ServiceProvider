import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  public showDropdownItemsFlag = false;
  public showSubMenuItems = false;
  public menuItems = [{
    itemData: 'Action',
    isHover: false,
    isClickable: false
  },
  {
    itemData: 'Action 1',
    isHover: false,
    isClickable: false
  },
  {
    itemData: 'Action 2 Action Action Action',
    isHover: false,
    isClickable: false
  },
  {
    itemData: 'Action 3',
    isHover: false,
    isClickable: false
  },
  {
    itemData: 'Action 4',
    isHover: false,
    isClickable: false
  }];
  constructor() { }

  ngOnInit() {
  }

  public onHover() {
    if (!this.showDropdownItemsFlag) {
      setTimeout(() => {
        document.getElementById('dropdownMenuButton1').click();
        document.getElementById('dropdownMenuButton1').blur();

        document.getElementById('dropdownMenuButton2').click();
        document.getElementById('dropdownMenuButton2').blur();

        document.getElementById('dropdownMenuButton3').click();
        document.getElementById('dropdownMenuButton3').blur();

        document.getElementById('dropdownMenuButton4').click();
        document.getElementById('dropdownMenuButton4').blur();
        this.showDropdownItemsFlag = true;
      }, 20);
      this.showSubMenuItems = false;
    }
  }

  public menuItemHover(selectedItem) {
    this.showSubMenuItems = true;
    this.menuItems.forEach((item) => {
      if (item.itemData === selectedItem.itemData) {
        item.isHover = true;
      } else {
        item.isHover = false;
      }
    });
  }
}
