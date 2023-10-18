import { CanActivateFn, Router } from '@angular/router';
import { getToken } from '../environments/environments';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  if (getToken()) {
    return true;
  } else {
    const router = inject(Router);

    return router.navigate(['/'])
  }
};
