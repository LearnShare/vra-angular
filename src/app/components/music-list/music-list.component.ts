import {
  Component,
  OnInit,
} from '@angular/core';

import {
  MusicItem,
  MusicPlayerService,
} from 'src/app/services/music-player.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
})
export class MusicListComponent
    implements OnInit {
  list: Array<MusicItem>;

  constructor(private playerService: MusicPlayerService) {
    this.list = [];
  }

  ngOnInit() {
    this.list = this.playerService.getList();
  }

  play(index: number) {
    this.playerService.play(index);
  }
}
