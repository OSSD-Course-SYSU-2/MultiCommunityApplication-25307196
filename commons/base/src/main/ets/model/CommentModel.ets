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

import { CommentItemInterface, StanceType, EmotionType, CommentQualityType, StanceData, EmotionData, QualityData } from '../viewmodel/CommentViewModel';

// 创建情绪分布Map的辅助函数
function createEmotionDistribution(angry: number, agree: number, tease: number, rational: number, neutral: number): Map<EmotionType, number> {
  const distribution = new Map<EmotionType, number>();
  distribution.set(EmotionType.ANGRY, angry);
  distribution.set(EmotionType.AGREE, agree);
  distribution.set(EmotionType.TEASE, tease);
  distribution.set(EmotionType.RATIONAL, rational);
  distribution.set(EmotionType.NEUTRAL, neutral);
  return distribution;
}

export const COMMENT_LIST: CommentItemInterface[] = [
  {
    icon: $r('app.media.ic_comment_1'),
    name: $r('app.string.name_6'),
    favorCount: 41,
    content: $r('app.string.content_7'),
    timePosition: $r('app.string.time_position_1'),
    reviewCnt: 123,
    subContent: $r('app.string.sub_content_1'),
    // 争议话题，带观点站队
    isControversial: true,
    stanceData: {
      userStance: StanceType.NONE,
      supportCount: 156,
      opposeCount: 89,
      neutralCount: 45,
      totalCount: 290
    } as StanceData,
    // 情绪分析数据
    emotionData: {
      emotion: EmotionType.RATIONAL,
      intensity: 75,
      emotionDistribution: createEmotionDistribution(15, 35, 20, 45, 25)
    } as EmotionData,
    // 高质量评论
    qualityData: {
      quality: CommentQualityType.HIGH,
      tags: ['深度分析', '专业评论'],
      isFolded: false
    } as QualityData
  },
  {
    icon: $r('app.media.ic_comment_2'),
    name: $r('app.string.name_7'),
    favorCount: 36,
    content: $r('app.string.content_8'),
    timePosition: $r('app.string.time_position_2'),
    reviewCnt: 12,
    subContent: $r('app.string.sub_content_1'),
    // 情绪分析数据
    emotionData: {
      emotion: EmotionType.AGREE,
      intensity: 60,
      emotionDistribution: createEmotionDistribution(5, 55, 15, 20, 5)
    } as EmotionData,
    // 正常质量评论
    qualityData: {
      quality: CommentQualityType.NORMAL,
      tags: [],
      isFolded: false
    } as QualityData
  },
  {
    icon : $r('app.media.ic_comment_3'),
    name: $r('app.string.name_8'),
    favorCount: 432,
    content: $r('app.string.content_9'),
    timePosition: $r('app.string.time_position_3'),
    // 争议话题
    isControversial: true,
    stanceData: {
      userStance: StanceType.NONE,
      supportCount: 234,
      opposeCount: 198,
      neutralCount: 67,
      totalCount: 499
    } as StanceData,
    // 情绪分析数据
    emotionData: {
      emotion: EmotionType.ANGRY,
      intensity: 85,
      emotionDistribution: createEmotionDistribution(60, 10, 5, 15, 10)
    } as EmotionData,
    // 高质量评论
    qualityData: {
      quality: CommentQualityType.HIGH,
      tags: ['深度分析'],
      isFolded: false
    } as QualityData
  },
  {
    icon : $r('app.media.ic_icon_2'),
    name : $r('app.string.name_5'),
    favorCount: 33,
    content : $r('app.string.content_10'),
    timePosition: $r('app.string.time_position_3'),
    // 情绪分析数据
    emotionData: {
      emotion: EmotionType.TEASE,
      intensity: 50,
      emotionDistribution: createEmotionDistribution(10, 20, 50, 10, 10)
    } as EmotionData,
    // 正常质量评论
    qualityData: {
      quality: CommentQualityType.NORMAL,
      tags: [],
      isFolded: false
    } as QualityData
  },
  {
    icon : $r('app.media.ic_comment_1'),
    name : $r('app.string.name_9'),
    favorCount: 6,
    content : $r('app.string.content_11'),
    timePosition: $r('app.string.time_position_4'),
    // 情绪分析数据
    emotionData: {
      emotion: EmotionType.NEUTRAL,
      intensity: 30,
      emotionDistribution: createEmotionDistribution(5, 10, 10, 15, 60)
    } as EmotionData,
    // 低质量评论（水评）
    qualityData: {
      quality: CommentQualityType.LOW,
      tags: [],
      isFolded: true,
      foldReason: '内容过短，疑似水评'
    } as QualityData
  },
  {
    icon : $r('app.media.ic_comment_2'),
    name : $r('app.string.name_10'),
    favorCount: 5,
    content : $r('app.string.content_12'),
    timePosition: $r('app.string.time_position_5'),
    // 情绪分析数据
    emotionData: {
      emotion: EmotionType.ANGRY,
      intensity: 90,
      emotionDistribution: createEmotionDistribution(80, 5, 5, 5, 5)
    } as EmotionData,
    // 低质量评论（引战）
    qualityData: {
      quality: CommentQualityType.LOW,
      tags: [],
      isFolded: true,
      foldReason: '疑似引战言论'
    } as QualityData
  },
  {
    icon : $r('app.media.ic_comment_3'),
    name : $r('app.string.name_11'),
    favorCount: 33,
    content : $r('app.string.content_13'),
    timePosition: $r('app.string.time_position_6'),
    // 情绪分析数据
    emotionData: {
      emotion: EmotionType.RATIONAL,
      intensity: 65,
      emotionDistribution: createEmotionDistribution(10, 25, 15, 50, 10)
    } as EmotionData,
    // 正常质量评论
    qualityData: {
      quality: CommentQualityType.NORMAL,
      tags: [],
      isFolded: false
    } as QualityData
  }
]