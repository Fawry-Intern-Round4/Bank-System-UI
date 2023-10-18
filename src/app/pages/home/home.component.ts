import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserCard } from 'src/app/interfaces/account';
import { User } from 'src/app/interfaces/user';
import { AccountService } from 'src/app/services/accout/accout.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  accountCards: UserCard[] = [];
  user!: User;

  constructor(
    private accountService: AccountService,
    private userService: UserService,
    private router: Router,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.getMyAccountCards();
    this.getUser();
  }

  getMyAccountCards() {
    this.accountService.getUserCards().subscribe(
      (response) => {
        this.accountCards = response.payload;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUser() {
    this.userService.getUser().subscribe(
      (response) => {
        this.user = response.payload;
        console.log(this.accountCards);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  CreateNewAccountCard() {
    this.accountService.createNewUserCard().subscribe(
      (response) => {
        this.accountCards.push(response.payload);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  togleUserCardStatus(cardId: Number, status: boolean) {
    status ? this.deactiveUserCard(cardId) : this.activeUserCard(cardId);
  }

  private activeUserCard(cardId: Number) {
    this.accountService.activeUserAccountCard(cardId).subscribe(
      (response: any) => {
        this.updateAccountCardStatus(cardId, true);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  private deactiveUserCard(cardId: Number) {
    this.accountService.deactiveUserAccountCard(cardId).subscribe(
      (response: any) => {
        this.updateAccountCardStatus(cardId, false);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  private updateAccountCardStatus(id: Number, status: boolean): void {
    const index = this.accountCards.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.accountCards[index].status = status;
    }
  }

  getMyAccountCardHistory() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Not Implemnted Yet',
    });
  }
}
