import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'UserName required' })
  username: string;

  @IsEmail({}, { message: 'Email is required' })
  email: string;
}
