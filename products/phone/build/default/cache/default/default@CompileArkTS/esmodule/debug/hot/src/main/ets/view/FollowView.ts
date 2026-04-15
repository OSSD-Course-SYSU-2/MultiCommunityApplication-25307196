if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface FollowView_Params {
    currentBreakpoint?: string;
    isShowHotTitle?: boolean;
    indexSelected?: number;
    indexTitleSelected?: number;
    pageInfo?: NavPathStack;
    iconList?: TitleDetailInterface[];
    iconTitleList?: TitleDetailInterface[];
    listScroller?: Scroller;
    listTitleScroller?: Scroller;
}
import { BreakpointConstants as Breakpoint, CommonConstants as BaseCommon, BreakpointType } from "@normalized:N&&&base/Index&1.0.0";
import { CommonConstants as Common } from "@normalized:N&&&hot/src/main/ets/constants/CommonConstants&1.0.0";
import { CardItemView } from "@normalized:N&&&hot/src/main/ets/view/CardItemView&1.0.0";
import { TITLE_DETAIL_LIST } from "@normalized:N&&&hot/src/main/ets/model/FollowModel&1.0.0";
import type { TitleDetailInterface } from "@normalized:N&&&hot/src/main/ets/model/FollowModel&1.0.0";
import { FOLLOW_LIST } from "@normalized:N&&&hot/src/main/ets/model/FollowModel&1.0.0";
import type { FollowItemInterface } from "@normalized:N&&&hot/src/main/ets/model/FollowModel&1.0.0";
export class FollowView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_SM, "currentBreakpoint");
        this.__isShowHotTitle = this.createStorageLink('isShowHotTitle', true, "isShowHotTitle");
        this.__indexSelected = new ObservedPropertySimplePU(0, this, "indexSelected");
        this.__indexTitleSelected = new ObservedPropertySimplePU(-1, this, "indexTitleSelected");
        this.__pageInfo = new ObservedPropertyObjectPU(new NavPathStack(), this, "pageInfo");
        this.iconList = TITLE_DETAIL_LIST;
        this.iconTitleList = [];
        this.listScroller = new Scroller();
        this.listTitleScroller = new Scroller();
        this.setInitiallyProvidedValue(params);
        this.declareWatch("currentBreakpoint", this.updateShow);
        this.declareWatch("isShowHotTitle", this.updateShow);
        this.declareWatch("indexSelected", this.updateShow);
        this.declareWatch("indexTitleSelected", this.updateShow);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: FollowView_Params) {
        if (params.indexSelected !== undefined) {
            this.indexSelected = params.indexSelected;
        }
        if (params.indexTitleSelected !== undefined) {
            this.indexTitleSelected = params.indexTitleSelected;
        }
        if (params.pageInfo !== undefined) {
            this.pageInfo = params.pageInfo;
        }
        if (params.iconList !== undefined) {
            this.iconList = params.iconList;
        }
        if (params.iconTitleList !== undefined) {
            this.iconTitleList = params.iconTitleList;
        }
        if (params.listScroller !== undefined) {
            this.listScroller = params.listScroller;
        }
        if (params.listTitleScroller !== undefined) {
            this.listTitleScroller = params.listTitleScroller;
        }
    }
    updateStateVars(params: FollowView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowHotTitle.purgeDependencyOnElmtId(rmElmtId);
        this.__indexSelected.purgeDependencyOnElmtId(rmElmtId);
        this.__indexTitleSelected.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfo.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isShowHotTitle.aboutToBeDeleted();
        this.__indexSelected.aboutToBeDeleted();
        this.__indexTitleSelected.aboutToBeDeleted();
        this.__pageInfo.aboutToBeDeleted();
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
    private __isShowHotTitle: ObservedPropertyAbstractPU<boolean>;
    get isShowHotTitle() {
        return this.__isShowHotTitle.get();
    }
    set isShowHotTitle(newValue: boolean) {
        this.__isShowHotTitle.set(newValue);
    }
    private __indexSelected: ObservedPropertySimplePU<number>;
    get indexSelected() {
        return this.__indexSelected.get();
    }
    set indexSelected(newValue: number) {
        this.__indexSelected.set(newValue);
    }
    private __indexTitleSelected: ObservedPropertySimplePU<number>;
    get indexTitleSelected() {
        return this.__indexTitleSelected.get();
    }
    set indexTitleSelected(newValue: number) {
        this.__indexTitleSelected.set(newValue);
    }
    private __pageInfo: ObservedPropertyObjectPU<NavPathStack>;
    get pageInfo() {
        return this.__pageInfo.get();
    }
    set pageInfo(newValue: NavPathStack) {
        this.__pageInfo.set(newValue);
    }
    private iconList: TitleDetailInterface[];
    private iconTitleList: TitleDetailInterface[];
    private listScroller: Scroller;
    private listTitleScroller: Scroller;
    updateShow() {
        if (this.currentBreakpoint === Breakpoint.BREAKPOINT_SM && this.indexSelected !== 0) {
            this.isShowHotTitle = false;
            return;
        }
        this.isShowHotTitle = true;
    }
    aboutToAppear() {
        TITLE_DETAIL_LIST.forEach((item: TitleDetailInterface, index: number) => {
            if (index !== 0) {
                this.iconTitleList.push(item);
            }
        });
        this.pageInfo.pushPath({ name: '' });
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.justifyContent(FlexAlign.Start);
            Column.backgroundColor({ "id": 67108979, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Column.height(BaseCommon.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding({
                top: { "id": 67109040, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            Column.width(BaseCommon.FULL_PERCENT);
            Column.visibility(this.currentBreakpoint === Breakpoint.BREAKPOINT_SM ? Visibility.Visible : Visibility.None);
            Column.backgroundColor(this.indexTitleSelected === -1 ? Color.White : { "id": 67108972, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width(BaseCommon.FULL_PERCENT);
            Row.padding({
                left: { "id": 67109029, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                right: { "id": 67109029, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            Row.visibility(this.isShowHotTitle ? Visibility.Visible : Visibility.None);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 67108958, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontSize({ "id": 67109044, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontColor({ "id": 67108977, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 67108956, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontSize({ "id": 67109027, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontColor({ "id": 67108971, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109121, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width({ "id": 67109028, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
        }, Image);
        Row.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: Common.FOLLOW_TITLE_SPACE, scroller: this.listTitleScroller });
            List.scrollBar(BarState.Off);
            List.listDirection(Axis.Horizontal);
            List.padding({
                top: { "id": 67109036, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            List.height({ "id": 67109032, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            List.width(BaseCommon.FULL_PERCENT);
            List.margin({ "id": 67108909, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, true);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.onClick(() => {
                            this.indexTitleSelected = index;
                            this.indexSelected = index + 1;
                            this.listScroller.scrollToIndex(this.indexSelected);
                            this.pageInfo.clear();
                            this.pageInfo.pushPath(new NavPathInfo(`${index}`, ''), false);
                        });
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.margin({
                                left: index === 0 ? { "id": 67109037, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67108909, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                                right: index === this.iconTitleList.length - 1 ? { "id": 67109037, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67108909, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                            });
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create(item.icon);
                            Image.width({ "id": 67109035, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                            Image.aspectRatio(1);
                            Image.borderRadius({ "id": 67109033, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                            Image.borderWidth(index === this.indexTitleSelected ? { "id": 67109034, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67108909, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                            Image.borderColor({ "id": 67108974, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.name);
                            Text.width({ "id": 67109043, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                            Text.fontSize({ "id": 67109041, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                            Text.fontColor(index === this.indexTitleSelected ? { "id": 67108976, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67108975, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                            Text.textAlign(TextAlign.Center);
                            Text.margin({
                                top: { "id": 67109042, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                            });
                        }, Text);
                        Text.pop();
                        Column.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.iconTitleList, forEachItemGenFunction, (item: TitleDetailInterface, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.indexTitleSelected !== -1) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width(BaseCommon.FULL_PERCENT);
                        Row.justifyContent(FlexAlign.SpaceBetween);
                        Row.padding({
                            left: { "id": 67109039, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            right: { "id": 67109039, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                        });
                        Row.margin({
                            top: { "id": 67109038, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                        });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create();
                        Text.fontSize({ "id": 67109031, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
                        Text.fontColor({ "id": 67108973, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    }, Text);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Span.create(this.iconTitleList[this.indexTitleSelected].name);
                    }, Span);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Span.create({ "id": 67108954, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    }, Span);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 67109122, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.width({ "id": 67109030, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.aspectRatio(1);
                        Image.onClick(() => {
                            this.indexTitleSelected = -1;
                            this.indexSelected = 0;
                            this.listScroller.scrollToIndex(0);
                            this.pageInfo.clear();
                            this.pageInfo.pushPath(new NavPathInfo(`${this.indexSelected}`, ''), false);
                        });
                    }, Image);
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Navigation.create(this.pageInfo, { moduleName: "phone", pagePath: "features/hot/src/main/ets/view/FollowView", isUserCreateStack: true });
            Navigation.hideTitleBar(true);
            Navigation.hideBackButton(true);
            Navigation.hideToolBar(true);
            Navigation.mode(NavigationMode.Split);
            Navigation.navBarWidth(new BreakpointType({ "id": 67108909, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109062, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109061, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint));
            Navigation.hideNavBar(this.currentBreakpoint === Breakpoint.BREAKPOINT_SM);
            Navigation.layoutWeight(1);
            Navigation.navDestination({ builder: this.pageMap.bind(this) });
        }, Navigation);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ initialIndex: this.indexSelected, scroller: this.listScroller });
            List.scrollBar(BarState.Off);
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, true);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.width(BaseCommon.FULL_PERCENT);
                            Row.height({ "id": 67108996, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                            Row.backgroundColor(this.indexSelected === index ? { "id": 67108965, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : Color.White);
                            Row.padding({
                                left: { "id": 67108997, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                            });
                            Row.onClick(() => {
                                this.indexSelected = index;
                                this.indexTitleSelected = index - 1;
                                this.listTitleScroller.scrollToIndex(this.indexTitleSelected < 0 ? 0 : this.indexTitleSelected);
                                this.pageInfo.clear();
                                this.pageInfo.pushPath(new NavPathInfo(`${index}`, ''), false);
                            });
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            If.create();
                            if (item.icon !== undefined) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Image.create(item.icon);
                                        Image.width({ "id": 67108995, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                                        Image.aspectRatio(1);
                                        Image.borderRadius({ "id": 67108994, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                                    }, Image);
                                });
                            }
                            else {
                                this.ifElseBranchUpdateFunction(1, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Row.create();
                                        Row.width({ "id": 67108995, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                                        Row.aspectRatio(1);
                                        Row.borderRadius({ "id": 67108994, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                                        Row.backgroundColor({ "id": 67108963, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                                    }, Row);
                                    Row.pop();
                                });
                            }
                        }, If);
                        If.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.margin({
                                left: { "id": 67108999, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                            });
                            Column.alignItems(HorizontalAlign.Start);
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.name);
                            Text.fontSize({ "id": 67108998, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                            Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
                            Text.fontColor({ "id": 67108964, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item?.content);
                            Text.fontSize({ "id": 67108993, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                            Text.fontColor({ "id": 67108962, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        }, Text);
                        Text.pop();
                        Column.pop();
                        Row.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.iconList, forEachItemGenFunction, (item: TitleDetailInterface, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Navigation.pop();
        Column.pop();
    }
    pageMap(name: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NavDestination.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    WaterFlow.create();
                    WaterFlow.backgroundColor({ "id": 67108979, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    WaterFlow.padding({
                        top: new BreakpointType({ "id": 67109048, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109047, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109046, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" })
                            .getValue(this.currentBreakpoint),
                        left: new BreakpointType({ "id": 67109048, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109047, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109046, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" })
                            .getValue(this.currentBreakpoint),
                        right: new BreakpointType({ "id": 67109048, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109047, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109046, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" })
                            .getValue(this.currentBreakpoint),
                        bottom: new BreakpointType({ "id": 67109048, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109047, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109046, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" })
                            .getValue(this.currentBreakpoint)
                    });
                    WaterFlow.columnsGap({ "id": 67109045, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    WaterFlow.rowsGap(new BreakpointType({ "id": 67109048, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109047, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109046, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" })
                        .getValue(this.currentBreakpoint));
                    WaterFlow.columnsTemplate(new BreakpointType(Common.WATER_FLOW_COLUMNS_TEMPLATE_NORMAL, Common.WATER_FLOW_COLUMNS_TEMPLATE_NORMAL, Common.WATER_FLOW_COLUMNS_TEMPLATE_LG)
                        .getValue(this.currentBreakpoint));
                }, WaterFlow);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    ForEach.create();
                    const forEachItemGenFunction = _item => {
                        const item = _item;
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            FlowItem.create();
                        }, FlowItem);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new CardItemView(this, {
                                        item: item,
                                        index: this.indexSelected
                                    }, undefined, elmtId, () => { }, { page: "features/hot/src/main/ets/view/FollowView.ets", line: 237, col: 13 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            item: item,
                                            index: this.indexSelected
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "CardItemView" });
                        }
                        FlowItem.pop();
                    };
                    this.forEachUpdateFunction(elmtId, FOLLOW_LIST, forEachItemGenFunction, (item: FollowItemInterface, index: number) => index + JSON.stringify(item), false, true);
                }, ForEach);
                ForEach.pop();
                WaterFlow.pop();
            }, { moduleName: "phone", pagePath: "features/hot/src/main/ets/view/FollowView" });
            NavDestination.width(BaseCommon.FULL_PERCENT);
            NavDestination.height(BaseCommon.FULL_PERCENT);
            NavDestination.hideTitleBar(true);
        }, NavDestination);
        NavDestination.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
