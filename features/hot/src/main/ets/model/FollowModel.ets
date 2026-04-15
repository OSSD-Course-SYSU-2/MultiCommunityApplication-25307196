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

export interface FollowItemInterface {
  name: ResourceStr;
  icon: Resource;
  date: ResourceStr;
  picture: Resource;
  type: ResourceStr;
  subType: ResourceStr;
  content: ResourceStr;
  shareCount: number;
  viewCount: number;
  favourCount: number;
}

export const FOLLOW_LIST: FollowItemInterface[] = [
  {
    name: $r("app.string.follow_list_name_1"),
    icon: $r('app.media.ic_follow_icon1'),
    date: $r('app.string.follow_list_date_1'),
    picture: $r('app.media.ic_follow_picture1'),
    type: $r('app.string.follow_list_type_1'),
    subType: $r('app.string.follow_list_subtype_1'),
    content: $r('app.string.follow_list_content_1'),
    shareCount: 1557,
    viewCount: 57,
    favourCount: 1557
  },
  {
    name: $r('app.string.follow_list_name_2'),
    icon: $r('app.media.ic_follow_icon2'),
    date: $r('app.string.follow_list_date_2'),
    picture: $r('app.media.ic_follow_picture2'),
    type: $r('app.string.follow_list_type_1'),
    subType: $r('app.string.follow_list_subtype_1'),
    content: $r('app.string.follow_list_content_1'),
    shareCount: 154,
    viewCount: 34,
    favourCount: 127
  },
  {
    name: $r('app.string.follow_list_name_3'),
    icon: $r('app.media.ic_follow_icon3'),
    date: $r('app.string.follow_list_date_3'),
    picture: $r('app.media.ic_follow_picture3'),
    type: $r('app.string.follow_list_type_1'),
    subType: $r('app.string.follow_list_subtype_1'),
    content: $r('app.string.follow_list_content_1'),
    shareCount: 134,
    viewCount: 35,
    favourCount: 357
  },
  {
    name: $r('app.string.follow_list_name_4'),
    icon: $r('app.media.ic_follow_icon4'),
    date: $r('app.string.follow_list_date_4'),
    picture: $r('app.media.ic_follow_picture4'),
    type: $r('app.string.follow_list_type_1'),
    subType: $r('app.string.follow_list_subtype_1'),
    content: $r('app.string.follow_list_content_1'),
    shareCount: 154,
    viewCount: 54,
    favourCount: 145
  },
  {
    name: $r('app.string.follow_list_name_5'),
    icon: $r('app.media.ic_follow_icon5'),
    date: $r('app.string.follow_list_date_1'),
    picture: $r('app.media.ic_follow_picture5'),
    type: $r('app.string.follow_list_type_1'),
    subType: $r('app.string.follow_list_subtype_1'),
    content: $r('app.string.follow_list_content_1'),
    shareCount: 1257,
    viewCount: 573,
    favourCount: 1357
  },
  {
    name: $r('app.string.follow_list_name_6'),
    icon: $r('app.media.ic_follow_icon6'),
    date: $r('app.string.follow_list_date_6'),
    picture: $r('app.media.ic_follow_picture6'),
    type: $r('app.string.follow_list_type_1'),
    subType: $r('app.string.follow_list_subtype_1'),
    content: $r('app.string.follow_list_content_1'),
    shareCount: 187,
    viewCount: 56,
    favourCount: 127
  },
  {
    name: $r('app.string.follow_list_name_7'),
    icon: $r('app.media.ic_follow_icon1'),
    date: $r('app.string.follow_list_date_4'),
    picture: $r('app.media.ic_follow_picture7'),
    type: $r('app.string.follow_list_type_1'),
    subType: $r('app.string.follow_list_subtype_1'),
    content: $r('app.string.follow_list_content_1'),
    shareCount: 757,
    viewCount: 17,
    favourCount: 156
  },
  {
    name: $r('app.string.follow_list_name_8'),
    icon: $r('app.media.ic_follow_icon2'),
    date: $r('app.string.follow_list_date_8'),
    picture: $r('app.media.ic_follow_picture8'),
    type: $r('app.string.follow_list_type_1'),
    subType: $r('app.string.follow_list_subtype_1'),
    content: $r('app.string.follow_list_content_1'),
    shareCount: 345,
    viewCount: 56,
    favourCount: 1366
  },
  {
    name: $r('app.string.follow_list_name_9'),
    icon: $r('app.media.ic_follow_icon3'),
    date: $r('app.string.follow_list_date_1'),
    picture: $r('app.media.ic_follow_picture9'),
    type: $r('app.string.follow_list_type_1'),
    subType: $r('app.string.follow_list_subtype_1'),
    content: $r('app.string.follow_list_content_1'),
    shareCount: 1557,
    viewCount: 57,
    favourCount: 1557
  },
  {
    name: $r('app.string.follow_list_name_1'),
    icon: $r('app.media.ic_follow_icon1'),
    date: $r('app.string.follow_list_date_1'),
    picture: $r('app.media.ic_follow_picture1'),
    type: $r('app.string.follow_list_type_1'),
    subType: $r('app.string.follow_list_subtype_1'),
    content: $r('app.string.follow_list_content_1'),
    shareCount: 1557,
    viewCount: 57,
    favourCount: 1557
  }
];

export interface TitleDetailInterface {
  name: ResourceStr;
  icon?: Resource;
  content?: ResourceStr;
}

export const TITLE_DETAIL_LIST: TitleDetailInterface[] = [
  {
    name: $r('app.string.follow_detail_name_1')
  },
  {
    name: $r('app.string.follow_list_name_1'),
    icon: $r('app.media.ic_follow_icon1'),
    content: $r('app.string.follow_detail_content_1')
  },
  {
    name: $r('app.string.follow_detail_name_2'),
    icon: $r('app.media.ic_follow_icon2'),
    content: $r('app.string.follow_detail_content_2')
  },
  {
    name: $r('app.string.follow_list_name_3'),
    icon: $r('app.media.ic_follow_icon3'),
    content: $r('app.string.follow_detail_content_3')
  },
  {
    name: $r('app.string.follow_detail_name_3'),
    icon: $r('app.media.ic_follow_icon4'),
    content: $r('app.string.follow_detail_content_4')
  },
  {
    name: $r('app.string.follow_detail_name_4'),
    icon: $r('app.media.ic_follow_icon5'),
    content: $r('app.string.follow_detail_content_5')
  },
  {
    name: $r('app.string.follow_list_name_6'),
    icon: $r('app.media.ic_follow_icon6'),
    content: $r('app.string.follow_detail_content_6')
  },
  {
    name: $r('app.string.follow_detail_name_5'),
    icon: $r('app.media.ic_follow_icon1'),
    content: $r('app.string.follow_detail_content_7')
  },
  {
    name: $r('app.string.follow_list_name_8'),
    icon: $r('app.media.ic_follow_icon2'),
    content: $r('app.string.follow_detail_content_8')
  },
  {
    name: $r('app.string.follow_detail_name_6'),
    icon: $r('app.media.ic_follow_icon3'),
    content: $r('app.string.follow_detail_content_1')
  }
];