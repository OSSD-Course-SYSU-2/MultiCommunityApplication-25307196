if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface HotColumnView_Params {
    currentBreakpoint?: string;
    tab_index?: number;
}
import { BreakpointType } from "@normalized:N&&&base/Index&1.0.0";
import { HOST_LIST_ARRAY } from "@normalized:N&&&base/Index&1.0.0";
import type { HotItemInterface } from "@normalized:N&&&base/Index&1.0.0";
import { HotListItemView } from "@normalized:N&&&rank/Index&1.0.0";
import { ToRankView } from "@normalized:N&&&hot/src/main/ets/view/ToRankView&1.0.0";
const SWIPER_LIST: number[] = [0, 1, 2];
export class HotColumnView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', 'sm', "currentBreakpoint");
        this.__tab_index = new ObservedPropertySimplePU(0, this, "tab_index");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: HotColumnView_Params) {
        if (params.tab_index !== undefined) {
            this.tab_index = params.tab_index;
        }
    }
    updateStateVars(params: HotColumnView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__tab_index.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__tab_index.aboutToBeDeleted();
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
    // [StartExclude hot_column_view]
    private __tab_index: ObservedPropertySimplePU<number>;
    get tab_index() {
        return this.__tab_index.get();
    }
    set tab_index(newValue: number) {
        this.__tab_index.set(newValue);
    }
    // [EndExclude hot_column_view]
    HotListBuilder(index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (item.index > index * 5 && item.index <= (index + 1) * 5) {
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
                                    HotListItemView.bind(this)(makeBuilderParameterProxy("HotListItemView", { item: () => item, showDetail: () => true, 
                                        // [StartExclude hot_column_view]
                                        indexWidth: () => item.index <= 5 ? '9vp' : '19vp', indexIconGap: () => '8vp' }));
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
            };
            this.forEachUpdateFunction(elmtId, HOST_LIST_ARRAY[this.tab_index], forEachItemGenFunction, (item: HotItemInterface) => JSON.stringify(item), false, false);
        }, ForEach);
        ForEach.pop();
        List.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.autoPlay(false);
            Swiper.indicator(false);
            Swiper.disableSwipe(true);
            Swiper.displayCount(new BreakpointType(1, 2, 3).getValue(this.currentBreakpoint));
            Swiper.itemSpace((new BreakpointType('0vp', '49vp', '81vp')).getValue(this.currentBreakpoint));
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.HotListBuilder.bind(this)(item);
            };
            this.forEachUpdateFunction(elmtId, [0, 1, 2], forEachItemGenFunction, (item: number) => JSON.stringify(item), false, false);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ToRankView(this, {}, undefined, elmtId, () => { }, { page: "features/hot/src/main/ets/view/HotColumnView.ets", line: 66, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ToRankView" });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
