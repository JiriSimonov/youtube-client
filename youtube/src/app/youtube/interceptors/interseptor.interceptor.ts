import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

export const API_KEY = 'AIzaSyCHUaZZfGdfMvMDl7FKpnzXzX2PQ0RacQ0';
export const BASE_PATH = 'https://www.googleapis.com/youtube/v3/';

@Injectable()
export class InterseptorInterceptor implements HttpInterceptor {
  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const PATH = request.urlWithParams.replace('=', `=${API_KEY}`);
    const URL = `${BASE_PATH}${PATH}`;
    const updatedRequest = request.clone({
      setHeaders: { Authorization: `Bearer ${API_KEY}` },
      url: URL,
    });
    return next.handle(updatedRequest);
  }
}
