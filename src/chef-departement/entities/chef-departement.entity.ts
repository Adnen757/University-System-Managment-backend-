import { User } from "src/user/entities/user.entity";
import { ChildEntity } from "typeorm";

@ChildEntity("ChefDepartement")
export class ChefDepartement extends User {
    
}