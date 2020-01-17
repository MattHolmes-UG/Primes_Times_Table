import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title Prime Times Tables`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Prime Times Tables');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Prime Times Tables');
  });

  it('should have an array of primes equal to the number passed', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const num = 10;
    app.showTable(num);
    expect(app.primes.length).toEqual(num);
  })
  it('should have primes with correct values', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const num = 10;
    const firstTenPrimes = [2,3,5,7,11,13,17,19,23,29]
    app.generatePrimes(num);
    expect(app.primes.length).toEqual(num);
    expect(app.primes).toEqual(firstTenPrimes);
    app.generatePrimes(3);
    expect(app.primes).toEqual(firstTenPrimes.splice(0,3));
  })
  it('should have times table array with length equal to number passed', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const num = 10;
    app.showTable(num);
    expect(app.tableArr.length).toEqual(num);
  })
  it('should have a table element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  })
});
