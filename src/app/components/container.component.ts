import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { SocialCategory } from "../shared/models/social-category.model";

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
    @Input()socialCategoryList: SocialCategory[] = [];
}