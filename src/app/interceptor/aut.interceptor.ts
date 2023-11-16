import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from '../services/cookie.service';

export const autInterceptor: HttpInterceptorFn = (req, next) => {

  const cookieService = inject(CookieService);
  console.log(cookieService.getCookie("27_YYYYY_GGGGG"), "okkkk")
  const tokenCookie: string = cookieService.getCookie("27_YYYYY_GGGGG");

  const clonedRequest = req.clone({
    // headers: req.headers.set('Cookie', tokenCookie)
    withCredentials: true,
  });
  console.log(clonedRequest, "poiu yyt ", req)

  return next(clonedRequest);
};
