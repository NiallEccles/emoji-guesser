import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './routes/game/game.component';
import { SetComponent } from './routes/set/set.component';
import { TypeComponent } from './routes/type/type.component';
import { UiModule } from './ui/ui.module';
import { SlateComponent } from './components/slate/slate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmojiPipe } from './pipes/emoji.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SetComponent,
    TypeComponent,
    SlateComponent,
    EmojiPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
