import { TabBarsInfo } from "@normalized:N&&&phone/src/main/ets/model/TabBarModel&";
import type { BarItemInterface } from "@normalized:N&&&phone/src/main/ets/model/TabBarModel&";
export class TabBarViewModel {
    private tabList: BarItemInterface[] = TabBarsInfo;
    getTabList(): BarItemInterface[] {
        return this.tabList;
    }
}
