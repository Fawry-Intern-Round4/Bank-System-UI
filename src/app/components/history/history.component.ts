import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AccountHistory } from 'src/app/interfaces/accountHistory';
import { AccountService } from 'src/app/services/accout/accout.service';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  accountHistory: AccountHistory[] = [];

  cols!: Column[];

  constructor(
    private accountService: AccountService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    const data = this.config.data;
    this.getMyAccountCardHistory(data.id);

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'transactionType', header: 'Transaction Type' },
      { field: 'amount', header: 'Amount' },
      { field: 'note', header: 'Message' },
      { field: 'createdAt', header: 'Date' },
    ];
  }

  getMyAccountCardHistory(id: Number) {
    this.accountService.getMyAccountCardHistory(id).subscribe(
      (response) => {
        this.accountHistory = response.payload;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
