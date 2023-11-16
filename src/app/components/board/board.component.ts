import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddBoardComponent } from 'src/app/dialogComponent/add-board/add-board.component';


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements AfterViewInit, OnInit {

  allBoardsData$!: Observable<any>;

  constructor(private apiService: ApiserviceService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.allBoardsData$ = this.apiService.getAllCards();
  }
  ngAfterViewInit(): void {
  }

  addBoard() {
    this.dialog.open(AddBoardComponent)
    // this.apiService.addBoard().subscribe((data) => {
    //   console.log(data, "poiu");
    // })
  }

  removeBoard(board: any) {
    this.apiService.removeBoard(board.id).subscribe((data) => {

    })
  }

}
