/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterializeModule } from 'ng2-materialize';
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
      imports: [
        MaterializeModule.forRoot()
      ],
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
    expect(app.title).toEqual('Story Wall');
  }));
});
