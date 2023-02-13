import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HeaderComponent implements OnInit {

  @Output() menuToggled = new EventEmitter<boolean>();

  user: string = 'Enea';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  // constructor(private authService: AuthService) { }

  login(): void {
    this.router.navigate(['/auth/login'])
    console.log('Logged out');
  }

  register(): void {
    this.router.navigate(['/auth/register'])
    console.log('register');
  }



}
