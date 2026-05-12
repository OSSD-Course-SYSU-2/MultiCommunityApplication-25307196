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
import { CommonConstants as Common } from '../constants/CommonConstants';
import { AIPolishPanelView } from './AIPolishPanelView';

const TEXTAREA_KEY: string = 'textarea';
const BUTTON_KEY: string = 'button';

/**
 * 增强版评论输入组件
 * 集成AI润色功能
 */
@Component
export struct CommentInputWithAIView {
  @State content: string = '';
  @State showAIPanel: boolean = false;
  @State aiPolishedText: string = '';
  darkMode: boolean = true;

  build() {
    Column() {
      if (this.showAIPanel) {
        // AI润色面板
        AIPolishPanelView({
          onComplete: (text: string) => {
            this.content = text;
            this.showAIPanel = false;
          },
          onCancel: () => {
            this.showAIPanel = false;
          }
        })
          .width(BaseCommon.FULL_PERCENT)
          .margin({ bottom: 16 });
      }
      
      // 评论输入区域
      Row() {
        TextArea({ placeholder: $r('app.string.detail_write_comment'), text: this.content })
          .id(TEXTAREA_KEY)
          .maxLines(Common.TEXT_AREA_MAX_LINES)
          .constraintSize({
            minHeight: $r('app.float.constraint_size')
          })
          .enableKeyboardOnFocus(true)
          .maxLength(Common.TEXT_AREA_MAX_LENGTH)
          .showCounter(this.content.length === Common.TEXT_AREA_MAX_LENGTH ? true : false)
          .layoutWeight(1)
          .onChange((value: string) => {
            this.content = value;
          })
          .onAppear(() => {
            focusControl.requestFocus(TEXTAREA_KEY);
          })
        
        // AI润色按钮
        Column() {
          Image($r('app.media.ic_icon_1'))
            .width(24)
            .height(24)
            .fillColor('#2196F3');
          
          Text('AI润色')
            .fontSize(10)
            .fontColor('#2196F3')
            .margin({ top: 2 });
        }
        .width(48)
        .height(48)
        .justifyContent(FlexAlign.Center)
        .alignItems(HorizontalAlign.Center)
        .margin({
          left: 8,
          bottom: $r('app.float.toolbar_sent_mb')
        })
        .onClick(() => {
          this.showAIPanel = !this.showAIPanel;
        })
        
        // 发送按钮
        Image($r('app.media.ic_toolbar_sent'))
          .width($r('app.float.toolbar_sent_width'))
          .aspectRatio(1)
          .margin({
            left: $r('app.float.toolbar_sent_ml'),
            bottom: $r('app.float.toolbar_sent_mb')
          })
          .id(BUTTON_KEY)
          .onClick(() => {
            AppStorage.setOrCreate('isShowInput', false);
            focusControl.requestFocus(BUTTON_KEY);
          })
      }
      .width(BaseCommon.FULL_PERCENT)
      .padding({
        left: $r('app.float.dialog_pl'),
        right: $r('app.float.dialog_pr'),
        top: $r('app.float.dialog_pt'),
        bottom: $r('app.float.dialog_pt')
      })
      .justifyContent(FlexAlign.SpaceBetween)
      .alignItems(VerticalAlign.Bottom)
      .backgroundColor($r('app.color.white'))
    }
    .width(BaseCommon.FULL_PERCENT)
    .backgroundColor($r('app.color.white'));
  }
}
