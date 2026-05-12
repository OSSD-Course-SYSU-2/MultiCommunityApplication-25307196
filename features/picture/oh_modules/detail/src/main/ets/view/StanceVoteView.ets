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

import { StanceType, StanceData } from 'base';

@Component
export struct StanceVoteView {
  @Prop stanceData: StanceData;
  @Link userStance: StanceType;
  onStanceChange?: (stance: StanceType) => void;

  // 计算百分比
  getPercentage(count: number, total: number): string {
    if (total === 0) return '0%';
    return Math.round((count / total) * 100) + '%';
  }

  // 处理立场选择
  handleStanceSelect(stance: StanceType) {
    if (this.userStance === stance) {
      // 取消选择
      this.userStance = StanceType.NONE;
    } else {
      this.userStance = stance;
    }
    if (this.onStanceChange) {
      this.onStanceChange(this.userStance);
    }
  }

  build() {
    Column() {
      // 标题
      Text('观点站队')
        .fontSize(14)
        .fontColor('#666666')
        .margin({ bottom: 12 })

      // 投票按钮行
      Row() {
        // 支持按钮
        this.StanceButton(
          '支持',
          StanceType.SUPPORT,
          this.stanceData.supportCount,
          this.stanceData.totalCount,
          '#4CAF50'
        )

        Blank().width(12)

        // 反对按钮
        this.StanceButton(
          '反对',
          StanceType.OPPOSE,
          this.stanceData.opposeCount,
          this.stanceData.totalCount,
          '#F44336'
        )

        Blank().width(12)

        // 中立按钮
        this.StanceButton(
          '中立',
          StanceType.NEUTRAL,
          this.stanceData.neutralCount,
          this.stanceData.totalCount,
          '#FF9800'
        )
      }
      .width('100%')
      .justifyContent(FlexAlign.Center)

      // 比例展示
      if (this.userStance !== StanceType.NONE) {
        Row() {
          Text(`当前立场比例：支持 ${this.getPercentage(this.stanceData.supportCount, this.stanceData.totalCount)} | 反对 ${this.getPercentage(this.stanceData.opposeCount, this.stanceData.totalCount)} | 中立 ${this.getPercentage(this.stanceData.neutralCount, this.stanceData.totalCount)}`)
            .fontSize(12)
            .fontColor('#666666')
        }
        .width('100%')
        .margin({ top: 8 })
      }
    }
    .width('100%')
    .padding(12)
    .backgroundColor('#F5F5F5')
    .borderRadius(8)
  }

  @Builder
  StanceButton(label: string, stance: StanceType, count: number, total: number, color: string) {
    Column() {
      Button(label)
        .fontSize(14)
        .fontColor(this.userStance === stance ? Color.White : color)
        .backgroundColor(this.userStance === stance ? color : Color.Transparent)
        .border({
          width: 1,
          color: color,
          radius: 4
        })
        .width(70)
        .height(32)
        .onClick(() => {
          this.handleStanceSelect(stance);
        })

      Text(this.getPercentage(count, total))
        .fontSize(12)
        .fontColor('#666666')
        .margin({ top: 4 })
    }
  }
}
