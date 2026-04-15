if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CardItemView_Params {
    currentBreakpoint?: string;
    index?: number;
    item?: FollowItemInterface;
    name?: string;
}
import app from "@native:system.app";
import { BreakpointConstants as Breakpoint, CommonConstants as BaseCommon, BreakpointType } from "@normalized:N&&&base/Index&1.0.0";
import { CommonConstants as Common } from "@normalized:N&&&hot/src/main/ets/constants/CommonConstants&1.0.0";
import { FOLLOW_LIST, TITLE_DETAIL_LIST } from "@normalized:N&&&hot/src/main/ets/model/FollowModel&1.0.0";
import type { FollowItemInterface } from "@normalized:N&&&hot/src/main/ets/model/FollowModel&1.0.0";
export class CardItemView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_SM, "currentBreakpoint");
        this.__index = new ObservedPropertySimplePU(0, this, "index");
        this.item = FOLLOW_LIST[0];
        this.name = '';
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CardItemView_Params) {
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.item !== undefined) {
            this.item = params.item;
        }
        if (params.name !== undefined) {
            this.name = params.name;
        }
    }
    updateStateVars(params: CardItemView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__index.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
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
    private __index: ObservedPropertySimplePU<number>;
    get index() {
        return this.__index.get();
    }
    set index(newValue: number) {
        this.__index.set(newValue);
    }
    private item: FollowItemInterface;
    private name: string;
    aboutToAppear(): void {
        app.setImageRawDataCacheSize(1024 * 1024 * 100);
        app.setImageCacheCount(100);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/hot/src/main/ets/view/CardItemView.ets(35:5)", "hot");
            Column.padding({
                top: { "id": 67108974, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                left: new BreakpointType({ "id": 67108982, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67108975, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67108972, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint),
                right: new BreakpointType({ "id": 67108982, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67108975, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67108972, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint),
                bottom: { "id": 67108973, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            Column.borderRadius({ "id": 67108963, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Column.backgroundColor(Color.White);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/hot/src/main/ets/view/CardItemView.ets(36:7)", "hot");
            Row.width(BaseCommon.FULL_PERCENT);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/hot/src/main/ets/view/CardItemView.ets(37:9)", "hot");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.index === 0 ? this.item.icon : TITLE_DETAIL_LIST[this.index].icon);
            Image.debugLine("features/hot/src/main/ets/view/CardItemView.ets(38:11)", "hot");
            Image.width({ "id": 67108971, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
            Image.borderRadius({ "id": 67108970, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.autoResize(true);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/hot/src/main/ets/view/CardItemView.ets(44:11)", "hot");
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({
                left: { "id": 67108984, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.index === 0 ? this.item.name : TITLE_DETAIL_LIST[this.index].name);
            Text.debugLine("features/hot/src/main/ets/view/CardItemView.ets(45:13)", "hot");
            Text.fontSize({ "id": 67108983, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.item.date);
            Text.debugLine("features/hot/src/main/ets/view/CardItemView.ets(49:13)", "hot");
            Text.fontSize({ "id": 67108966, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontColor({ "id": 67108930, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109107, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.debugLine("features/hot/src/main/ets/view/CardItemView.ets(59:9)", "hot");
            Image.width({ "id": 67108976, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("features/hot/src/main/ets/view/CardItemView.ets(66:7)", "hot");
            Stack.alignContent(Alignment.BottomStart);
            Stack.margin({
                top: { "id": 67108977, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                bottom: { "id": 67108977, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            Stack.constraintSize({
                maxHeight: Common.FOLLOW_ITEM_PICTURE_MAX_HEIGHT
            });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.item.picture);
            Image.debugLine("features/hot/src/main/ets/view/CardItemView.ets(67:9)", "hot");
            Image.width(BaseCommon.FULL_PERCENT);
            Image.objectFit(ImageFit.Cover);
            Image.autoResize(true);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/hot/src/main/ets/view/CardItemView.ets(72:9)", "hot");
            Row.backgroundColor({ "id": 67108932, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Row.padding({
                left: { "id": 67108988, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                right: { "id": 67108988, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                top: { "id": 67108989, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                bottom: { "id": 67108989, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            Row.borderRadius({ "id": 67108985, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Row.margin({
                left: { "id": 67108987, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                bottom: { "id": 67108987, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.item.type);
            Text.debugLine("features/hot/src/main/ets/view/CardItemView.ets(73:11)", "hot");
            Text.fontSize({ "id": 67108986, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.debugLine("features/hot/src/main/ets/view/CardItemView.ets(77:11)", "hot");
            Divider.vertical(true);
            Divider.width({ "id": 67108969, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Divider.height({ "id": 67108967, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Divider.margin({
                left: { "id": 67108968, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                right: { "id": 67108968, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            Divider.color(Color.White);
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.item.subType);
            Text.debugLine("features/hot/src/main/ets/view/CardItemView.ets(87:11)", "hot");
            Text.fontSize({ "id": 67108986, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Row.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/hot/src/main/ets/view/CardItemView.ets(113:7)", "hot");
            Row.width(BaseCommon.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.item.content);
            Text.debugLine("features/hot/src/main/ets/view/CardItemView.ets(114:9)", "hot");
            Text.maxLines(1);
            Text.layoutWeight(1);
            Text.textOverflow({
                overflow: TextOverflow.Ellipsis
            });
            Text.fontColor({ "id": 67108928, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontSize({ "id": 67108964, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 67109103, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.debugLine("features/hot/src/main/ets/view/CardItemView.ets(123:9)", "hot");
            Text.fontColor({ "id": 67108929, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontSize({ "id": 67108964, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
            Text.margin({
                left: { "id": 67108965, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/hot/src/main/ets/view/CardItemView.ets(133:7)", "hot");
            Row.width(BaseCommon.FULL_PERCENT);
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.margin({
                top: { "id": 67108981, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/hot/src/main/ets/view/CardItemView.ets(134:9)", "hot");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109138, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.debugLine("features/hot/src/main/ets/view/CardItemView.ets(135:11)", "hot");
            Image.height({ "id": 67108979, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.item.shareCount}`);
            Text.debugLine("features/hot/src/main/ets/view/CardItemView.ets(139:11)", "hot");
            Text.fontSize({ "id": 67108978, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontColor({ "id": 67108931, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.margin({
                left: { "id": 67108980, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/hot/src/main/ets/view/CardItemView.ets(147:9)", "hot");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109357, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.debugLine("features/hot/src/main/ets/view/CardItemView.ets(148:11)", "hot");
            Image.height({ "id": 67108979, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.item.viewCount}`);
            Text.debugLine("features/hot/src/main/ets/view/CardItemView.ets(152:11)", "hot");
            Text.fontSize({ "id": 67108978, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontColor({ "id": 67108931, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.margin({
                left: { "id": 67108980, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/hot/src/main/ets/view/CardItemView.ets(160:9)", "hot");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109136, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.debugLine("features/hot/src/main/ets/view/CardItemView.ets(161:11)", "hot");
            Image.height({ "id": 67108979, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.item.favourCount}`);
            Text.debugLine("features/hot/src/main/ets/view/CardItemView.ets(165:11)", "hot");
            Text.fontSize({ "id": 67108978, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontColor({ "id": 67108931, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.margin({
                left: { "id": 67108980, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Text);
        Text.pop();
        Row.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "CardItemView", new CardItemView(undefined, {}));
    previewComponent();
}
else {
}
