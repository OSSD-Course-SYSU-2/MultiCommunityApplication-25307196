if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface MediaPickerView_Params {
    selectedMedia?: MediaData[];
    isExpanded?: boolean;
    selectedType?: MediaType;
    selectedCategory?: MediaCategory;
    stickerList?: Resource[];
}
import { MediaType, MediaCategory } from "@normalized:N&&&base/Index&1.0.0";
import type { MediaData } from "@normalized:N&&&base/Index&1.0.0";
export class MediaPickerView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__selectedMedia = new SynchedPropertyObjectTwoWayPU(params.selectedMedia, this, "selectedMedia");
        this.__isExpanded = new ObservedPropertySimplePU(false, this, "isExpanded");
        this.__selectedType = new ObservedPropertySimplePU(MediaType.IMAGE, this, "selectedType");
        this.__selectedCategory = new ObservedPropertySimplePU(MediaCategory.NORMAL, this, "selectedCategory");
        this.stickerList = [
            { "id": 67109210, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
            { "id": 67109211, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
            { "id": 67109212, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
            { "id": 67109213, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
            { "id": 67109244, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
            { "id": 67109245, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
        ];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MediaPickerView_Params) {
        if (params.isExpanded !== undefined) {
            this.isExpanded = params.isExpanded;
        }
        if (params.selectedType !== undefined) {
            this.selectedType = params.selectedType;
        }
        if (params.selectedCategory !== undefined) {
            this.selectedCategory = params.selectedCategory;
        }
        if (params.stickerList !== undefined) {
            this.stickerList = params.stickerList;
        }
    }
    updateStateVars(params: MediaPickerView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__selectedMedia.purgeDependencyOnElmtId(rmElmtId);
        this.__isExpanded.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedType.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedCategory.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__selectedMedia.aboutToBeDeleted();
        this.__isExpanded.aboutToBeDeleted();
        this.__selectedType.aboutToBeDeleted();
        this.__selectedCategory.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __selectedMedia: SynchedPropertySimpleOneWayPU<MediaData[]>;
    get selectedMedia() {
        return this.__selectedMedia.get();
    }
    set selectedMedia(newValue: MediaData[]) {
        this.__selectedMedia.set(newValue);
    }
    private __isExpanded: ObservedPropertySimplePU<boolean>;
    get isExpanded() {
        return this.__isExpanded.get();
    }
    set isExpanded(newValue: boolean) {
        this.__isExpanded.set(newValue);
    }
    private __selectedType: ObservedPropertySimplePU<MediaType>;
    get selectedType() {
        return this.__selectedType.get();
    }
    set selectedType(newValue: MediaType) {
        this.__selectedType.set(newValue);
    }
    private __selectedCategory: ObservedPropertySimplePU<MediaCategory>;
    get selectedCategory() {
        return this.__selectedCategory.get();
    }
    set selectedCategory(newValue: MediaCategory) {
        this.__selectedCategory.set(newValue);
    }
    // 表情包列表（示例数据）
    private stickerList: Resource[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.backgroundColor({ "id": 67108986, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Column.borderRadius({ topLeft: 16, topRight: 16, bottomLeft: 0, bottomRight: 0 });
        }, Column);
        // 媒体类型选择栏
        this.MediaTypeBar.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isExpanded) {
                this.ifElseBranchUpdateFunction(0, () => {
                    // 媒体内容区域
                    this.MediaContentArea.bind(this)();
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
    // 媒体类型选择栏
    MediaTypeBar(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(48);
            Row.padding({ left: 16, right: 16 });
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        // 图片按钮
        this.MediaTypeButton.bind(this)({ "id": 67109235, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, MediaType.IMAGE, '图片');
        // 视频按钮
        this.MediaTypeButton.bind(this)({ "id": 67109245, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, MediaType.VIDEO, '视频');
        // 表情包按钮
        this.MediaTypeButton.bind(this)({ "id": 67109244, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, MediaType.STICKER, '表情');
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 展开/收起按钮
            Image.create({ "id": 67109120, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            // 展开/收起按钮
            Image.width(24);
            // 展开/收起按钮
            Image.height(24);
            // 展开/收起按钮
            Image.onClick(() => {
                this.isExpanded = !this.isExpanded;
            });
        }, Image);
        Row.pop();
    }
    // 媒体类型按钮
    MediaTypeButton(icon: Resource, type: MediaType, label: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.onClick(() => {
                this.selectedType = type;
                if (!this.isExpanded) {
                    this.isExpanded = true;
                }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(icon);
            Image.width(28);
            Image.height(28);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(label);
            Text.fontSize(12);
            Text.fontColor(this.selectedType === type ? '#007DFF' : Color.Black);
            Text.margin({ top: 4 });
        }, Text);
        Text.pop();
        Column.pop();
    }
    // 媒体内容区域
    MediaContentArea(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.padding(16);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.selectedType === MediaType.IMAGE || this.selectedType === MediaType.VIDEO) {
                this.ifElseBranchUpdateFunction(0, () => {
                    // 图片/视频分类选择
                    this.CategorySelector.bind(this)();
                    // 上传按钮
                    this.UploadButton.bind(this)();
                });
            }
            else if (this.selectedType === MediaType.STICKER) {
                this.ifElseBranchUpdateFunction(1, () => {
                    // 表情包选择
                    this.StickerGrid.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(2, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    // 分类选择器
    CategorySelector(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.alignItems(VerticalAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('分类：');
            Text.fontSize(14);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.margin({ left: 8 });
        }, Row);
        this.CategoryChip.bind(this)('普通', MediaCategory.NORMAL);
        this.CategoryChip.bind(this)('同款风景', MediaCategory.SAME_SCENE);
        this.CategoryChip.bind(this)('搞笑梗图', MediaCategory.FUNNY_MEME);
        Row.pop();
        Row.pop();
    }
    // 分类标签
    CategoryChip(label: string, category: MediaCategory, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(label);
            Text.fontSize(12);
            Text.fontColor(this.selectedCategory === category ? Color.White : Color.Black);
            Text.padding({ left: 12, right: 12, top: 6, bottom: 6 });
            Text.borderRadius(16);
            Text.backgroundColor(this.selectedCategory === category ? '#007DFF' : '#F0F0F0');
            Text.onClick(() => {
                this.selectedCategory = category;
            });
        }, Text);
        Text.pop();
    }
    // 上传按钮
    UploadButton(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height(120);
            Column.borderRadius(8);
            Column.backgroundColor('#F5F5F5');
            Column.justifyContent(FlexAlign.Center);
            Column.margin({ top: 16 });
            Column.onClick(() => {
                // 模拟选择媒体文件
                this.selectMedia();
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109120, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width(48);
            Image.height(48);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.selectedType === MediaType.IMAGE ? '上传图片' : '上传视频');
            Text.fontSize(12);
            Text.fontColor('#999999');
            Text.margin({ top: 8 });
        }, Text);
        Text.pop();
        Column.pop();
    }
    // 表情包网格
    StickerGrid(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.columnsTemplate('1fr 1fr 1fr 1fr 1fr 1fr');
            Grid.rowsGap(16);
            Grid.columnsGap(16);
            Grid.width('100%');
            Grid.height(150);
            Grid.margin({ top: 16 });
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const sticker = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create(sticker);
                            Image.width(60);
                            Image.height(60);
                            Image.borderRadius(8);
                            Image.onClick(() => {
                                this.addSticker(sticker);
                            });
                        }, Image);
                        GridItem.pop();
                    };
                    observedDeepRender();
                }
            };
            this.forEachUpdateFunction(elmtId, this.stickerList, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Grid.pop();
    }
    // 选择媒体文件（模拟）
    private selectMedia() {
        // 这里应该调用系统相册或相机API
        // 模拟添加一个媒体
        const newMedia: MediaData = {
            type: this.selectedType,
            url: this.selectedType === MediaType.IMAGE ? { "id": 67109235, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109245, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
            category: this.selectedCategory,
            description: this.selectedCategory === MediaCategory.SAME_SCENE ? '同款风景对比' :
                this.selectedCategory === MediaCategory.FUNNY_MEME ? '搞笑梗图' : '',
            width: 800,
            height: 600
        };
        this.selectedMedia.push(newMedia);
    }
    // 添加表情包
    private addSticker(sticker: Resource) {
        const newMedia: MediaData = {
            type: MediaType.STICKER,
            url: sticker,
            width: 120,
            height: 120
        };
        this.selectedMedia.push(newMedia);
        this.isExpanded = false;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
