if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface FoundView_Params {
    currentBreakpoint?: string;
    cardArrayViewModel?: CardArray;
    pageInfos?: NavPathStack;
    tabIndexSelected?: number;
}
import { BreakpointConstants as Breakpoint, CommonConstants as BaseCommon, BreakpointType } from "@normalized:N&&&base/Index&1.0.0";
import { CommentBarView, MicroBlogView } from "@normalized:N&&&detail/Index&1.0.0";
import { CardArrayViewModel } from "@normalized:N&&&detail/Index&1.0.0";
import type { CardArray } from "@normalized:N&&&detail/Index&1.0.0";
import type { CardItem } from "@normalized:N&&&detail/Index&1.0.0";
import { CommonConstants as Common } from "@normalized:N&&&hot/src/main/ets/constants/CommonConstants&1.0.0";
import { HotColumnView } from "@normalized:N&&&hot/src/main/ets/view/HotColumnView&1.0.0";
export class FoundView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_SM, "currentBreakpoint");
        this.__cardArrayViewModel = this.createStorageLink('cardArrayViewModel', CardArrayViewModel.getInstance(), "cardArrayViewModel");
        this.__pageInfos = this.createStorageLink('pageInfos', new NavPathStack(), "pageInfos");
        this.__tabIndexSelected = new ObservedPropertySimplePU(0, this, "tabIndexSelected");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: FoundView_Params) {
        if (params.tabIndexSelected !== undefined) {
            this.tabIndexSelected = params.tabIndexSelected;
        }
    }
    updateStateVars(params: FoundView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__cardArrayViewModel.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
        this.__tabIndexSelected.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__cardArrayViewModel.aboutToBeDeleted();
        this.__pageInfos.aboutToBeDeleted();
        this.__tabIndexSelected.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
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
    private __pageInfos: ObservedPropertyAbstractPU<NavPathStack>;
    get pageInfos() {
        return this.__pageInfos.get();
    }
    set pageInfos(newValue: NavPathStack) {
        this.__pageInfos.set(newValue);
    }
    private __tabIndexSelected: ObservedPropertySimplePU<number>;
    get tabIndexSelected() {
        return this.__tabIndexSelected.get();
    }
    set tabIndexSelected(newValue: number) {
        this.__tabIndexSelected.set(newValue);
    }
    jumpDetail() {
        this.pageInfos.pushPath({ name: 'detailPage' });
    }
    TitleBarBuilder(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/hot/src/main/ets/view/FoundView.ets(36:5)", "hot");
            Row.width(BaseCommon.FULL_PERCENT);
            Row.justifyContent(this.currentBreakpoint !== Breakpoint.BREAKPOINT_SM ? FlexAlign.SpaceBetween : FlexAlign.Start);
            Row.padding({
                left: new BreakpointType({ "id": 67109065, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109064, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109063, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint),
                right: new BreakpointType({ "id": 67109065, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109064, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109063, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint),
                top: { "id": 67109049, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({
                space: new BreakpointType(Common.WINDOW_PADDING_SM, Common.WINDOW_PADDING_MD, Common.WINDOW_PADDING_LG).getValue(this.currentBreakpoint)
            });
            List.debugLine("features/hot/src/main/ets/view/FoundView.ets(37:7)", "hot");
            List.listDirection(Axis.Horizontal);
            List.height({ "id": 67109029, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            List.alignListItem(ListItemAlign.Center);
            List.scrollBar(BarState.Off);
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
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
                        ListItem.debugLine("features/hot/src/main/ets/view/FoundView.ets(42:11)", "hot");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item);
                            Text.debugLine("features/hot/src/main/ets/view/FoundView.ets(43:13)", "hot");
                            Text.fontSize({ "id": 67109027, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                            Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
                            Text.fontColor(this.tabIndexSelected === index ? { "id": 67108945, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67108944, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                            Text.height({ "id": 67109028, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                            Text.onClick(() => {
                                this.tabIndexSelected = index;
                            });
                        }, Text);
                        Text.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, BaseCommon.RANK_TITLE_LIST, forEachItemGenFunction, (item: string, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("features/hot/src/main/ets/view/FoundView.ets(71:5)", "hot");
            Scroll.scrollBar(BarState.Off);
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/hot/src/main/ets/view/FoundView.ets(72:7)", "hot");
        }, Column);
        this.TitleBarBuilder.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ index: this.tabIndexSelected, barPosition: BarPosition.Start });
            Tabs.debugLine("features/hot/src/main/ets/view/FoundView.ets(75:9)", "hot");
            Tabs.barMode(BarMode.Scrollable, { margin: { "id": 67109048, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
            Tabs.barHeight({ "id": 67109046, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Tabs.animationDuration(Common.TAB_ANIMATION_DURATION);
            Tabs.scrollable(false);
            Tabs.barHeight({ "id": 67108901, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Tabs.height({ "id": 67109026, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Tabs.padding({
                left: new BreakpointType({ "id": 67109065, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109064, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109063, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint),
                right: new BreakpointType({ "id": 67109065, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109064, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109063, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint)
            });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    TabContent.create(() => {
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new HotColumnView(this, {
                                        tab_index: this.tabIndexSelected
                                    }, undefined, elmtId, () => { }, { page: "features/hot/src/main/ets/view/FoundView.ets", line: 78, col: 15 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            tab_index: this.tabIndexSelected
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "HotColumnView" });
                        }
                    });
                    TabContent.debugLine("features/hot/src/main/ets/view/FoundView.ets(77:13)", "hot");
                }, TabContent);
                TabContent.pop();
            };
            this.forEachUpdateFunction(elmtId, BaseCommon.RANK_TITLE_LIST, forEachItemGenFunction, (item: string) => JSON.stringify(item), false, false);
        }, ForEach);
        ForEach.pop();
        Tabs.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/hot/src/main/ets/view/FoundView.ets(97:9)", "hot");
            Blank.width(BaseCommon.FULL_PERCENT);
            Blank.height({ "id": 67108952, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Blank.visibility(this.currentBreakpoint === 'lg' ? Visibility.Hidden : Visibility.Visible);
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // [Start foundView]
            WaterFlow.create();
            WaterFlow.debugLine("features/hot/src/main/ets/view/FoundView.ets(103:9)", "hot");
            // [Start foundView]
            WaterFlow.columnsTemplate(this.currentBreakpoint !== 'lg' ? '1fr' : '1fr 1fr');
            // [Start foundView]
            WaterFlow.backgroundColor(this.currentBreakpoint === 'lg' ? { "id": 67108947, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67108946, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            // [Start foundView]
            WaterFlow.linearGradient({
                angle: Common.LINEAR_GRADIENT_ANGEL,
                colors: [
                    [Common.LINEAR_GRADIENT_FROM_COLOR, 0],
                    [Common.LINEAR_GRADIENT_TO_COLOR, Common.LINEAR_GRADIENT_TO_AREA]
                ]
            });
            // [Start foundView]
            WaterFlow.rowsGap(this.currentBreakpoint === 'lg' ? { "id": 67108901, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109062, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            // [Start foundView]
            WaterFlow.nestedScroll({
                scrollForward: NestedScrollMode.PARENT_FIRST,
                scrollBackward: NestedScrollMode.SELF_FIRST
            });
            // [Start foundView]
            WaterFlow.padding({
                left: this.currentBreakpoint === 'lg' ? { "id": 67109060, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67108901, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                right: this.currentBreakpoint === 'lg' ? { "id": 67109060, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67108901, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                top: this.currentBreakpoint === 'lg' ? { "id": 67109061, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67108901, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, WaterFlow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    FlowItem.create();
                    FlowItem.debugLine("features/hot/src/main/ets/view/FoundView.ets(105:13)", "hot");
                }, FlowItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/hot/src/main/ets/view/FoundView.ets(106:15)", "hot");
                    Column.borderRadius(this.currentBreakpoint === 'lg' ? '8vp' : '0vp');
                    Column.backgroundColor('#FFFFFF');
                    Column.margin(this.currentBreakpoint === 'lg' ? '6vp' : '0vp');
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    __Common__.create();
                    __Common__.padding({
                        left: new BreakpointType({ "id": 67109065, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109064, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109065, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" })
                            .getValue(this.currentBreakpoint),
                        right: new BreakpointType({ "id": 67109065, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109064, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109065, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" })
                            .getValue(this.currentBreakpoint),
                        top: new BreakpointType({ "id": 67108901, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67108901, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67108953, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint)
                    });
                }, __Common__);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new MicroBlogView(this, {
                                cardItem: item,
                                // [StartExclude foundView]
                                index: index,
                                jumpDetail: () => {
                                    AppStorage.setOrCreate('selectCardIndex', index);
                                    this.jumpDetail();
                                }
                                // [EndExclude foundView]
                            }, undefined, elmtId, () => { }, { page: "features/hot/src/main/ets/view/FoundView.ets", line: 107, col: 17 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    cardItem: item,
                                    // [StartExclude foundView]
                                    index: index,
                                    jumpDetail: () => {
                                        AppStorage.setOrCreate('selectCardIndex', index);
                                        this.jumpDetail();
                                    }
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
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new 
                            // [EndExclude foundView]
                            CommentBarView(this, {
                                isShowInput: false,
                                // [StartExclude foundView]
                                jumpDetail: () => {
                                    AppStorage.setOrCreate('selectCardIndex', index);
                                    this.jumpDetail();
                                }
                                // [EndExclude foundView]
                            }, undefined, elmtId, () => { }, { page: "features/hot/src/main/ets/view/FoundView.ets", line: 130, col: 17 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    isShowInput: false,
                                    // [StartExclude foundView]
                                    jumpDetail: () => {
                                        AppStorage.setOrCreate('selectCardIndex', index);
                                        this.jumpDetail();
                                    }
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "CommentBarView" });
                }
                Column.pop();
                FlowItem.pop();
            };
            this.forEachUpdateFunction(elmtId, this.cardArrayViewModel.cardArray, forEachItemGenFunction, (item: CardItem, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        // [Start foundView]
        WaterFlow.pop();
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
