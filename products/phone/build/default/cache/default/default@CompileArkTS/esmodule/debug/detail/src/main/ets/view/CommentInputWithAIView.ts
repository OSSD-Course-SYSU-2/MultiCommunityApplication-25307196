if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CommentInputWithAIView_Params {
    content?: string;
    showAIPanel?: boolean;
    aiPolishedText?: string;
    darkMode?: boolean;
}
import { CommonConstants as BaseCommon } from "@normalized:N&&&base/Index&1.0.0";
import { CommonConstants as Common } from "@normalized:N&&&detail/src/main/ets/constants/CommonConstants&1.0.0";
import { AIPolishPanelView } from "@normalized:N&&&detail/src/main/ets/view/AIPolishPanelView&1.0.0";
const TEXTAREA_KEY: string = 'textarea';
const BUTTON_KEY: string = 'button';
export class CommentInputWithAIView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__content = new ObservedPropertySimplePU('', this, "content");
        this.__showAIPanel = new ObservedPropertySimplePU(false, this, "showAIPanel");
        this.__aiPolishedText = new ObservedPropertySimplePU('', this, "aiPolishedText");
        this.darkMode = true;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CommentInputWithAIView_Params) {
        if (params.content !== undefined) {
            this.content = params.content;
        }
        if (params.showAIPanel !== undefined) {
            this.showAIPanel = params.showAIPanel;
        }
        if (params.aiPolishedText !== undefined) {
            this.aiPolishedText = params.aiPolishedText;
        }
        if (params.darkMode !== undefined) {
            this.darkMode = params.darkMode;
        }
    }
    updateStateVars(params: CommentInputWithAIView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__content.purgeDependencyOnElmtId(rmElmtId);
        this.__showAIPanel.purgeDependencyOnElmtId(rmElmtId);
        this.__aiPolishedText.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__content.aboutToBeDeleted();
        this.__showAIPanel.aboutToBeDeleted();
        this.__aiPolishedText.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __content: ObservedPropertySimplePU<string>;
    get content() {
        return this.__content.get();
    }
    set content(newValue: string) {
        this.__content.set(newValue);
    }
    private __showAIPanel: ObservedPropertySimplePU<boolean>;
    get showAIPanel() {
        return this.__showAIPanel.get();
    }
    set showAIPanel(newValue: boolean) {
        this.__showAIPanel.set(newValue);
    }
    private __aiPolishedText: ObservedPropertySimplePU<string>;
    get aiPolishedText() {
        return this.__aiPolishedText.get();
    }
    set aiPolishedText(newValue: string) {
        this.__aiPolishedText.set(newValue);
    }
    private darkMode: boolean;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
            Column.backgroundColor({ "id": 67108986, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.showAIPanel) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        __Common__.create();
                        __Common__.width(BaseCommon.FULL_PERCENT);
                        __Common__.margin({ bottom: 16 });
                    }, __Common__);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new 
                                // AI润色面板
                                AIPolishPanelView(this, {
                                    onComplete: (text: string) => {
                                        this.content = text;
                                        this.showAIPanel = false;
                                    },
                                    onCancel: () => {
                                        this.showAIPanel = false;
                                    }
                                }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/CommentInputWithAIView.ets", line: 38, col: 9 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        onComplete: (text: string) => {
                                            this.content = text;
                                            this.showAIPanel = false;
                                        },
                                        onCancel: () => {
                                            this.showAIPanel = false;
                                        }
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "AIPolishPanelView" });
                    }
                    __Common__.pop();
                });
            }
            // 评论输入区域
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 评论输入区域
            Row.create();
            // 评论输入区域
            Row.width(BaseCommon.FULL_PERCENT);
            // 评论输入区域
            Row.padding({
                left: { "id": 67109332, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                right: { "id": 67109333, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                top: { "id": 67109334, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                bottom: { "id": 67109334, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            // 评论输入区域
            Row.justifyContent(FlexAlign.SpaceBetween);
            // 评论输入区域
            Row.alignItems(VerticalAlign.Bottom);
            // 评论输入区域
            Row.backgroundColor({ "id": 67108986, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextArea.create({ placeholder: { "id": 67109257, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, text: this.content });
            TextArea.id(TEXTAREA_KEY);
            TextArea.maxLines(Common.TEXT_AREA_MAX_LINES);
            TextArea.constraintSize({
                minHeight: { "id": 67109330, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            TextArea.enableKeyboardOnFocus(true);
            TextArea.maxLength(Common.TEXT_AREA_MAX_LENGTH);
            TextArea.showCounter(this.content.length === Common.TEXT_AREA_MAX_LENGTH ? true : false);
            TextArea.layoutWeight(1);
            TextArea.onChange((value: string) => {
                this.content = value;
            });
            TextArea.onAppear(() => {
                focusControl.requestFocus(TEXTAREA_KEY);
            });
        }, TextArea);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // AI润色按钮
            Column.create();
            // AI润色按钮
            Column.width(48);
            // AI润色按钮
            Column.height(48);
            // AI润色按钮
            Column.justifyContent(FlexAlign.Center);
            // AI润色按钮
            Column.alignItems(HorizontalAlign.Center);
            // AI润色按钮
            Column.margin({
                left: 8,
                bottom: { "id": 67109369, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            // AI润色按钮
            Column.onClick(() => {
                this.showAIPanel = !this.showAIPanel;
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109221, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width(24);
            Image.height(24);
            Image.fillColor('#2196F3');
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('AI润色');
            Text.fontSize(10);
            Text.fontColor('#2196F3');
            Text.margin({ top: 2 });
        }, Text);
        Text.pop();
        // AI润色按钮
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 发送按钮
            Image.create({ "id": 67109381, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            // 发送按钮
            Image.width({ "id": 67109371, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            // 发送按钮
            Image.aspectRatio(1);
            // 发送按钮
            Image.margin({
                left: { "id": 67109370, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                bottom: { "id": 67109369, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            // 发送按钮
            Image.id(BUTTON_KEY);
            // 发送按钮
            Image.onClick(() => {
                AppStorage.setOrCreate('isShowInput', false);
                focusControl.requestFocus(BUTTON_KEY);
            });
        }, Image);
        // 评论输入区域
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
