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

// 观点站队类型
export enum StanceType {
  NONE = 0,        // 未选择
  SUPPORT = 1,     // 支持
  OPPOSE = 2,      // 反对
  NEUTRAL = 3      // 中立
}

// 情绪类型
export enum EmotionType {
  ANGRY = 'angry',         // 愤怒
  AGREE = 'agree',         // 赞同
  TEASE = 'tease',         // 调侃
  RATIONAL = 'rational',   // 理性讨论
  NEUTRAL = 'neutral'      // 中性
}

// 评论价值类型
export enum CommentQualityType {
  HIGH = 'high',           // 高质量：深度分析、专业评论
  NORMAL = 'normal',       // 正常质量
  LOW = 'low'              // 低质量：刷屏、引战、水评
}

// 媒体类型
export enum MediaType {
  IMAGE = 'image',         // 图片
  VIDEO = 'video',         // 短视频
  STICKER = 'sticker'      // 表情包
}

// 媒体分类标签
export enum MediaCategory {
  SAME_SCENE = 'same_scene',     // 同款风景图
  FUNNY_MEME = 'funny_meme',     // 搞笑梗图
  NORMAL = 'normal'              // 普通图片
}

// 媒体数据接口
export interface MediaData {
  type: MediaType;                // 媒体类型
  url: string | Resource;         // 媒体资源
  thumbnail?: string | Resource;  // 缩略图（视频用）
  category?: MediaCategory;       // 媒体分类
  description?: string;           // 媒体描述
  width?: number;                 // 宽度
  height?: number;                // 高度
  duration?: number;              // 时长（视频用，单位秒）
}

// 观点站队数据接口
export interface StanceData {
  userStance: StanceType;           // 当前用户的立场
  supportCount: number;             // 支持数量
  opposeCount: number;              // 反对数量
  neutralCount: number;             // 中立数量
  totalCount: number;               // 总投票数
}

// 情绪分析数据接口
export interface EmotionData {
  emotion: EmotionType;             // 主要情绪类型
  intensity: number;                // 情绪强度 (0-100)
  emotionDistribution: Map<EmotionType, number>; // 情绪分布
}

// 评论质量数据接口
export interface QualityData {
  quality: CommentQualityType;      // 评论质量类型
  tags: string[];                   // 质量标签（如"深度分析"、"专业评论"）
  isFolded: boolean;                // 是否被折叠
  foldReason?: string;              // 折叠原因
}

export interface CommentItemInterface {
  icon: ResourceStr;
  name: ResourceStr;
  favorCount: number;
  content: ResourceStr;
  timePosition: ResourceStr;
  reviewCnt?: number;
  subContent?: ResourceStr;
  // 新增字段
  stanceData?: StanceData;          // 观点站队数据
  emotionData?: EmotionData;        // 情绪分析数据
  qualityData?: QualityData;        // 评论质量数据
  isControversial?: boolean;        // 是否为争议话题
  mediaList?: MediaData[];          // 媒体列表（图片、视频、表情包）
}

export class CommentItem implements CommentItemInterface {
  icon: ResourceStr;
  name: ResourceStr;
  favorCount: number;
  content: ResourceStr;
  timePosition: ResourceStr;
  reviewCnt?: number;
  subContent?: ResourceStr;
  stanceData?: StanceData;
  emotionData?: EmotionData;
  qualityData?: QualityData;
  isControversial?: boolean;
  mediaList?: MediaData[];

  constructor(item: CommentItemInterface) {
    this.icon = item.icon;
    this.name = item.name;
    this.favorCount = item.favorCount;
    this.content = item.content;
    this.timePosition = item.timePosition;
    if (item?.reviewCnt) {
      this.reviewCnt = item.reviewCnt;
    }
    if (item?.subContent) {
      this.subContent = item.subContent;
    }
    if (item?.stanceData) {
      this.stanceData = item.stanceData;
    }
    if (item?.emotionData) {
      this.emotionData = item.emotionData;
    }
    if (item?.qualityData) {
      this.qualityData = item.qualityData;
    }
    if (item?.isControversial !== undefined) {
      this.isControversial = item.isControversial;
    }
    if (item?.mediaList) {
      this.mediaList = item.mediaList;
    }
  }
}
