import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  MusicItem,
  MusicPlayerService,
} from 'src/app/services/music-player.service';

@Component({
  selector: '[app-music-item]',
  templateUrl: './music-item.component.html',
})
export class MusicItemComponent
    implements OnInit {
  @Input() index: number = 0;
  @Input() data: MusicItem | null = null;
  current: number;

  constructor(private playerService: MusicPlayerService) {
    this.current = 0;
  }

  ngOnInit() {
    this.current = this.playerService.getCurrent();
  }

  toggleLiked(id: number) {
    this.playerService.toggleLiked(id);
  }
}
