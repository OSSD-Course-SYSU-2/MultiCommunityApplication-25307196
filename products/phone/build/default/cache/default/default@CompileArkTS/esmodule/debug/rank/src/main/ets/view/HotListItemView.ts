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
        Row.width(BaseCommon.FULL_PERCENT);
        Row.height((isShowDetail(params.showDetail, params.item.index)) ? { "id": 67109428, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109415, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Row.create();
        Row.height(BaseCommon.FULL_PERCENT);
        Row.width(BaseCommon.FULL_PERCENT);
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Text.create(`${params.item.index}`);
        Text.fontSize({ "id": 67109407, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
        Text.fontColor(isTopThree(params.item.index) ? { "id": 67109393, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109391, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Text.textAlign(TextAlign.End);
        Text.width(params.indexWidth ?? { "id": 67109059, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Row.create();
        Row.layoutWeight(1);
        Row.margin({ left: params.indexIconGap ?? { "id": 67109408, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
        Row.justifyContent(FlexAlign.Start);
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        If.create();
        if (isShowDetail(params.showDetail, params.item.index)) {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
                    Image.create(params.item.icon);
                    Image.width({ "id": 67109413, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    Image.aspectRatio(1);
                    Image.borderRadius({ "id": 67109410, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
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
        Column.alignItems(HorizontalAlign.Start);
        Column.margin({
            left: isShowDetail(params.showDetail, params.item.index) ? Common.WINDOW_PADDING_HALF_SM : { "id": 67108909, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
        });
        Column.layoutWeight(1);
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Row.create();
        Row.justifyContent(FlexAlign.Start);
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Text.create(params.item.title);
        Text.fontSize({ "id": 67109416, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
        Text.maxLines(1);
        Text.textOverflow({ overflow: TextOverflow.Ellipsis });
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Image.create(params.item.stateIcon);
        Image.height({ "id": 67109418, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Image.aspectRatio(1);
        Image.margin({ left: { "id": 67109419, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
    }, Image);
    Row.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Text.create(params.item.content);
        Text.fontSize({ "id": 67109397, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
        Text.fontColor({ "id": 67109389, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Text.visibility(isShowDetail(params.showDetail, params.item.index) ? Visibility.Visible : Visibility.None);
        Text.maxLines(1);
        Text.textOverflow({ overflow: TextOverflow.Ellipsis });
    }, Text);
    Text.pop();
    Column.pop();
    Row.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Row.create();
        Row.height(BaseCommon.FULL_PERCENT);
        Row.borderRadius({ "id": 67109417, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Row.margin({
            right: { "id": 67109406, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
        });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Text.create(`${params.item.clickCount}`);
        Text.fontSize({ "id": 67109396, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
        Text.textAlign(TextAlign.End);
        Text.fontColor({ "id": 67109388, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Image.create(params.item.upDownIcon);
        Image.width({ "id": 67109430, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
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
