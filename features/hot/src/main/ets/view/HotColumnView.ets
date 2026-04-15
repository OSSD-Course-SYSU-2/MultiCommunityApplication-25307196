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

import { BreakpointConstants as Breakpoint, CommonConstants as BaseCommon, BreakpointType } from 'base';
import { HotItemInterface, HOST_LIST_ARRAY } from 'base';
import { HotListItemView } from 'rank';
import { CommonConstants as Common } from '../constants/CommonConstants';
import { ToRankView } from './ToRankView';

const SWIPER_LIST: number[] = [0, 1, 2];

// [Start hot_column_view]
@Component
export struct HotColumnView {
  @StorageLink('currentBreakpoint') currentBreakpoint: string = 'sm';
  // [StartExclude hot_column_view]
  @State tab_index: number = 0;
  // [EndExclude hot_column_view]

  @Builder
  HotListBuilder(index: number) {
    List() {
      ForEach(HOST_LIST_ARRAY[this.tab_index], (item: HotItemInterface) => {
        if (item.index > index * 5 && item.index <= (index + 1) * 5) {
          ListItem() {
            HotListItemView({
              item: item,
              showDetail: true,
              // [StartExclude hot_column_view]
              indexWidth: item.index <= 5 ? '9vp' : '19vp',
              indexIconGap: '8vp'
              // [EndExclude hot_column_view]
            })
          }
        }
      }, (item: HotItemInterface) => JSON.stringify(item))
    }
  }

  build() {
    Column() {
      Swiper() {
        ForEach([0, 1, 2], (item: number) => {
          this.HotListBuilder(item)
        }, (item: number) => JSON.stringify(item))
      }
      // [StartExclude hot_column_view]
      .autoPlay(false)
      .indicator(false)
      .disableSwipe(true)
      .displayCount(new BreakpointType(1, 2, 3).getValue(this.currentBreakpoint))
      .itemSpace((new BreakpointType('0vp', '49vp', '81vp')).getValue(this.currentBreakpoint))

      ToRankView()
      // [EndExclude hot_column_view]
    }
    // [StartExclude hot_column_view]
    .width('100%')
    .alignItems(HorizontalAlign.Start)
    // [EndExclude hot_column_view]
  }
}
// [End hot_column_view]