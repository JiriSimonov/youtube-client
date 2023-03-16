import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from 'src/environment/api-key';
import { BASE_PATH } from 'src/environment/base-path';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const PATH = request.urlWithParams.replace('=', `=${API_KEY}`);
    const URL = `${BASE_PATH}${PATH}`;
    const updatedRequest = request.clone({
      url: URL,
    });
    return next.handle(updatedRequest);
  }
}
