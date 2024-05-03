import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { AppModule } from '../app.module';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    console.log(
      service.create({ username: 'maratib', email: 'maratib@gmail.com' }),
    );
    expect(service).toBeDefined();
  });

  it('Find all users', async () => {
    const users = await service.findAll();
    console.log(users);
    expect(service).toBeDefined();
  });
});
