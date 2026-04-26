if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface AIPolishPanelView_Params {
    originalText?: string;
    selectedStyle?: PolishStyle;
    isPolishing?: boolean;
    isAnalyzing?: boolean;
    showPolishResult?: boolean;
    showQualityAnalysis?: boolean;
    polishResult?: PolishResult | null;
    qualityResult?: QualityAnalysisResult | null;
    currentStep?: number;
    aiService?: AIPolishService;
    // 完成回调
    onComplete?: (text: string) => void;
    // 取消回调
    onCancel?: () => void;
}
import { CommonConstants as BaseCommon } from "@normalized:N&&&base/Index&1.0.0";
import { PolishStyle, DEFAULT_POLISH_OPTIONS } from "@normalized:N&&&base/Index&1.0.0";
import type { PolishResult, QualityAnalysisResult, AIPolishRequest } from "@normalized:N&&&base/Index&1.0.0";
import { AIPolishService } from "@normalized:N&&&detail/src/main/ets/service/AIPolishService&1.0.0";
import { AIPolishStyleView } from "@normalized:N&&&detail/src/main/ets/view/AIPolishStyleView&1.0.0";
import { AIPolishResultView } from "@normalized:N&&&detail/src/main/ets/view/AIPolishResultView&1.0.0";
import { AIQualityAnalysisView } from "@normalized:N&&&detail/src/main/ets/view/AIQualityAnalysisView&1.0.0";
export class AIPolishPanelView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__originalText = new ObservedPropertySimplePU('', this, "originalText");
        this.__selectedStyle = new ObservedPropertySimplePU(PolishStyle.LITERARY, this, "selectedStyle");
        this.__isPolishing = new ObservedPropertySimplePU(false, this, "isPolishing");
        this.__isAnalyzing = new ObservedPropertySimplePU(false, this, "isAnalyzing");
        this.__showPolishResult = new ObservedPropertySimplePU(false, this, "showPolishResult");
        this.__showQualityAnalysis = new ObservedPropertySimplePU(false, this, "showQualityAnalysis");
        this.__polishResult = new ObservedPropertyObjectPU(null, this, "polishResult");
        this.__qualityResult = new ObservedPropertyObjectPU(null, this, "qualityResult");
        this.__currentStep = new ObservedPropertySimplePU(1, this, "currentStep");
        this.aiService = AIPolishService.getInstance();
        this.onComplete = undefined;
        this.onCancel = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: AIPolishPanelView_Params) {
        if (params.originalText !== undefined) {
            this.originalText = params.originalText;
        }
        if (params.selectedStyle !== undefined) {
            this.selectedStyle = params.selectedStyle;
        }
        if (params.isPolishing !== undefined) {
            this.isPolishing = params.isPolishing;
        }
        if (params.isAnalyzing !== undefined) {
            this.isAnalyzing = params.isAnalyzing;
        }
        if (params.showPolishResult !== undefined) {
            this.showPolishResult = params.showPolishResult;
        }
        if (params.showQualityAnalysis !== undefined) {
            this.showQualityAnalysis = params.showQualityAnalysis;
        }
        if (params.polishResult !== undefined) {
            this.polishResult = params.polishResult;
        }
        if (params.qualityResult !== undefined) {
            this.qualityResult = params.qualityResult;
        }
        if (params.currentStep !== undefined) {
            this.currentStep = params.currentStep;
        }
        if (params.aiService !== undefined) {
            this.aiService = params.aiService;
        }
        if (params.onComplete !== undefined) {
            this.onComplete = params.onComplete;
        }
        if (params.onCancel !== undefined) {
            this.onCancel = params.onCancel;
        }
    }
    updateStateVars(params: AIPolishPanelView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__originalText.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedStyle.purgeDependencyOnElmtId(rmElmtId);
        this.__isPolishing.purgeDependencyOnElmtId(rmElmtId);
        this.__isAnalyzing.purgeDependencyOnElmtId(rmElmtId);
        this.__showPolishResult.purgeDependencyOnElmtId(rmElmtId);
        this.__showQualityAnalysis.purgeDependencyOnElmtId(rmElmtId);
        this.__polishResult.purgeDependencyOnElmtId(rmElmtId);
        this.__qualityResult.purgeDependencyOnElmtId(rmElmtId);
        this.__currentStep.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__originalText.aboutToBeDeleted();
        this.__selectedStyle.aboutToBeDeleted();
        this.__isPolishing.aboutToBeDeleted();
        this.__isAnalyzing.aboutToBeDeleted();
        this.__showPolishResult.aboutToBeDeleted();
        this.__showQualityAnalysis.aboutToBeDeleted();
        this.__polishResult.aboutToBeDeleted();
        this.__qualityResult.aboutToBeDeleted();
        this.__currentStep.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __originalText: ObservedPropertySimplePU<string>;
    get originalText() {
        return this.__originalText.get();
    }
    set originalText(newValue: string) {
        this.__originalText.set(newValue);
    }
    private __selectedStyle: ObservedPropertySimplePU<PolishStyle>;
    get selectedStyle() {
        return this.__selectedStyle.get();
    }
    set selectedStyle(newValue: PolishStyle) {
        this.__selectedStyle.set(newValue);
    }
    private __isPolishing: ObservedPropertySimplePU<boolean>;
    get isPolishing() {
        return this.__isPolishing.get();
    }
    set isPolishing(newValue: boolean) {
        this.__isPolishing.set(newValue);
    }
    private __isAnalyzing: ObservedPropertySimplePU<boolean>;
    get isAnalyzing() {
        return this.__isAnalyzing.get();
    }
    set isAnalyzing(newValue: boolean) {
        this.__isAnalyzing.set(newValue);
    }
    private __showPolishResult: ObservedPropertySimplePU<boolean>;
    get showPolishResult() {
        return this.__showPolishResult.get();
    }
    set showPolishResult(newValue: boolean) {
        this.__showPolishResult.set(newValue);
    }
    private __showQualityAnalysis: ObservedPropertySimplePU<boolean>;
    get showQualityAnalysis() {
        return this.__showQualityAnalysis.get();
    }
    set showQualityAnalysis(newValue: boolean) {
        this.__showQualityAnalysis.set(newValue);
    }
    private __polishResult: ObservedPropertyObjectPU<PolishResult | null>;
    get polishResult() {
        return this.__polishResult.get();
    }
    set polishResult(newValue: PolishResult | null) {
        this.__polishResult.set(newValue);
    }
    private __qualityResult: ObservedPropertyObjectPU<QualityAnalysisResult | null>;
    get qualityResult() {
        return this.__qualityResult.get();
    }
    set qualityResult(newValue: QualityAnalysisResult | null) {
        this.__qualityResult.set(newValue);
    }
    private __currentStep: ObservedPropertySimplePU<number>; // 1: 输入, 2: 风格选择, 3: 结果
    get currentStep() {
        return this.__currentStep.get();
    }
    set currentStep(newValue: number) {
        this.__currentStep.set(newValue);
    }
    private aiService: AIPolishService;
    // 完成回调
    private onComplete?: (text: string) => void;
    // 取消回调
    private onCancel?: () => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
            Column.backgroundColor({ "id": 67108986, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Column.borderRadius(12);
        }, Column);
        // 步骤指示器
        this.StepIndicator.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 根据当前步骤显示不同内容
            if (this.currentStep === 1) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.InputStep.bind(this)();
                });
            }
            else if (this.currentStep === 2) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.StyleSelectionStep.bind(this)();
                });
            }
            else if (this.currentStep === 3) {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.ResultStep.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(3, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    StepIndicator(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
            Row.padding(16);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const step = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.layoutWeight(1);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // 步骤圆圈
                    Column.create();
                    // 步骤圆圈
                    Column.width(32);
                    // 步骤圆圈
                    Column.height(32);
                    // 步骤圆圈
                    Column.backgroundColor(this.currentStep >= step ? '#2196F3' : '#E0E0E0');
                    // 步骤圆圈
                    Column.borderRadius(16);
                    // 步骤圆圈
                    Column.justifyContent(FlexAlign.Center);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (this.currentStep >= step) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create(step.toString());
                                Text.fontSize(14);
                                Text.fontColor(Color.White);
                                Text.fontWeight(FontWeight.Bold);
                            }, Text);
                            Text.pop();
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create(step.toString());
                                Text.fontSize(14);
                                Text.fontColor('#999999');
                            }, Text);
                            Text.pop();
                        });
                    }
                }, If);
                If.pop();
                // 步骤圆圈
                Column.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // 步骤标签
                    Text.create(this.getStepLabel(step));
                    // 步骤标签
                    Text.fontSize(10);
                    // 步骤标签
                    Text.fontColor(this.currentStep >= step ? '#2196F3' : '#999999');
                    // 步骤标签
                    Text.margin({ top: 4 });
                }, Text);
                // 步骤标签
                Text.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, [1, 2, 3], forEachItemGenFunction, (step: number) => step.toString(), false, false);
        }, ForEach);
        ForEach.pop();
        Row.pop();
    }
    InputStep(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
            Column.padding(16);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 标题
            Row.create();
            // 标题
            Row.width(BaseCommon.FULL_PERCENT);
            // 标题
            Row.margin({ bottom: 16 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('✨ AI评论润色');
            Text.fontSize(18);
            Text.fontColor({ "id": 67109274, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        // 标题
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 输入区域
            TextArea.create({
                placeholder: '输入你的评论草稿，AI将帮你润色优化...',
                text: this.originalText
            });
            // 输入区域
            TextArea.width(BaseCommon.FULL_PERCENT);
            // 输入区域
            TextArea.height(120);
            // 输入区域
            TextArea.borderRadius(8);
            // 输入区域
            TextArea.backgroundColor('#F5F5F5');
            // 输入区域
            TextArea.onChange((value: string) => {
                this.originalText = value;
            });
        }, TextArea);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 字数统计
            Row.create();
            // 字数统计
            Row.width(BaseCommon.FULL_PERCENT);
            // 字数统计
            Row.justifyContent(FlexAlign.End);
            // 字数统计
            Row.margin({ top: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.originalText.length}/500`);
            Text.fontSize(12);
            Text.fontColor('#999999');
        }, Text);
        Text.pop();
        // 字数统计
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 质量分析按钮
            Button.createWithLabel(this.isAnalyzing ? '分析中...' : '质量分析');
            // 质量分析按钮
            Button.width(BaseCommon.FULL_PERCENT);
            // 质量分析按钮
            Button.height(40);
            // 质量分析按钮
            Button.fontSize(14);
            // 质量分析按钮
            Button.fontColor('#FF9800');
            // 质量分析按钮
            Button.backgroundColor('#FFF3E0');
            // 质量分析按钮
            Button.borderRadius(20);
            // 质量分析按钮
            Button.margin({ top: 16 });
            // 质量分析按钮
            Button.enabled(!this.isAnalyzing && this.originalText.length > 0);
            // 质量分析按钮
            Button.onClick(() => this.analyzeQuality());
        }, Button);
        // 质量分析按钮
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 质量分析结果
            if (this.showQualityAnalysis && this.qualityResult) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        __Common__.create();
                        __Common__.margin({ top: 16 });
                    }, __Common__);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new AIQualityAnalysisView(this, {
                                    analysisResult: this.qualityResult
                                }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/AIPolishPanelView.ets", line: 158, col: 9 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        analysisResult: this.qualityResult
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    analysisResult: this.qualityResult
                                });
                            }
                        }, { name: "AIQualityAnalysisView" });
                    }
                    __Common__.pop();
                });
            }
            // 下一步按钮
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 下一步按钮
            Button.createWithLabel('下一步：选择风格');
            // 下一步按钮
            Button.width(BaseCommon.FULL_PERCENT);
            // 下一步按钮
            Button.height(44);
            // 下一步按钮
            Button.fontSize(16);
            // 下一步按钮
            Button.fontColor(Color.White);
            // 下一步按钮
            Button.backgroundColor('#2196F3');
            // 下一步按钮
            Button.borderRadius(22);
            // 下一步按钮
            Button.margin({ top: 16 });
            // 下一步按钮
            Button.enabled(this.originalText.length > 0);
            // 下一步按钮
            Button.onClick(() => {
                this.currentStep = 2;
            });
        }, Button);
        // 下一步按钮
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 取消按钮
            Button.createWithLabel('取消');
            // 取消按钮
            Button.width(BaseCommon.FULL_PERCENT);
            // 取消按钮
            Button.height(40);
            // 取消按钮
            Button.fontSize(14);
            // 取消按钮
            Button.fontColor('#666666');
            // 取消按钮
            Button.backgroundColor('#F5F5F5');
            // 取消按钮
            Button.borderRadius(20);
            // 取消按钮
            Button.margin({ top: 8 });
            // 取消按钮
            Button.onClick(() => {
                if (this.onCancel) {
                    this.onCancel();
                }
            });
        }, Button);
        // 取消按钮
        Button.pop();
        Column.pop();
    }
    StyleSelectionStep(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
            Column.padding(16);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // 风格选择组件
                    AIPolishStyleView(this, {
                        selectedStyle: this.selectedStyle,
                        onStyleSelected: (style: PolishStyle) => {
                            this.selectedStyle = style;
                        }
                    }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/AIPolishPanelView.ets", line: 201, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            selectedStyle: this.selectedStyle,
                            onStyleSelected: (style: PolishStyle) => {
                                this.selectedStyle = style;
                            }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "AIPolishStyleView" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 原文预览
            Column.create();
            // 原文预览
            Column.width(BaseCommon.FULL_PERCENT);
            // 原文预览
            Column.margin({ top: 16 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('原文预览：');
            Text.fontSize(12);
            Text.fontColor('#666666');
            Text.width(BaseCommon.FULL_PERCENT);
            Text.margin({ bottom: 8 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.originalText);
            Text.fontSize(14);
            Text.fontColor({ "id": 67109274, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.width(BaseCommon.FULL_PERCENT);
            Text.padding(8);
            Text.backgroundColor('#F5F5F5');
            Text.borderRadius(8);
        }, Text);
        Text.pop();
        // 原文预览
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 开始润色按钮
            Button.createWithLabel(this.isPolishing ? '润色中...' : '开始AI润色');
            // 开始润色按钮
            Button.width(BaseCommon.FULL_PERCENT);
            // 开始润色按钮
            Button.height(44);
            // 开始润色按钮
            Button.fontSize(16);
            // 开始润色按钮
            Button.fontColor(Color.White);
            // 开始润色按钮
            Button.backgroundColor(this.isPolishing ? '#BDBDBD' : '#4CAF50');
            // 开始润色按钮
            Button.borderRadius(22);
            // 开始润色按钮
            Button.margin({ top: 16 });
            // 开始润色按钮
            Button.enabled(!this.isPolishing);
            // 开始润色按钮
            Button.onClick(() => this.startPolish());
        }, Button);
        // 开始润色按钮
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 返回按钮
            Button.createWithLabel('返回上一步');
            // 返回按钮
            Button.width(BaseCommon.FULL_PERCENT);
            // 返回按钮
            Button.height(40);
            // 返回按钮
            Button.fontSize(14);
            // 返回按钮
            Button.fontColor('#666666');
            // 返回按钮
            Button.backgroundColor('#F5F5F5');
            // 返回按钮
            Button.borderRadius(20);
            // 返回按钮
            Button.margin({ top: 8 });
            // 返回按钮
            Button.onClick(() => {
                this.currentStep = 1;
            });
        }, Button);
        // 返回按钮
        Button.pop();
        Column.pop();
    }
    ResultStep(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
            Column.padding(16);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 润色结果展示
            if (this.polishResult) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new AIPolishResultView(this, {
                                    polishResult: this.polishResult,
                                    onUsePolishedText: (text: string) => {
                                        if (this.onComplete) {
                                            this.onComplete(text);
                                        }
                                    },
                                    onRePolish: () => {
                                        this.currentStep = 2;
                                        this.showPolishResult = false;
                                    },
                                    onCancel: () => {
                                        if (this.onCancel) {
                                            this.onCancel();
                                        }
                                    }
                                }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/AIPolishPanelView.ets", line: 261, col: 9 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        polishResult: this.polishResult,
                                        onUsePolishedText: (text: string) => {
                                            if (this.onComplete) {
                                                this.onComplete(text);
                                            }
                                        },
                                        onRePolish: () => {
                                            this.currentStep = 2;
                                            this.showPolishResult = false;
                                        },
                                        onCancel: () => {
                                            if (this.onCancel) {
                                                this.onCancel();
                                            }
                                        }
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    polishResult: this.polishResult
                                });
                            }
                        }, { name: "AIPolishResultView" });
                    }
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
    // 获取步骤标签
    getStepLabel(step: number): string {
        const labels = ['输入评论', '选择风格', '润色结果'];
        return labels[step - 1] || '';
    }
    // 分析质量
    async analyzeQuality() {
        if (this.originalText.length === 0)
            return;
        this.isAnalyzing = true;
        try {
            const result = await this.aiService.analyzeQuality(this.originalText);
            this.qualityResult = result;
            this.showQualityAnalysis = true;
        }
        catch (error) {
            console.error('质量分析失败:', error);
        }
        finally {
            this.isAnalyzing = false;
        }
    }
    // 开始润色
    async startPolish() {
        if (this.originalText.length === 0)
            return;
        this.isPolishing = true;
        try {
            const request: AIPolishRequest = {
                text: this.originalText,
                style: this.selectedStyle,
                options: DEFAULT_POLISH_OPTIONS
            };
            const response = await this.aiService.polishComment(request);
            if (response.success && response.result) {
                this.polishResult = response.result;
                this.showPolishResult = true;
                this.currentStep = 3;
            }
            else {
                console.error('润色失败:', response.error?.message);
            }
        }
        catch (error) {
            console.error('润色失败:', error);
        }
        finally {
            this.isPolishing = false;
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}
