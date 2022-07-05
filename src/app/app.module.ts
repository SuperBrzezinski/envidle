import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ShellComponent } from './shell/shell.component';
import { MainGridComponent } from './main-grid/main-grid.component';
import { ScoreDisplayerComponent } from './score-displayer/score-displayer.component';
import { ProgrammersListComponent } from './programmers-list/programmers-list.component';
import { ProgrammerComponent } from './programmer/programmer.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    MainGridComponent,
    ScoreDisplayerComponent,
    ProgrammersListComponent,
    ProgrammerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
