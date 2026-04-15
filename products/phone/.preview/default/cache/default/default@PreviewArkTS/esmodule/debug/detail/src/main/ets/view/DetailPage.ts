if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface DetailPage_Params {
    currentBreakpoint?: string;
    isFoldHorizontal?: boolean;
    cardArrayViewModel?: CardArray;
    selectCardIndex?: number;
    isDetailPage?: boolean;
    isShowInput?: boolean;
    cardItem?: CardItem;
    isShowedButton?: boolean;
}
import { CommonConstants as Common, BreakpointType } from "@normalized:N&&&base/Index&1.0.0";
import { DetailTitleView } from "@normalized:N&&&detail/src/main/ets/view/DetailTitleView&1.0.0";
import { MicroBlogView } from "@normalized:N&&&detail/src/main/ets/view/MircoBlogView&1.0.0";
import { CommentListView } from "@normalized:N&&&detail/src/main/ets/view/CommentListView&1.0.0";
import { CommentBarView } from "@normalized:N&&&detail/src/main/ets/view/CommentBarView&1.0.0";
import { CommentInputView } from "@normalized:N&&&detail/src/main/ets/view/CommentInputView&1.0.0";
import type { CardArray } from "@normalized:N&&&detail/src/main/ets/viewmodel/CardArrayViewModel&1.0.0";
import type { CardItem } from '../viewmodel/CardViewModel';
import CardArrayViewModel from "@normalized:N&&&detail/src/main/ets/viewmodel/CardArrayViewModel&1.0.0";
const KEY_BACKGROUND: string = 'background';
export class DetailPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', 'sm', "currentBreakpoint");
        this.__isFoldHorizontal = this.createStorageLink('isFoldHorizontal', true, "isFoldHorizontal");
        this.__cardArrayViewModel = this.createStorageLink('cardArrayViewModel', CardArrayViewModel.getInstance(), "cardArrayViewModel");
        this.__selectCardIndex = this.createStorageLink('selectCardIndex', 0, "selectCardIndex");
        this.__isDetailPage = this.createStorageLink('isDetailPage', false, "isDetailPage");
        this.__isShowInput = this.createStorageLink('isShowInput', false, "isShowInput");
        this.__cardItem = new ObservedPropertyObjectPU(this.cardArrayViewModel.cardArray[this.selectCardIndex], this, "cardItem");
        this.isShowedButton = true;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: DetailPage_Params) {
        if (params.cardItem !== undefined) {
            this.cardItem = params.cardItem;
        }
        if (params.isShowedButton !== undefined) {
            this.isShowedButton = params.isShowedButton;
        }
    }
    updateStateVars(params: DetailPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__isFoldHorizontal.purgeDependencyOnElmtId(rmElmtId);
        this.__cardArrayViewModel.purgeDependencyOnElmtId(rmElmtId);
        this.__selectCardIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__isDetailPage.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowInput.purgeDependencyOnElmtId(rmElmtId);
        this.__cardItem.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isFoldHorizontal.aboutToBeDeleted();
        this.__cardArrayViewModel.aboutToBeDeleted();
        this.__selectCardIndex.aboutToBeDeleted();
        this.__isDetailPage.aboutToBeDeleted();
        this.__isShowInput.aboutToBeDeleted();
        this.__cardItem.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // [StartExclude detail_page]
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private __isFoldHorizontal: ObservedPropertyAbstractPU<boolean>;
    get isFoldHorizontal() {
        return this.__isFoldHorizontal.get();
    }
    set isFoldHorizontal(newValue: boolean) {
        this.__isFoldHorizontal.set(newValue);
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
    private __isDetailPage: ObservedPropertyAbstractPU<boolean>;
    get isDetailPage() {
        return this.__isDetailPage.get();
    }
    set isDetailPage(newValue: boolean) {
        this.__isDetailPage.set(newValue);
    }
    private __isShowInput: ObservedPropertyAbstractPU<boolean>;
    get isShowInput() {
        return this.__isShowInput.get();
    }
    set isShowInput(newValue: boolean) {
        this.__isShowInput.set(newValue);
    }
    private __cardItem: ObservedPropertyObjectPU<CardItem>;
    get cardItem() {
        return this.__cardItem.get();
    }
    set cardItem(newValue: CardItem) {
        this.__cardItem.set(newValue);
    }
    private isShowedButton?: boolean;
    aboutToAppear() {
        this.isDetailPage = true;
    }
    // [EndExclude detail_page]
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("features/detail/src/main/ets/view/DetailPage.ets(46:5)", "detail");
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/detail/src/main/ets/view/DetailPage.ets(47:7)", "detail");
            Column.height(Common.FULL_PERCENT);
            Column.justifyContent(FlexAlign.End);
            Column.expandSafeArea([SafeAreaType.KEYBOARD, SafeAreaType.SYSTEM]);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new DetailTitleView(this, { isShowedButton: this.isShowedButton }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/DetailPage.ets", line: 48, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            isShowedButton: this.isShowedButton
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "DetailTitleView" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("features/detail/src/main/ets/view/DetailPage.ets(49:9)", "detail");
            Scroll.visibility(this.currentBreakpoint === 'lg' ? Visibility.None : Visibility.Visible);
            Scroll.layoutWeight(1);
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({ columns: { sm: 4, md: 5, lg: 12 } });
            GridRow.debugLine("features/detail/src/main/ets/view/DetailPage.ets(50:11)", "detail");
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({ span: { sm: 4, md: this.isFoldHorizontal ? 3 : 5, lg: 12 } });
            GridCol.debugLine("features/detail/src/main/ets/view/DetailPage.ets(51:13)", "detail");
            GridCol.width(Common.FULL_PERCENT);
            GridCol.padding({
                left: new BreakpointType({ "id": 67109065, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109064, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109063, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint),
                right: new BreakpointType({ "id": 67109065, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109064, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109063, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint)
            });
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if ((this.isFoldHorizontal && this.currentBreakpoint === 'md')) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Scroll.create();
                        Scroll.debugLine("features/detail/src/main/ets/view/DetailPage.ets(53:17)", "detail");
                        Scroll.scrollBar(BarState.Off);
                        Scroll.align(Alignment.Top);
                        Scroll.layoutWeight(1);
                    }, Scroll);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        __Common__.create();
                        __Common__.margin({ top: '16vp' });
                    }, __Common__);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new MicroBlogView(this, {
                                    cardItem: this.cardItem,
                                    index: this.selectCardIndex
                                }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/DetailPage.ets", line: 54, col: 19 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        cardItem: this.cardItem,
                                        index: this.selectCardIndex
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "MicroBlogView" });
                    }
                    __Common__.pop();
                    Scroll.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        __Common__.create();
                        __Common__.margin({
                            top: { "id": 67109318, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                        });
                    }, __Common__);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new MicroBlogView(this, {
                                    cardItem: this.cardItem,
                                    index: this.selectCardIndex
                                }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/DetailPage.ets", line: 68, col: 17 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        cardItem: this.cardItem,
                                        index: this.selectCardIndex
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "MicroBlogView" });
                    }
                    __Common__.pop();
                });
            }
        }, If);
        If.pop();
        GridCol.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // [EndExclude detail_page]
            GridCol.create({ span: { sm: 4, md: this.isFoldHorizontal ? 2 : 5, lg: 12 } });
            GridCol.debugLine("features/detail/src/main/ets/view/DetailPage.ets(89:13)", "detail");
            // [EndExclude detail_page]
            GridCol.height(Common.FULL_PERCENT);
            // [EndExclude detail_page]
            GridCol.width(Common.FULL_PERCENT);
        }, GridCol);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CommentListView(this, {}, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/DetailPage.ets", line: 90, col: 15 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "CommentListView" });
        }
        // [EndExclude detail_page]
        GridCol.pop();
        GridRow.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.visibility(this.isShow() ? Visibility.Visible : Visibility.None);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CommentBarView(this, {}, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/DetailPage.ets", line: 103, col: 9 });
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
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // [EndExclude detail_page]
            Column.create();
            Column.debugLine("features/detail/src/main/ets/view/DetailPage.ets(107:9)", "detail");
            // [EndExclude detail_page]
            Column.visibility(this.currentBreakpoint !== 'lg' ? Visibility.None : Visibility.Visible);
            // [EndExclude detail_page]
            Column.width(Common.FULL_PERCENT);
            // [EndExclude detail_page]
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SideBarContainer.create();
            SideBarContainer.debugLine("features/detail/src/main/ets/view/DetailPage.ets(108:11)", "detail");
            SideBarContainer.sideBarPosition(SideBarPosition.End);
            SideBarContainer.showControlButton(false);
            SideBarContainer.sideBarWidth({ "id": 67109334, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            SideBarContainer.minSideBarWidth({ "id": 67109319, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            SideBarContainer.maxSideBarWidth({ "id": 67109317, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            SideBarContainer.autoHide(false);
            SideBarContainer.divider(null);
        }, SideBarContainer);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/detail/src/main/ets/view/DetailPage.ets(109:13)", "detail");
            Column.backgroundColor({ "id": 67108923, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CommentListView(this, {}, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/DetailPage.ets", line: 110, col: 15 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "CommentListView" });
        }
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // [EndExclude detail_page]
            Column.create();
            Column.debugLine("features/detail/src/main/ets/view/DetailPage.ets(116:13)", "detail");
            // [EndExclude detail_page]
            Column.justifyContent(FlexAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("features/detail/src/main/ets/view/DetailPage.ets(117:15)", "detail");
            Scroll.padding({
                left: { "id": 67109063, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                right: { "id": 67109063, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.margin({
                top: { "id": 67109318, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new MicroBlogView(this, {
                        cardItem: this.cardItem,
                        index: this.selectCardIndex
                    }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/DetailPage.ets", line: 118, col: 17 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            cardItem: this.cardItem,
                            index: this.selectCardIndex
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "MicroBlogView" });
        }
        __Common__.pop();
        Scroll.pop();
        // [EndExclude detail_page]
        Column.pop();
        SideBarContainer.pop();
        // [EndExclude detail_page]
        Column.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isShowInput) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Stack.create();
                        Stack.debugLine("features/detail/src/main/ets/view/DetailPage.ets(160:9)", "detail");
                        Stack.alignContent(Alignment.Bottom);
                    }, Stack);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.debugLine("features/detail/src/main/ets/view/DetailPage.ets(161:11)", "detail");
                        Column.justifyContent(FlexAlign.End);
                        Column.width(Common.FULL_PERCENT);
                        Column.height(Common.FULL_PERCENT);
                        Column.backgroundColor(Color.Black);
                        Column.opacity({ "id": 67109339, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Column.id(KEY_BACKGROUND);
                        Column.onClick(() => {
                            AppStorage.setOrCreate('isShowInput', false);
                            focusControl.requestFocus(KEY_BACKGROUND);
                        });
                    }, Column);
                    Column.pop();
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new CommentInputView(this, {}, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/DetailPage.ets", line: 173, col: 11 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {};
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "CommentInputView" });
                    }
                    Stack.pop();
                });
            }
            // [EndExclude detail_page]
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Stack.pop();
    }
    // [StartExclude detail_page]
    isShow(): boolean {
        if ((this.currentBreakpoint === 'md' && !this.isFoldHorizontal) ||
            (this.currentBreakpoint === 'sm')) {
            return true;
        }
        return false;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
