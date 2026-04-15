if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    currentBreakpoint?: string;
    pageInfos?: NavPathStack;
}
import { BreakpointConstants as Breakpoint, CommonConstants as Common } from "@normalized:N&&&base/Index&1.0.0";
import { DetailPage } from "@normalized:N&&&detail/Index&1.0.0";
import { HotRankPage } from "@normalized:N&&&rank/Index&1.0.0";
import { PictureDetail } from "@normalized:N&&&picture/Index&1.0.0";
import { TabContentView } from "@normalized:N&&&phone/src/main/ets/view/TabContentView&";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_LG, "currentBreakpoint");
        this.__pageInfos = this.createStorageLink('pageInfos', new NavPathStack(), "pageInfos");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__pageInfos.aboutToBeDeleted();
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
    private __pageInfos: ObservedPropertyAbstractPU<NavPathStack>;
    get pageInfos() {
        return this.__pageInfos.get();
    }
    set pageInfos(newValue: NavPathStack) {
        this.__pageInfos.set(newValue);
    }
    aboutToAppear(): void {
        this.pageInfos.pushPath({ name: 'mainPage' });
    }
    pageMap(name: string, param: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if ('rankPage' === name) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        NavDestination.create(() => {
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new HotRankPage(this, {}, undefined, elmtId, () => { }, { page: "products/phone/src/main/ets/pages/MainPage.ets", line: 36, col: 9 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {};
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "HotRankPage" });
                            }
                        }, { moduleName: "phone", pagePath: "products/phone/src/main/ets/pages/MainPage" });
                        NavDestination.hideTitleBar(true);
                    }, NavDestination);
                    NavDestination.pop();
                });
            }
            else if ('mainPage' === name) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        NavDestination.create(() => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Column.create();
                                Column.width(Common.FULL_PERCENT);
                                Column.height(Common.FULL_PERCENT);
                            }, Column);
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new TabContentView(this, {}, undefined, elmtId, () => { }, { page: "products/phone/src/main/ets/pages/MainPage.ets", line: 42, col: 11 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {};
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "TabContentView" });
                            }
                            Column.pop();
                        }, { moduleName: "phone", pagePath: "products/phone/src/main/ets/pages/MainPage" });
                        NavDestination.hideTitleBar(true);
                    }, NavDestination);
                    NavDestination.pop();
                });
            }
            else if ('detailPage' === name) {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        NavDestination.create(() => {
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new DetailPage(this, {}, undefined, elmtId, () => { }, { page: "products/phone/src/main/ets/pages/MainPage.ets", line: 50, col: 9 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {};
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "DetailPage" });
                            }
                        }, { moduleName: "phone", pagePath: "products/phone/src/main/ets/pages/MainPage" });
                        NavDestination.onBackPressed(() => {
                            AppStorage.setOrCreate('isDetailPage', false);
                            return false;
                        });
                        NavDestination.hideTitleBar(true);
                    }, NavDestination);
                    NavDestination.pop();
                });
            }
            else if ('pictureDetail' === name) {
                this.ifElseBranchUpdateFunction(3, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        NavDestination.create(() => {
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new PictureDetail(this, { index: param }, undefined, elmtId, () => { }, { page: "products/phone/src/main/ets/pages/MainPage.ets", line: 59, col: 9 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                index: param
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "PictureDetail" });
                            }
                        }, { moduleName: "phone", pagePath: "products/phone/src/main/ets/pages/MainPage" });
                        NavDestination.hideTitleBar(true);
                    }, NavDestination);
                    NavDestination.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(4, () => {
                });
            }
        }, If);
        If.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Navigation.create(this.pageInfos, { moduleName: "phone", pagePath: "products/phone/src/main/ets/pages/MainPage", isUserCreateStack: true });
            Navigation.hideNavBar(true);
            Navigation.navDestination({ builder: this.pageMap.bind(this) });
            Navigation.width(Common.FULL_PERCENT);
            Navigation.height(Common.FULL_PERCENT);
        }, Navigation);
        Navigation.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.huawei.multicommunityapplication", moduleName: "phone", pagePath: "pages/MainPage", pageFullPath: "products/phone/src/main/ets/pages/MainPage", integratedHsp: "false", moduleType: "followWithHap" });
