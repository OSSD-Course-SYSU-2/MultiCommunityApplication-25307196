if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TabContentView_Params {
    currentBreakpoint?: string;
    currentIndex?: number;
    tabBarsInfo?: TabBarViewModel;
}
import { BreakpointConstants as Breakpoint, CommonConstants as Common } from "@normalized:N&&&base/Index&1.0.0";
import { HotPointPage } from "@normalized:N&&&hot/Index&1.0.0";
import type { BarItemInterface } from '../model/TabBarModel';
import { TabBarViewModel } from "@normalized:N&&&phone/src/main/ets/viewmodel/TabBarViewModel&";
export class TabContentView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_LG, "currentBreakpoint");
        this.__currentIndex = new ObservedPropertySimplePU(1, this, "currentIndex");
        this.tabBarsInfo = new TabBarViewModel();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TabContentView_Params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.tabBarsInfo !== undefined) {
            this.tabBarsInfo = params.tabBarsInfo;
        }
    }
    updateStateVars(params: TabContentView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    private tabBarsInfo: TabBarViewModel;
    TabBarBuilder(item: BarItemInterface, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("products/phone/src/main/ets/view/TabContentView.ets(29:5)", "phone");
            Column.height(Common.FULL_PERCENT);
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(index !== this.currentIndex ? item.icon : item.iconSelected);
            Image.debugLine("products/phone/src/main/ets/view/TabContentView.ets(30:7)", "phone");
            Image.width({ "id": 67108879, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.name);
            Text.debugLine("products/phone/src/main/ets/view/TabContentView.ets(33:7)", "phone");
            Text.fontSize({ "id": 67108892, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(Common.FONT_WEIGHT_500);
            Text.fontColor(index === this.currentIndex ? { "id": 67108919, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67108918, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Column.pop();
    }
    DefaultTabBuilder(name: Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("products/phone/src/main/ets/view/TabContentView.ets(44:5)", "phone");
            Column.justifyContent(FlexAlign.Center);
            Column.width(Common.FULL_PERCENT);
            Column.height(Common.FULL_PERCENT);
            Column.backgroundColor(Color.White);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(name);
            Text.debugLine("products/phone/src/main/ets/view/TabContentView.ets(45:7)", "phone");
            Text.fontSize({ "id": 67108878, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(Common.FONT_WEIGHT_700);
        }, Text);
        Text.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("products/phone/src/main/ets/view/TabContentView.ets(56:5)", "phone");
            Column.backgroundColor({ "id": 67108916, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Column.padding({ bottom: this.currentBreakpoint !== Breakpoint.BREAKPOINT_LG ? { "id": 67108891, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67108901, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
            Column.height(Common.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({
                barPosition: this.currentBreakpoint === Breakpoint.BREAKPOINT_LG ? BarPosition.Start : BarPosition.End,
                index: this.currentIndex
            });
            Tabs.debugLine("products/phone/src/main/ets/view/TabContentView.ets(57:7)", "phone");
            Tabs.vertical(this.currentBreakpoint === Breakpoint.BREAKPOINT_LG);
            Tabs.onChange((index: number) => {
                this.currentIndex = index;
            });
            Tabs.barHeight(this.currentBreakpoint === Breakpoint.BREAKPOINT_LG ? Common.HALF_PERCENT : { "id": 67108871, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Tabs.barWidth(this.currentBreakpoint === Breakpoint.BREAKPOINT_LG ? { "id": 67108887, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : Common.FULL_PERCENT);
            Tabs.scrollable(false);
            Tabs.height(Common.FULL_PERCENT);
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.DefaultTabBuilder.bind(this)({ "id": 67108906, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBarBuilder.call(this, this.tabBarsInfo.getTabList()[0], 0);
                } });
            TabContent.debugLine("products/phone/src/main/ets/view/TabContentView.ets(61:9)", "phone");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new HotPointPage(this, {}, undefined, elmtId, () => { }, { page: "products/phone/src/main/ets/view/TabContentView.ets", line: 67, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "HotPointPage" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBarBuilder.call(this, this.tabBarsInfo.getTabList()[1], 1);
                } });
            TabContent.debugLine("products/phone/src/main/ets/view/TabContentView.ets(66:9)", "phone");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.DefaultTabBuilder.bind(this)({ "id": 67108907, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBarBuilder.call(this, this.tabBarsInfo.getTabList()[2], 2);
                } });
            TabContent.debugLine("products/phone/src/main/ets/view/TabContentView.ets(71:9)", "phone");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.DefaultTabBuilder.bind(this)({ "id": 67108908, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBarBuilder.call(this, this.tabBarsInfo.getTabList()[3], 3);
                } });
            TabContent.debugLine("products/phone/src/main/ets/view/TabContentView.ets(76:9)", "phone");
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
