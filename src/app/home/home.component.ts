import { Component, OnInit } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { AuthenticationResult, InteractionRequiredAuthError, InteractionStatus } from '@azure/msal-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginDisplay = false;

  constructor(private authService: MsalService, private msalBroadcastService: MsalBroadcastService) { }

  ngOnInit(): void {
 
    // this.authService.handleRedirectObservable().subscribe({
    //   next: (result: AuthenticationResult) => {
    //     if (result) {
    //       this.authService.instance.setActiveAccount(result.account);
    //       console.log('from home component');
    //       console.log(result);
    //     }
    //     // Sets login display when using redirects
    //     this.setLoginDisplay();
    //   },
    //   error: (error) => console.log(error)
    // });

    // this.authService.

    // Sets login display when using popups
    // this.msalBroadcastService.inProgress$
    //   .pipe(
    //     filter((status: InteractionStatus) => status === InteractionStatus.None)
    //   )
    //   .subscribe(() => {
    //     debugger;
    //     this.setLoginDisplay();
    //   }); 
    var request = {
      scopes: ["Mail.Read"]
  };
  
  // this.authService.instance.acquireTokenSilent(request).then(tokenResponse => {
  //   debugger;
  //     // Do something with the tokenResponse
  // }).catch(error => {
  //     if (error instanceof InteractionRequiredAuthError) {
  //         // fallback to interaction when silent call fails
  //         return this.authService.acquireTokenRedirect(request)
  //     }
  // });
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

}
