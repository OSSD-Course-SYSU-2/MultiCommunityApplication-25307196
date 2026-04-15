import { COMMENT_LIST, CommentItem, PICTURE_ARRAY_LIST } from "@normalized:N&&&base/Index&1.0.0";
import type { CommentItemInterface, CardItemInterface } from "@normalized:N&&&base/Index&1.0.0";
export class CardItem implements CardItemInterface {
    icon: ResourceStr;
    name: ResourceStr;
    authorType: ResourceStr;
    content: ResourceStr;
    pictureArray: Resource[] = [];
    commentList: CommentItem[] = [];
    constructor(card: CardItemInterface, index: number) {
        this.icon = card.icon;
        this.name = card.name;
        this.authorType = card.authorType;
        this.content = card.content;
        this.pictureArray = PICTURE_ARRAY_LIST[index % PICTURE_ARRAY_LIST.length];
        COMMENT_LIST.forEach((item: CommentItemInterface) => {
            this.commentList.push(new CommentItem(item));
        });
    }
}
