if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SearchBarView_Params {
    currentBreakpoint?: string;
}
import { BreakpointConstants as Breakpoint, CommonConstants as BaseCommon } from "@normalized:N&&&base/Index&1.0.0";
import { CommonConstants as Common } from "@normalized:N&&&hot/src/main/ets/constants/CommonConstants&1.0.0";
export class SearchBarView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_SM, "currentBreakpoint");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SearchBarView_Params) {
    }
    updateStateVars(params: SearchBarView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.currentBreakpoint === Breakpoint.BREAKPOINT_SM) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.debugLine("features/hot/src/main/ets/view/SearchBarView.ets(25:7)", "hot");
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 67109110, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.debugLine("features/hot/src/main/ets/view/SearchBarView.ets(26:9)", "hot");
                        Image.width({ "id": 67109023, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.aspectRatio(1);
                    }, Image);
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.debugLine("features/hot/src/main/ets/view/SearchBarView.ets(31:7)", "hot");
                        Row.alignItems(VerticalAlign.Center);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.debugLine("features/hot/src/main/ets/view/SearchBarView.ets(32:9)", "hot");
                        Row.backgroundColor({ "id": 67108948, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.borderRadius({ "id": 67109032, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.borderWidth({ "id": 67109033, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.height({ "id": 67109034, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.width(BaseCommon.FULL_PERCENT);
                        Row.margin({
                            top: { "id": 67109036, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            bottom: { "id": 67109036, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                        });
                        Row.opacity(Common.SEARCH_BAR_OPACITY);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 67109120, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.debugLine("features/hot/src/main/ets/view/SearchBarView.ets(33:11)", "hot");
                        Image.height({ "id": 67109016, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.aspectRatio(1);
                        Image.margin({ left: { "id": 67109017, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        TextInput.create({ placeholder: { "id": 67109102, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
                        TextInput.debugLine("features/hot/src/main/ets/view/SearchBarView.ets(38:11)", "hot");
                        TextInput.layoutWeight(1);
                        TextInput.backgroundColor({ "id": 67108923, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        TextInput.padding({ left: { "id": 67108901, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
                        TextInput.margin({ left: { "id": 67109042, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
                        TextInput.enableKeyboardOnFocus(false);
                    }, TextInput);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 67109125, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.debugLine("features/hot/src/main/ets/view/SearchBarView.ets(45:11)", "hot");
                        Image.height({ "id": 67109018, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.aspectRatio(1);
                        Image.margin({ left: { "id": 67109019, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 67109117, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.debugLine("features/hot/src/main/ets/view/SearchBarView.ets(50:11)", "hot");
                        Image.width({ "id": 67109045, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.height({ "id": 67109043, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.margin({ right: { "id": 67109044, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
                    }, Image);
                    Row.pop();
                    Row.pop();
                });
            }
        }, If);
        If.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
