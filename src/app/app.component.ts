import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('table', { static: true }) table: ElementRef;
  @ViewChild('num', { static: false }) num: ElementRef;
  @ViewChild('numbtn', { static: true }) btn: ElementRef;
  title = 'Prime Times Tables';
  public primes;
  public tableArr;

  ngOnInit() {
    this.showTable(10);
    this.btn.nativeElement.addEventListener('click', () => {
      this.showTable(this.num.nativeElement.value)
    })
  }

  ngAfterViewInit() {

  }

  generatePrimes = (num: number) => {
    let primeArr = [],
      divisors = [2, 3, 5]
    if (num <= divisors.length) {
      primeArr = divisors.splice(0, num);
      // console.log(primeArr);
      this.primes = primeArr;
      return this.timesTable(this.primes);
    }
    primeArr = divisors;

    let i = primeArr.length;
    let x = primeArr[i - 1];
    for (; i < num;) {
      if (divisors.some(d => { return x % d === 0 })) {
        x += 1;
      } else {
        primeArr.push(x);
        i += 1; x += 1;
      }
    }
    this.primes = primeArr;
    // console.log('primes', this.primes);
    this.timesTable(this.primes)

  }
  timesTable = (primes: []) => {
    const tableArr = [];
    primes.forEach(q => {
      tableArr.push(primes.map(p => q * p));
    });
    this.tableArr = tableArr;
    console.log(tableArr);
  }
  showTable = (num) => {
    this.generatePrimes(num);
    this.table.nativeElement.innerHTML = ''; //clear the table
    //To fill the first row with the primes from with table is gotten
    let firstRow = document.createElement('tr');
    firstRow.appendChild(document.createElement('td')); //to add the empty space
    this.primes.forEach(primenum => {
      let tdElem = document.createElement('td');
      tdElem.textContent = primenum;
      firstRow.appendChild(tdElem);

    });
    this.table.nativeElement.appendChild(firstRow); //add the first row to the column

    this.tableArr.forEach((row, index) => {
      let trElem = document.createElement('tr');
      // console.log(index);

      let firstTdElem = document.createElement('td');
      firstTdElem.textContent = this.primes[index];
      trElem.appendChild(firstTdElem);
      //To fill the table with values
      row.forEach((primenum) => {
        //add the value of the primes for that row
        let tdElem = document.createElement('td');
        tdElem.textContent = primenum;
        trElem.appendChild(tdElem);
      });
      this.table.nativeElement.appendChild(trElem);
    });
  }
}
