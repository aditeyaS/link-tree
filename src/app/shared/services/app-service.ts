import { Injectable } from "@angular/core";
import { appData } from "../data/app.data";
import { SocialCategory } from "../models/social-category.model";

@Injectable()
export class AppService {
    getAllData(): SocialCategory[] {
        return appData;
    }
}