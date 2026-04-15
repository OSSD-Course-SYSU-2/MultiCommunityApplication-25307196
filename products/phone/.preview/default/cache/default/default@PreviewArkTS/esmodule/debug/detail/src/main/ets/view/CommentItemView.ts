if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CommentItemView_Params {
    isFoldHorizontal?: boolean;
    currentBreakpoint?: string;
    commentItem?: CommentItemInterface;
    authorName?: ResourceStr;
    isDarkMode?: boolean;
    userStance?: StanceType;
    isFolded?: boolean;
}
import { CommonConstants as BaseCommon, BreakpointType, BreakpointConstants as Breakpoint, StanceType, CommentQualityType } from "@normalized:N&&&base/Index&1.0.0";
import type { CommentItemInterface } from "@normalized:N&&&base/Index&1.0.0";
import { CommonConstants as Common } from "@normalized:N&&&detail/src/main/ets/constants/CommonConstants&1.0.0";
import { EmotionHeatmapView } from "@normalized:N&&&detail/src/main/ets/view/EmotionHeatmapView&1.0.0";
import { CommentQualityView, FoldableCommentContainer } from "@normalized:N&&&detail/src/main/ets/view/CommentQualityView&1.0.0";
export class CommentItemView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__isFoldHorizontal = this.createStorageLink('isFoldHorizontal', true, "isFoldHorizontal");
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_SM, "currentBreakpoint");
        this.commentItem = {} as CommentItemInterface;
        this.authorName = '';
        this.isDarkMode = false;
        this.__userStance = new ObservedPropertySimplePU(StanceType.NONE, this, "userStance");
        this.__isFolded = new ObservedPropertySimplePU(true, this, "isFolded");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CommentItemView_Params) {
        if (params.commentItem !== undefined) {
            this.commentItem = params.commentItem;
        }
        if (params.authorName !== undefined) {
            this.authorName = params.authorName;
        }
        if (params.isDarkMode !== undefined) {
            this.isDarkMode = params.isDarkMode;
        }
        if (params.userStance !== undefined) {
            this.userStance = params.userStance;
        }
        if (params.isFolded !== undefined) {
            this.isFolded = params.isFolded;
        }
    }
    updateStateVars(params: CommentItemView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isFoldHorizontal.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__userStance.purgeDependencyOnElmtId(rmElmtId);
        this.__isFolded.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isFoldHorizontal.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__userStance.aboutToBeDeleted();
        this.__isFolded.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __isFoldHorizontal: ObservedPropertyAbstractPU<boolean>;
    get isFoldHorizontal() {
        return this.__isFoldHorizontal.get();
    }
    set isFoldHorizontal(newValue: boolean) {
        this.__isFoldHorizontal.set(newValue);
    }
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private commentItem: CommentItemInterface;
    private authorName: ResourceStr;
    private isDarkMode: boolean;
    // 新增状态
    private __userStance: ObservedPropertySimplePU<StanceType>;
    get userStance() {
        return this.__userStance.get();
    }
    set userStance(newValue: StanceType) {
        this.__userStance.set(newValue);
    }
    private __isFolded: ObservedPropertySimplePU<boolean>; // 默认折叠
    get isFolded() {
        return this.__isFolded.get();
    }
    set isFolded(newValue: boolean) {
        this.__isFolded.set(newValue);
    }
    aboutToAppear() {
        // 从qualityData中读取初始折叠状态
        if (this.commentItem.qualityData) {
            this.isFolded = this.commentItem.qualityData.isFolded;
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(48:5)", "detail");
            Column.width(BaseCommon.FULL_PERCENT);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 如果有质量数据且为低质量，使用折叠容器
            if (this.commentItem.qualityData && this.commentItem.qualityData.quality === CommentQualityType.LOW) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new FoldableCommentContainer(this, {
                                    qualityData: this.commentItem.qualityData,
                                    isFolded: this.__isFolded,
                                    onFoldChange: (isFolded: boolean) => {
                                        this.isFolded = isFolded;
                                    },
                                    content: () => {
                                        this.CommentContent();
                                    }
                                }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/CommentItemView.ets", line: 51, col: 9 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        qualityData: this.commentItem.qualityData,
                                        isFolded: this.isFolded,
                                        onFoldChange: (isFolded: boolean) => {
                                            this.isFolded = isFolded;
                                        },
                                        content: () => {
                                            this.CommentContent();
                                        }
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    qualityData: this.commentItem.qualityData
                                });
                            }
                        }, { name: "FoldableCommentContainer" });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    // 正常显示评论内容
                    this.CommentContent.bind(this)();
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    // 评论内容构建器
    CommentContent(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(73:5)", "detail");
            Column.width(BaseCommon.FULL_PERCENT);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(74:7)", "detail");
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width(BaseCommon.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(75:9)", "detail");
            Row.height({ "id": 67109302, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.commentItem.icon);
            Image.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(76:11)", "detail");
            Image.width({ "id": 67109299, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
            Image.borderRadius({ "id": 67109298, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.commentItem.name);
            Text.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(81:11)", "detail");
            Text.fontSize({ "id": 67109300, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
            Text.margin({ left: { "id": 67109301, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
            Text.fontColor(this.isDarkMode ? Color.White : Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.authorName === this.commentItem.name) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(88:13)", "detail");
                        Row.borderColor(this.isDarkMode ? Color.White : { "id": 67109363, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.borderRadius({ "id": 67109261, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.borderWidth({ "id": 67109263, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.padding({ "id": 67109265, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.margin({ left: { "id": 67109264, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create({ "id": 67109350, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(89:15)", "detail");
                        Text.fontSize({ "id": 67109262, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontWeight(FontWeight.Normal);
                        Text.fontColor(this.isDarkMode ? Color.White : { "id": 67109363, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
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
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(104:9)", "detail");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.commentItem.favorCount}`);
            Text.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(105:11)", "detail");
            Text.fontSize({ "id": 67109295, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.fontColor(this.isDarkMode ? { "id": 67109374, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109371, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.isDarkMode ? { "id": 67109254, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109381, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(110:11)", "detail");
            Image.width({ "id": 67109297, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
            Image.margin({ left: { "id": 67109296, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
        }, Image);
        Row.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 质量标签显示
            if (this.commentItem.qualityData) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new CommentQualityView(this, {
                                    qualityData: this.commentItem.qualityData
                                }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/CommentItemView.ets", line: 121, col: 9 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        qualityData: this.commentItem.qualityData
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    qualityData: this.commentItem.qualityData
                                });
                            }
                        }, { name: "CommentQualityView" });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.commentItem.content);
            Text.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(126:7)", "detail");
            Text.fontSize({ "id": 67109292, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.margin({
                left: { "id": 67109293, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            Text.fontColor(this.isDarkMode ? Color.White : Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 情绪热力图显示
            if (this.commentItem.emotionData) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new EmotionHeatmapView(this, {
                                    emotionData: this.commentItem.emotionData
                                }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/CommentItemView.ets", line: 135, col: 9 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        emotionData: this.commentItem.emotionData
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    emotionData: this.commentItem.emotionData
                                });
                            }
                        }, { name: "EmotionHeatmapView" });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: Common.TIME_POSITION_SPACE });
            Row.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(140:7)", "detail");
            Row.width(BaseCommon.FULL_PERCENT);
            Row.height({ "id": 67109341, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Row.justifyContent(FlexAlign.Start);
            Row.margin({
                left: { "id": 67109293, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.commentItem.timePosition);
            Text.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(141:9)", "detail");
            Text.fontSize({ "id": 67109340, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.opacity({ "id": 67109342, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontColor(this.isDarkMode ? Color.White : Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.commentItem.reviewCnt) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create({ space: Common.REVIEW_COUNT_SPACE });
                        Row.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(148:11)", "detail");
                        Row.backgroundColor(this.isDarkMode ? { "id": 67109372, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109378, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.borderRadius({ "id": 67109326, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.padding({
                            left: { "id": 67109330, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            right: { "id": 67109330, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                        });
                        Row.height({ "id": 67109325, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(`${this.commentItem.reviewCnt}`);
                        Text.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(149:13)", "detail");
                        Text.fontSize({ "id": 67109331, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontWeight(FontWeight.Normal);
                        Text.fontColor(this.isDarkMode ? Color.White : Color.Black);
                        Text.opacity({ "id": 67109333, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create({ "id": 67109356, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(155:13)", "detail");
                        Text.fontSize({ "id": 67109327, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontWeight(FontWeight.Normal);
                        Text.fontColor(this.isDarkMode ? Color.White : Color.Black);
                        Text.opacity({ "id": 67109329, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    }, Text);
                    Text.pop();
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create({ "id": 67109356, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(169:11)", "detail");
                        Text.fontSize({ "id": 67109327, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
                        Text.opacity({ "id": 67109328, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontColor(this.isDarkMode ? Color.White : Color.Black);
                    }, Text);
                    Text.pop();
                });
            }
        }, If);
        If.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.commentItem.reviewCnt) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create({ space: Common.REVIEW_COUNT_SPACE });
                        Column.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(184:9)", "detail");
                        Column.backgroundColor(this.isDarkMode ? { "id": 67109372, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109376, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Column.borderRadius({ "id": 67109321, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Column.margin({
                            left: { "id": 67109293, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            right: new BreakpointType<ResourceStr>({ "id": 67109323, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, this.isFoldHorizontal ? { "id": 67109257, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109258, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109324, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" })
                                .getValue(this.currentBreakpoint),
                            bottom: { "id": 67109335, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                        });
                        Column.alignItems(HorizontalAlign.Start);
                        Column.padding({
                            left: { "id": 67109336, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            right: { "id": 67109336, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            top: { "id": 67109337, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            bottom: { "id": 67109337, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.commentItem.subContent);
                        Text.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(185:11)", "detail");
                        Text.fontColor(this.isDarkMode ? Color.White : Color.Black);
                        Text.fontSize({ "id": 67109332, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
                        Text.maxLines(Common.SUB_CONTENT_MAX_LINES);
                        Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create({ "id": 67109355, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.debugLine("features/detail/src/main/ets/view/CommentItemView.ets(192:11)", "detail");
                        Text.fontSize({ "id": 67109322, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontColor(this.isDarkMode ? Color.White : { "id": 67109377, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
                    }, Text);
                    Text.pop();
                    Column.pop();
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
    rerender() {
        this.updateDirtyElements();
    }
}
