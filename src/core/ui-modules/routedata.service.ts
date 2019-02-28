import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class RouteDataService {
  observer: Subject<any> = new Subject();

  constructor() {
  }

  setData(data) {
    this.observer.next(data);
  }

  getData(): Observable<any> {
    return this.observer;
  }

  // reads data from the route
  subscribeNavigationEnd(router: Router, activatedRoute: ActivatedRoute) {
    const filterOutNav = filter(e => e instanceof NavigationEnd);

    router.events
      .pipe(
        filterOutNav,
        map(() => activatedRoute),
        map((route => {
          if (route.firstChild) {
            route = route.firstChild;
          }

          return route;
        })),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe(e => {
        this.setData(e);
      }
    );
  }
}
