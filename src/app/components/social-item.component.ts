import { Component, Input } from "@angular/core";
import { SocialItem } from "../shared/models/social-item.model";

@Component({
    selector: 'app-social-item',
    templateUrl: './social-item.component.html',
    styleUrls: ['./social-item.component.scss']
})
export class SocialItemComponent {
    @Input()socialItem: SocialItem | undefined;
}