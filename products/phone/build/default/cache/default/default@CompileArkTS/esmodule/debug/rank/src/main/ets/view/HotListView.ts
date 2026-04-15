import { HOST_LIST_ARRAY, CommonConstants as BaseCommon } from "@normalized:N&&&base/Index&1.0.0";
import type { HotItemInterface } from "@normalized:N&&&base/Index&1.0.0";
import { HotListItemView } from "@normalized:N&&&rank/src/main/ets/view/HotListItemView&1.0.0";
export function HotListView(index: number, groupTitle: ResourceStr = '', parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.borderRadius({ "id": 67109417, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Row.backgroundColor({ "id": 67108986, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        List.create();
        List.scrollBar(BarState.Off);
        List.nestedScroll({
            scrollForward: NestedScrollMode.PARENT_FIRST,
            scrollBackward: NestedScrollMode.SELF_FIRST
        });
        List.edgeEffect(EdgeEffect.None);
        List.padding({
            left: { "id": 67109402, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
        });
    }, List);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        ListItemGroup.create({ header: itemHeader.bind(this, groupTitle) });
    }, ListItemGroup);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        ForEach.create();
        const forEachItemGenFunction = _item => {
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
                    HotListItemView.bind(this)(makeBuilderParameterProxy("HotListItemView", { item: () => item, indexWidth: () => ({ "id": 67109058, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }) }));
                    ListItem.pop();
                };
                this.observeComponentCreation2(itemCreation2, ListItem);
                ListItem.pop();
            }
        };
        (parent ? parent : this).forEachUpdateFunction(elmtId, HOST_LIST_ARRAY[index], forEachItemGenFunction, (item: HotItemInterface) => JSON.stringify(item), false, false);
    }, ForEach);
    ForEach.pop();
    ListItemGroup.pop();
    List.pop();
    Row.pop();
}
function itemHeader(groupTitle: ResourceStr, parent = null) {
    const __groupTitle__ = groupTitle;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, groupTitle = __groupTitle__) => {
        Row.create();
        Row.height({ "id": 67109399, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Row.margin({ top: { "id": 67109401, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
        Row.justifyContent(FlexAlign.Start);
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, groupTitle = __groupTitle__) => {
        Text.create(groupTitle);
        Text.fontSize({ "id": 67109398, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Text.fontWeight(BaseCommon.FONT_WEIGHT_700);
        Text.fontColor({ "id": 67109390, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Text.margin({ left: { "id": 67109400, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
    }, Text);
    Text.pop();
    Row.pop();
}
