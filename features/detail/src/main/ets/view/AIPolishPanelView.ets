/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CommonConstants as BaseCommon } from 'base';
import { 
  PolishStyle, 
  PolishResult, 
  QualityAnalysisResult,
  AIPolishRequest,
  DEFAULT_POLISH_OPTIONS
} from 'base';
import { AIPolishService } from '../service/AIPolishService';
import { AIPolishStyleView } from './AIPolishStyleView';
import { AIPolishResultView } from './AIPolishResultView';
import { AIQualityAnalysisView } from './AIQualityAnalysisView';

/**
 * AI润色面板组件
 * 集成风格选择、润色、质量分析等完整功能
 */
@Component
export struct AIPolishPanelView {
  @State originalText: string = '';
  @State selectedStyle: PolishStyle = PolishStyle.LITERARY;
  @State isPolishing: boolean = false;
  @State isAnalyzing: boolean = false;
  @State showPolishResult: boolean = false;
  @State showQualityAnalysis: boolean = false;
  @State polishResult: PolishResult | null = null;
  @State qualityResult: QualityAnalysisResult | null = null;
  @State currentStep: number = 1; // 1: 输入, 2: 风格选择, 3: 结果
  
  private aiService: AIPolishService = AIPolishService.getInstance();
  
  // 完成回调
  onComplete?: (text: string) => void;
  // 取消回调
  onCancel?: () => void;

  build() {
    Column() {
      // 步骤指示器
      this.StepIndicator();
      
      // 根据当前步骤显示不同内容
      if (this.currentStep === 1) {
        this.InputStep();
      } else if (this.currentStep === 2) {
        this.StyleSelectionStep();
      } else if (this.currentStep === 3) {
        this.ResultStep();
      }
    }
    .width(BaseCommon.FULL_PERCENT)
    .backgroundColor($r('app.color.white'))
    .borderRadius(12);
  }

  @Builder
  StepIndicator() {
    Row() {
      ForEach([1, 2, 3], (step: number) => {
        Column() {
          // 步骤圆圈
          Column() {
            if (this.currentStep >= step) {
              Text(step.toString())
                .fontSize(14)
                .fontColor(Color.White)
                .fontWeight(FontWeight.Bold);
            } else {
              Text(step.toString())
                .fontSize(14)
                .fontColor('#999999');
            }
          }
          .width(32)
          .height(32)
          .backgroundColor(this.currentStep >= step ? '#2196F3' : '#E0E0E0')
          .borderRadius(16)
          .justifyContent(FlexAlign.Center);
          
          // 步骤标签
          Text(this.getStepLabel(step))
            .fontSize(10)
            .fontColor(this.currentStep >= step ? '#2196F3' : '#999999')
            .margin({ top: 4 });
        }
        .layoutWeight(1);
      }, (step: number) => step.toString());
    }
    .width(BaseCommon.FULL_PERCENT)
    .padding(16);
  }

