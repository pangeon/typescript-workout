import { Component, Input } from '@angular/core';

@Component({
  selector: 'welcome-message',
  template: `
  <h3>welcome-message</h3>
  <hr />
	<h1>Welcome, {{ name }}!</h1>
	`,

})
export class WelcomeMessageComponent {
  @Input() name: string = "Brad";
}

