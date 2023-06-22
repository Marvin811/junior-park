import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean {
    const request = context.switchToHttp().getRequest<{user: User}>();
    const user = request.user

    if (!user.isAdmin) throw new ForbiddenException('У вас недостаточно прав!')
    
    return user.isAdmin;
  }
}