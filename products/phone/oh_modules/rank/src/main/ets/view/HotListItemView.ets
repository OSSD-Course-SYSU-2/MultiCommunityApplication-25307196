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

import { HotItemInterface, HOST_LIST_ARRAY, CommonConstants as BaseCommon } from 'base';
import { CommonConstants as Common } from '../constants/CommonConstants';
export interface HotListItemProps {
  item: HotItemInterface;
  showDetail?: boolean;
  indexWidth?: ResourceStr;
  indexIconGap?: ResourceStr;
}
@Builder
export function HotListItemView(params: HotListItemProps){
  Row() {
    Row() {
      Text(`${params.item.index}`)
        .fontSize($r('app.float.index_font_size'))
        .fontWeight(BaseCommon.FONT_WEIGHT_500)
        .fontColor(isTopThree(params.item.index) ? $r('app.color.top_three_color') : $r('app.color.normal_index_color'))
        .textAlign(TextAlign.End)
        .width(params.indexWidth ?? $r('app.float.index_width_normal'))

      Row() {
        if (isShowDetail(params.showDetail, params.item.index)) {
          Image(params.item.icon)
            .width($r('app.float.list_item_icon_width'))
            .aspectRatio(1)
            .borderRadius($r('app.float.item_icon_br'))
        }

        Column({ space: Common.TITLE_CONTENT_SPACE }) {
          Row() {
            Text(params.item.title)
              .fontSize($r('app.float.rank_item_font_size'))
              .fontWeight(FontWeight.Normal)
              .maxLines(1)
              .textOverflow({ overflow: TextOverflow.Ellipsis })

            Image(params.item.stateIcon)
              .height($r('app.float.state_icon_height'))
              .aspectRatio(1)
              .margin({ left: $r('app.float.state_icon_margin_left') })
          }
          .justifyContent(FlexAlign.Start)

          Text(params.item.content)
            .fontSize($r('app.float.content_font_size'))
            .fontWeight(FontWeight.Normal)
            .fontColor($r('app.color.content_color'))
            .visibility(isShowDetail(params.showDetail, params.item.index) ? Visibility.Visible : Visibility.None)
            .maxLines(1)
            .textOverflow({ overflow: TextOverflow.Ellipsis })
        }
        .alignItems(HorizontalAlign.Start)
        .margin({
          left: isShowDetail(params.showDetail, params.item.index) ? Common.WINDOW_PADDING_HALF_SM : $r('app.float.zero')
        })
        .layoutWeight(1)
      }
      .layoutWeight(1)
      .margin({ left: params.indexIconGap ?? $r('app.float.index_icon_gap_normal') })
      .justifyContent(FlexAlign.Start)

      Row() {
        Text(`${params.item.clickCount}`)
          .fontSize($r('app.float.click_count_font_size'))
          .fontWeight(FontWeight.Normal)
          .textAlign(TextAlign.End)
          .fontColor($r('app.color.click_count_color'))

        Image(params.item.upDownIcon)
          .width($r('app.float.up_down_icon_width'))
          .aspectRatio(1)
      }
      .height(BaseCommon.FULL_PERCENT)
      .borderRadius($r('app.float.rank_list_rd'))
      .margin({
        right: $r('app.float.icon_name_margin_left')
      })
    }
    .height(BaseCommon.FULL_PERCENT)
    .width(BaseCommon.FULL_PERCENT)
  }
  .width(BaseCommon.FULL_PERCENT)
  .height((isShowDetail(params.showDetail, params.item.index)) ? $r('app.float.top_three_height') : $r('app.float.normal_item_height'))
}
function isShowDetail(showDetail: boolean | undefined, index: number): boolean {
  return (showDetail ?? false) || isTopThree(index);
}

function isTopThree(index: number): boolean {
  return index <= Common.TOP_COUNT;
}