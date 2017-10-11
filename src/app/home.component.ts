import { Component } from '@angular/core';

import { Friend } from './friend';

@Component({
    selector: 'app-home',
    templateUrl: '',
    styleUrls: ['']
})

export class HomeComponent {
    friends: Friend[] = [];
}

