if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CommentInputView_Params {
    content?: string;
    selectedMedia?: MediaData[];
    showMediaPicker?: boolean;
    darkMode?: boolean;
}
import { CommonConstants as BaseCommon } from "@normalized:N&&&base/Index&1.0.0";
import type { MediaData } from "@normalized:N&&&base/Index&1.0.0";
import { CommonConstants as Common } from "@normalized:N&&&detail/src/main/ets/constants/CommonConstants&1.0.0";
import { MediaPickerView } from "@normalized:N&&&detail/src/main/ets/view/MediaPickerView&1.0.0";
const TEXTAREA_KEY: string = 'textarea';
const BUTTON_KEY: string = 'button';
export class CommentInputView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__content = new ObservedPropertySimplePU('', this, "content");
        this.__selectedMedia = new ObservedPropertyObjectPU([], this, "selectedMedia");
        this.__showMediaPicker = new ObservedPropertySimplePU(false, this, "showMediaPicker");
        this.darkMode = true;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CommentInputView_Params) {
        if (params.content !== undefined) {
            this.content = params.content;
        }
        if (params.selectedMedia !== undefined) {
            this.selectedMedia = params.selectedMedia;
        }
        if (params.showMediaPicker !== undefined) {
            this.showMediaPicker = params.showMediaPicker;
        }
        if (params.darkMode !== undefined) {
            this.darkMode = params.darkMode;
        }
    }
    updateStateVars(params: CommentInputView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__content.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedMedia.purgeDependencyOnElmtId(rmElmtId);
        this.__showMediaPicker.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__content.aboutToBeDeleted();
        this.__selectedMedia.aboutToBeDeleted();
        this.__showMediaPicker.aboutToBeDeleted();
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
    private __selectedMedia: ObservedPropertyObjectPU<MediaData[]>;
    get selectedMedia() {
        return this.__selectedMedia.get();
    }
    set selectedMedia(newValue: MediaData[]) {
        this.__selectedMedia.set(newValue);
    }
    private __showMediaPicker: ObservedPropertySimplePU<boolean>;
    get showMediaPicker() {
        return this.__showMediaPicker.get();
    }
    set showMediaPicker(newValue: boolean) {
        this.__showMediaPicker.set(newValue);
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
            // 已选媒体预览
            if (this.selectedMedia.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.SelectedMediaPreview.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
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
            // 媒体选择按钮
            Image.create({ "id": 67109235, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            // 媒体选择按钮
            Image.width({ "id": 67109371, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            // 媒体选择按钮
            Image.aspectRatio(1);
            // 媒体选择按钮
            Image.margin({
                left: 8,
                bottom: { "id": 67109369, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            // 媒体选择按钮
            Image.onClick(() => {
                this.showMediaPicker = !this.showMediaPicker;
            });
        }, Image);
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
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 媒体选择器
            if (this.showMediaPicker) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new MediaPickerView(this, { selectedMedia: this.__selectedMedia }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/CommentInputView.ets", line: 93, col: 9 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        selectedMedia: this.selectedMedia
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "MediaPickerView" });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    // 已选媒体预览
    SelectedMediaPreview(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.padding({ left: 16, right: 16, top: 8, bottom: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const media = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Stack.create({ alignContent: Alignment.TopEnd });
                    Stack.margin({ right: 8 });
                }, Stack);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(media.type === 'video' ? (media.thumbnail || media.url) : media.url);
                    Image.width(60);
                    Image.height(60);
                    Image.objectFit(ImageFit.Cover);
                    Image.borderRadius(8);
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // 删除按钮
                    Image.create({ "id": 67109120, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    // 删除按钮
                    Image.width(20);
                    // 删除按钮
                    Image.height(20);
                    // 删除按钮
                    Image.backgroundColor('rgba(0, 0, 0, 0.6)');
                    // 删除按钮
                    Image.borderRadius(10);
                    // 删除按钮
                    Image.onClick(() => {
                        this.selectedMedia.splice(index, 1);
                    });
                }, Image);
                Stack.pop();
            };
            this.forEachUpdateFunction(elmtId, this.selectedMedia, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
