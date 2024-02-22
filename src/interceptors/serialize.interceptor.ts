import { NestInterceptor, ExecutionContext, CallHandler, UseInterceptors } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";
import { UserDto } from "src/users/dtos/user.dto";

export function Serialize(dto: any){
    return UseInterceptors(new SerializeInterceptor(dto))
}

export class SerializeInterceptor implements NestInterceptor{
    constructor(private dto: any) {}

    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // Run something before a request is handled by request handler 
    
    return handler.handle().pipe(
        map((data: any) => {
            return plainToClass(this.dto, data, {
                excludeExtraneousValues: true,
            });
        })
    )    
    }
}