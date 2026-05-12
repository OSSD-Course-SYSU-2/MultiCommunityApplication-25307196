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

import { CommentQualityType, QualityData } from 'base';

@Component
export struct CommentQualityView {
  @Prop qualityData: QualityData;

  // 获取质量标签颜色
  getQualityColor(quality: CommentQualityType): string {
    switch (quality) {
      case CommentQualityType.HIGH:
        return '#2196F3'; // 蓝色 - 高质量
      case CommentQualityType.NORMAL:
        return '#9E9E9E'; // 灰色 - 正常
      case CommentQualityType.LOW:
        return '#FF5722'; // 深橙色 - 低质量
      default:
        return '#9E9E9E';
    }
  }

  build() {
    Row() {
      // 只显示高质量标签
      if (this.qualityData.quality === CommentQualityType.HIGH && this.qualityData.tags.length > 0) {
        Row() {
          ForEach(this.qualityData.tags, (tag: string) => {
            Text(tag)
              .fontSize(10)
              .fontColor(Color.White)
              .backgroundColor(this.getQualityColor(this.qualityData.quality))
              .borderRadius(4)
              .padding({ left: 6, right: 6, top: 2, bottom: 2 })
              .margin({ right: 4 })
          }, (tag: string) => tag)
        }
      }
    }
    .width('100%')
  }
}

// 折叠评论容器组件
@Component
export struct FoldableCommentContainer {
  @Prop qualityData: QualityData;
  @Link isFolded: boolean;
  @BuilderParam content: () => void;
  onFoldChange?: (isFolded: boolean) => void;

  build() {
    Column() {
      if (this.qualityData.quality === CommentQualityType.LOW && this.isFolded) {
        // 折叠状态：显示提示和展开按钮
        Row() {
          Text('该评论已被折叠')
            .fontSize(12)
            .fontColor('#666666')

          if (this.qualityData.foldReason) {
            Text(`（${this.qualityData.foldReason}）`)
              .fontSize(12)
              .fontColor('#666666')
          }

          Blank()

          Text('展开查看')
            .fontSize(12)
            .fontColor($r('app.color.read_all_replay_fc'))
            .onClick(() => {
              this.isFolded = false;
              if (this.onFoldChange) {
                this.onFoldChange(false);
              }
            })
        }
        .width('100%')
        .padding(12)
        .backgroundColor('#F5F5F5')
        .borderRadius(8)
      } else {
        // 展开状态：显示完整内容
        this.content()

        // 如果是低质量评论，显示折叠按钮
        if (this.qualityData.quality === CommentQualityType.LOW) {
          Row() {
            Blank()

            Text('收起')
              .fontSize(12)
              .fontColor('#666666')
              .onClick(() => {
                this.isFolded = true;
                if (this.onFoldChange) {
                  this.onFoldChange(true);
                }
              })
          }
          .width('100%')
          .margin({ top: 8 })
        }
      }
    }
    .width('100%')
  }
}
