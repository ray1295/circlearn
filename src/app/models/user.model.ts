export class Iuser {
    id: number; 
    name: string; 
    gender: string;
    email?: string;
    dateOfBirth: Date;
    isActive: boolean;
    photoPath?: string;
}

// properties email and photopath are made optional by the 
// ? symbol