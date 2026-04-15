import { HOST_LIST_ARRAY, CommonConstants as BaseCommon } from "@normalized:N&&&base/Index&1.0.0";
import type { HotItemInterface } from "@normalized:N&&&base/Index&1.0.0";
import { HotListItemView } from "@normalized:N&&&rank/src/main/ets/view/HotListItemView&1.0.0";
export function HotListView(index: number, groupTitle: ResourceStr = '', parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.debugLine("features/rank/src/main/ets/view/HotListView.ets(20:3)", "rank");
        Row.borderRadius({ "id": 67109410, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Row.backgroundColor({ "id": 67108948, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        List.create();
        List.debugLine("features/rank/src/main/ets/view/HotListView.ets(21:5)", "rank");
        List.scrollBar(BarState.Off);
        List.nestedScroll({
            scrollForward: NestedScrollMode.PARENT_FIRST,
            scrollBackward: NestedScrollMode.SELF_FIRST
        });
        List.edgeEffect(EdgeEffect.None);
        List.padding({
            left: { "id": 67109395, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
        });
    }, List);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        ListItemGroup.create({ header: itemHeader.bind(this, groupTitle) });
        ListItemGroup.debugLine("features/rank/src/main/ets/view/HotListView.ets(22:7)", "rank");
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
                    ListItem.debugLine("features/rank/src/main/ets/view/HotListView.ets(24:11)", "rank");
                };
                const deepRenderFunction = (elmtId, isInitialRender) => {
                    itemCreation(elmtId, isInitialRender);
                    HotListItemView.bind(this)(makeBuilderParameterProxy("HotListItemView", { item: () => item, indexWidth: () => ({ "id": 67109021, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }) }));
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
        Row.debugLine("features/rank/src/main/ets/view/HotListView.ets(48:3)", "rank");
        Row.height({ "id": 67109392, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Row.margin({ top: { "id": 67109394, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
        Row.justifyContent(FlexAlign.Start);
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, groupTitle = __groupTitle__) => {
        Text.create(groupTitle);
        Text.debugLine("features/rank/src/main/ets/view/HotListView.ets(49:5)", "rank");
        Text.fontSize({ "id": 67109391, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Text.fontWeight(BaseCommon.FONT_WEIGHT_700);
        Text.fontColor({ "id": 67109428, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        Text.margin({ left: { "id": 67109393, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
    }, Text);
    Text.pop();
    Row.pop();
}
