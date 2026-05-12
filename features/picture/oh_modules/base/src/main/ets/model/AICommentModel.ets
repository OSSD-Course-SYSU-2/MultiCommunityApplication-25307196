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
 * AI评论润色与优化功能数据模型
 * 提供智能润色、质量分析、优化建议等功能
 */

// AI润色风格枚举
export enum PolishStyle {
  LITERARY = 'literary',       // 文艺风：诗意、优雅
  SARCASTIC = 'sarcastic',     // 吐槽风：幽默、调侃
  PROFESSIONAL = 'professional', // 专业点评风：理性、深度
  CASUAL = 'casual',           // 轻松风：活泼、亲切
  EMOTIONAL = 'emotional'      // 情感风：感性、共鸣
}

// 润色风格配置
export interface PolishStyleConfig {
  style: PolishStyle;
  name: string;           // 风格名称
  description: string;    // 风格描述
  color: string;          // 主题色
  icon: ResourceStr;      // 图标资源
  example: string;        // 示例文本
}

// AI润色结果接口
export interface PolishResult {
  originalText: string;        // 原始文本
  polishedText: string;        // 润色后文本
  style: PolishStyle;          // 润色风格
  confidence: number;          // 置信度 0-1
  suggestions: string[];       // 优化建议
  keywords: string[];          // 关键词提取
  sentiment: SentimentInfo;    // 情感信息
  timestamp: number;           // 时间戳
}

// 情感信息
export interface SentimentInfo {
  score: number;           // 情感分数 -1到1
  label: SentimentLabel;   // 情感标签
  confidence: number;      // 置信度
}

export enum SentimentLabel {
  POSITIVE = 'positive',   // 积极
  NEGATIVE = 'negative',   // 消极
  NEUTRAL = 'neutral'      // 中性
}

// 评论质量分析结果
export interface QualityAnalysisResult {
  isLowQuality: boolean;       // 是否低质量
  qualityScore: number;        // 质量分数 0-100
  issues: QualityIssue[];      // 质量问题列表
  suggestions: string[];       // 优化建议
  similarComments: SimilarComment[]; // 相似评论
  readability: ReadabilityInfo; // 可读性信息
  timestamp: number;
}

// 质量问题
export interface QualityIssue {
  type: IssueType;             // 问题类型
  description: string;         // 问题描述
  severity: IssueSeverity;     // 严重程度
  position: TextPosition;      // 文本位置
  suggestion: string;          // 修复建议
}

// 问题类型枚举
export enum IssueType {
  DUPLICATE = 'duplicate',         // 重复内容
  TOO_SHORT = 'too_short',         // 过短
  SPAM = 'spam',                   // 垃圾信息
  OFFENSIVE = 'offensive',         // 冒犯性内容
  MEANINGLESS = 'meaningless',     // 无意义
  GRAMMAR = 'grammar',             // 语法错误
  EMOTIONAL_EXTREME = 'emotional_extreme', // 情绪过激
  LACK_SUBSTANCE = 'lack_substance' // 缺乏实质内容
}

// 问题严重程度
export enum IssueSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

// 文本位置
export interface TextPosition {
  start: number;   // 起始位置
  end: number;     // 结束位置
}

// 相似评论
export interface SimilarComment {
  content: string;        // 评论内容
  similarity: number;     // 相似度 0-1
  author: string;         // 作者
  timestamp: number;      // 时间戳
}

// 可读性信息
export interface ReadabilityInfo {
  score: number;          // 可读性分数 0-100
  level: ReadabilityLevel; // 可读性等级
  avgSentenceLength: number; // 平均句子长度
  complexWords: number;   // 复杂词汇数量
}

export enum ReadabilityLevel {
  VERY_EASY = 'very_easy',
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
  VERY_HARD = 'very_hard'
}

// AI润色历史记录
export interface PolishHistory {
  id: string;
  originalText: string;
  polishedText: string;
  style: PolishStyle;
  timestamp: number;
  isUsed: boolean;        // 是否被使用
}

// AI服务请求参数
export interface AIPolishRequest {
  text: string;
  style: PolishStyle;
  context?: string;       // 上下文信息
  userId?: string;        // 用户ID
  options?: PolishOptions;
}

// 润色选项
export interface PolishOptions {
  preserveEmotion: boolean;   // 保留情感
  maxLength: number;          // 最大长度
  minQuality: number;         // 最低质量要求
  enableKeywords: boolean;    // 提取关键词
}

// AI服务响应
export interface AIPolishResponse {
  success: boolean;
  result?: PolishResult;
  error?: AIError;
}

// AI错误信息
export interface AIError {
  code: string;
  message: string;
  details?: string;
}

// 润色风格预设配置
export const POLISH_STYLE_CONFIGS: PolishStyleConfig[] = [
  {
    style: PolishStyle.LITERARY,
    name: '文艺风',
    description: '诗意优雅，如诗如画',
    color: '#9C27B0',
    icon: $r('app.media.ic_icon_1'),
    example: '如诗如画的风景，让人心旷神怡'
  },
  {
    style: PolishStyle.SARCASTIC,
    name: '吐槽风',
    description: '幽默调侃，妙趣横生',
    color: '#FF5722',
    icon: $r('app.media.ic_icon_2'),
    example: '这操作真是绝了，我服了'
  },
  {
    style: PolishStyle.PROFESSIONAL,
    name: '专业点评',
    description: '理性深度，见解独到',
    color: '#2196F3',
    icon: $r('app.media.ic_icon_3'),
    example: '从专业角度来看，这个设计有其独到之处'
  },
  {
    style: PolishStyle.CASUAL,
    name: '轻松风',
    description: '活泼亲切，自然随性',
    color: '#4CAF50',
    icon: $r('app.media.ic_icon_4'),
    example: '说真的，这个真的很不错哦'
  },
  {
    style: PolishStyle.EMOTIONAL,
    name: '情感风',
    description: '感性共鸣，触动人心',
    color: '#E91E63',
    icon: $r('app.media.ic_icon_1'),
    example: '真心觉得，这让我想起了很多往事'
  }
];

// 默认润色选项
export const DEFAULT_POLISH_OPTIONS: PolishOptions = {
  preserveEmotion: true,
  maxLength: 500,
  minQuality: 60,
  enableKeywords: true
};
