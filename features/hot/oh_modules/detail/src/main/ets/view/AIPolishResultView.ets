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
  PolishResult, 
  PolishStyle,
  SentimentLabel,
  POLISH_STYLE_CONFIGS 
} from 'base';

/**
 * AI润色结果展示组件
 * 展示润色前后的对比，提供使用和编辑选项
 */
@Component
export struct AIPolishResultView {
  @Prop polishResult: PolishResult;
  @State showComparison: boolean = true;
  @State selectedText: string = ''; // 选中的文本（原始或润色后）
  
  // 使用润色结果回调
  onUsePolishedText?: (text: string) => void;
  // 重新润色回调
  onRePolish?: () => void;
  // 取消回调
  onCancel?: () => void;

  aboutToAppear() {
    this.selectedText = this.polishResult.polishedText;
  }

  build() {
    Column() {
      // 标题栏
      this.TitleBar();
      
      // 对比视图
      if (this.showComparison) {
        this.ComparisonView();
      }
      
      // 润色结果详情
      this.ResultDetailView();
      
      // 操作按钮
      this.ActionButtons();
    }
    .width(BaseCommon.FULL_PERCENT)
    .padding(16)
    .backgroundColor($r('app.color.white'))
    .borderRadius(12);
  }

  @Builder
  TitleBar() {
    Row() {
      Text('✨ AI润色结果')
        .fontSize(16)
        .fontColor($r('app.color.font_color_normal'))
        .fontWeight(FontWeight.Bold);
      
      Blank();
      
      // 风格标签
      Text(this.getStyleName())
        .fontSize(12)
        .fontColor(Color.White)
        .backgroundColor(this.getStyleColor())
        .borderRadius(12)
        .padding({ left: 12, right: 12, top: 4, bottom: 4 });
      
      // 置信度
      Text(`置信度 ${Math.round(this.polishResult.confidence * 100)}%`)
        .fontSize(12)
        .fontColor('#999999')
        .margin({ left: 8 });
    }
    .width(BaseCommon.FULL_PERCENT)
    .margin({ bottom: 16 });
  }

  @Builder
  ComparisonView() {
    Column() {
      // 切换按钮
      Row() {
        Button('原始文本')
          .fontSize(12)
          .fontColor(this.selectedText === this.polishResult.originalText ? Color.White : '#666666')
          .backgroundColor(this.selectedText === this.polishResult.originalText ? '#999999' : '#F5F5F5')
          .borderRadius(16)
          .height(32)
          .onClick(() => {
            this.selectedText = this.polishResult.originalText;
          });
        
        Button('润色后')
          .fontSize(12)
          .fontColor(this.selectedText === this.polishResult.polishedText ? Color.White : '#666666')
          .backgroundColor(this.selectedText === this.polishResult.polishedText ? '#2196F3' : '#F5F5F5')
          .borderRadius(16)
          .height(32)
          .margin({ left: 8 })
          .onClick(() => {
            this.selectedText = this.polishResult.polishedText;
          });
        
        Blank();
        
        Text(this.showComparison ? '隐藏对比' : '显示对比')
          .fontSize(12)
          .fontColor('#2196F3')
          .onClick(() => {
            this.showComparison = !this.showComparison;
          });
      }
      .width(BaseCommon.FULL_PERCENT)
      .margin({ bottom: 12 });
      
      // 文本展示区域
      Column() {
        Text(this.selectedText)
          .fontSize(14)
          .fontColor($r('app.color.font_color_normal'))
          .lineHeight(22)
          .width(BaseCommon.FULL_PERCENT);
      }
      .width(BaseCommon.FULL_PERCENT)
      .padding(12)
      .backgroundColor(this.selectedText === this.polishResult.polishedText ? '#E3F2FD' : '#F5F5F5')
      .borderRadius(8);
    }
    .width(BaseCommon.FULL_PERCENT)
    .margin({ bottom: 16 });
  }

  @Builder
  ResultDetailView() {
    Column() {
      // 情感分析
      this.SentimentView();
      
      // 关键词提取
      if (this.polishResult.keywords.length > 0) {
        this.KeywordsView();
      }
      
      // 优化建议
      if (this.polishResult.suggestions.length > 0) {
        this.SuggestionsView();
      }
    }
    .width(BaseCommon.FULL_PERCENT);
  }

