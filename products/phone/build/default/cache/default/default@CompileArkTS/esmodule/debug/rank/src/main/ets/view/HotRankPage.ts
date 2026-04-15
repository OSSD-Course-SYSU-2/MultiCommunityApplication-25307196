if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface HotRankPage_Params {
    currentBreakpoint?: string;
    pageInfos?: NavPathStack;
    titleMarginTop?: number;
    index?: number;
}
import { BreakpointConstants as Breakpoint, CommonConstants as BaseCommon, BreakpointType } from "@normalized:N&&&base/Index&1.0.0";
import { HotListView } from "@normalized:N&&&rank/src/main/ets/view/HotListView&1.0.0";
import { CommonConstants as Common } from "@normalized:N&&&rank/src/main/ets/constants/CommonConstants&1.0.0";
const MAX_MARGIN_TOP: number = 52;
const MIN_MARGIN_TOP: number = 46;
export class HotRankPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_SM, "currentBreakpoint");
        this.__pageInfos = this.createStorageLink('pageInfos', new NavPathStack(), "pageInfos");
        this.__titleMarginTop = new ObservedPropertySimplePU(MAX_MARGIN_TOP, this, "titleMarginTop");
        this.__index = new ObservedPropertySimplePU(0, this, "index");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: HotRankPage_Params) {
        if (params.titleMarginTop !== undefined) {
            this.titleMarginTop = params.titleMarginTop;
        }
        if (params.index !== undefined) {
            this.index = params.index;
        }
    }
    updateStateVars(params: HotRankPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
        this.__titleMarginTop.purgeDependencyOnElmtId(rmElmtId);
        this.__index.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__pageInfos.aboutToBeDeleted();
        this.__titleMarginTop.aboutToBeDeleted();
        this.__index.aboutToBeDeleted();
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
    private __titleMarginTop: ObservedPropertySimplePU<number>;
    get titleMarginTop() {
        return this.__titleMarginTop.get();
    }
    set titleMarginTop(newValue: number) {
        this.__titleMarginTop.set(newValue);
    }
    private __index: ObservedPropertySimplePU<number>;
    get index() {
        return this.__index.get();
    }
    set index(newValue: number) {
        this.__index.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(BaseCommon.FULL_PERCENT);
            Column.width(BaseCommon.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.height(BaseCommon.FULL_PERCENT);
            Stack.width(BaseCommon.FULL_PERCENT);
            Stack.alignContent(Alignment.Top);
            Stack.backgroundColor({ "id": 67109387, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.linearGradient({
                angle: Common.LINEAR_GRADIENT_ANGLE,
                colors: [
                    [Common.LINEAR_GRADIENT_FROM_COLOR, Common.LINEAR_GRADIENT_FROM],
                    [Common.LINEAR_GRADIENT_TO_COLOR, Common.LINEAR_GRADIENT_TO]
                ]
            });
            Row.width(BaseCommon.FULL_PERCENT);
            Row.height({ "id": 67109395, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Row);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.margin({
                top: `${this.titleMarginTop}vp`
            });
            Column.width(BaseCommon.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 67109386, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontSize(this.titleMarginTop === MIN_MARGIN_TOP ? { "id": 67109425, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109424, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(BaseCommon.FONT_WEIGHT_700);
            Text.fontColor({ "id": 67109392, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 67109385, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontSize({ "id": 67109420, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.fontColor({ "id": 67109392, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.opacity(Common.SUBTITLE_OPACITY);
            Text.visibility(this.titleMarginTop === MIN_MARGIN_TOP ? Visibility.None : Visibility.Visible);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.scrollBar(BarState.Off);
            Scroll.onScrollFrameBegin((offset: number, state: ScrollState) => {
                return { offsetRemain: this.calcMarginTop(offset) };
            });
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.displayCount(this.getDisplayCount());
            Swiper.indicator(false);
            Swiper.loop(true);
            Swiper.nextMargin(new BreakpointType({ "id": 67109423, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109422, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109421, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint));
            Swiper.height(BaseCommon.FULL_PERCENT);
            Swiper.width(BaseCommon.FULL_PERCENT);
            Swiper.onChange((index: number) => {
                this.index = index;
            });
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.margin({
                        top: this.titleMarginTop === MIN_MARGIN_TOP ? { "id": 67109404, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109403, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                    });
                    Row.width(this.currentBreakpoint === Breakpoint.BREAKPOINT_SM ?
                        BaseCommon.FULL_PERCENT : { "id": 67108909, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    Row.padding({
                        left: new BreakpointType({ "id": 67109102, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109101, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109100, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint)
                    });
                }, Row);
                HotListView.bind(this)(index, item);
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, BaseCommon.RANK_TITLE_LIST, forEachItemGenFunction, (item: string) => JSON.stringify(item), true, false);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
        Scroll.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.padding({
                top: { "id": 67109427, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                left: new BreakpointType({ "id": 67109102, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109101, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109100, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint),
                right: new BreakpointType({ "id": 67109102, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109101, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109100, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint)
            });
            Row.width(BaseCommon.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109229, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width({ "id": 67109394, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
            Image.onClick(() => {
                this.pageInfos.pop();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109431, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width({ "id": 67109414, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
        }, Image);
        Row.pop();
        Stack.pop();
        Column.pop();
    }
    getDisplayCount() {
        if (this.currentBreakpoint === Breakpoint.BREAKPOINT_SM) {
            return 1;
        }
        else if (this.currentBreakpoint === Breakpoint.BREAKPOINT_MD) {
            return 2;
        }
        else {
            return 3;
        }
    }
    calcMarginTop(offset: number): number {
        let realOffset: number = offset;
        if (offset > 0 && this.titleMarginTop > MIN_MARGIN_TOP) {
            let tmpOffset = this.titleMarginTop - offset;
            let marginOffset: number = tmpOffset > MIN_MARGIN_TOP ? offset : this.titleMarginTop - MIN_MARGIN_TOP;
            this.titleMarginTop -= marginOffset;
            return 0;
        }
        if (offset < 0 && this.titleMarginTop < MAX_MARGIN_TOP) {
            let tmpOffset = this.titleMarginTop + Math.abs(offset);
            let marginOffset = tmpOffset > MAX_MARGIN_TOP ? MAX_MARGIN_TOP - this.titleMarginTop : Math.abs(offset);
            this.titleMarginTop += marginOffset;
            return 0;
        }
        return realOffset;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
