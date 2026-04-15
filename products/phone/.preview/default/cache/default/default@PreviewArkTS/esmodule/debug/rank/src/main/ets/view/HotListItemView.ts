import { CommonConstants as BaseCommon } from "@normalized:N&&&base/Index&1.0.0";
import type { HotItemInterface } from "@normalized:N&&&base/Index&1.0.0";
import { CommonConstants as Common } from "@normalized:N&&&rank/src/main/ets/constants/CommonConstants&1.0.0";
export interface HotListItemProps {
    item: HotItemInterface;
    showDetail?: boolean;
    indexWidth?: ResourceStr;
    indexIconGap?: ResourceStr;
}
export function HotListItemView(params: HotListItemProps, parent = null) {
    const __params__ = params;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Row.create();
        Row.debugLine("features/rank/src/main/ets/view/HotListItemView.ets(26:3)", "rank");
        Row.width(BaseCommon.FULL_PERCENT);
        Row.height((isShowDetail(params.showDetail, params.item.index)) ? { "id": 67109421, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109408, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Row.create();
        Row.debugLine("features/rank/src/main/ets/view/HotListItemView.ets(27:5)", "rank");
        Row.height(BaseCommon.FULL_PERCENT);
        Row.width(BaseCommon.FULL_PERCENT);
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Text.create(`${params.item.index}`);
        Text.debugLine("features/rank/src/main/ets/view/HotListItemView.ets(28:7)", "rank");
        Text.fontSize({ "id": 67109400, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
        Text.fontColor(isTopThree(params.item.index) ? { "id": 67109431, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109429, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Text.textAlign(TextAlign.End);
        Text.width(params.indexWidth ?? { "id": 67109022, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Row.create();
        Row.debugLine("features/rank/src/main/ets/view/HotListItemView.ets(35:7)", "rank");
        Row.layoutWeight(1);
        Row.margin({ left: params.indexIconGap ?? { "id": 67109401, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
        Row.justifyContent(FlexAlign.Start);
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        If.create();
        if (isShowDetail(params.showDetail, params.item.index)) {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
                    Image.create(params.item.icon);
                    Image.debugLine("features/rank/src/main/ets/view/HotListItemView.ets(37:11)", "rank");
                    Image.width({ "id": 67109406, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    Image.aspectRatio(1);
                    Image.borderRadius({ "id": 67109403, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                }, Image);
            });
        }
        else {
            this.ifElseBranchUpdateFunction(1, () => {
            });
        }
    }, If);
    If.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Column.create({ space: Common.TITLE_CONTENT_SPACE });
        Column.debugLine("features/rank/src/main/ets/view/HotListItemView.ets(43:9)", "rank");
        Column.alignItems(HorizontalAlign.Start);
        Column.margin({
            left: isShowDetail(params.showDetail, params.item.index) ? Common.WINDOW_PADDING_HALF_SM : { "id": 67108901, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
        });
        Column.layoutWeight(1);
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Row.create();
        Row.debugLine("features/rank/src/main/ets/view/HotListItemView.ets(44:11)", "rank");
        Row.justifyContent(FlexAlign.Start);
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Text.create(params.item.title);
        Text.debugLine("features/rank/src/main/ets/view/HotListItemView.ets(45:13)", "rank");
        Text.fontSize({ "id": 67109409, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
        Text.maxLines(1);
        Text.textOverflow({ overflow: TextOverflow.Ellipsis });
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Image.create(params.item.stateIcon);
        Image.debugLine("features/rank/src/main/ets/view/HotListItemView.ets(51:13)", "rank");
        Image.height({ "id": 67109411, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Image.aspectRatio(1);
        Image.margin({ left: { "id": 67109412, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
    }, Image);
    Row.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Text.create(params.item.content);
        Text.debugLine("features/rank/src/main/ets/view/HotListItemView.ets(58:11)", "rank");
        Text.fontSize({ "id": 67109390, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
        Text.fontColor({ "id": 67109427, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Text.visibility(isShowDetail(params.showDetail, params.item.index) ? Visibility.Visible : Visibility.None);
        Text.maxLines(1);
        Text.textOverflow({ overflow: TextOverflow.Ellipsis });
    }, Text);
    Text.pop();
    Column.pop();
    Row.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Row.create();
        Row.debugLine("features/rank/src/main/ets/view/HotListItemView.ets(76:7)", "rank");
        Row.height(BaseCommon.FULL_PERCENT);
        Row.borderRadius({ "id": 67109410, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Row.margin({
            right: { "id": 67109399, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
        });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Text.create(`${params.item.clickCount}`);
        Text.debugLine("features/rank/src/main/ets/view/HotListItemView.ets(77:9)", "rank");
        Text.fontSize({ "id": 67109389, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
        Text.textAlign(TextAlign.End);
        Text.fontColor({ "id": 67109426, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Image.create(params.item.upDownIcon);
        Image.debugLine("features/rank/src/main/ets/view/HotListItemView.ets(83:9)", "rank");
        Image.width({ "id": 67109423, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Image.aspectRatio(1);
    }, Image);
    Row.pop();
    Row.pop();
    Row.pop();
}
function isShowDetail(showDetail: boolean | undefined, index: number): boolean {
    return (showDetail ?? false) || isTopThree(index);
}
function isTopThree(index: number): boolean {
    return index <= Common.TOP_COUNT;
}
