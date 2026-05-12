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

import { CommonConstants as BaseCommon, MediaData } from 'base';
import { CommonConstants as Common } from '../constants/CommonConstants';
import { MediaPickerView } from './MediaPickerView';

const TEXTAREA_KEY: string = 'textarea';
const BUTTON_KEY: string = 'button';

@Component
export struct CommentInputView {
  @State content: string = '';
  @State selectedMedia: MediaData[] = [];
  @State showMediaPicker: boolean = false;
  darkMode: boolean = true;

  build() {
    Column() {
      // 已选媒体预览
      if (this.selectedMedia.length > 0) {
        this.SelectedMediaPreview();
      }

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

        // 媒体选择按钮
        Image($r('app.media.ic_social_circle1'))
          .width($r('app.float.toolbar_sent_width'))
          .aspectRatio(1)
          .margin({
            left: 8,
            bottom: $r('app.float.toolbar_sent_mb')
          })
          .onClick(() => {
            this.showMediaPicker = !this.showMediaPicker;
          })

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

      // 媒体选择器
      if (this.showMediaPicker) {
        MediaPickerView({ selectedMedia: $selectedMedia });
      }
    }
    .width(BaseCommon.FULL_PERCENT)
    .backgroundColor($r('app.color.white'))
  }

  // 已选媒体预览
  @Builder
  SelectedMediaPreview() {
    Row() {
      ForEach(this.selectedMedia, (media: MediaData, index: number) => {
        Stack({ alignContent: Alignment.TopEnd }) {
          Image(media.type === 'video' ? (media.thumbnail || media.url) : media.url)
            .width(60)
            .height(60)
            .objectFit(ImageFit.Cover)
            .borderRadius(8);

          // 删除按钮
          Image($r('app.media.ic_point_more'))
            .width(20)
            .height(20)
            .backgroundColor('rgba(0, 0, 0, 0.6)')
            .borderRadius(10)
            .onClick(() => {
              this.selectedMedia.splice(index, 1);
            });
        }
        .margin({ right: 8 });
      });
    }
    .width('100%')
    .padding({ left: 16, right: 16, top: 8, bottom: 8 });
  }
}