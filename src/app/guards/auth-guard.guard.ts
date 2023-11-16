import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';

export const authGuard: CanActivateFn = (route, state) => {
  const apiService = inject(ApiserviceService)
  apiService.isTokenValid().subscribe((data) => {
    console.log(data);
    return true;
  })
  return false;
};
