if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CommentInputView_Params {
    content?: string;
    darkMode?: boolean;
}
import { CommonConstants as BaseCommon } from "@normalized:N&&&base/Index&1.0.0";
import { CommonConstants as Common } from "@normalized:N&&&detail/src/main/ets/constants/CommonConstants&1.0.0";
const TEXTAREA_KEY: string = 'textarea';
const BUTTON_KEY: string = 'button';
export class CommentInputView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__content = new ObservedPropertySimplePU('', this, "content");
        this.darkMode = true;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CommentInputView_Params) {
        if (params.content !== undefined) {
            this.content = params.content;
        }
        if (params.darkMode !== undefined) {
            this.darkMode = params.darkMode;
        }
    }
    updateStateVars(params: CommentInputView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__content.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__content.aboutToBeDeleted();
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
    private darkMode: boolean;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
            Row.padding({
                left: { "id": 67109332, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                right: { "id": 67109333, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                top: { "id": 67109334, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                bottom: { "id": 67109334, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.alignItems(VerticalAlign.Bottom);
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
            Image.create({ "id": 67109381, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width({ "id": 67109371, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
            Image.margin({
                left: { "id": 67109370, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                bottom: { "id": 67109369, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            Image.id(BUTTON_KEY);
            Image.onClick(() => {
                AppStorage.setOrCreate('isShowInput', false);
                focusControl.requestFocus(BUTTON_KEY);
            });
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
