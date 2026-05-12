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

import { HOST_LIST_ARRAY, CommonConstants as BaseCommon, HotItemInterface } from 'base';
import { HotListItemView } from './HotListItemView';
@Builder
export function HotListView(index: number, groupTitle: ResourceStr = ''){
  Row() {
    List() {
      ListItemGroup({ header: itemHeader(groupTitle) }) {
        ForEach(HOST_LIST_ARRAY[index], (item: HotItemInterface) => {
          ListItem() {
            HotListItemView({
              item: item,
              indexWidth: $r('app.float.index_width_more')
            })
          }
        }, (item: HotItemInterface) => JSON.stringify(item))
      }
    }
    .scrollBar(BarState.Off)
    .nestedScroll({
      scrollForward: NestedScrollMode.PARENT_FIRST,
      scrollBackward: NestedScrollMode.SELF_FIRST
    })
    .edgeEffect(EdgeEffect.None)
    .padding({
      left: $r('app.float.hot_list_pl')
    })
  }
  .borderRadius($r('app.float.rank_list_rd'))
  .backgroundColor($r('app.color.white'))
}
@Builder
function itemHeader(groupTitle: ResourceStr) {
  Row() {
    Text(groupTitle)
      .fontSize($r('app.float.group_item_title_font_size'))
      .fontWeight(BaseCommon.FONT_WEIGHT_700)
      .fontColor($r('app.color.group_item_title_font_color'))
      .margin({ left: $r('app.float.group_item_title_ml') })
  }
  .height($r('app.float.group_item_title_height'))
  .margin({ top: $r('app.float.group_item_title_mt') })
  .justifyContent(FlexAlign.Start)
}