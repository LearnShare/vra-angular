import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { MusicPlayerService } from './services/music-player.service';

import { AppComponent } from './app.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { MusicListComponent } from './components/music-list/music-list.component';
import { MusicItemComponent } from './components/music-item/music-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicPlayerComponent,
    MusicListComponent,
    MusicItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [MusicPlayerService],
  bootstrap: [AppComponent],
})
export class AppModule { }
