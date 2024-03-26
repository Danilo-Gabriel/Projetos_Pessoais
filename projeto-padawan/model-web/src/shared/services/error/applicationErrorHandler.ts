import { ErrorHandler, Injectable, Injector, NgZone } from "@angular/core";



@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {




  constructor(private injector: Injector, private ngZone: NgZone) {
      super();
  }

}

