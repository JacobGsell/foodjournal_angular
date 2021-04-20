import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'; import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { History } from '../history';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-fire-test',
  templateUrl: './fire-test.component.html',
  styleUrls: ['./fire-test.component.css']
})
export class FireTestComponent implements OnInit {
  public items: History[];
  displayedColumns: string[] = ['id', 'Name', 'Price'];
  dataSource = new MatTableDataSource<History>(SHIT);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.firebaseService.getFood2()
      .subscribe(result => {

        this.items = result;

        this.dataSource = new MatTableDataSource<History>(this.items);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })


  }
}


const SHIT: History[] = [
  {id: 1,  Name: 'salat', Price: 3 },
  {id: 2,  Name: 'salat', Price: 3 },
  {id: 3,  Name: 'salat', Price: 3 },
]
