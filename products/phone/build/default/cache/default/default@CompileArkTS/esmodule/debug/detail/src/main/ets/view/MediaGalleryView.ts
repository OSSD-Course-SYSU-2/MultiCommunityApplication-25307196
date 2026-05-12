if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface MediaPreviewView_Params {
    mediaList?: MediaData[];
    currentIndex?: number;
    isVisible?: boolean;
    isDarkMode?: boolean;
}
interface MediaGalleryView_Params {
    mediaList?: MediaData[];
    previewIndex?: number;
    isPreviewVisible?: boolean;
    isDarkMode?: boolean;
}
import { MediaType, MediaCategory } from "@normalized:N&&&base/Index&1.0.0";
import type { MediaData } from "@normalized:N&&&base/Index&1.0.0";
export class MediaGalleryView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.mediaList = [];
        this.__previewIndex = new ObservedPropertySimplePU(0, this, "previewIndex");
        this.__isPreviewVisible = new ObservedPropertySimplePU(false, this, "isPreviewVisible");
        this.isDarkMode = false;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MediaGalleryView_Params) {
        if (params.mediaList !== undefined) {
            this.mediaList = params.mediaList;
        }
        if (params.previewIndex !== undefined) {
            this.previewIndex = params.previewIndex;
        }
        if (params.isPreviewVisible !== undefined) {
            this.isPreviewVisible = params.isPreviewVisible;
        }
        if (params.isDarkMode !== undefined) {
            this.isDarkMode = params.isDarkMode;
        }
    }
    updateStateVars(params: MediaGalleryView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__previewIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__isPreviewVisible.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__previewIndex.aboutToBeDeleted();
        this.__isPreviewVisible.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private mediaList: MediaData[];
    private __previewIndex: ObservedPropertySimplePU<number>;
    get previewIndex() {
        return this.__previewIndex.get();
    }
    set previewIndex(newValue: number) {
        this.__previewIndex.set(newValue);
    }
    private __isPreviewVisible: ObservedPropertySimplePU<boolean>;
    get isPreviewVisible() {
        return this.__isPreviewVisible.get();
    }
    set isPreviewVisible(newValue: boolean) {
        this.__isPreviewVisible.set(newValue);
    }
    private isDarkMode: boolean;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.mediaList && this.mediaList.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    // 媒体网格展示
                    this.MediaGrid.bind(this)();
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
    // 媒体网格展示
    MediaGrid(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ wrap: FlexWrap.Wrap });
            Flex.width('100%');
            Flex.margin({ top: 8 });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const media = _item;
                this.MediaItem.bind(this)(media, index);
            };
            this.forEachUpdateFunction(elmtId, this.mediaList, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Flex.pop();
    }
    // 单个媒体项
    MediaItem(media: MediaData, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.TopEnd });
            Stack.width(this.getMediaWidth(media));
            Stack.height(this.getMediaHeight(media));
            Stack.margin({ right: 8, bottom: 8 });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.onClick(() => {
                this.previewIndex = index;
                this.isPreviewVisible = true;
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (media.type === MediaType.IMAGE || media.type === MediaType.STICKER) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 图片或表情包
                        Image.create(media.url);
                        // 图片或表情包
                        Image.width(this.getMediaWidth(media));
                        // 图片或表情包
                        Image.height(this.getMediaHeight(media));
                        // 图片或表情包
                        Image.objectFit(ImageFit.Cover);
                        // 图片或表情包
                        Image.borderRadius(8);
                    }, Image);
                });
            }
            else if (media.type === MediaType.VIDEO) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 视频（显示缩略图和播放图标）
                        Stack.create();
                    }, Stack);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(media.thumbnail || media.url);
                        Image.width(this.getMediaWidth(media));
                        Image.height(this.getMediaHeight(media));
                        Image.objectFit(ImageFit.Cover);
                        Image.borderRadius(8);
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 播放图标
                        Column.create();
                        // 播放图标
                        Column.width('100%');
                        // 播放图标
                        Column.height('100%');
                        // 播放图标
                        Column.justifyContent(FlexAlign.Center);
                        // 播放图标
                        Column.backgroundColor('rgba(0, 0, 0, 0.3)');
                        // 播放图标
                        Column.borderRadius(8);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 67109245, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.width(40);
                        Image.height(40);
                    }, Image);
                    // 播放图标
                    Column.pop();
                    // 视频（显示缩略图和播放图标）
                    Stack.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(2, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 分类标签
            if (media.category && media.category !== MediaCategory.NORMAL) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.getCategoryLabel(media.category));
                        Text.fontSize(10);
                        Text.fontColor(Color.White);
                        Text.backgroundColor(this.getCategoryColor(media.category));
                        Text.padding({ left: 6, right: 6, top: 2, bottom: 2 });
                        Text.borderRadius({ topRight: 8, bottomLeft: 8 });
                    }, Text);
                    Text.pop();
                });
            }
            // 视频时长标签
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 视频时长标签
            if (media.type === MediaType.VIDEO && media.duration) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.formatDuration(media.duration));
                        Text.fontSize(10);
                        Text.fontColor(Color.White);
                        Text.backgroundColor('rgba(0, 0, 0, 0.6)');
                        Text.padding({ left: 4, right: 4, top: 2, bottom: 2 });
                        Text.borderRadius(4);
                        Text.position({ x: 4, y: this.getMediaHeight(media) - 20 });
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
        Stack.pop();
    }
    // 获取媒体宽度
    private getMediaWidth(media: MediaData): number {
        if (media.type === MediaType.STICKER) {
            return 80;
        }
        // 根据媒体数量调整大小
        if (this.mediaList.length === 1) {
            return 200;
        }
        else if (this.mediaList.length === 2) {
            return 150;
        }
        else {
            return 100;
        }
    }
    // 获取媒体高度
    private getMediaHeight(media: MediaData): number {
        if (media.type === MediaType.STICKER) {
            return 80;
        }
        // 根据媒体数量调整大小
        if (this.mediaList.length === 1) {
            return 150;
        }
        else if (this.mediaList.length === 2) {
            return 112;
        }
        else {
            return 100;
        }
    }
    // 获取分类标签
    private getCategoryLabel(category: MediaCategory): string {
        switch (category) {
            case MediaCategory.SAME_SCENE:
                return '同款风景';
            case MediaCategory.FUNNY_MEME:
                return '搞笑梗图';
            default:
                return '';
        }
    }
    // 获取分类颜色
    private getCategoryColor(category: MediaCategory): ResourceColor {
        switch (category) {
            case MediaCategory.SAME_SCENE:
                return '#4CAF50'; // 绿色
            case MediaCategory.FUNNY_MEME:
                return '#FF9800'; // 橙色
            default:
                return '#999999';
        }
    }
    // 格式化时长
    private formatDuration(seconds: number): string {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class MediaPreviewView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.mediaList = [];
        this.__currentIndex = new SynchedPropertySimpleTwoWayPU(params.currentIndex, this, "currentIndex");
        this.__isVisible = new SynchedPropertySimpleTwoWayPU(params.isVisible, this, "isVisible");
        this.isDarkMode = false;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MediaPreviewView_Params) {
        if (params.mediaList !== undefined) {
            this.mediaList = params.mediaList;
        }
        if (params.isDarkMode !== undefined) {
            this.isDarkMode = params.isDarkMode;
        }
    }
    updateStateVars(params: MediaPreviewView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__isVisible.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        this.__isVisible.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private mediaList: MediaData[];
    private __currentIndex: SynchedPropertySimpleTwoWayPU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    private __isVisible: SynchedPropertySimpleTwoWayPU<boolean>;
    get isVisible() {
        return this.__isVisible.get();
    }
    set isVisible(newValue: boolean) {
        this.__isVisible.set(newValue);
    }
    private isDarkMode: boolean;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isVisible && this.mediaList.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('100%');
                        Column.height('100%');
                        Column.backgroundColor('rgba(0, 0, 0, 0.95)');
                        Column.position({ x: 0, y: 0 });
                        Column.zIndex(999);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 顶部工具栏
                        Row.create();
                        // 顶部工具栏
                        Row.width('100%');
                        // 顶部工具栏
                        Row.height(56);
                        // 顶部工具栏
                        Row.padding({ left: 16, right: 16 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 67109120, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.width(24);
                        Image.height(24);
                        Image.onClick(() => {
                            this.isVisible = false;
                        });
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Blank.create();
                    }, Blank);
                    Blank.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(`${this.currentIndex + 1}/${this.mediaList.length}`);
                        Text.fontSize(16);
                        Text.fontColor(Color.White);
                    }, Text);
                    Text.pop();
                    // 顶部工具栏
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 媒体展示区域
                        Swiper.create();
                        // 媒体展示区域
                        Swiper.index(this.currentIndex);
                        // 媒体展示区域
                        Swiper.indicator(this.mediaList.length > 1);
                        // 媒体展示区域
                        Swiper.onChange((index: number) => {
                            this.currentIndex = index;
                        });
                        // 媒体展示区域
                        Swiper.layoutWeight(1);
                    }, Swiper);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = (_item, index: number) => {
                            const media = _item;
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Column.create();
                                Column.width('100%');
                                Column.height('100%');
                                Column.justifyContent(FlexAlign.Center);
                            }, Column);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                If.create();
                                if (media.type === MediaType.IMAGE || media.type === MediaType.STICKER) {
                                    this.ifElseBranchUpdateFunction(0, () => {
                                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                                            Image.create(media.url);
                                            Image.width('100%');
                                            Image.objectFit(ImageFit.Contain);
                                        }, Image);
                                    });
                                }
                                else if (media.type === MediaType.VIDEO) {
                                    this.ifElseBranchUpdateFunction(1, () => {
                                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                                            // 视频播放器（这里简化处理，实际应使用Video组件）
                                            Column.create();
                                            // 视频播放器（这里简化处理，实际应使用Video组件）
                                            Column.width('100%');
                                            // 视频播放器（这里简化处理，实际应使用Video组件）
                                            Column.height('100%');
                                            // 视频播放器（这里简化处理，实际应使用Video组件）
                                            Column.justifyContent(FlexAlign.Center);
                                        }, Column);
                                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                                            Image.create(media.thumbnail || media.url);
                                            Image.width('100%');
                                            Image.objectFit(ImageFit.Contain);
                                        }, Image);
                                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                                            Text.create('视频播放器');
                                            Text.fontSize(14);
                                            Text.fontColor(Color.White);
                                            Text.margin({ top: 16 });
                                        }, Text);
                                        Text.pop();
                                        // 视频播放器（这里简化处理，实际应使用Video组件）
                                        Column.pop();
                                    });
                                }
                                // 媒体描述
                                else {
                                    this.ifElseBranchUpdateFunction(2, () => {
                                    });
                                }
                            }, If);
                            If.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                If.create();
                                // 媒体描述
                                if (media.description) {
                                    this.ifElseBranchUpdateFunction(0, () => {
                                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                                            Text.create(media.description);
                                            Text.fontSize(14);
                                            Text.fontColor(Color.White);
                                            Text.margin({ top: 16 });
                                            Text.padding({ left: 16, right: 16 });
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
                            Column.pop();
                        };
                        this.forEachUpdateFunction(elmtId, this.mediaList, forEachItemGenFunction, undefined, true, false);
                    }, ForEach);
                    ForEach.pop();
                    // 媒体展示区域
                    Swiper.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
