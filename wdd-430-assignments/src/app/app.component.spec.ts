import { TestBed, async } from '@angular/core/testing';
import { appComponent } from './app.component';
describe('appComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        appComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(appComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'cms'`, async(() => {
    const fixture = TestBed.createComponent(appComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('cms');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(appComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
