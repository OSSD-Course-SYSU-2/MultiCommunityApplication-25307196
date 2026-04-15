if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface EmotionHeatmapView_Params {
    emotionData?: EmotionData;
    isExpanded?: boolean;
}
import { EmotionType } from "@normalized:N&&&base/Index&1.0.0";
import type { EmotionData } from "@normalized:N&&&base/Index&1.0.0";
export class EmotionHeatmapView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__emotionData = new SynchedPropertyObjectOneWayPU(params.emotionData, this, "emotionData");
        this.__isExpanded = new ObservedPropertySimplePU(false, this, "isExpanded");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: EmotionHeatmapView_Params) {
        if (params.isExpanded !== undefined) {
            this.isExpanded = params.isExpanded;
        }
    }
    updateStateVars(params: EmotionHeatmapView_Params) {
        this.__emotionData.reset(params.emotionData);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__emotionData.purgeDependencyOnElmtId(rmElmtId);
        this.__isExpanded.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__emotionData.aboutToBeDeleted();
        this.__isExpanded.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __emotionData: SynchedPropertySimpleOneWayPU<EmotionData>;
    get emotionData() {
        return this.__emotionData.get();
    }
    set emotionData(newValue: EmotionData) {
        this.__emotionData.set(newValue);
    }
    private __isExpanded: ObservedPropertySimplePU<boolean>;
    get isExpanded() {
        return this.__isExpanded.get();
    }
    set isExpanded(newValue: boolean) {
        this.__isExpanded.set(newValue);
    }
    // 获取情绪颜色
    getEmotionColor(emotion: EmotionType): string {
        switch (emotion) {
            case EmotionType.ANGRY:
                return '#F44336'; // 红色 - 愤怒
            case EmotionType.AGREE:
                return '#4CAF50'; // 绿色 - 赞同
            case EmotionType.TEASE:
                return '#FF9800'; // 橙色 - 调侃
            case EmotionType.RATIONAL:
                return '#2196F3'; // 蓝色 - 理性讨论
            case EmotionType.NEUTRAL:
                return '#9E9E9E'; // 灰色 - 中性
            default:
                return '#9E9E9E';
        }
    }
    // 获取情绪标签
    getEmotionLabel(emotion: EmotionType): string {
        switch (emotion) {
            case EmotionType.ANGRY:
                return '愤怒';
            case EmotionType.AGREE:
                return '赞同';
            case EmotionType.TEASE:
                return '调侃';
            case EmotionType.RATIONAL:
                return '理性讨论';
            case EmotionType.NEUTRAL:
                return '中性';
            default:
                return '未知';
        }
    }
    // 计算颜色透明度（基于强度）
    getColorWithOpacity(color: string, intensity: number): string {
        // intensity范围是0-100，转换为透明度
        const opacity = Math.min(intensity / 100, 1);
        // 简化处理：直接返回颜色，透明度通过opacity属性控制
        return color;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/detail/src/main/ets/view/EmotionHeatmapView.ets(68:5)", "detail");
            Column.width('100%');
            Column.padding(8);
            Column.backgroundColor('#F5F5F5');
            Column.borderRadius(8);
            Column.margin({ top: 8 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 主要情绪展示
            Row.create();
            Row.debugLine("features/detail/src/main/ets/view/EmotionHeatmapView.ets(70:7)", "detail");
            // 主要情绪展示
            Row.width('100%');
            // 主要情绪展示
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 情绪图标和标签
            Row.create();
            Row.debugLine("features/detail/src/main/ets/view/EmotionHeatmapView.ets(72:9)", "detail");
            // 情绪图标和标签
            Row.layoutWeight(1);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Circle.create();
            Circle.debugLine("features/detail/src/main/ets/view/EmotionHeatmapView.ets(73:11)", "detail");
            Circle.width(12);
            Circle.height(12);
            Circle.fill(this.getEmotionColor(this.emotionData.emotion));
            Circle.opacity(this.emotionData.intensity / 100);
        }, Circle);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.getEmotionLabel(this.emotionData.emotion));
            Text.debugLine("features/detail/src/main/ets/view/EmotionHeatmapView.ets(79:11)", "detail");
            Text.fontSize(12);
            Text.fontColor(Color.Black);
            Text.margin({ left: 6 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 强度指示
            Text.create(`强度: ${this.emotionData.intensity}%`);
            Text.debugLine("features/detail/src/main/ets/view/EmotionHeatmapView.ets(85:11)", "detail");
            // 强度指示
            Text.fontSize(10);
            // 强度指示
            Text.fontColor('#666666');
            // 强度指示
            Text.margin({ left: 8 });
        }, Text);
        // 强度指示
        Text.pop();
        // 情绪图标和标签
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 展开/收起按钮
            Text.create(this.isExpanded ? '收起' : '详情');
            Text.debugLine("features/detail/src/main/ets/view/EmotionHeatmapView.ets(93:9)", "detail");
            // 展开/收起按钮
            Text.fontSize(12);
            // 展开/收起按钮
            Text.fontColor({ "id": 67109377, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            // 展开/收起按钮
            Text.onClick(() => {
                this.isExpanded = !this.isExpanded;
            });
        }, Text);
        // 展开/收起按钮
        Text.pop();
        // 主要情绪展示
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 展开的情绪分布热力图
            if (this.isExpanded) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.debugLine("features/detail/src/main/ets/view/EmotionHeatmapView.ets(105:9)", "detail");
                        Column.width('100%');
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('情绪分布');
                        Text.debugLine("features/detail/src/main/ets/view/EmotionHeatmapView.ets(106:11)", "detail");
                        Text.fontSize(12);
                        Text.fontColor('#666666');
                        Text.margin({ top: 12, bottom: 8 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 热力图网格
                        Row.create();
                        Row.debugLine("features/detail/src/main/ets/view/EmotionHeatmapView.ets(112:11)", "detail");
                        // 热力图网格
                        Row.width('100%');
                        // 热力图网格
                        Row.justifyContent(FlexAlign.SpaceEvenly);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const item = _item;
                            this.EmotionBarItem.bind(this)(item[0], item[1]);
                        };
                        this.forEachUpdateFunction(elmtId, Array.from(this.emotionData.emotionDistribution.entries()), forEachItemGenFunction, (item: [
                            EmotionType,
                            number
                        ]) => item[0], false, false);
                    }, ForEach);
                    ForEach.pop();
                    // 热力图网格
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
        Column.pop();
    }
    EmotionBarItem(emotion: EmotionType, count: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/detail/src/main/ets/view/EmotionHeatmapView.ets(132:5)", "detail");
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 热力条
            Column.create();
            Column.debugLine("features/detail/src/main/ets/view/EmotionHeatmapView.ets(134:7)", "detail");
            // 热力条
            Column.width(24);
            // 热力条
            Column.height(60);
            // 热力条
            Column.justifyContent(FlexAlign.End);
            // 热力条
            Column.backgroundColor('#F5F5F5');
            // 热力条
            Column.borderRadius(4);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/detail/src/main/ets/view/EmotionHeatmapView.ets(135:9)", "detail");
            Column.width('100%');
            Column.height(Math.max(count, 5));
            Column.backgroundColor(this.getEmotionColor(emotion));
            Column.borderRadius(2);
        }, Column);
        Column.pop();
        // 热力条
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 标签
            Text.create(this.getEmotionLabel(emotion));
            Text.debugLine("features/detail/src/main/ets/view/EmotionHeatmapView.ets(148:7)", "detail");
            // 标签
            Text.fontSize(10);
            // 标签
            Text.fontColor('#666666');
            // 标签
            Text.margin({ top: 4 });
        }, Text);
        // 标签
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 数值
            Text.create(count.toString());
            Text.debugLine("features/detail/src/main/ets/view/EmotionHeatmapView.ets(154:7)", "detail");
            // 数值
            Text.fontSize(10);
            // 数值
            Text.fontColor('#666666');
        }, Text);
        // 数值
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
