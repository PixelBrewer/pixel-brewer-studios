import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  // Track active tab
  activeTab: 'professional' | 'personal' = 'professional';

  /**
   * Switch between professional and personal skills tabs
   * @param tabName The tab to activate: 'professional' or 'personal'
   */
  showTab(tabName: 'professional' | 'personal'): void {
    this.activeTab = tabName;
  }
}
