if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface DetailTitleView_Params {
    currentBreakpoint?: string;
    isFoldHorizontal?: boolean;
    pageInfos?: NavPathStack;
    foldable?: boolean;
    isShowedButton?: boolean;
}
import deviceInfo from "@ohos:deviceInfo";
import { BreakpointConstants as Breakpoint, BreakpointType, CommonConstants as BaseCommon } from "@normalized:N&&&base/Index&1.0.0";
export class DetailTitleView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_LG, "currentBreakpoint");
        this.__isFoldHorizontal = this.createStorageLink('isFoldHorizontal', true, "isFoldHorizontal");
        this.__pageInfos = this.createStorageLink('pageInfos', new NavPathStack(), "pageInfos");
        this.__foldable = new ObservedPropertySimplePU(this.currentBreakpoint === Breakpoint.BREAKPOINT_MD, this, "foldable");
        this.isShowedButton = true;
        this.setInitiallyProvidedValue(params);
        this.declareWatch("currentBreakpoint", this.checkFoldable);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: DetailTitleView_Params) {
        if (params.foldable !== undefined) {
            this.foldable = params.foldable;
        }
        if (params.isShowedButton !== undefined) {
            this.isShowedButton = params.isShowedButton;
        }
    }
    updateStateVars(params: DetailTitleView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__isFoldHorizontal.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
        this.__foldable.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isFoldHorizontal.aboutToBeDeleted();
        this.__pageInfos.aboutToBeDeleted();
        this.__foldable.aboutToBeDeleted();
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
    private __isFoldHorizontal: ObservedPropertyAbstractPU<boolean>;
    get isFoldHorizontal() {
        return this.__isFoldHorizontal.get();
    }
    set isFoldHorizontal(newValue: boolean) {
        this.__isFoldHorizontal.set(newValue);
    }
    private __pageInfos: ObservedPropertyAbstractPU<NavPathStack>;
    get pageInfos() {
        return this.__pageInfos.get();
    }
    set pageInfos(newValue: NavPathStack) {
        this.__pageInfos.set(newValue);
    }
    private __foldable: ObservedPropertySimplePU<boolean>;
    get foldable() {
        return this.__foldable.get();
    }
    set foldable(newValue: boolean) {
        this.__foldable.set(newValue);
    }
    private isShowedButton?: boolean;
    checkFoldable() {
        this.foldable = this.currentBreakpoint === Breakpoint.BREAKPOINT_MD;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/detail/src/main/ets/view/DetailTitleView.ets(32:5)", "detail");
            Column.width(BaseCommon.FULL_PERCENT);
            Column.backgroundColor({ "id": 67109365, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/detail/src/main/ets/view/DetailTitleView.ets(33:7)", "detail");
            Blank.height(deviceInfo.deviceType !== BaseCommon.DEVICE_2IN1 ? { "id": 67109343, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109266, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Blank.width(BaseCommon.FULL_PERCENT);
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/detail/src/main/ets/view/DetailTitleView.ets(38:7)", "detail");
            Row.height({ "id": 67109309, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("features/detail/src/main/ets/view/DetailTitleView.ets(39:9)", "detail");
            Stack.height(BaseCommon.FULL_PERCENT);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/detail/src/main/ets/view/DetailTitleView.ets(40:11)", "detail");
            Row.width(BaseCommon.FULL_PERCENT);
            Row.justifyContent(FlexAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 67109352, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.debugLine("features/detail/src/main/ets/view/DetailTitleView.ets(41:13)", "detail");
            Text.height(BaseCommon.FULL_PERCENT);
            Text.fontSize({ "id": 67109284, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/detail/src/main/ets/view/DetailTitleView.ets(49:11)", "detail");
            Row.width(BaseCommon.FULL_PERCENT);
            Row.height(BaseCommon.FULL_PERCENT);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109133, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.debugLine("features/detail/src/main/ets/view/DetailTitleView.ets(50:13)", "detail");
            Image.margin({
                left: new BreakpointType({ "id": 67109065, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109064, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109063, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint)
            });
            Image.width({ "id": 67109282, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
            Image.onClick(() => {
                this.pageInfos.pop();
                AppStorage.setOrCreate('isDetailPage', false);
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.isFoldHorizontal ? { "id": 67109255, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109358, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.debugLine("features/detail/src/main/ets/view/DetailTitleView.ets(62:13)", "detail");
            Image.margin({ right: { "id": 67109283, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
            Image.width({ "id": 67109285, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
            Image.visibility(this.isShowedButton && this.foldable ? Visibility.Visible : Visibility.Hidden);
            Image.onClick(() => {
                this.isFoldHorizontal = !this.isFoldHorizontal;
            });
        }, Image);
        Row.pop();
        Stack.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
