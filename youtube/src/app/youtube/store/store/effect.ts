import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { HttpVideosService } from 'src/app/core/services/http-videos.service';
import { getVideos, getVideosFailure, getVideosSuccess } from './actions';

@Injectable()
export class VideosEffects {
  public getVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getVideos),
      switchMap((action) =>
        this.httpVideosService.getVideos(action.search).pipe(
          map((videos) => getVideosSuccess({ videos })),
          catchError((error) => of(getVideosFailure({ error: error.message }))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private httpVideosService: HttpVideosService) {}
}
