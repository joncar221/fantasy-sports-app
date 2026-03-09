import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarVisible = signal(true);

  sidebarButtonClick() {
    this.sidebarVisible.update((value) => !value);
  }

  getData = computed(this.sidebarVisible);
}
