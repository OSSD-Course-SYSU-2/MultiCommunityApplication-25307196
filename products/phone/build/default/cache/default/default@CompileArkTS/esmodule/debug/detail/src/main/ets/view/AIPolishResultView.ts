if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface AIPolishResultView_Params {
    polishResult?: PolishResult;
    showComparison?: boolean;
    selectedText?: string;
    // 使用润色结果回调
    onUsePolishedText?: (text: string) => void;
    // 重新润色回调
    onRePolish?: () => void;
    // 取消回调
    onCancel?: () => void;
}
import { CommonConstants as BaseCommon } from "@normalized:N&&&base/Index&1.0.0";
import { SentimentLabel, POLISH_STYLE_CONFIGS } from "@normalized:N&&&base/Index&1.0.0";
import type { PolishResult } from "@normalized:N&&&base/Index&1.0.0";
export class AIPolishResultView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__polishResult = new SynchedPropertyObjectOneWayPU(params.polishResult, this, "polishResult");
        this.__showComparison = new ObservedPropertySimplePU(true, this, "showComparison");
        this.__selectedText = new ObservedPropertySimplePU('', this, "selectedText");
        this.onUsePolishedText = undefined;
        this.onRePolish = undefined;
        this.onCancel = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: AIPolishResultView_Params) {
        if (params.showComparison !== undefined) {
            this.showComparison = params.showComparison;
        }
        if (params.selectedText !== undefined) {
            this.selectedText = params.selectedText;
        }
        if (params.onUsePolishedText !== undefined) {
            this.onUsePolishedText = params.onUsePolishedText;
        }
        if (params.onRePolish !== undefined) {
            this.onRePolish = params.onRePolish;
        }
        if (params.onCancel !== undefined) {
            this.onCancel = params.onCancel;
        }
    }
    updateStateVars(params: AIPolishResultView_Params) {
        this.__polishResult.reset(params.polishResult);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__polishResult.purgeDependencyOnElmtId(rmElmtId);
        this.__showComparison.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedText.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__polishResult.aboutToBeDeleted();
        this.__showComparison.aboutToBeDeleted();
        this.__selectedText.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __polishResult: SynchedPropertySimpleOneWayPU<PolishResult>;
    get polishResult() {
        return this.__polishResult.get();
    }
    set polishResult(newValue: PolishResult) {
        this.__polishResult.set(newValue);
    }
    private __showComparison: ObservedPropertySimplePU<boolean>;
    get showComparison() {
        return this.__showComparison.get();
    }
    set showComparison(newValue: boolean) {
        this.__showComparison.set(newValue);
    }
    private __selectedText: ObservedPropertySimplePU<string>; // 选中的文本（原始或润色后）
    get selectedText() {
        return this.__selectedText.get();
    }
    set selectedText(newValue: string) {
        this.__selectedText.set(newValue);
    }
    // 使用润色结果回调
    private onUsePolishedText?: (text: string) => void;
    // 重新润色回调
    private onRePolish?: () => void;
    // 取消回调
    private onCancel?: () => void;
    aboutToAppear() {
        this.selectedText = this.polishResult.polishedText;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
            Column.padding(16);
            Column.backgroundColor({ "id": 67108986, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Column.borderRadius(12);
        }, Column);
        // 标题栏
        this.TitleBar.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 对比视图
            if (this.showComparison) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.ComparisonView.bind(this)();
                });
            }
            // 润色结果详情
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        // 润色结果详情
        this.ResultDetailView.bind(this)();
        // 操作按钮
        this.ActionButtons.bind(this)();
        Column.pop();
    }
    TitleBar(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
            Row.margin({ bottom: 16 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('✨ AI润色结果');
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
            // 风格标签
            Text.create(this.getStyleName());
            // 风格标签
            Text.fontSize(12);
            // 风格标签
            Text.fontColor(Color.White);
            // 风格标签
            Text.backgroundColor(this.getStyleColor());
            // 风格标签
            Text.borderRadius(12);
            // 风格标签
            Text.padding({ left: 12, right: 12, top: 4, bottom: 4 });
        }, Text);
        // 风格标签
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 置信度
            Text.create(`置信度 ${Math.round(this.polishResult.confidence * 100)}%`);
            // 置信度
            Text.fontSize(12);
            // 置信度
            Text.fontColor('#999999');
            // 置信度
            Text.margin({ left: 8 });
        }, Text);
        // 置信度
        Text.pop();
        Row.pop();
    }
    ComparisonView(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
            Column.margin({ bottom: 16 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 切换按钮
            Row.create();
            // 切换按钮
            Row.width(BaseCommon.FULL_PERCENT);
            // 切换按钮
            Row.margin({ bottom: 12 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('原始文本');
            Button.fontSize(12);
            Button.fontColor(this.selectedText === this.polishResult.originalText ? Color.White : '#666666');
            Button.backgroundColor(this.selectedText === this.polishResult.originalText ? '#999999' : '#F5F5F5');
            Button.borderRadius(16);
            Button.height(32);
            Button.onClick(() => {
                this.selectedText = this.polishResult.originalText;
            });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('润色后');
            Button.fontSize(12);
            Button.fontColor(this.selectedText === this.polishResult.polishedText ? Color.White : '#666666');
            Button.backgroundColor(this.selectedText === this.polishResult.polishedText ? '#2196F3' : '#F5F5F5');
            Button.borderRadius(16);
            Button.height(32);
            Button.margin({ left: 8 });
            Button.onClick(() => {
                this.selectedText = this.polishResult.polishedText;
            });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.showComparison ? '隐藏对比' : '显示对比');
            Text.fontSize(12);
            Text.fontColor('#2196F3');
            Text.onClick(() => {
                this.showComparison = !this.showComparison;
            });
        }, Text);
        Text.pop();
        // 切换按钮
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 文本展示区域
            Column.create();
            // 文本展示区域
            Column.width(BaseCommon.FULL_PERCENT);
            // 文本展示区域
            Column.padding(12);
            // 文本展示区域
            Column.backgroundColor(this.selectedText === this.polishResult.polishedText ? '#E3F2FD' : '#F5F5F5');
            // 文本展示区域
            Column.borderRadius(8);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.selectedText);
            Text.fontSize(14);
            Text.fontColor({ "id": 67109274, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.lineHeight(22);
            Text.width(BaseCommon.FULL_PERCENT);
        }, Text);
        Text.pop();
        // 文本展示区域
        Column.pop();
        Column.pop();
    }
    ResultDetailView(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
        }, Column);
        // 情感分析
        this.SentimentView.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 关键词提取
            if (this.polishResult.keywords.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.KeywordsView.bind(this)();
                });
            }
            // 优化建议
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 优化建议
            if (this.polishResult.suggestions.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.SuggestionsView.bind(this)();
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
    SentimentView(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
            Row.margin({ bottom: 12 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('情感分析：');
            Text.fontSize(12);
            Text.fontColor('#666666');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 情感图标和标签
            Row.create();
            // 情感图标和标签
            Row.backgroundColor(this.getSentimentBgColor(this.polishResult.sentiment.label));
            // 情感图标和标签
            Row.borderRadius(12);
            // 情感图标和标签
            Row.padding({ left: 8, right: 8, top: 4, bottom: 4 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.getSentimentEmoji(this.polishResult.sentiment.label));
            Text.fontSize(16);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.getSentimentLabel(this.polishResult.sentiment.label));
            Text.fontSize(12);
            Text.fontColor(this.getSentimentColor(this.polishResult.sentiment.label));
            Text.margin({ left: 4 });
        }, Text);
        Text.pop();
        // 情感图标和标签
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 情感分数
            Text.create(`分数: ${this.polishResult.sentiment.score.toFixed(2)}`);
            // 情感分数
            Text.fontSize(12);
            // 情感分数
            Text.fontColor('#999999');
            // 情感分数
            Text.margin({ left: 8 });
        }, Text);
        // 情感分数
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 置信度
            Text.create(`置信度: ${Math.round(this.polishResult.sentiment.confidence * 100)}%`);
            // 置信度
            Text.fontSize(12);
            // 置信度
            Text.fontColor('#999999');
            // 置信度
            Text.margin({ left: 8 });
        }, Text);
        // 置信度
        Text.pop();
        Row.pop();
    }
    KeywordsView(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
            Column.margin({ bottom: 12 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('关键词提取：');
            Text.fontSize(12);
            Text.fontColor('#666666');
            Text.width(BaseCommon.FULL_PERCENT);
            Text.margin({ bottom: 8 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ wrap: FlexWrap.Wrap });
            Flex.width(BaseCommon.FULL_PERCENT);
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const keyword = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(keyword);
                    Text.fontSize(12);
                    Text.fontColor('#2196F3');
                    Text.backgroundColor('#E3F2FD');
                    Text.borderRadius(12);
                    Text.padding({ left: 8, right: 8, top: 4, bottom: 4 });
                    Text.margin({ right: 8, bottom: 8 });
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, this.polishResult.keywords, forEachItemGenFunction, (keyword: string) => keyword, false, false);
        }, ForEach);
        ForEach.pop();
        Flex.pop();
        Column.pop();
    }
    SuggestionsView(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('优化建议：');
            Text.fontSize(12);
            Text.fontColor('#666666');
            Text.width(BaseCommon.FULL_PERCENT);
            Text.margin({ bottom: 8 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const suggestion = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width(BaseCommon.FULL_PERCENT);
                    Row.margin({ bottom: 4 });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(`${index + 1}.`);
                    Text.fontSize(12);
                    Text.fontColor('#4CAF50');
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(suggestion);
                    Text.fontSize(12);
                    Text.fontColor('#666666');
                    Text.layoutWeight(1);
                    Text.margin({ left: 4 });
                }, Text);
                Text.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, this.polishResult.suggestions, forEachItemGenFunction, (suggestion: string, index: number) => index.toString(), true, true);
        }, ForEach);
        ForEach.pop();
        Column.pop();
    }
    ActionButtons(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
            Row.margin({ top: 16 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 使用润色结果
            Button.createWithLabel('使用此版本');
            // 使用润色结果
            Button.fontSize(14);
            // 使用润色结果
            Button.fontColor(Color.White);
            // 使用润色结果
            Button.backgroundColor('#4CAF50');
            // 使用润色结果
            Button.layoutWeight(1);
            // 使用润色结果
            Button.borderRadius(20);
            // 使用润色结果
            Button.onClick(() => {
                if (this.onUsePolishedText) {
                    this.onUsePolishedText(this.polishResult.polishedText);
                }
            });
        }, Button);
        // 使用润色结果
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 重新润色
            Button.createWithLabel('重新润色');
            // 重新润色
            Button.fontSize(14);
            // 重新润色
            Button.fontColor('#2196F3');
            // 重新润色
            Button.backgroundColor('#E3F2FD');
            // 重新润色
            Button.layoutWeight(1);
            // 重新润色
            Button.borderRadius(20);
            // 重新润色
            Button.margin({ left: 8 });
            // 重新润色
            Button.onClick(() => {
                if (this.onRePolish) {
                    this.onRePolish();
                }
            });
        }, Button);
        // 重新润色
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 取消
            Button.createWithLabel('取消');
            // 取消
            Button.fontSize(14);
            // 取消
            Button.fontColor('#666666');
            // 取消
            Button.backgroundColor('#F5F5F5');
            // 取消
            Button.layoutWeight(1);
            // 取消
            Button.borderRadius(20);
            // 取消
            Button.margin({ left: 8 });
            // 取消
            Button.onClick(() => {
                if (this.onCancel) {
                    this.onCancel();
                }
            });
        }, Button);
        // 取消
        Button.pop();
        Row.pop();
    }
    // 获取风格名称
    getStyleName(): string {
        const config = POLISH_STYLE_CONFIGS.find(c => c.style === this.polishResult.style);
        return config?.name || '未知风格';
    }
    // 获取风格颜色
    getStyleColor(): string {
        const config = POLISH_STYLE_CONFIGS.find(c => c.style === this.polishResult.style);
        return config?.color || '#2196F3';
    }
    // 获取情感emoji
    getSentimentEmoji(label: SentimentLabel): string {
        const emojiMap = new Map<SentimentLabel, string>();
        emojiMap.set(SentimentLabel.POSITIVE, '😊');
        emojiMap.set(SentimentLabel.NEGATIVE, '😔');
        emojiMap.set(SentimentLabel.NEUTRAL, '😐');
        return emojiMap.get(label) || '😐';
    }
    // 获取情感标签
    getSentimentLabel(label: SentimentLabel): string {
        const labelMap = new Map<SentimentLabel, string>();
        labelMap.set(SentimentLabel.POSITIVE, '积极');
        labelMap.set(SentimentLabel.NEGATIVE, '消极');
        labelMap.set(SentimentLabel.NEUTRAL, '中性');
        return labelMap.get(label) || '中性';
    }
    // 获取情感颜色
    getSentimentColor(label: SentimentLabel): string {
        const colorMap = new Map<SentimentLabel, string>();
        colorMap.set(SentimentLabel.POSITIVE, '#4CAF50');
        colorMap.set(SentimentLabel.NEGATIVE, '#F44336');
        colorMap.set(SentimentLabel.NEUTRAL, '#9E9E9E');
        return colorMap.get(label) || '#9E9E9E';
    }
    // 获取情感背景色
    getSentimentBgColor(label: SentimentLabel): string {
        const colorMap = new Map<SentimentLabel, string>();
        colorMap.set(SentimentLabel.POSITIVE, '#E8F5E9');
        colorMap.set(SentimentLabel.NEGATIVE, '#FFEBEE');
        colorMap.set(SentimentLabel.NEUTRAL, '#F5F5F5');
        return colorMap.get(label) || '#F5F5F5';
    }
    rerender() {
        this.updateDirtyElements();
    }
}
