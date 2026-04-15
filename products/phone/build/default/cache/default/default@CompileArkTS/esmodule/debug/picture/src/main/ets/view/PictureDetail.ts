if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface PictureDetail_Params {
    currentBreakpoint?: string;
    cardArrayViewModel?: CardArray;
    selectCardIndex?: number;
    isDetailPage?: boolean;
    isShowInput?: boolean;
    isPictureDetail?: boolean;
    pageInfos?: NavPathStack;
    picList?: Resource[];
    index?: number;
}
import { BreakpointConstants as Breakpoint, CommonConstants as BaseCommon, BreakpointType } from "@normalized:N&&&base/Index&1.0.0";
import { CardArrayViewModel, CommentInputView } from "@normalized:N&&&detail/Index&1.0.0";
import type { CardArray } from "@normalized:N&&&detail/Index&1.0.0";
import { DetailVertical } from "@normalized:N&&&picture/src/main/ets/view/DetailVerticalView&1.0.0";
const KEY_BACKGROUND: string = 'background';
export class PictureDetail extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_SM, "currentBreakpoint");
        this.__cardArrayViewModel = this.createStorageLink('cardArrayViewModel', CardArrayViewModel.getInstance(), "cardArrayViewModel");
        this.__selectCardIndex = this.createStorageLink('selectCardIndex', 0, "selectCardIndex");
        this.__isDetailPage = this.createStorageLink('isDetailPage', false, "isDetailPage");
        this.__isShowInput = this.createStorageLink('isShowInput', false, "isShowInput");
        this.__isPictureDetail = this.createStorageLink('isPictureDetail', true, "isPictureDetail");
        this.__pageInfos = this.createStorageLink('pageInfos', new NavPathStack(), "pageInfos");
        this.__picList = new ObservedPropertyObjectPU([], this, "picList");
        this.index = 0;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: PictureDetail_Params) {
        if (params.picList !== undefined) {
            this.picList = params.picList;
        }
        if (params.index !== undefined) {
            this.index = params.index;
        }
    }
    updateStateVars(params: PictureDetail_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__cardArrayViewModel.purgeDependencyOnElmtId(rmElmtId);
        this.__selectCardIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__isDetailPage.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowInput.purgeDependencyOnElmtId(rmElmtId);
        this.__isPictureDetail.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
        this.__picList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__cardArrayViewModel.aboutToBeDeleted();
        this.__selectCardIndex.aboutToBeDeleted();
        this.__isDetailPage.aboutToBeDeleted();
        this.__isShowInput.aboutToBeDeleted();
        this.__isPictureDetail.aboutToBeDeleted();
        this.__pageInfos.aboutToBeDeleted();
        this.__picList.aboutToBeDeleted();
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
    private __isPictureDetail: ObservedPropertyAbstractPU<boolean>;
    get isPictureDetail() {
        return this.__isPictureDetail.get();
    }
    set isPictureDetail(newValue: boolean) {
        this.__isPictureDetail.set(newValue);
    }
    private __pageInfos: ObservedPropertyAbstractPU<NavPathStack>;
    get pageInfos() {
        return this.__pageInfos.get();
    }
    set pageInfos(newValue: NavPathStack) {
        this.__pageInfos.set(newValue);
    }
    private __picList: ObservedPropertyObjectPU<Resource[]>;
    get picList() {
        return this.__picList.get();
    }
    set picList(newValue: Resource[]) {
        this.__picList.set(newValue);
    }
    private index: number;
    aboutToAppear() {
        this.isPictureDetail = true;
        CardArrayViewModel.cardArray[this.selectCardIndex].pictureArray.forEach((item: Resource) => {
            this.picList.push(item);
        });
    }
    aboutToDisappear(): void {
        this.isPictureDetail = false;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.height(BaseCommon.FULL_PERCENT);
            Stack.width(BaseCommon.FULL_PERCENT);
            Stack.backgroundColor(Color.Black);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.expandSafeArea([SafeAreaType.KEYBOARD, SafeAreaType.SYSTEM]);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    sm: Breakpoint.GRID_ROW_COLUMNS[2],
                    md: Breakpoint.GRID_ROW_COLUMNS[3],
                    lg: Breakpoint.GRID_ROW_COLUMNS[0]
                }
            });
            GridRow.layoutWeight(1);
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: {
                    sm: Breakpoint.GRID_COLUMN_SPANS[5],
                    md: Breakpoint.GRID_COLUMN_SPANS[4],
                    lg: Breakpoint.GRID_COLUMN_SPANS[0]
                }
            });
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.align(Alignment.TopStart);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.autoPlay(false);
            Swiper.indicator(new DigitIndicator()
                .fontColor({ "id": 67108986, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" })
                .digitFont({
                size: { "id": 67109448, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                weight: FontWeight.Normal
            })
                .selectedFontColor({ "id": 67108986, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" })
                .bottom({ "id": 67109447, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }));
            Swiper.loop(false);
            Swiper.index(this.index);
            Swiper.onClick(() => {
                if (this.isDetailPage) {
                    this.pageInfos.pop();
                    this.pageInfos.replacePath({ name: 'detailPage' });
                }
                else {
                    this.pageInfos.pop();
                }
            });
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Stack.create();
                    Stack.alignContent(Alignment.BottomStart);
                }, Stack);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item);
                    Image.width(BaseCommon.FULL_PERCENT);
                    Image.height(BaseCommon.FULL_PERCENT);
                    Image.objectFit(ImageFit.Contain);
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (this.isDetailPage && index === this.picList.length - 1) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Row.create();
                                Row.width(BaseCommon.FULL_PERCENT);
                                Row.padding({
                                    left: new BreakpointType({ "id": 67109102, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109101, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109100, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" })
                                        .getValue(this.currentBreakpoint),
                                    right: new BreakpointType({ "id": 67109102, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109101, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109100, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" })
                                        .getValue(this.currentBreakpoint)
                                });
                                Row.justifyContent(FlexAlign.SpaceBetween);
                                Row.margin({ bottom: { "id": 67109441, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
                            }, Row);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Button.createWithLabel({ "id": 67109432, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                                Button.width({ "id": 67109435, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                                Button.height({ "id": 67108881, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                                Button.visibility(this.selectCardIndex === 0 ? Visibility.Hidden : Visibility.Visible);
                                Button.onClick(() => {
                                    AppStorage.setOrCreate('selectCardIndex', this.selectCardIndex - 1);
                                    this.pageInfos.replacePath({ name: 'pictureDetail', param: 0 });
                                });
                            }, Button);
                            Button.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Button.createWithLabel({ "id": 67109433, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                                Button.width({ "id": 67109435, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                                Button.height({ "id": 67108881, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                                Button.visibility(this.selectCardIndex === CardArrayViewModel.cardArray.length - 1 ?
                                    Visibility.Hidden : Visibility.Visible);
                                Button.onClick(() => {
                                    AppStorage.setOrCreate('selectCardIndex', this.selectCardIndex + 1);
                                    this.pageInfos.replacePath({ name: 'pictureDetail', param: 0 });
                                });
                            }, Button);
                            Button.pop();
                            Row.pop();
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                Stack.pop();
            };
            this.forEachUpdateFunction(elmtId, this.picList, forEachItemGenFunction, (item: Resource, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109449, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width({ "id": 67109440, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
            Image.onClick(() => {
                if (this.isDetailPage) {
                    this.pageInfos.pop();
                    this.pageInfos.replacePath({ name: 'detailPage' });
                }
                else {
                    this.pageInfos.pop();
                }
            });
            Image.margin({
                left: new BreakpointType<ResourceStr>({ "id": 67109438, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109437, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109436, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" })
                    .getValue(this.currentBreakpoint),
                top: { "id": 67109439, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Image);
        Stack.pop();
        GridCol.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: {
                    sm: Breakpoint.GRID_COLUMN_SPANS[5],
                    md: Breakpoint.GRID_COLUMN_SPANS[6],
                    lg: Breakpoint.GRID_COLUMN_SPANS[0]
                }
            });
            GridCol.visibility(this.currentBreakpoint === Breakpoint.BREAKPOINT_LG ? Visibility.None : Visibility.Visible);
        }, GridCol);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new DetailVertical(this, {}, undefined, elmtId, () => { }, { page: "features/picture/src/main/ets/view/PictureDetail.ets", line: 158, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "DetailVertical" });
        }
        GridCol.pop();
        GridRow.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.width({ "id": 67109443, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            __Common__.visibility(this.currentBreakpoint !== Breakpoint.BREAKPOINT_LG ? Visibility.None : Visibility.Visible);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new DetailVertical(this, {}, undefined, elmtId, () => { }, { page: "features/picture/src/main/ets/view/PictureDetail.ets", line: 164, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "DetailVertical" });
        }
        __Common__.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isShowInput) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Stack.create();
                        Stack.alignContent(Alignment.Bottom);
                    }, Stack);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.justifyContent(FlexAlign.End);
                        Column.width(BaseCommon.FULL_PERCENT);
                        Column.height(BaseCommon.FULL_PERCENT);
                        Column.backgroundColor(Color.Black);
                        Column.opacity({ "id": 67109361, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
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
                                let componentCall = new CommentInputView(this, {}, undefined, elmtId, () => { }, { page: "features/picture/src/main/ets/view/PictureDetail.ets", line: 184, col: 11 });
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
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
