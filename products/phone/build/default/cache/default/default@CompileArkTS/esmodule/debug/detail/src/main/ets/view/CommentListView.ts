if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CommentListView_Params {
    isFoldHorizontal?: boolean;
    currentBreakpoint?: string;
    cardArrayViewModel?: CardArray;
    selectCardIndex?: number;
    focusHide?: boolean;
    commentPadding?: ResourceStr;
    isDarkMode?: boolean;
    currentStance?: StanceType;
}
import { BreakpointConstants as Breakpoint, CommonConstants as BaseCommon, StanceType } from "@normalized:N&&&base/Index&1.0.0";
import type { CommentItemInterface } from "@normalized:N&&&base/Index&1.0.0";
import { CommonConstants as Common } from "@normalized:N&&&detail/src/main/ets/constants/CommonConstants&1.0.0";
import { CommentItemView } from "@normalized:N&&&detail/src/main/ets/view/CommentItemView&1.0.0";
import { CommentBarView } from "@normalized:N&&&detail/src/main/ets/view/CommentBarView&1.0.0";
import { StanceVoteView } from "@normalized:N&&&detail/src/main/ets/view/StanceVoteView&1.0.0";
import type { CardArray } from "@normalized:N&&&detail/src/main/ets/viewmodel/CardArrayViewModel&1.0.0";
import CardArrayViewModel from "@normalized:N&&&detail/src/main/ets/viewmodel/CardArrayViewModel&1.0.0";
export class CommentListView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__isFoldHorizontal = this.createStorageLink('isFoldHorizontal', true, "isFoldHorizontal");
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_SM, "currentBreakpoint");
        this.__cardArrayViewModel = this.createStorageLink('cardArrayViewModel', CardArrayViewModel.getInstance(), "cardArrayViewModel");
        this.__selectCardIndex = this.createStorageProp('selectCardIndex', 0, "selectCardIndex");
        this.focusHide = false;
        this.commentPadding = undefined;
        this.isDarkMode = false;
        this.__currentStance = new ObservedPropertySimplePU(StanceType.NONE, this, "currentStance");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CommentListView_Params) {
        if (params.focusHide !== undefined) {
            this.focusHide = params.focusHide;
        }
        if (params.commentPadding !== undefined) {
            this.commentPadding = params.commentPadding;
        }
        if (params.isDarkMode !== undefined) {
            this.isDarkMode = params.isDarkMode;
        }
        if (params.currentStance !== undefined) {
            this.currentStance = params.currentStance;
        }
    }
    updateStateVars(params: CommentListView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isFoldHorizontal.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__cardArrayViewModel.purgeDependencyOnElmtId(rmElmtId);
        this.__selectCardIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__currentStance.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isFoldHorizontal.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__cardArrayViewModel.aboutToBeDeleted();
        this.__selectCardIndex.aboutToBeDeleted();
        this.__currentStance.aboutToBeDeleted();
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
    private __cardArrayViewModel: ObservedPropertyAbstractPU<CardArray>;
    get cardArrayViewModel() {
        return this.__cardArrayViewModel.get();
    }
    set cardArrayViewModel(newValue: CardArray) {
        this.__cardArrayViewModel.set(newValue);
    }
    private __selectCardIndex: ObservedPropertyAbstractPU<number>;
    get selectCardIndex() {
        return this.__selectCardIndex.get();
    }
    set selectCardIndex(newValue: number) {
        this.__selectCardIndex.set(newValue);
    }
    private focusHide?: boolean;
    private commentPadding?: ResourceStr;
    private isDarkMode: boolean;
    // 观点站队状态
    private __currentStance: ObservedPropertySimplePU<StanceType>;
    get currentStance() {
        return this.__currentStance.get();
    }
    set currentStance(newValue: StanceType) {
        this.__currentStance.set(newValue);
    }
    itemHead(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
            Row.height({ "id": 67109327, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Row.padding({
                top: { "id": 67109086, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 67109256, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontSize({ "id": 67109326, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
            Text.width(BaseCommon.FULL_PERCENT);
            Text.fontColor(this.isDarkMode ? Color.White : Color.Black);
        }, Text);
        Text.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.justifyContent(FlexAlign.End);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ barPosition: BarPosition.Start });
            Tabs.vertical(false);
            Tabs.layoutWeight(1);
            Tabs.padding({
                left: this.commentPadding ?? this.getPadding(),
                right: this.commentPadding ?? this.getPadding()
            });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    List.create({ space: Common.LIST_ITEM_SPACE });
                    List.nestedScroll({
                        scrollForward: (this.isFoldHorizontal && this.currentBreakpoint === Breakpoint.BREAKPOINT_MD) ?
                            NestedScrollMode.PARENT_FIRST : NestedScrollMode.PARENT_FIRST,
                        scrollBackward: NestedScrollMode.SELF_FIRST
                    });
                    List.scrollBar(BarState.Off);
                    List.edgeEffect(EdgeEffect.None);
                    List.margin({
                        top: { "id": 67109360, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                    });
                }, List);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    // 检查是否有争议话题，如果有则显示观点站队
                    if (this.hasControversialTopic()) {
                        this.ifElseBranchUpdateFunction(0, () => {
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
                                    this.ControversialStanceView.bind(this)();
                                    ListItem.pop();
                                };
                                this.observeComponentCreation2(itemCreation2, ListItem);
                                ListItem.pop();
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
                                {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        if (isInitialRender) {
                                            let componentCall = new CommentItemView(this, {
                                                commentItem: item,
                                                authorName: this.cardArrayViewModel.cardArray[this.selectCardIndex].name,
                                                isDarkMode: this.isDarkMode
                                            }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/CommentListView.ets", line: 67, col: 19 });
                                            ViewPU.create(componentCall);
                                            let paramsLambda = () => {
                                                return {
                                                    commentItem: item,
                                                    authorName: this.cardArrayViewModel.cardArray[this.selectCardIndex].name,
                                                    isDarkMode: this.isDarkMode
                                                };
                                            };
                                            componentCall.paramsGenerator_ = paramsLambda;
                                        }
                                        else {
                                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                                        }
                                    }, { name: "CommentItemView" });
                                }
                                ListItem.pop();
                            };
                            this.observeComponentCreation2(itemCreation2, ListItem);
                            ListItem.pop();
                        }
                    };
                    this.forEachUpdateFunction(elmtId, this.cardArrayViewModel.cardArray[this.selectCardIndex].commentList, forEachItemGenFunction, (item: CommentItemInterface, index: number) => index + JSON.stringify(item), false, true);
                }, ForEach);
                ForEach.pop();
                List.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.itemHead.call(this);
                } });
            TabContent.align(Alignment.Top);
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.visibility(this.isShow() ? Visibility.Visible : Visibility.None);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CommentBarView(this, {}, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/CommentListView.ets", line: 96, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "CommentBarView" });
        }
        __Common__.pop();
        Column.pop();
    }
    // 检查是否有争议话题
    hasControversialTopic(): boolean {
        const commentList = this.cardArrayViewModel.cardArray[this.selectCardIndex].commentList;
        for (let i = 0; i < commentList.length; i++) {
            if (commentList[i].isControversial && commentList[i].stanceData) {
                return true;
            }
        }
        return false;
    }
    // 获取第一个争议话题的站队数据
    getFirstControversialStanceData() {
        const commentList = this.cardArrayViewModel.cardArray[this.selectCardIndex].commentList;
        for (let i = 0; i < commentList.length; i++) {
            if (commentList[i].isControversial && commentList[i].stanceData) {
                return commentList[i].stanceData;
            }
        }
        return null;
    }
    // 争议话题观点站队视图
    ControversialStanceView(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.getFirstControversialStanceData()) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new StanceVoteView(this, {
                                    stanceData: this.getFirstControversialStanceData()!,
                                    userStance: this.__currentStance,
                                    onStanceChange: (stance: StanceType) => {
                                        this.currentStance = stance;
                                    }
                                }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/CommentListView.ets", line: 128, col: 7 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        stanceData: this.getFirstControversialStanceData()!,
                                        userStance: this.currentStance,
                                        onStanceChange: (stance: StanceType) => {
                                            this.currentStance = stance;
                                        }
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    stanceData: this.getFirstControversialStanceData()!
                                });
                            }
                        }, { name: "StanceVoteView" });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
    }
    isShow(): boolean {
        if (this.focusHide) {
            return false;
        }
        if ((this.currentBreakpoint === Breakpoint.BREAKPOINT_MD && this.isFoldHorizontal) ||
            (this.currentBreakpoint === Breakpoint.BREAKPOINT_LG)) {
            return true;
        }
        return false;
    }
    getPadding(): Resource {
        if (this.currentBreakpoint === Breakpoint.BREAKPOINT_SM) {
            return { "id": 67109102, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" };
        }
        if (this.currentBreakpoint === Breakpoint.BREAKPOINT_MD) {
            if (this.isFoldHorizontal) {
                return { "id": 67109102, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" };
            }
            else {
                return { "id": 67109101, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" };
            }
        }
        return { "id": 67109100, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" };
    }
    rerender() {
        this.updateDirtyElements();
    }
}
