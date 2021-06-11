import { Component, OnInit } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { AuthenticationResult, InteractionStatus } from '@azure/msal-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  loginDisplay = false;

  constructor(private authService: MsalService, private msalBroadcastService: MsalBroadcastService) { }

  ngOnInit(): void {
    debugger;
    // this.authService.handleRedirectObservable().subscribe({
    //   next: (result: AuthenticationResult) => {
    //     if (result) {
    //       debugger;
    //       // this.authService.instance.setActiveAccount(result.account);
    //       console.log('from home component');
    //       console.log(result);
    //     }
    //     // Sets login display when using redirects
    //     // this.setLoginDisplay();
    //   },
    //   error: (error) => {console.log(error)
    //     debugger;}
    // });

    // this.authService.

    // // Sets login display when using popups
    // this.msalBroadcastService.inProgress$
    //   .pipe(
    //     filter((status: InteractionStatus) => status === InteractionStatus.None)
    //   )
    //   .subscribe(() => {
    //     debugger;
    //     this.setLoginDisplay();
    //   });
  }
  
  callCallBack()
  {
  this.authService.handleRedirectObservable().subscribe({
        next: (result: AuthenticationResult) => {
          if (result) {
            debugger;
            // this.authService.instance.setActiveAccount(result.account);
            console.log('from home component');
            console.log(result);
          }
          // Sets login display when using redirects
          // this.setLoginDisplay();
        },
        error: (error) => {console.log(error)
          debugger;}
      });

  }

  callInProgress()
  {
    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        debugger;
        this.setLoginDisplay();
      });
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

}
