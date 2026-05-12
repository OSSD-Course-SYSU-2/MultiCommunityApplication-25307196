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

import { MediaType, MediaCategory, MediaData, CommonConstants as BaseCommon } from 'base';

@Component
export struct MediaGalleryView {
  mediaList: MediaData[] = [];
  @State previewIndex: number = 0;
  @State isPreviewVisible: boolean = false;
  isDarkMode: boolean = false;

  build() {
    Column() {
      if (this.mediaList && this.mediaList.length > 0) {
        // 媒体网格展示
        this.MediaGrid();
      }
    }
    .width('100%')
  }

  // 媒体网格展示
  @Builder
  MediaGrid() {
    Flex({ wrap: FlexWrap.Wrap }) {
      ForEach(this.mediaList, (media: MediaData, index: number) => {
        this.MediaItem(media, index);
      });
    }
    .width('100%')
    .margin({ top: 8 })
  }

  // 单个媒体项
  @Builder
  MediaItem(media: MediaData, index: number) {
    Stack({ alignContent: Alignment.TopEnd }) {
      Column() {
        if (media.type === MediaType.IMAGE || media.type === MediaType.STICKER) {
          // 图片或表情包
          Image(media.url)
            .width(this.getMediaWidth(media))
            .height(this.getMediaHeight(media))
            .objectFit(ImageFit.Cover)
            .borderRadius(8);
        } else if (media.type === MediaType.VIDEO) {
          // 视频（显示缩略图和播放图标）
          Stack() {
            Image(media.thumbnail || media.url)
              .width(this.getMediaWidth(media))
              .height(this.getMediaHeight(media))
              .objectFit(ImageFit.Cover)
              .borderRadius(8);

            // 播放图标
            Column() {
              Image($r('app.media.ic_state_fire'))
                .width(40)
                .height(40);
            }
            .width('100%')
            .height('100%')
            .justifyContent(FlexAlign.Center)
            .backgroundColor('rgba(0, 0, 0, 0.3)')
            .borderRadius(8);
          }
        }
      }
      .onClick(() => {
        this.previewIndex = index;
        this.isPreviewVisible = true;
      });

      // 分类标签
      if (media.category && media.category !== MediaCategory.NORMAL) {
        Text(this.getCategoryLabel(media.category))
          .fontSize(10)
          .fontColor(Color.White)
          .backgroundColor(this.getCategoryColor(media.category))
          .padding({ left: 6, right: 6, top: 2, bottom: 2 })
          .borderRadius({ topRight: 8, bottomLeft: 8 });
      }

      // 视频时长标签
      if (media.type === MediaType.VIDEO && media.duration) {
        Text(this.formatDuration(media.duration))
          .fontSize(10)
          .fontColor(Color.White)
          .backgroundColor('rgba(0, 0, 0, 0.6)')
          .padding({ left: 4, right: 4, top: 2, bottom: 2 })
          .borderRadius(4)
          .position({ x: 4, y: this.getMediaHeight(media) - 20 });
      }
    }
    .width(this.getMediaWidth(media))
    .height(this.getMediaHeight(media))
    .margin({ right: 8, bottom: 8 });
  }

  // 获取媒体宽度
  private getMediaWidth(media: MediaData): number {
    if (media.type === MediaType.STICKER) {
      return 80;
    }
    // 根据媒体数量调整大小
    if (this.mediaList.length === 1) {
      return 200;
    } else if (this.mediaList.length === 2) {
      return 150;
    } else {
      return 100;
    }
  }

  // 获取媒体高度
  private getMediaHeight(media: MediaData): number {
    if (media.type === MediaType.STICKER) {
      return 80;
    }
    // 根据媒体数量调整大小
    if (this.mediaList.length === 1) {
      return 150;
    } else if (this.mediaList.length === 2) {
      return 112;
    } else {
      return 100;
    }
  }

  // 获取分类标签
  private getCategoryLabel(category: MediaCategory): string {
    switch (category) {
      case MediaCategory.SAME_SCENE:
        return '同款风景';
      case MediaCategory.FUNNY_MEME:
        return '搞笑梗图';
      default:
        return '';
    }
  }

  // 获取分类颜色
  private getCategoryColor(category: MediaCategory): ResourceColor {
    switch (category) {
      case MediaCategory.SAME_SCENE:
        return '#4CAF50'; // 绿色
      case MediaCategory.FUNNY_MEME:
        return '#FF9800'; // 橙色
      default:
        return '#999999';
    }
  }

  // 格式化时长
  private formatDuration(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}

// 媒体预览组件
@Component
export struct MediaPreviewView {
  mediaList: MediaData[] = [];
  @Link currentIndex: number;
  @Link isVisible: boolean;
  isDarkMode: boolean = false;

  build() {
    if (this.isVisible && this.mediaList.length > 0) {
      Column() {
        // 顶部工具栏
        Row() {
          Image($r('app.media.ic_point_more'))
            .width(24)
            .height(24)
            .onClick(() => {
              this.isVisible = false;
            });

          Blank();

          Text(`${this.currentIndex + 1}/${this.mediaList.length}`)
            .fontSize(16)
            .fontColor(Color.White);
        }
        .width('100%')
        .height(56)
        .padding({ left: 16, right: 16 });

        // 媒体展示区域
        Swiper() {
          ForEach(this.mediaList, (media: MediaData, index: number) => {
            Column() {
              if (media.type === MediaType.IMAGE || media.type === MediaType.STICKER) {
                Image(media.url)
                  .width('100%')
                  .objectFit(ImageFit.Contain);
              } else if (media.type === MediaType.VIDEO) {
                // 视频播放器（这里简化处理，实际应使用Video组件）
                Column() {
                  Image(media.thumbnail || media.url)
                    .width('100%')
                    .objectFit(ImageFit.Contain);

                  Text('视频播放器')
                    .fontSize(14)
                    .fontColor(Color.White)
                    .margin({ top: 16 });
                }
                .width('100%')
                .height('100%')
                .justifyContent(FlexAlign.Center);
              }

              // 媒体描述
              if (media.description) {
                Text(media.description)
                  .fontSize(14)
                  .fontColor(Color.White)
                  .margin({ top: 16 })
                  .padding({ left: 16, right: 16 });
              }
            }
            .width('100%')
            .height('100%')
            .justifyContent(FlexAlign.Center);
          });
        }
        .index(this.currentIndex)
        .indicator(this.mediaList.length > 1)
        .onChange((index: number) => {
          this.currentIndex = index;
        })
        .layoutWeight(1);
      }
      .width('100%')
      .height('100%')
      .backgroundColor('rgba(0, 0, 0, 0.95)')
      .position({ x: 0, y: 0 })
      .zIndex(999);
    }
  }
}