  @Builder
  InputStep() {
    Column() {
      // 标题
      Row() {
        Text('✨ AI评论润色')
          .fontSize(18)
          .fontColor($r('app.color.font_color_normal'))
          .fontWeight(FontWeight.Bold);
      }
      .width(BaseCommon.FULL_PERCENT)
      .margin({ bottom: 16 });
      
      // 输入区域
      TextArea({ 
        placeholder: '输入你的评论草稿，AI将帮你润色优化...', 
        text: this.originalText 
      })
        .width(BaseCommon.FULL_PERCENT)
        .height(120)
        .borderRadius(8)
        .backgroundColor('#F5F5F5')
        .onChange((value: string) => {
          this.originalText = value;
        });
      
      // 字数统计
      Row() {
        Text(`${this.originalText.length}/500`)
          .fontSize(12)
          .fontColor('#999999');
      }
      .width(BaseCommon.FULL_PERCENT)
      .justifyContent(FlexAlign.End)
      .margin({ top: 8 });
      
      // 质量分析按钮
      Button(this.isAnalyzing ? '分析中...' : '质量分析')
        .width(BaseCommon.FULL_PERCENT)
        .height(40)
        .fontSize(14)
        .fontColor('#FF9800')
        .backgroundColor('#FFF3E0')
        .borderRadius(20)
        .margin({ top: 16 })
        .enabled(!this.isAnalyzing && this.originalText.length > 0)
        .onClick(() => this.analyzeQuality());
      
      // 质量分析结果
      if (this.showQualityAnalysis && this.qualityResult) {
        AIQualityAnalysisView({ 
          analysisResult: this.qualityResult 
        })
          .margin({ top: 16 });
      }
      
      // 下一步按钮
      Button('下一步：选择风格')
        .width(BaseCommon.FULL_PERCENT)
        .height(44)
        .fontSize(16)
        .fontColor(Color.White)
        .backgroundColor('#2196F3')
        .borderRadius(22)
        .margin({ top: 16 })
        .enabled(this.originalText.length > 0)
        .onClick(() => {
          this.currentStep = 2;
        });
      
      // 取消按钮
      Button('取消')
        .width(BaseCommon.FULL_PERCENT)
        .height(40)
        .fontSize(14)
        .fontColor('#666666')
        .backgroundColor('#F5F5F5')
        .borderRadius(20)
        .margin({ top: 8 })
        .onClick(() => {
          if (this.onCancel) {
            this.onCancel();
          }
        });
    }
    .width(BaseCommon.FULL_PERCENT)
    .padding(16);
  }

  @Builder
  StyleSelectionStep() {
    Column() {
      // 风格选择组件
      AIPolishStyleView({
        selectedStyle: this.selectedStyle,
        onStyleSelected: (style: PolishStyle) => {
          this.selectedStyle = style;
        }
      });
      
      // 原文预览
      Column() {
        Text('原文预览：')
          .fontSize(12)
          .fontColor('#666666')
          .width(BaseCommon.FULL_PERCENT)
          .margin({ bottom: 8 });
        
        Text(this.originalText)
          .fontSize(14)
          .fontColor($r('app.color.font_color_normal'))
          .width(BaseCommon.FULL_PERCENT)
          .padding(8)
          .backgroundColor('#F5F5F5')
          .borderRadius(8);
      }
      .width(BaseCommon.FULL_PERCENT)
      .margin({ top: 16 });
      
      // 开始润色按钮
      Button(this.isPolishing ? '润色中...' : '开始AI润色')
        .width(BaseCommon.FULL_PERCENT)
        .height(44)
        .fontSize(16)
        .fontColor(Color.White)
        .backgroundColor(this.isPolishing ? '#BDBDBD' : '#4CAF50')
        .borderRadius(22)
        .margin({ top: 16 })
        .enabled(!this.isPolishing)
        .onClick(() => this.startPolish());
      
      // 返回按钮
      Button('返回上一步')
        .width(BaseCommon.FULL_PERCENT)
        .height(40)
        .fontSize(14)
        .fontColor('#666666')
        .backgroundColor('#F5F5F5')
        .borderRadius(20)
        .margin({ top: 8 })
        .onClick(() => {
          this.currentStep = 1;
        });
    }
    .width(BaseCommon.FULL_PERCENT)
    .padding(16);
  }

  @Builder
  ResultStep() {
    Column() {
      // 润色结果展示
      if (this.polishResult) {
        AIPolishResultView({
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
        });
      }
    }
    .width(BaseCommon.FULL_PERCENT)
    .padding(16);
  }

  // 获取步骤标签
  getStepLabel(step: number): string {
    const labels = ['输入评论', '选择风格', '润色结果'];
    return labels[step - 1] || '';
  }

  // 分析质量
  async analyzeQuality() {
    if (this.originalText.length === 0) return;
    
    this.isAnalyzing = true;
    
    try {
      const result = await this.aiService.analyzeQuality(this.originalText);
      this.qualityResult = result;
      this.showQualityAnalysis = true;
    } catch (error) {
      console.error('质量分析失败:', error);
    } finally {
      this.isAnalyzing = false;
    }
  }

  // 开始润色
  async startPolish() {
    if (this.originalText.length === 0) return;
    
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
      } else {
        console.error('润色失败:', response.error?.message);
      }
    } catch (error) {
      console.error('润色失败:', error);
    } finally {
      this.isPolishing = false;
    }
  }
}