  @Builder
  SentimentView() {
    Row() {
      Text('情感分析：')
        .fontSize(12)
        .fontColor('#666666');
      
      // 情感图标和标签
      Row() {
        Text(this.getSentimentEmoji(this.polishResult.sentiment.label))
          .fontSize(16);
        
        Text(this.getSentimentLabel(this.polishResult.sentiment.label))
          .fontSize(12)
          .fontColor(this.getSentimentColor(this.polishResult.sentiment.label))
          .margin({ left: 4 });
      }
      .backgroundColor(this.getSentimentBgColor(this.polishResult.sentiment.label))
      .borderRadius(12)
      .padding({ left: 8, right: 8, top: 4, bottom: 4 });
      
      // 情感分数
      Text(`分数: ${this.polishResult.sentiment.score.toFixed(2)}`)
        .fontSize(12)
        .fontColor('#999999')
        .margin({ left: 8 });
      
      // 置信度
      Text(`置信度: ${Math.round(this.polishResult.sentiment.confidence * 100)}%`)
        .fontSize(12)
        .fontColor('#999999')
        .margin({ left: 8 });
    }
    .width(BaseCommon.FULL_PERCENT)
    .margin({ bottom: 12 });
  }

  @Builder
  KeywordsView() {
    Column() {
      Text('关键词提取：')
        .fontSize(12)
        .fontColor('#666666')
        .width(BaseCommon.FULL_PERCENT)
        .margin({ bottom: 8 });
      
      Flex({ wrap: FlexWrap.Wrap }) {
        ForEach(this.polishResult.keywords, (keyword: string) => {
          Text(keyword)
            .fontSize(12)
            .fontColor('#2196F3')
            .backgroundColor('#E3F2FD')
            .borderRadius(12)
            .padding({ left: 8, right: 8, top: 4, bottom: 4 })
            .margin({ right: 8, bottom: 8 });
        }, (keyword: string) => keyword);
      }
      .width(BaseCommon.FULL_PERCENT);
    }
    .width(BaseCommon.FULL_PERCENT)
    .margin({ bottom: 12 });
  }

  @Builder
  SuggestionsView() {
    Column() {
      Text('优化建议：')
        .fontSize(12)
        .fontColor('#666666')
        .width(BaseCommon.FULL_PERCENT)
        .margin({ bottom: 8 });
      
      ForEach(this.polishResult.suggestions, (suggestion: string, index: number) => {
        Row() {
          Text(`${index + 1}.`)
            .fontSize(12)
            .fontColor('#4CAF50');
          
          Text(suggestion)
            .fontSize(12)
            .fontColor('#666666')
            .layoutWeight(1)
            .margin({ left: 4 });
        }
        .width(BaseCommon.FULL_PERCENT)
        .margin({ bottom: 4 });
      }, (suggestion: string, index: number) => index.toString());
    }
    .width(BaseCommon.FULL_PERCENT);
  }

  @Builder
  ActionButtons() {
    Row() {
      // 使用润色结果
      Button('使用此版本')
        .fontSize(14)
        .fontColor(Color.White)
        .backgroundColor('#4CAF50')
        .layoutWeight(1)
        .borderRadius(20)
        .onClick(() => {
          if (this.onUsePolishedText) {
            this.onUsePolishedText(this.polishResult.polishedText);
          }
        });
      
      // 重新润色
      Button('重新润色')
        .fontSize(14)
        .fontColor('#2196F3')
        .backgroundColor('#E3F2FD')
        .layoutWeight(1)
        .borderRadius(20)
        .margin({ left: 8 })
        .onClick(() => {
          if (this.onRePolish) {
            this.onRePolish();
          }
        });
      
      // 取消
      Button('取消')
        .fontSize(14)
        .fontColor('#666666')
        .backgroundColor('#F5F5F5')
        .layoutWeight(1)
        .borderRadius(20)
        .margin({ left: 8 })
        .onClick(() => {
          if (this.onCancel) {
            this.onCancel();
          }
        });
    }
    .width(BaseCommon.FULL_PERCENT)
    .margin({ top: 16 });
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
}
