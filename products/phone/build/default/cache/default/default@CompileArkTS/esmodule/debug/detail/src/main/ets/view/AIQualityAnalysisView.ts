if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface AIQualityAnalysisView_Params {
    analysisResult?: QualityAnalysisResult;
    expandedIssue?: string;
    // 优化建议回调
    onSuggestionClick?: (suggestion: string) => void;
}
import { CommonConstants as BaseCommon } from "@normalized:N&&&base/Index&1.0.0";
import { IssueType, IssueSeverity, ReadabilityLevel } from "@normalized:N&&&base/Index&1.0.0";
import type { QualityAnalysisResult, QualityIssue, SimilarComment } from "@normalized:N&&&base/Index&1.0.0";
export class AIQualityAnalysisView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__analysisResult = new SynchedPropertyObjectOneWayPU(params.analysisResult, this, "analysisResult");
        this.__expandedIssue = new ObservedPropertySimplePU('', this, "expandedIssue");
        this.onSuggestionClick = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: AIQualityAnalysisView_Params) {
        if (params.expandedIssue !== undefined) {
            this.expandedIssue = params.expandedIssue;
        }
        if (params.onSuggestionClick !== undefined) {
            this.onSuggestionClick = params.onSuggestionClick;
        }
    }
    updateStateVars(params: AIQualityAnalysisView_Params) {
        this.__analysisResult.reset(params.analysisResult);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__analysisResult.purgeDependencyOnElmtId(rmElmtId);
        this.__expandedIssue.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__analysisResult.aboutToBeDeleted();
        this.__expandedIssue.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __analysisResult: SynchedPropertySimpleOneWayPU<QualityAnalysisResult>;
    get analysisResult() {
        return this.__analysisResult.get();
    }
    set analysisResult(newValue: QualityAnalysisResult) {
        this.__analysisResult.set(newValue);
    }
    private __expandedIssue: ObservedPropertySimplePU<string>; // 展开的问题ID
    get expandedIssue() {
        return this.__expandedIssue.get();
    }
    set expandedIssue(newValue: string) {
        this.__expandedIssue.set(newValue);
    }
    // 优化建议回调
    private onSuggestionClick?: (suggestion: string) => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
            Column.padding(16);
            Column.backgroundColor({ "id": 67108986, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Column.borderRadius(12);
        }, Column);
        // 质量评分概览
        this.QualityScoreView.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 质量问题列表
            if (this.analysisResult.issues.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.IssuesListView.bind(this)();
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
            if (this.analysisResult.suggestions.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.SuggestionsView.bind(this)();
                });
            }
            // 相似评论检测
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 相似评论检测
            if (this.analysisResult.similarComments.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.SimilarCommentsView.bind(this)();
                });
            }
            // 可读性分析
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        // 可读性分析
        this.ReadabilityView.bind(this)();
        Column.pop();
    }
    QualityScoreView(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('📊 质量分析');
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
            // 质量等级标签
            Text.create(this.getQualityLabel());
            // 质量等级标签
            Text.fontSize(12);
            // 质量等级标签
            Text.fontColor(Color.White);
            // 质量等级标签
            Text.backgroundColor(this.getQualityColor());
            // 质量等级标签
            Text.borderRadius(12);
            // 质量等级标签
            Text.padding({ left: 12, right: 12, top: 4, bottom: 4 });
        }, Text);
        // 质量等级标签
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 质量分数进度条
            Row.create();
            // 质量分数进度条
            Row.width(BaseCommon.FULL_PERCENT);
            // 质量分数进度条
            Row.alignItems(VerticalAlign.Center);
            // 质量分数进度条
            Row.margin({ top: 16 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.analysisResult.qualityScore}分`);
            Text.fontSize(24);
            Text.fontColor(this.getQualityColor());
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
            Column.layoutWeight(1);
            Column.backgroundColor('#E0E0E0');
            Column.borderRadius(4);
            Column.margin({ left: 12 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(`${this.analysisResult.qualityScore}%`);
            Row.height(8);
            Row.backgroundColor(this.getQualityColor());
            Row.borderRadius(4);
        }, Row);
        Row.pop();
        Column.pop();
        // 质量分数进度条
        Row.pop();
        Column.pop();
    }
    IssuesListView(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
            Row.margin({ top: 16, bottom: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`⚠️ 发现 ${this.analysisResult.issues.length} 个问题`);
            Text.fontSize(14);
            Text.fontColor('#FF5722');
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const issue = _item;
                this.IssueItem.bind(this)(issue, index);
            };
            this.forEachUpdateFunction(elmtId, this.analysisResult.issues, forEachItemGenFunction, (issue: QualityIssue, index: number) => index.toString(), true, true);
        }, ForEach);
        ForEach.pop();
        Column.pop();
    }
    IssueItem(issue: QualityIssue, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
            Column.padding(8);
            Column.backgroundColor('#FFF3E0');
            Column.borderRadius(8);
            Column.margin({ top: 8 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 问题类型图标
            Text.create(this.getIssueIcon(issue.type));
            // 问题类型图标
            Text.fontSize(16);
        }, Text);
        // 问题类型图标
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 问题类型名称
            Text.create(this.getIssueTypeName(issue.type));
            // 问题类型名称
            Text.fontSize(12);
            // 问题类型名称
            Text.fontColor({ "id": 67109274, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            // 问题类型名称
            Text.fontWeight(FontWeight.Bold);
            // 问题类型名称
            Text.margin({ left: 8 });
        }, Text);
        // 问题类型名称
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 严重程度标签
            Text.create(this.getSeverityLabel(issue.severity));
            // 严重程度标签
            Text.fontSize(10);
            // 严重程度标签
            Text.fontColor(Color.White);
            // 严重程度标签
            Text.backgroundColor(this.getSeverityColor(issue.severity));
            // 严重程度标签
            Text.borderRadius(8);
            // 严重程度标签
            Text.padding({ left: 8, right: 8, top: 2, bottom: 2 });
        }, Text);
        // 严重程度标签
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 展开/收起按钮
            Text.create(this.expandedIssue === index.toString() ? '▲' : '▼');
            // 展开/收起按钮
            Text.fontSize(10);
            // 展开/收起按钮
            Text.fontColor('#999999');
            // 展开/收起按钮
            Text.margin({ left: 8 });
            // 展开/收起按钮
            Text.onClick(() => {
                this.expandedIssue = this.expandedIssue === index.toString() ? '' : index.toString();
            });
        }, Text);
        // 展开/收起按钮
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 问题描述
            if (this.expandedIssue === index.toString()) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(BaseCommon.FULL_PERCENT);
                        Column.padding(8);
                        Column.backgroundColor('#F5F5F5');
                        Column.borderRadius(8);
                        Column.margin({ top: 8 });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(issue.description);
                        Text.fontSize(12);
                        Text.fontColor('#666666');
                        Text.width(BaseCommon.FULL_PERCENT);
                        Text.margin({ top: 8 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 修复建议
                        Row.create();
                        // 修复建议
                        Row.width(BaseCommon.FULL_PERCENT);
                        // 修复建议
                        Row.margin({ top: 8 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('💡 建议：');
                        Text.fontSize(12);
                        Text.fontColor('#2196F3');
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(issue.suggestion);
                        Text.fontSize(12);
                        Text.fontColor('#666666');
                        Text.layoutWeight(1);
                    }, Text);
                    Text.pop();
                    // 修复建议
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
    SuggestionsView(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
            Row.margin({ top: 16, bottom: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('💡 优化建议');
            Text.fontSize(14);
            Text.fontColor('#4CAF50');
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const suggestion = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width(BaseCommon.FULL_PERCENT);
                    Row.padding(8);
                    Row.backgroundColor('#E8F5E9');
                    Row.borderRadius(8);
                    Row.margin({ top: 4 });
                    Row.onClick(() => {
                        if (this.onSuggestionClick) {
                            this.onSuggestionClick(suggestion);
                        }
                    });
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
            this.forEachUpdateFunction(elmtId, this.analysisResult.suggestions, forEachItemGenFunction, (suggestion: string, index: number) => index.toString(), true, true);
        }, ForEach);
        ForEach.pop();
        Column.pop();
    }
    SimilarCommentsView(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
            Row.margin({ top: 16, bottom: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('🔍 相似评论检测');
            Text.fontSize(14);
            Text.fontColor('#FF9800');
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`发现 ${this.analysisResult.similarComments.length} 条`);
            Text.fontSize(12);
            Text.fontColor('#999999');
            Text.margin({ left: 8 });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const comment = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width(BaseCommon.FULL_PERCENT);
                    Row.padding(8);
                    Row.backgroundColor('#FFF8E1');
                    Row.borderRadius(8);
                    Row.margin({ top: 4 });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.layoutWeight(1);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(comment.content);
                    Text.fontSize(12);
                    Text.fontColor('#666666');
                    Text.maxLines(2);
                    Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.margin({ top: 4 });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(`作者：${comment.author}`);
                    Text.fontSize(10);
                    Text.fontColor('#999999');
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(`相似度：${Math.round(comment.similarity * 100)}%`);
                    Text.fontSize(10);
                    Text.fontColor('#FF9800');
                    Text.margin({ left: 8 });
                }, Text);
                Text.pop();
                Row.pop();
                Column.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, this.analysisResult.similarComments, forEachItemGenFunction, (comment: SimilarComment, index: number) => index.toString(), true, true);
        }, ForEach);
        ForEach.pop();
        Column.pop();
    }
    ReadabilityView(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
            Row.margin({ top: 16, bottom: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('📖 可读性分析');
            Text.fontSize(14);
            Text.fontColor('#9C27B0');
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 可读性等级
            Column.create();
            // 可读性等级
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.getReadabilityLabel(this.analysisResult.readability.level));
            Text.fontSize(14);
            Text.fontColor('#9C27B0');
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('可读性等级');
            Text.fontSize(10);
            Text.fontColor('#999999');
            Text.margin({ top: 4 });
        }, Text);
        Text.pop();
        // 可读性等级
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 平均句子长度
            Column.create();
            // 平均句子长度
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.analysisResult.readability.avgSentenceLength}`);
            Text.fontSize(14);
            Text.fontColor('#9C27B0');
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('平均句长');
            Text.fontSize(10);
            Text.fontColor('#999999');
            Text.margin({ top: 4 });
        }, Text);
        Text.pop();
        // 平均句子长度
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 复杂词汇数
            Column.create();
            // 复杂词汇数
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.analysisResult.readability.complexWords}`);
            Text.fontSize(14);
            Text.fontColor('#9C27B0');
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('复杂词汇');
            Text.fontSize(10);
            Text.fontColor('#999999');
            Text.margin({ top: 4 });
        }, Text);
        Text.pop();
        // 复杂词汇数
        Column.pop();
        Row.pop();
        Column.pop();
    }
    // 获取质量等级标签
    getQualityLabel(): string {
        const score = this.analysisResult.qualityScore;
        if (score >= 80)
            return '优秀';
        if (score >= 60)
            return '良好';
        if (score >= 40)
            return '一般';
        return '需改进';
    }
    // 获取质量颜色
    getQualityColor(): string {
        const score = this.analysisResult.qualityScore;
        if (score >= 80)
            return '#4CAF50';
        if (score >= 60)
            return '#2196F3';
        if (score >= 40)
            return '#FF9800';
        return '#F44336';
    }
    // 获取问题类型图标
    getIssueIcon(type: IssueType): string {
        const iconMap = new Map<IssueType, string>();
        iconMap.set(IssueType.DUPLICATE, '🔄');
        iconMap.set(IssueType.TOO_SHORT, '📏');
        iconMap.set(IssueType.SPAM, '🚫');
        iconMap.set(IssueType.OFFENSIVE, '⚠️');
        iconMap.set(IssueType.MEANINGLESS, '❓');
        iconMap.set(IssueType.GRAMMAR, '✍️');
        iconMap.set(IssueType.EMOTIONAL_EXTREME, '😤');
        iconMap.set(IssueType.LACK_SUBSTANCE, '📝');
        return iconMap.get(type) || '⚠️';
    }
    // 获取问题类型名称
    getIssueTypeName(type: IssueType): string {
        const nameMap = new Map<IssueType, string>();
        nameMap.set(IssueType.DUPLICATE, '重复内容');
        nameMap.set(IssueType.TOO_SHORT, '内容过短');
        nameMap.set(IssueType.SPAM, '垃圾信息');
        nameMap.set(IssueType.OFFENSIVE, '冒犯性内容');
        nameMap.set(IssueType.MEANINGLESS, '无意义内容');
        nameMap.set(IssueType.GRAMMAR, '语法错误');
        nameMap.set(IssueType.EMOTIONAL_EXTREME, '情绪过激');
        nameMap.set(IssueType.LACK_SUBSTANCE, '缺乏实质');
        return nameMap.get(type) || '未知问题';
    }
    // 获取严重程度标签
    getSeverityLabel(severity: IssueSeverity): string {
        const labelMap = new Map<IssueSeverity, string>();
        labelMap.set(IssueSeverity.LOW, '轻微');
        labelMap.set(IssueSeverity.MEDIUM, '中等');
        labelMap.set(IssueSeverity.HIGH, '严重');
        labelMap.set(IssueSeverity.CRITICAL, '严重');
        return labelMap.get(severity) || '未知';
    }
    // 获取严重程度颜色
    getSeverityColor(severity: IssueSeverity): string {
        const colorMap = new Map<IssueSeverity, string>();
        colorMap.set(IssueSeverity.LOW, '#FF9800');
        colorMap.set(IssueSeverity.MEDIUM, '#FF5722');
        colorMap.set(IssueSeverity.HIGH, '#F44336');
        colorMap.set(IssueSeverity.CRITICAL, '#D32F2F');
        return colorMap.get(severity) || '#999999';
    }
    // 获取可读性等级标签
    getReadabilityLabel(level: ReadabilityLevel): string {
        const labelMap = new Map<ReadabilityLevel, string>();
        labelMap.set(ReadabilityLevel.VERY_EASY, '非常易读');
        labelMap.set(ReadabilityLevel.EASY, '易读');
        labelMap.set(ReadabilityLevel.MEDIUM, '中等');
        labelMap.set(ReadabilityLevel.HARD, '较难');
        labelMap.set(ReadabilityLevel.VERY_HARD, '很难');
        return labelMap.get(level) || '未知';
    }
    rerender() {
        this.updateDirtyElements();
    }
}
