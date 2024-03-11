import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { TypeToast } from 'src/app/shared/models/TypeToastE';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

export const hasRequiredRoleGuard: CanActivateFn = (route, state) => {
  const expectedRole = route.data['role'];
    
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    const notification: NotificationService = inject(NotificationService);

    return authService.role$.pipe(
        map((role) => {
            if (expectedRole.includes(role)) {
              return true;
            }
            notification.showToast(TypeToast.Error, 'Sem permissão', 'Você não esta autenticado para acessar essa página');
            router.navigate(['/colaborador/login']);
            return false;
        })
    );
};
