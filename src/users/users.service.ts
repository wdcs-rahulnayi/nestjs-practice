import { Injectable, NotFoundException } from '@nestjs/common';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {

    }
    create(email: string, password: string) {
        const user = this.repo.create({ email, password });
        return this.repo.save(user);

    }

    findOne(id: number): Promise<User | undefined> {
        if(!id){ 
            return null
        }
        const options: FindOneOptions<User> = { where: { id } };
        
        return this.repo.findOne(options);
    }

    find(email: string): Promise<User[]> {
        const options: FindManyOptions<User> = { where: { email } };
        return this.repo.find(options);
    }

    async update(id: number, attrs: Partial<User>) {
        const user = await this.findOne(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        Object.assign(user, attrs);
        return this.repo.save(user);
    }

    async remove(id: number) {
        const user = await this.findOne(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return this.repo.remove(user);
    }
}

