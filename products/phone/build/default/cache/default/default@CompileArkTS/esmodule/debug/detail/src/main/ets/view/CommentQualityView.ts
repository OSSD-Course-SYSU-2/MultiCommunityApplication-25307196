if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface FoldableCommentContainer_Params {
    qualityData?: QualityData;
    isFolded?: boolean;
    content?: () => void;
    onFoldChange?: (isFolded: boolean) => void;
}
interface CommentQualityView_Params {
    qualityData?: QualityData;
}
import { CommentQualityType } from "@normalized:N&&&base/Index&1.0.0";
import type { QualityData } from "@normalized:N&&&base/Index&1.0.0";
export class CommentQualityView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__qualityData = new SynchedPropertyObjectOneWayPU(params.qualityData, this, "qualityData");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CommentQualityView_Params) {
    }
    updateStateVars(params: CommentQualityView_Params) {
        this.__qualityData.reset(params.qualityData);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__qualityData.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__qualityData.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __qualityData: SynchedPropertySimpleOneWayPU<QualityData>;
    get qualityData() {
        return this.__qualityData.get();
    }
    set qualityData(newValue: QualityData) {
        this.__qualityData.set(newValue);
    }
    // 获取质量标签颜色
    getQualityColor(quality: CommentQualityType): string {
        switch (quality) {
            case CommentQualityType.HIGH:
                return '#2196F3'; // 蓝色 - 高质量
            case CommentQualityType.NORMAL:
                return '#9E9E9E'; // 灰色 - 正常
            case CommentQualityType.LOW:
                return '#FF5722'; // 深橙色 - 低质量
            default:
                return '#9E9E9E';
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 只显示高质量标签
            if (this.qualityData.quality === CommentQualityType.HIGH && this.qualityData.tags.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const tag = _item;
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create(tag);
                                Text.fontSize(10);
                                Text.fontColor(Color.White);
                                Text.backgroundColor(this.getQualityColor(this.qualityData.quality));
                                Text.borderRadius(4);
                                Text.padding({ left: 6, right: 6, top: 2, bottom: 2 });
                                Text.margin({ right: 4 });
                            }, Text);
                            Text.pop();
                        };
                        this.forEachUpdateFunction(elmtId, this.qualityData.tags, forEachItemGenFunction, (tag: string) => tag, false, false);
                    }, ForEach);
                    ForEach.pop();
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class FoldableCommentContainer extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__qualityData = new SynchedPropertyObjectOneWayPU(params.qualityData, this, "qualityData");
        this.__isFolded = new SynchedPropertySimpleTwoWayPU(params.isFolded, this, "isFolded");
        this.content = undefined;
        this.onFoldChange = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: FoldableCommentContainer_Params) {
        if (params.content !== undefined) {
            this.content = params.content;
        }
        if (params.onFoldChange !== undefined) {
            this.onFoldChange = params.onFoldChange;
        }
    }
    updateStateVars(params: FoldableCommentContainer_Params) {
        this.__qualityData.reset(params.qualityData);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__qualityData.purgeDependencyOnElmtId(rmElmtId);
        this.__isFolded.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__qualityData.aboutToBeDeleted();
        this.__isFolded.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __qualityData: SynchedPropertySimpleOneWayPU<QualityData>;
    get qualityData() {
        return this.__qualityData.get();
    }
    set qualityData(newValue: QualityData) {
        this.__qualityData.set(newValue);
    }
    private __isFolded: SynchedPropertySimpleTwoWayPU<boolean>;
    get isFolded() {
        return this.__isFolded.get();
    }
    set isFolded(newValue: boolean) {
        this.__isFolded.set(newValue);
    }
    private __content;
    private onFoldChange?: (isFolded: boolean) => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.qualityData.quality === CommentQualityType.LOW && this.isFolded) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 折叠状态：显示提示和展开按钮
                        Row.create();
                        // 折叠状态：显示提示和展开按钮
                        Row.width('100%');
                        // 折叠状态：显示提示和展开按钮
                        Row.padding(12);
                        // 折叠状态：显示提示和展开按钮
                        Row.backgroundColor('#F5F5F5');
                        // 折叠状态：显示提示和展开按钮
                        Row.borderRadius(8);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('该评论已被折叠');
                        Text.fontSize(12);
                        Text.fontColor('#666666');
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        if (this.qualityData.foldReason) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create(`（${this.qualityData.foldReason}）`);
                                    Text.fontSize(12);
                                    Text.fontColor('#666666');
                                }, Text);
                                Text.pop();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                            });
                        }
                    }, If);
                    If.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Blank.create();
                    }, Blank);
                    Blank.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('展开查看');
                        Text.fontSize(12);
                        Text.fontColor({ "id": 67109276, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.onClick(() => {
                            this.isFolded = false;
                            if (this.onFoldChange) {
                                this.onFoldChange(false);
                            }
                        });
                    }, Text);
                    Text.pop();
                    // 折叠状态：显示提示和展开按钮
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    // 展开状态：显示完整内容
                    this.content.bind(this)();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        // 如果是低质量评论，显示折叠按钮
                        if (this.qualityData.quality === CommentQualityType.LOW) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Row.create();
                                    Row.width('100%');
                                    Row.margin({ top: 8 });
                                }, Row);
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Blank.create();
                                }, Blank);
                                Blank.pop();
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create('收起');
                                    Text.fontSize(12);
                                    Text.fontColor('#666666');
                                    Text.onClick(() => {
                                        this.isFolded = true;
                                        if (this.onFoldChange) {
                                            this.onFoldChange(true);
                                        }
                                    });
                                }, Text);
                                Text.pop();
                                Row.pop();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                            });
                        }
                    }, If);
                    If.pop();
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
