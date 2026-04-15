if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface DetailVertical_Params {
    cardArrayViewModel?: CardArray;
    selectCardIndex?: number;
    currentBreakpoint?: string;
}
import deviceInfo from "@ohos:deviceInfo";
import { CommonConstants as BaseCommon, BreakpointConstants as Breakpoint } from "@normalized:N&&&base/Index&1.0.0";
import { MicroBlogView, CommentListView, CommentBarView, CardArrayViewModel } from "@normalized:N&&&detail/Index&1.0.0";
import type { CardArray } from "@normalized:N&&&detail/Index&1.0.0";
export class DetailVertical extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__cardArrayViewModel = this.createStorageLink('cardArrayViewModel', CardArrayViewModel.getInstance(), "cardArrayViewModel");
        this.__selectCardIndex = this.createStorageProp('selectCardIndex', 0, "selectCardIndex");
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_SM, "currentBreakpoint");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: DetailVertical_Params) {
    }
    updateStateVars(params: DetailVertical_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__cardArrayViewModel.purgeDependencyOnElmtId(rmElmtId);
        this.__selectCardIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__cardArrayViewModel.aboutToBeDeleted();
        this.__selectCardIndex.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
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
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(BaseCommon.FULL_PERCENT);
            Column.padding({
                top: this.getPaddingTop()
            });
            Column.backgroundColor({ "id": 67109434, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.scrollBar(BarState.Off);
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.padding({
                left: { "id": 67109446, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                right: { "id": 67109446, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            __Common__.margin({
                top: { "id": 67109444, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new MicroBlogView(this, {
                        cardItem: this.cardArrayViewModel.cardArray[this.selectCardIndex],
                        index: this.selectCardIndex,
                        showPicture: false,
                        isDarkMode: true
                    }, undefined, elmtId, () => { }, { page: "features/picture/src/main/ets/view/DetailVerticalView.ets", line: 30, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            cardItem: this.cardArrayViewModel.cardArray[this.selectCardIndex],
                            index: this.selectCardIndex,
                            showPicture: false,
                            isDarkMode: true
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
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.margin({
                top: { "id": 67109445, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CommentListView(this, {
                        focusHide: true,
                        commentPadding: { "id": 67109446, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                        isDarkMode: true
                    }, undefined, elmtId, () => { }, { page: "features/picture/src/main/ets/view/DetailVerticalView.ets", line: 44, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            focusHide: true,
                            commentPadding: { "id": 67109446, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            isDarkMode: true
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "CommentListView" });
        }
        __Common__.pop();
        Column.pop();
        Scroll.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CommentBarView(this, {
                        isDarkMode: true
                    }, undefined, elmtId, () => { }, { page: "features/picture/src/main/ets/view/DetailVerticalView.ets", line: 57, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            isDarkMode: true
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
    }
    getPaddingTop(): Resource {
        if (this.currentBreakpoint === Breakpoint.BREAKPOINT_LG && deviceInfo.deviceType !== BaseCommon.DEVICE_2IN1) {
            return { "id": 67109444, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" };
        }
        return { "id": 67108909, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" };
    }
    rerender() {
        this.updateDirtyElements();
    }
}
