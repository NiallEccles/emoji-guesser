import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './routes/game/game.component';
import { SetComponent } from './routes/set/set.component';
import { TypeComponent } from './routes/type/type.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SetComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
