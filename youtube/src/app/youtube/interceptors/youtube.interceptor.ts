import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const URL = `${environment.BASE_PATH}${request.url}`;
    const updatedRequest = request.clone({
      setParams: { key: environment.API_KEY },
      url: URL,
    });
    return next.handle(updatedRequest);
  }
}
