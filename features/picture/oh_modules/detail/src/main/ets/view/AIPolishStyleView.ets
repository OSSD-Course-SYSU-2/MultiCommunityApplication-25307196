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
import { PolishStyle, POLISH_STYLE_CONFIGS, PolishStyleConfig } from 'base';

/**
 * AI润色风格选择组件
 * 提供五种润色风格的选择界面
 */
@Component
export struct AIPolishStyleView {
  @State selectedStyle: PolishStyle = PolishStyle.LITERARY;
  @State showDetail: boolean = false;
  
  // 风格选择回调
  onStyleSelected?: (style: PolishStyle) => void;

  build() {
    Column() {
      // 标题
      this.TitleView();
      
      // 风格选择网格
      this.StyleGrid();
      
      // 选中风格的详细说明
      if (this.showDetail) {
        this.StyleDetailView();
      }
    }
    .width(BaseCommon.FULL_PERCENT)
    .padding(16)
    .backgroundColor($r('app.color.white'))
    .borderRadius(12);
  }

  @Builder
  TitleView() {
    Row() {
      Text('✨ 选择润色风格')
        .fontSize(16)
        .fontColor($r('app.color.font_color_normal'))
        .fontWeight(FontWeight.Bold);
      
      Blank();
      
      // 展开/收起按钮
      Text(this.showDetail ? '收起' : '展开')
        .fontSize(12)
        .fontColor('#2196F3')
        .onClick(() => {
          this.showDetail = !this.showDetail;
        });
    }
    .width(BaseCommon.FULL_PERCENT)
    .margin({ bottom: 16 });
  }

  @Builder
  StyleGrid() {
    GridRow({ 
      columns: { 
        sm: 3, 
        md: 5, 
        lg: 5 
      },
      gutter: { x: 12, y: 12 }
    }) {
      ForEach(POLISH_STYLE_CONFIGS, (config: PolishStyleConfig) => {
        GridCol({ span: 1 }) {
          this.StyleCard(config);
        }
      }, (config: PolishStyleConfig) => config.style);
    }
    .width(BaseCommon.FULL_PERCENT);
  }

  @Builder
  StyleCard(config: PolishStyleConfig) {
    Column() {
      // 风格图标
      Column() {
        Text(this.getStyleEmoji(config.style))
          .fontSize(28);
      }
      .width(48)
      .height(48)
      .backgroundColor(this.selectedStyle === config.style ? config.color : '#F5F5F5')
      .borderRadius(24)
      .justifyContent(FlexAlign.Center)
      .alignItems(HorizontalAlign.Center);
      
      // 风格名称
      Text(config.name)
        .fontSize(12)
        .fontColor(this.selectedStyle === config.style ? config.color : $r('app.color.font_color_normal'))
        .fontWeight(this.selectedStyle === config.style ? FontWeight.Bold : FontWeight.Normal)
        .margin({ top: 8 });
    }
    .width(BaseCommon.FULL_PERCENT)
    .padding(8)
    .borderRadius(8)
    .backgroundColor(this.selectedStyle === config.style ? '#E3F2FD' : Color.Transparent)
    .onClick(() => {
      this.selectedStyle = config.style;
      if (this.onStyleSelected) {
        this.onStyleSelected(config.style);
      }
    })
    .animation({
      duration: 200,
      curve: Curve.EaseInOut
    });
  }

  @Builder
  StyleDetailView() {
    Column() {
      // 获取当前选中风格的配置
      ForEach(POLISH_STYLE_CONFIGS, (config: PolishStyleConfig) => {
        if (config.style === this.selectedStyle) {
          Column() {
            // 风格描述
            Text(config.description)
              .fontSize(14)
              .fontColor('#666666')
              .width(BaseCommon.FULL_PERCENT)
              .margin({ top: 12, bottom: 8 });
            
            // 示例文本
            Row() {
              Text('示例：')
                .fontSize(12)
                .fontColor('#999999');
              
              Text(config.example)
                .fontSize(12)
                .fontColor(config.color)
                .fontStyle(FontStyle.Italic);
            }
            .width(BaseCommon.FULL_PERCENT)
            .padding(8)
            .backgroundColor('#F5F5F5')
            .borderRadius(8);
          }
          .width(BaseCommon.FULL_PERCENT);
        }
      }, (config: PolishStyleConfig) => config.style);
    }
    .width(BaseCommon.FULL_PERCENT)
    .margin({ top: 16 });
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
}
