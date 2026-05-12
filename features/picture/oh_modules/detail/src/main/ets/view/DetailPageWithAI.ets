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

/**
 * 集成AI润色功能的DetailPage示例
 * 
 * 使用方法：
 * 1. 将此文件中的 CommentInputView 替换为 CommentInputWithAIView
 * 2. 或者直接使用此文件替换原有的 DetailPage.ets
 */

import { BreakpointConstants as Breakpoint, CommonConstants as Common, BreakpointType } from 'base';
import { DetailTitleView } from './DetailTitleView';
import { MicroBlogView } from './MircoBlogView';
import { CommentListView } from './CommentListView';
import { CommentBarView } from './CommentBarView';
// 导入带AI润色功能的评论输入组件
import { CommentInputWithAIView } from './CommentInputWithAIView';
import { CardArray } from '../viewmodel/CardArrayViewModel';
import { CardItem } from '../viewmodel/CardViewModel';
import CardArrayViewModel from '../viewmodel/CardArrayViewModel';

const KEY_BACKGROUND: string = 'background';

@Component
export struct DetailPageWithAI {
  @StorageLink('currentBreakpoint') currentBreakpoint: string = 'sm';
  @StorageLink('isFoldHorizontal') isFoldHorizontal: boolean = true;
  @StorageLink('cardArrayViewModel') cardArrayViewModel: CardArray = CardArrayViewModel.getInstance();
  @StorageLink('selectCardIndex') selectCardIndex: number = 0;
  @StorageLink('isDetailPage') isDetailPage: boolean = false;
  @StorageLink('isShowInput') isShowInput: boolean = false;
  @State cardItem: CardItem = this.cardArrayViewModel.cardArray[this.selectCardIndex];
  isShowedButton?: boolean = true;

  aboutToAppear() {
    this.isDetailPage = true;
  }

  build() {
    Stack() {
      Column() {
        DetailTitleView({ isShowedButton: this.isShowedButton })
        Scroll() {
          GridRow({ columns: { sm: 4, md: 5, lg: 12 } }) {
            GridCol({ span: { sm: 4, md: this.isFoldHorizontal ? 3 : 5, lg: 12 } }) {
              if ((this.isFoldHorizontal && this.currentBreakpoint === 'md')) {
                Scroll() {
                  MicroBlogView({
                    cardItem: this.cardItem,
                    index: this.selectCardIndex
                  })
                    .margin({ top: '16vp' })
                }
                .scrollBar(BarState.Off)
                .align(Alignment.Top)
                .layoutWeight(1)
              } else {
                MicroBlogView({
                  cardItem: this.cardItem,
                  index: this.selectCardIndex
                })
                  .margin({
                    top: $r('app.float.micro_blog_mt')
                  })
              }
            }
            .width(Common.FULL_PERCENT)
            .padding({
              left: new BreakpointType($r('app.float.window_padding_left_sm'), $r('app.float.window_padding_left_md'),
                $r('app.float.window_padding_left_lg')).getValue(this.currentBreakpoint),
              right: new BreakpointType($r('app.float.window_padding_left_sm'), $r('app.float.window_padding_left_md'),
                $r('app.float.window_padding_left_lg')).getValue(this.currentBreakpoint)
            })

            GridCol({ span: { sm: 4, md: this.isFoldHorizontal ? 2 : 5, lg: 12 } }) {
              CommentListView()
            }
            .height(Common.FULL_PERCENT)
            .width(Common.FULL_PERCENT)
          }
        }
        .visibility(this.currentBreakpoint === 'lg' ? Visibility.None : Visibility.Visible)
        .layoutWeight(1)
        .scrollBar(BarState.Off)

        CommentBarView()
          .visibility(this.isShow() ? Visibility.Visible : Visibility.None)

        Column() {
          SideBarContainer() {
            Column() {
              CommentListView()
            }
            .backgroundColor($r('app.color.acetate'))

            Column() {
              Scroll() {
                MicroBlogView({
                  cardItem: this.cardItem,
                  index: this.selectCardIndex
                })
                  .margin({
                    top: $r('app.float.micro_blog_mt')
                  })
              }
              .padding({
                left: $r('app.float.window_padding_left_lg'),
                right: $r('app.float.window_padding_left_lg')
              })
              .scrollBar(BarState.Off)
            }
            .justifyContent(FlexAlign.Start)
          }
          .sideBarPosition(SideBarPosition.End)
          .showControlButton(false)
          .sideBarWidth($r('app.float.side_bar_with'))
          .minSideBarWidth($r('app.float.min_side_bar_width'))
          .maxSideBarWidth($r('app.float.max_side_bar_width'))
          .autoHide(false)
          .divider(null)
        }
        .visibility(this.currentBreakpoint !== 'lg' ? Visibility.None : Visibility.Visible)
        .width(Common.FULL_PERCENT)
        .layoutWeight(1)
      }
      .height(Common.FULL_PERCENT)
      .justifyContent(FlexAlign.End)
      .expandSafeArea([SafeAreaType.KEYBOARD, SafeAreaType.SYSTEM])

      if (this.isShowInput) {
        Stack() {
          Column()
            .justifyContent(FlexAlign.End)
            .width(Common.FULL_PERCENT)
            .height(Common.FULL_PERCENT)
            .backgroundColor(Color.Black)
            .opacity($r('app.float.text_input_bgc_opacity'))
            .id(KEY_BACKGROUND)
            .onClick(() => {
              AppStorage.setOrCreate('isShowInput', false);
              focusControl.requestFocus(KEY_BACKGROUND);
            })

          // 使用带AI润色功能的评论输入组件
          CommentInputWithAIView()
        }
        .alignContent(Alignment.Bottom)
      }
    }
  }

  isShow(): boolean {
    if ((this.currentBreakpoint === 'md' && !this.isFoldHorizontal) ||
      (this.currentBreakpoint === 'sm')) {
      return true;
    }
    return false;
  }
}
