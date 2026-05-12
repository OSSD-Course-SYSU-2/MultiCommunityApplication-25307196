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

import { MediaType, MediaCategory, MediaData } from 'base';

@Component
export struct MediaPickerView {
  @Link selectedMedia: MediaData[];
  @State isExpanded: boolean = false;
  @State selectedType: MediaType = MediaType.IMAGE;
  @State selectedCategory: MediaCategory = MediaCategory.NORMAL;
  // 表情包列表（示例数据）
  private stickerList: Resource[] = [
    $r('app.media.ic_comment_1'),
    $r('app.media.ic_comment_2'),
    $r('app.media.ic_comment_3'),
    $r('app.media.ic_comment_4'),
    $r('app.media.ic_state_favor'),
    $r('app.media.ic_state_fire')
  ];

  build() {
    Column() {
      // 媒体类型选择栏
      this.MediaTypeBar();

      if (this.isExpanded) {
        // 媒体内容区域
        this.MediaContentArea();
      }
    }
    .width('100%')
    .backgroundColor($r('app.color.white'))
    .borderRadius({ topLeft: 16, topRight: 16, bottomLeft: 0, bottomRight: 0 })
  }

  // 媒体类型选择栏
  @Builder
  MediaTypeBar() {
    Row() {
      // 图片按钮
      this.MediaTypeButton(
        $r('app.media.ic_social_circle1'),
        MediaType.IMAGE,
        '图片'
      );

      // 视频按钮
      this.MediaTypeButton(
        $r('app.media.ic_state_fire'),
        MediaType.VIDEO,
        '视频'
      );

      // 表情包按钮
      this.MediaTypeButton(
        $r('app.media.ic_state_favor'),
        MediaType.STICKER,
        '表情'
      );

      Blank();

      // 展开/收起按钮
      Image($r('app.media.ic_point_more'))
        .width(24)
        .height(24)
        .onClick(() => {
          this.isExpanded = !this.isExpanded;
        });
    }
    .width('100%')
    .height(48)
    .padding({ left: 16, right: 16 })
    .justifyContent(FlexAlign.Start)
  }

  // 媒体类型按钮
  @Builder
  MediaTypeButton(icon: Resource, type: MediaType, label: string) {
    Column() {
      Image(icon)
        .width(28)
        .height(28);

      Text(label)
        .fontSize(12)
        .fontColor(this.selectedType === type ? '#007DFF' : Color.Black)
        .margin({ top: 4 });
    }
    .onClick(() => {
      this.selectedType = type;
      if (!this.isExpanded) {
        this.isExpanded = true;
      }
    });
  }

  // 媒体内容区域
  @Builder
  MediaContentArea() {
    Column() {
      if (this.selectedType === MediaType.IMAGE || this.selectedType === MediaType.VIDEO) {
        // 图片/视频分类选择
        this.CategorySelector();
        // 上传按钮
        this.UploadButton();
      } else if (this.selectedType === MediaType.STICKER) {
        // 表情包选择
        this.StickerGrid();
      }
    }
    .width('100%')
    .padding(16)
  }

  // 分类选择器
  @Builder
  CategorySelector() {
    Row() {
      Text('分类：')
        .fontSize(14)
        .fontColor(Color.Black);

      Row() {
        this.CategoryChip('普通', MediaCategory.NORMAL);
        this.CategoryChip('同款风景', MediaCategory.SAME_SCENE);
        this.CategoryChip('搞笑梗图', MediaCategory.FUNNY_MEME);
      }
      .margin({ left: 8 });
    }
    .width('100%')
    .alignItems(VerticalAlign.Center);
  }

  // 分类标签
  @Builder
  CategoryChip(label: string, category: MediaCategory) {
    Text(label)
      .fontSize(12)
      .fontColor(this.selectedCategory === category ? Color.White : Color.Black)
      .padding({ left: 12, right: 12, top: 6, bottom: 6 })
      .borderRadius(16)
      .backgroundColor(this.selectedCategory === category ? '#007DFF' : '#F0F0F0')
      .onClick(() => {
        this.selectedCategory = category;
      });
  }

  // 上传按钮
  @Builder
  UploadButton() {
    Column() {
      Image($r('app.media.ic_point_more'))
        .width(48)
        .height(48);

      Text(this.selectedType === MediaType.IMAGE ? '上传图片' : '上传视频')
        .fontSize(12)
        .fontColor('#999999')
        .margin({ top: 8 });
    }
    .width('100%')
    .height(120)
    .borderRadius(8)
    .backgroundColor('#F5F5F5')
    .justifyContent(FlexAlign.Center)
    .margin({ top: 16 })
    .onClick(() => {
      // 模拟选择媒体文件
      this.selectMedia();
    });
  }

  // 表情包网格
  @Builder
  StickerGrid() {
    Grid() {
      ForEach(this.stickerList, (sticker: Resource, index: number) => {
        GridItem() {
          Image(sticker)
            .width(60)
            .height(60)
            .borderRadius(8)
            .onClick(() => {
              this.addSticker(sticker);
            });
        }
      });
    }
    .columnsTemplate('1fr 1fr 1fr 1fr 1fr 1fr')
    .rowsGap(16)
    .columnsGap(16)
    .width('100%')
    .height(150)
    .margin({ top: 16 });
  }

  // 选择媒体文件（模拟）
  private selectMedia() {
    // 这里应该调用系统相册或相机API
    // 模拟添加一个媒体
    const newMedia: MediaData = {
      type: this.selectedType,
      url: this.selectedType === MediaType.IMAGE ? $r('app.media.ic_social_circle1') : $r('app.media.ic_state_fire'),
      category: this.selectedCategory,
      description: this.selectedCategory === MediaCategory.SAME_SCENE ? '同款风景对比' :
        this.selectedCategory === MediaCategory.FUNNY_MEME ? '搞笑梗图' : '',
      width: 800,
      height: 600
    };
    this.selectedMedia.push(newMedia);
  }

  // 添加表情包
  private addSticker(sticker: Resource) {
    const newMedia: MediaData = {
      type: MediaType.STICKER,
      url: sticker,
      width: 120,
      height: 120
    };
    this.selectedMedia.push(newMedia);
    this.isExpanded = false;
  }
}
