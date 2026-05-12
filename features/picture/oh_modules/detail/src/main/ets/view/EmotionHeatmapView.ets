/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import { EmotionType, EmotionData } from 'base';

@Component
export struct EmotionHeatmapView {
  @Prop emotionData: EmotionData;
  @State isExpanded: boolean = false;

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

  build() {
    Column() {
      // 主要情绪展示
      Row() {
        // 情绪图标和标签
        Row() {
          Circle()
            .width(12)
            .height(12)
            .fill(this.getEmotionColor(this.emotionData.emotion))
            .opacity(this.emotionData.intensity / 100)

          Text(this.getEmotionLabel(this.emotionData.emotion))
            .fontSize(12)
            .fontColor(Color.Black)
            .margin({ left: 6 })

          // 强度指示
          Text(`强度: ${this.emotionData.intensity}%`)
            .fontSize(10)
            .fontColor('#666666')
            .margin({ left: 8 })
        }
        .layoutWeight(1)

        // 展开/收起按钮
        Text(this.isExpanded ? '收起' : '详情')
          .fontSize(12)
          .fontColor($r('app.color.read_all_replay_fc'))
          .onClick(() => {
            this.isExpanded = !this.isExpanded;
          })
      }
      .width('100%')
      .justifyContent(FlexAlign.SpaceBetween)

      // 展开的情绪分布热力图
      if (this.isExpanded) {
        Column() {
          Text('情绪分布')
            .fontSize(12)
            .fontColor('#666666')
            .margin({ top: 12, bottom: 8 })

          // 热力图网格
          Row() {
            ForEach(Array.from(this.emotionData.emotionDistribution.entries()), (item: [EmotionType, number]) => {
              this.EmotionBarItem(item[0], item[1])
            }, (item: [EmotionType, number]) => item[0])
          }
          .width('100%')
          .justifyContent(FlexAlign.SpaceEvenly)
        }
        .width('100%')
      }
    }
    .width('100%')
    .padding(8)
    .backgroundColor('#F5F5F5')
    .borderRadius(8)
    .margin({ top: 8 })
  }

  @Builder
  EmotionBarItem(emotion: EmotionType, count: number) {
    Column() {
      // 热力条
      Column() {
        Column()
          .width('100%')
          .height(Math.max(count, 5)) // 最小高度5
          .backgroundColor(this.getEmotionColor(emotion))
          .borderRadius(2)
      }
      .width(24)
      .height(60)
      .justifyContent(FlexAlign.End)
      .backgroundColor('#F5F5F5')
      .borderRadius(4)

      // 标签
      Text(this.getEmotionLabel(emotion))
        .fontSize(10)
        .fontColor('#666666')
        .margin({ top: 4 })

      // 数值
      Text(count.toString())
        .fontSize(10)
        .fontColor('#666666')
    }
    .alignItems(HorizontalAlign.Center)
  }
}
