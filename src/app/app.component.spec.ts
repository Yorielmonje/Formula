import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('Obtener la ruta del ui.component.html', () => {
    let  link:AppComponent;
    link=new AppComponent();
    expect(link.getLink()).toBe("ui/ui.component.html");
  });
});
