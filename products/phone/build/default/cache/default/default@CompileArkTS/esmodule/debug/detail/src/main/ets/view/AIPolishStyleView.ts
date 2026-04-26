if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface AIPolishStyleView_Params {
    selectedStyle?: PolishStyle;
    showDetail?: boolean;
    // 风格选择回调
    onStyleSelected?: (style: PolishStyle) => void;
}
import { CommonConstants as BaseCommon } from "@normalized:N&&&base/Index&1.0.0";
import { PolishStyle, POLISH_STYLE_CONFIGS } from "@normalized:N&&&base/Index&1.0.0";
import type { PolishStyleConfig } from "@normalized:N&&&base/Index&1.0.0";
export class AIPolishStyleView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__selectedStyle = new ObservedPropertySimplePU(PolishStyle.LITERARY, this, "selectedStyle");
        this.__showDetail = new ObservedPropertySimplePU(false, this, "showDetail");
        this.onStyleSelected = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: AIPolishStyleView_Params) {
        if (params.selectedStyle !== undefined) {
            this.selectedStyle = params.selectedStyle;
        }
        if (params.showDetail !== undefined) {
            this.showDetail = params.showDetail;
        }
        if (params.onStyleSelected !== undefined) {
            this.onStyleSelected = params.onStyleSelected;
        }
    }
    updateStateVars(params: AIPolishStyleView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__selectedStyle.purgeDependencyOnElmtId(rmElmtId);
        this.__showDetail.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__selectedStyle.aboutToBeDeleted();
        this.__showDetail.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __selectedStyle: ObservedPropertySimplePU<PolishStyle>;
    get selectedStyle() {
        return this.__selectedStyle.get();
    }
    set selectedStyle(newValue: PolishStyle) {
        this.__selectedStyle.set(newValue);
    }
    private __showDetail: ObservedPropertySimplePU<boolean>;
    get showDetail() {
        return this.__showDetail.get();
    }
    set showDetail(newValue: boolean) {
        this.__showDetail.set(newValue);
    }
    // 风格选择回调
    private onStyleSelected?: (style: PolishStyle) => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
            Column.padding(16);
            Column.backgroundColor({ "id": 67108986, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Column.borderRadius(12);
        }, Column);
        // 标题
        this.TitleView.bind(this)();
        // 风格选择网格
        this.StyleGrid.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 选中风格的详细说明
            if (this.showDetail) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.StyleDetailView.bind(this)();
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
    TitleView(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
            Row.margin({ bottom: 16 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('✨ 选择润色风格');
            Text.fontSize(16);
            Text.fontColor({ "id": 67109274, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 展开/收起按钮
            Text.create(this.showDetail ? '收起' : '展开');
            // 展开/收起按钮
            Text.fontSize(12);
            // 展开/收起按钮
            Text.fontColor('#2196F3');
            // 展开/收起按钮
            Text.onClick(() => {
                this.showDetail = !this.showDetail;
            });
        }, Text);
        // 展开/收起按钮
        Text.pop();
        Row.pop();
    }
    StyleGrid(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    sm: 3,
                    md: 5,
                    lg: 5
                },
                gutter: { x: 12, y: 12 }
            });
            GridRow.width(BaseCommon.FULL_PERCENT);
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const config = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    GridCol.create({ span: 1 });
                }, GridCol);
                this.StyleCard.bind(this)(config);
                GridCol.pop();
            };
            this.forEachUpdateFunction(elmtId, POLISH_STYLE_CONFIGS, forEachItemGenFunction, (config: PolishStyleConfig) => config.style, false, false);
        }, ForEach);
        ForEach.pop();
        GridRow.pop();
    }
    StyleCard(config: PolishStyleConfig, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Context.animation({
                duration: 200,
                curve: Curve.EaseInOut
            });
            Column.width(BaseCommon.FULL_PERCENT);
            Column.padding(8);
            Column.borderRadius(8);
            Column.backgroundColor(this.selectedStyle === config.style ? '#E3F2FD' : Color.Transparent);
            Column.onClick(() => {
                this.selectedStyle = config.style;
                if (this.onStyleSelected) {
                    this.onStyleSelected(config.style);
                }
            });
            Context.animation(null);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 风格图标
            Column.create();
            // 风格图标
            Column.width(48);
            // 风格图标
            Column.height(48);
            // 风格图标
            Column.backgroundColor(this.selectedStyle === config.style ? config.color : '#F5F5F5');
            // 风格图标
            Column.borderRadius(24);
            // 风格图标
            Column.justifyContent(FlexAlign.Center);
            // 风格图标
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.getStyleEmoji(config.style));
            Text.fontSize(28);
        }, Text);
        Text.pop();
        // 风格图标
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 风格名称
            Text.create(config.name);
            // 风格名称
            Text.fontSize(12);
            // 风格名称
            Text.fontColor(this.selectedStyle === config.style ? config.color : { "id": 67109274, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            // 风格名称
            Text.fontWeight(this.selectedStyle === config.style ? FontWeight.Bold : FontWeight.Normal);
            // 风格名称
            Text.margin({ top: 8 });
        }, Text);
        // 风格名称
        Text.pop();
        Column.pop();
    }
    StyleDetailView(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
            Column.margin({ top: 16 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 获取当前选中风格的配置
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const config = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (config.style === this.selectedStyle) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Column.create();
                                Column.width(BaseCommon.FULL_PERCENT);
                            }, Column);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                // 风格描述
                                Text.create(config.description);
                                // 风格描述
                                Text.fontSize(14);
                                // 风格描述
                                Text.fontColor('#666666');
                                // 风格描述
                                Text.width(BaseCommon.FULL_PERCENT);
                                // 风格描述
                                Text.margin({ top: 12, bottom: 8 });
                            }, Text);
                            // 风格描述
                            Text.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                // 示例文本
                                Row.create();
                                // 示例文本
                                Row.width(BaseCommon.FULL_PERCENT);
                                // 示例文本
                                Row.padding(8);
                                // 示例文本
                                Row.backgroundColor('#F5F5F5');
                                // 示例文本
                                Row.borderRadius(8);
                            }, Row);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create('示例：');
                                Text.fontSize(12);
                                Text.fontColor('#999999');
                            }, Text);
                            Text.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create(config.example);
                                Text.fontSize(12);
                                Text.fontColor(config.color);
                                Text.fontStyle(FontStyle.Italic);
                            }, Text);
                            Text.pop();
                            // 示例文本
                            Row.pop();
                            Column.pop();
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
            };
            this.forEachUpdateFunction(elmtId, POLISH_STYLE_CONFIGS, forEachItemGenFunction, (config: PolishStyleConfig) => config.style, false, false);
        }, ForEach);
        // 获取当前选中风格的配置
        ForEach.pop();
        Column.pop();
    }
    // 获取风格对应的emoji
    getStyleEmoji(style: PolishStyle): string {
        const emojiMap = new Map<PolishStyle, string>();
        emojiMap.set(PolishStyle.LITERARY, '🎨');
        emojiMap.set(PolishStyle.SARCASTIC, '😏');
        emojiMap.set(PolishStyle.PROFESSIONAL, '💼');
        emojiMap.set(PolishStyle.CASUAL, '😊');
        emojiMap.set(PolishStyle.EMOTIONAL, '❤️');
        return emojiMap.get(style) || '✨';
    }
    rerender() {
        this.updateDirtyElements();
    }
}
