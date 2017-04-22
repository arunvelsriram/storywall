/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Rx';

import { Card } from './card';
import { LanePipe } from './lane.pipe';
import { IMingleService } from './imingle-service';
import { MingleService } from './mingle.service';

class MingleServiceMock implements IMingleService {
  getCards(): Observable<Card[]> {
    const cards: Card[] = new Array<Card>(
      new Card(1000, 'Some card', 'Dev', 'Arun', 'JK'),
      new Card(1010, 'Another card', 'QA', 'Sravanthi', 'Poornima')
    );

    return Observable.of(cards);
  }

  getLaneNames(): string[] {
    return ['Dev', 'QA'];
  }
}

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LanePipe
      ],
      providers: [
        {
          provide: MingleService,
          useClass: MingleServiceMock
        }
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
