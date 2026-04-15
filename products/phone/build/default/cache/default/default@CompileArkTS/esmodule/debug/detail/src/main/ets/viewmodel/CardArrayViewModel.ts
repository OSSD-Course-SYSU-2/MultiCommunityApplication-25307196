import { CARD_LIST } from "@normalized:N&&&base/Index&1.0.0";
import type { CardItemInterface } from "@normalized:N&&&base/Index&1.0.0";
import { CardItem } from "@normalized:N&&&detail/src/main/ets/viewmodel/CardViewModel&1.0.0";
export class CardArray {
    cardArray: CardItem[] = [];
    constructor() {
        CARD_LIST.forEach((item: CardItemInterface, index: number) => {
            this.cardArray.push(new CardItem(item, index));
        });
    }
    getInstance() {
        return this;
    }
}
export default new CardArray();
