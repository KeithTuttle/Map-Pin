import Pin from './Pin'

export class UserWithErrorMessage{
    user: User | null = null;
    error: string = "";
}

export class User {
    username: string = "";
    pins: Array<Pin> = []
}