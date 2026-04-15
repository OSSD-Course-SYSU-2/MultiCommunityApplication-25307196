if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface MicroBlogView_Params {
    currentBreakpoint?: string;
    isDetailPage?: boolean;
    isPictureDetail?: boolean;
    pageInfos?: NavPathStack;
    index?: number;
    cardItem?: CardItem;
    showPicture?: boolean;
    imageWidth?: string;
    contentFontSize?: number;
    contentFontHeight?: number;
    scaleValue?: number;
    pinchValue?: number;
    pictureMarginTop?: number;
    isDarkMode?: boolean;
    jumpDetail?: () => void;
}
import { BreakpointConstants as Breakpoint, CommonConstants as BaseCommon } from "@normalized:N&&&base/Index&1.0.0";
import type { CardItemInterface } from "@normalized:N&&&base/Index&1.0.0";
import { CardItem } from "@normalized:N&&&detail/src/main/ets/viewmodel/CardViewModel&1.0.0";
import { CommonConstants as Common } from "@normalized:N&&&detail/src/main/ets/constants/CommonConstants&1.0.0";
interface ImageInfo {
    width: number;
    height: number;
    componentWidth: number;
    componentHeight: number;
    loadingStatus: number;
    contentWidth: number;
    contentHeight: number;
    contentOffsetX: number;
    contentOffsetY: number;
}
export class MicroBlogView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', Breakpoint.BREAKPOINT_LG, "currentBreakpoint");
        this.__isDetailPage = this.createStorageLink('isDetailPage', false, "isDetailPage");
        this.__isPictureDetail = this.createStorageLink('isPictureDetail', false, "isPictureDetail");
        this.__pageInfos = this.createStorageLink('pageInfos', new NavPathStack(), "pageInfos");
        this.__index = new ObservedPropertySimplePU(0, this, "index");
        this.__cardItem = new ObservedPropertyObjectPU(new CardItem({} as CardItemInterface, 0), this, "cardItem");
        this.__showPicture = new ObservedPropertySimplePU(true, this, "showPicture");
        this.__imageWidth = new ObservedPropertySimplePU(BaseCommon.FULL_PERCENT, this, "imageWidth");
        this.__contentFontSize = new ObservedPropertySimplePU(Common.CONTENT_FONT_SIZE, this, "contentFontSize");
        this.__contentFontHeight = new ObservedPropertySimplePU(Common.CONTENT_FONT_HEIGHT, this, "contentFontHeight");
        this.__scaleValue = new ObservedPropertySimplePU(1, this, "scaleValue");
        this.__pinchValue = new ObservedPropertySimplePU(1, this, "pinchValue");
        this.__pictureMarginTop = new ObservedPropertySimplePU(Common.PICTURE_MARGIN_TOP, this, "pictureMarginTop");
        this.isDarkMode = false;
        this.jumpDetail = () => {
        };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MicroBlogView_Params) {
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.cardItem !== undefined) {
            this.cardItem = params.cardItem;
        }
        if (params.showPicture !== undefined) {
            this.showPicture = params.showPicture;
        }
        if (params.imageWidth !== undefined) {
            this.imageWidth = params.imageWidth;
        }
        if (params.contentFontSize !== undefined) {
            this.contentFontSize = params.contentFontSize;
        }
        if (params.contentFontHeight !== undefined) {
            this.contentFontHeight = params.contentFontHeight;
        }
        if (params.scaleValue !== undefined) {
            this.scaleValue = params.scaleValue;
        }
        if (params.pinchValue !== undefined) {
            this.pinchValue = params.pinchValue;
        }
        if (params.pictureMarginTop !== undefined) {
            this.pictureMarginTop = params.pictureMarginTop;
        }
        if (params.isDarkMode !== undefined) {
            this.isDarkMode = params.isDarkMode;
        }
        if (params.jumpDetail !== undefined) {
            this.jumpDetail = params.jumpDetail;
        }
    }
    updateStateVars(params: MicroBlogView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__isDetailPage.purgeDependencyOnElmtId(rmElmtId);
        this.__isPictureDetail.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
        this.__index.purgeDependencyOnElmtId(rmElmtId);
        this.__cardItem.purgeDependencyOnElmtId(rmElmtId);
        this.__showPicture.purgeDependencyOnElmtId(rmElmtId);
        this.__imageWidth.purgeDependencyOnElmtId(rmElmtId);
        this.__contentFontSize.purgeDependencyOnElmtId(rmElmtId);
        this.__contentFontHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__scaleValue.purgeDependencyOnElmtId(rmElmtId);
        this.__pinchValue.purgeDependencyOnElmtId(rmElmtId);
        this.__pictureMarginTop.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isDetailPage.aboutToBeDeleted();
        this.__isPictureDetail.aboutToBeDeleted();
        this.__pageInfos.aboutToBeDeleted();
        this.__index.aboutToBeDeleted();
        this.__cardItem.aboutToBeDeleted();
        this.__showPicture.aboutToBeDeleted();
        this.__imageWidth.aboutToBeDeleted();
        this.__contentFontSize.aboutToBeDeleted();
        this.__contentFontHeight.aboutToBeDeleted();
        this.__scaleValue.aboutToBeDeleted();
        this.__pinchValue.aboutToBeDeleted();
        this.__pictureMarginTop.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // [StartExclude mirco_blog_view]
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private __isDetailPage: ObservedPropertyAbstractPU<boolean>;
    get isDetailPage() {
        return this.__isDetailPage.get();
    }
    set isDetailPage(newValue: boolean) {
        this.__isDetailPage.set(newValue);
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
    private __index: ObservedPropertySimplePU<number>;
    get index() {
        return this.__index.get();
    }
    set index(newValue: number) {
        this.__index.set(newValue);
    }
    private __cardItem: ObservedPropertyObjectPU<CardItem>;
    get cardItem() {
        return this.__cardItem.get();
    }
    set cardItem(newValue: CardItem) {
        this.__cardItem.set(newValue);
    }
    private __showPicture: ObservedPropertySimplePU<boolean>;
    get showPicture() {
        return this.__showPicture.get();
    }
    set showPicture(newValue: boolean) {
        this.__showPicture.set(newValue);
    }
    private __imageWidth: ObservedPropertySimplePU<string>;
    get imageWidth() {
        return this.__imageWidth.get();
    }
    set imageWidth(newValue: string) {
        this.__imageWidth.set(newValue);
    }
    private __contentFontSize: ObservedPropertySimplePU<number>;
    get contentFontSize() {
        return this.__contentFontSize.get();
    }
    set contentFontSize(newValue: number) {
        this.__contentFontSize.set(newValue);
    }
    private __contentFontHeight: ObservedPropertySimplePU<number>;
    get contentFontHeight() {
        return this.__contentFontHeight.get();
    }
    set contentFontHeight(newValue: number) {
        this.__contentFontHeight.set(newValue);
    }
    private __scaleValue: ObservedPropertySimplePU<number>;
    get scaleValue() {
        return this.__scaleValue.get();
    }
    set scaleValue(newValue: number) {
        this.__scaleValue.set(newValue);
    }
    private __pinchValue: ObservedPropertySimplePU<number>;
    get pinchValue() {
        return this.__pinchValue.get();
    }
    set pinchValue(newValue: number) {
        this.__pinchValue.set(newValue);
    }
    private __pictureMarginTop: ObservedPropertySimplePU<number>;
    get pictureMarginTop() {
        return this.__pictureMarginTop.get();
    }
    set pictureMarginTop(newValue: number) {
        this.__pictureMarginTop.set(newValue);
    }
    private isDarkMode: boolean;
    private jumpDetail: () => void;
    jump(index: number) {
        AppStorage.setOrCreate('selectCardIndex', this.index);
        this.pageInfos.pushPath({ name: 'pictureDetail', param: index });
    }
    // [EndExclude mirco_blog_view]
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
            Column.flexShrink(1);
            Column.width(BaseCommon.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.cardItem !== undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // [StartExclude mirco_blog_view]
                        Row.create();
                        // [StartExclude mirco_blog_view]
                        Row.justifyContent(FlexAlign.SpaceBetween);
                        // [StartExclude mirco_blog_view]
                        Row.width(BaseCommon.FULL_PERCENT);
                        // [StartExclude mirco_blog_view]
                        Row.padding({
                            top: { "id": 67109308, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            bottom: { "id": 67109308, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                        });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.justifyContent(FlexAlign.Start);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.cardItem.icon);
                        Image.width({ "id": 67109291, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.aspectRatio(1);
                        Image.borderRadius({ "id": 67109290, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.margin({ left: { "id": 67109301, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
                        Column.justifyContent(FlexAlign.Start);
                        Column.alignItems(HorizontalAlign.Start);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.cardItem.name);
                        Text.fontSize({ "id": 67109294, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
                        Text.height({ "id": 67109295, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontColor(this.isDarkMode ? { "id": 67109266, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : Color.Black);
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.cardItem.authorType);
                        Text.fontWeight(FontWeight.Normal);
                        Text.fontSize({ "id": 67109281, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontColor(this.isDarkMode ? { "id": 67109261, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109260, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.height({ "id": 67109282, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    }, Text);
                    Text.pop();
                    Column.pop();
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.borderRadius({ "id": 67109296, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.backgroundColor(this.isDarkMode ? { "id": 67109271, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109277, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.padding({
                            left: { "id": 67109302, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            right: { "id": 67109302, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                        });
                        Row.width({ "id": 67109299, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.height({ "id": 67109298, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.isDarkMode ? { "id": 67109375, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109228, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.width({ "id": 67109289, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.aspectRatio(1);
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create({ "id": 67109254, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontSize({ "id": 67109336, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.margin({ left: { "id": 67109337, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
                        Text.fontColor(this.isDarkMode ? Color.White : { "id": 67109272, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    }, Text);
                    Text.pop();
                    Row.pop();
                    // [StartExclude mirco_blog_view]
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // [EndExclude mirco_blog_view]
                        Row.create();
                        Gesture.create(GesturePriority.Low);
                        PinchGesture.create({ fingers: 2 });
                        PinchGesture.onActionUpdate((event?: GestureEvent) => {
                            if (event && (this.isDetailPage || this.isPictureDetail)) {
                                let tmp = this.pinchValue * event.scale;
                                if (tmp > 1.45) {
                                    tmp = 1.45;
                                }
                                if (tmp < 0.75) {
                                    tmp = 0.75;
                                }
                                this.scaleValue = tmp;
                                this.contentFontSize = 16 * this.scaleValue;
                                this.contentFontHeight = 25.6 * this.scaleValue;
                                this.pictureMarginTop = 8 * (this.scaleValue > 1 ? this.scaleValue : 1);
                            }
                        });
                        PinchGesture.onActionEnd(() => {
                            this.pinchValue = this.scaleValue;
                        });
                        PinchGesture.pop();
                        Gesture.pop();
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.cardItem.content);
                        Text.fontSize(`${this.contentFontSize}fp`);
                        Text.lineHeight(`${this.contentFontHeight}vp`);
                        Text.width(BaseCommon.FULL_PERCENT);
                        Text.onClick(() => {
                            this.jumpDetail();
                        });
                        Text.fontColor(this.isDarkMode ? { "id": 67109265, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : Color.Black);
                        Text.copyOption(CopyOptions.LocalDevice);
                    }, Text);
                    Text.pop();
                    // [EndExclude mirco_blog_view]
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        // [StartExclude mirco_blog_view]
                        if (this.showPicture) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    If.create();
                                    if (this.cardItem.pictureArray.length === 1) {
                                        this.ifElseBranchUpdateFunction(0, () => {
                                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                                Image.create(this.cardItem.pictureArray[0]);
                                                Image.onComplete((event: ImageInfo) => {
                                                    if (event.width < event.height) {
                                                        this.imageWidth = BaseCommon.HALF_PERCENT;
                                                    }
                                                });
                                                Image.width(this.imageWidth);
                                                Image.onClick(() => {
                                                    this.jump(0);
                                                });
                                                Image.margin({ top: `${this.pictureMarginTop}${Common.SUFFIX_VP}` });
                                            }, Image);
                                        });
                                    }
                                    else {
                                        this.ifElseBranchUpdateFunction(1, () => {
                                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                                Grid.create();
                                                Grid.columnsTemplate(Common.GRID_COLUMNS_TEMPLATE);
                                                Grid.columnsGap({ "id": 67109338, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                                                Grid.rowsGap({ "id": 67109338, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                                                Grid.width(BaseCommon.FULL_PERCENT);
                                                Grid.aspectRatio(this.getAspectRatio(this.cardItem.pictureArray.length));
                                                Grid.margin({ top: `${this.pictureMarginTop}${Common.SUFFIX_VP}` });
                                            }, Grid);
                                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                                ForEach.create();
                                                const forEachItemGenFunction = (_item, index: number) => {
                                                    const item = _item;
                                                    {
                                                        const itemCreation2 = (elmtId, isInitialRender) => {
                                                            GridItem.create(() => { }, false);
                                                        };
                                                        const observedDeepRender = () => {
                                                            this.observeComponentCreation2(itemCreation2, GridItem);
                                                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                                                Image.create(item);
                                                                Image.width(BaseCommon.FULL_PERCENT);
                                                                Image.aspectRatio(1);
                                                                Image.onClick(() => {
                                                                    this.jump(index);
                                                                });
                                                                Image.autoResize(true);
                                                            }, Image);
                                                            GridItem.pop();
                                                        };
                                                        observedDeepRender();
                                                    }
                                                };
                                                this.forEachUpdateFunction(elmtId, this.cardItem.pictureArray, forEachItemGenFunction, (item: Resource, index: number) => index + JSON.stringify(item), true, true);
                                            }, ForEach);
                                            ForEach.pop();
                                            Grid.pop();
                                        });
                                    }
                                }, If);
                                If.pop();
                            });
                        }
                        // [EndExclude mirco_blog_view]
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                            });
                        }
                    }, If);
                    If.pop();
                });
            }
            else // [StartExclude mirco_blog_view]
             {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    // [StartExclude mirco_blog_view]
    getAspectRatio(length: number): number {
        let rowNumber: number = (length % Common.MAX_GRID_COLUMN === 0) ? length / Common.MAX_GRID_COLUMN :
            (Math.floor(length / Common.MAX_GRID_COLUMN) + 1);
        return Common.MAX_GRID_COLUMN / rowNumber;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
