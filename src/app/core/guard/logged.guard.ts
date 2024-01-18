import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { NotificationService } from '../services/notification.service';
import { TypeToast } from 'src/app/shared/models/TypeToastE';

export const loggedGuard: CanActivateFn = (route, state) => {
  const serviceAuth = inject(AuthService);
  const router = inject(Router);
  const notification = inject(NotificationService);

  return serviceAuth.isLogged$.pipe(
    tap((isLogged: boolean) => {
      if (!isLogged) {

        router.navigate(['/colaborador/login']);
        notification.showToast(
          TypeToast.Error,
          'Não autenticado',
          'Você precisa estar autenticado para acessar essa página'
        );
      }
    })
  )
};
