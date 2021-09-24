import {
  Injectable,
} from '@angular/core';

export interface MusicItem {
  id: number;
  title: string;
  artist: string;
  liked: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MusicPlayerService {
  list: Array<MusicItem>;
  current: number;

  constructor() {
    this.list = [
      {
        id: 0,
        title: 'Music-1',
        artist: 'A',
        liked: false,
      },
      {
        id: 1,
        title: 'Music-2',
        artist: 'B',
        liked: true,
      },
      {
        id: 2,
        title: 'Music-3',
        artist: 'C',
        liked: false,
      },
      {
        id: 3,
        title: 'Music-4',
        artist: 'D',
        liked: false,
      },
    ];
    this.current = 0;
  }

  getList() {
    return this.list;
  }

  getCurrent() {
    return this.current;
  }

  play(index: number) {
    console.log('play', index);
    this.current = index;
  }

  toggleLiked(id: number) {
    console.log('toggleLiked', id);
    for (let i = 0; i < this.list.length; i += 1) {
      if (this.list[i].id === id) {
        this.list[i].liked = !this.list[i].liked;
        break;
      }
    }
  }
}
