if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface HotPointPage_Params {
    currentBreakpoint?: string;
    isFoundSelected?: boolean;
    isShowHotTitle?: boolean;
}
import deviceInfo from "@ohos:deviceInfo";
import { BreakpointConstants as Breakpoint, CommonConstants as BaseCommon } from "@normalized:N&&&base/Index&1.0.0";
import { FoundView } from "@normalized:N&&&hot/src/main/ets/view/FoundView&1.0.0";
import { FollowView } from "@normalized:N&&&hot/src/main/ets/view/FollowView&1.0.0";
import { HotTitleView } from "@normalized:N&&&hot/src/main/ets/view/HotTitleView&1.0.0";
export class HotPointPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_SM, "currentBreakpoint");
        this.__isFoundSelected = this.createStorageLink('isFoundSelected', true, "isFoundSelected");
        this.__isShowHotTitle = this.createStorageLink('isShowHotTitle', true, "isShowHotTitle");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: HotPointPage_Params) {
    }
    updateStateVars(params: HotPointPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__isFoundSelected.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowHotTitle.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isFoundSelected.aboutToBeDeleted();
        this.__isShowHotTitle.aboutToBeDeleted();
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
    private __isFoundSelected: ObservedPropertyAbstractPU<boolean>;
    get isFoundSelected() {
        return this.__isFoundSelected.get();
    }
    set isFoundSelected(newValue: boolean) {
        this.__isFoundSelected.set(newValue);
    }
    private __isShowHotTitle: ObservedPropertyAbstractPU<boolean>;
    get isShowHotTitle() {
        return this.__isShowHotTitle.get();
    }
    set isShowHotTitle(newValue: boolean) {
        this.__isShowHotTitle.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding({
                top: deviceInfo.deviceType === BaseCommon.DEVICE_2IN1 ? { "id": 67108909, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67108992, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            Column.backgroundColor({ "id": 67108986, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Column.height(BaseCommon.FULL_PERCENT);
            Column.justifyContent(FlexAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(BaseCommon.FULL_PERCENT);
            Column.width(BaseCommon.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isShowHotTitle) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new HotTitleView(this, {}, undefined, elmtId, () => { }, { page: "features/hot/src/main/ets/view/HotPointPage.ets", line: 32, col: 11 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {};
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "HotTitleView" });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isFoundSelected) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new FoundView(this, {}, undefined, elmtId, () => { }, { page: "features/hot/src/main/ets/view/HotPointPage.ets", line: 36, col: 11 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {};
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "FoundView" });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.layoutWeight(1);
                    }, Column);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new FollowView(this, {}, undefined, elmtId, () => { }, { page: "features/hot/src/main/ets/view/HotPointPage.ets", line: 39, col: 13 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {};
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "FollowView" });
                    }
                    Column.pop();
                });
            }
        }, If);
        If.pop();
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
