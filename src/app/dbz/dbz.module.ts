import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponentDBZ } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';





@NgModule({
  declarations: [
    MainPageComponent,
    ListComponentDBZ,
    AddCharacterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
