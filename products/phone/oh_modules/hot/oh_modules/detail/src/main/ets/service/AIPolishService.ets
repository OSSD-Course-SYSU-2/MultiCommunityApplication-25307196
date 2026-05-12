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

import {
  PolishStyle,
  PolishResult,
  PolishOptions,
  AIPolishRequest,
  AIPolishResponse,
  QualityAnalysisResult,
  QualityIssue,
  IssueType,
  IssueSeverity,
  SimilarComment,
  ReadabilityInfo,
  ReadabilityLevel,
  SentimentInfo,
  SentimentLabel,
  DEFAULT_POLISH_OPTIONS
} from 'base';

/**
 * AI评论润色服务
 * 提供智能润色、质量分析等功能
 */
export class AIPolishService {
  private static instance: AIPolishService;
  
  // 私有构造函数（单例模式）
  private constructor() {}
  
  // 获取单例实例
  static getInstance(): AIPolishService {
    if (!AIPolishService.instance) {
      AIPolishService.instance = new AIPolishService();
    }
    return AIPolishService.instance;
  }
  
  /**
   * AI润色评论
   * @param request 润色请求参数
   * @returns 润色结果
   */
  async polishComment(request: AIPolishRequest): Promise<AIPolishResponse> {
    try {
      // 模拟网络延迟
      await this.delay(800 + Math.random() * 400);
      
      const options = request.options || DEFAULT_POLISH_OPTIONS;
      const polishedText = this.applyPolishStyle(request.text, request.style);
      const keywords = options.enableKeywords ? this.extractKeywords(request.text) : [];
      const sentiment = this.analyzeSentiment(polishedText);
      const suggestions = this.generateSuggestions(request.text, polishedText);
      
      const result: PolishResult = {
        originalText: request.text,
        polishedText: polishedText,
        style: request.style,
        confidence: 0.75 + Math.random() * 0.2,
        suggestions: suggestions,
        keywords: keywords,
        sentiment: sentiment,
        timestamp: Date.now()
      };
      
      return {
        success: true,
        result: result
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'POLISH_ERROR',
          message: '润色失败，请重试',
          details: String(error)
        }
      };
    }
  }
  
  /**
   * 分析评论质量
   * @param text 评论文本
   * @returns 质量分析结果
   */
  async analyzeQuality(text: string): Promise<QualityAnalysisResult> {
    // 模拟网络延迟
    await this.delay(500 + Math.random() * 300);
    
    const issues: QualityIssue[] = [];
    const suggestions: string[] = [];
    const similarComments: SimilarComment[] = [];
    
    // 检测内容长度
    if (text.length < 10) {
      issues.push({
        type: IssueType.TOO_SHORT,
        description: '评论内容过短，建议增加更多细节',
        severity: IssueSeverity.MEDIUM,
        position: { start: 0, end: text.length },
        suggestion: '可以描述更多细节或表达更具体的观点'
      });
      suggestions.push('建议增加评论长度，表达更完整的观点');
    }
    
    // 检测无意义内容
    if (this.isMeaningless(text)) {
      issues.push({
        type: IssueType.MEANINGLESS,
        description: '评论内容缺乏实质意义',
        severity: IssueSeverity.HIGH,
        position: { start: 0, end: text.length },
        suggestion: '尝试表达更有价值的观点或感受'
      });
      suggestions.push('建议表达更有价值的观点');
    }
    
    // 检测情绪过激
    if (this.isEmotionalExtreme(text)) {
      issues.push({
        type: IssueType.EMOTIONAL_EXTREME,
        description: '评论情绪过于激烈',
        severity: IssueSeverity.MEDIUM,
        position: { start: 0, end: text.length },
        suggestion: '可以尝试用更理性的方式表达'
      });
      suggestions.push('建议用更理性的方式表达观点');
    }
    
    // 检测重复内容
    if (this.hasDuplicate(text)) {
      issues.push({
        type: IssueType.DUPLICATE,
        description: '评论中存在重复内容',
        severity: IssueSeverity.LOW,
        position: { start: 0, end: text.length },
        suggestion: '删除重复部分，使表达更简洁'
      });
    }
    
    // 计算质量分数
    let qualityScore = 100;
    issues.forEach(issue => {
      if (issue.severity === IssueSeverity.CRITICAL) qualityScore -= 30;
      else if (issue.severity === IssueSeverity.HIGH) qualityScore -= 20;
      else if (issue.severity === IssueSeverity.MEDIUM) qualityScore -= 10;
      else qualityScore -= 5;
    });
    qualityScore = Math.max(0, Math.min(100, qualityScore));
    
    // 可读性分析
    const readability = this.analyzeReadability(text);
    
    // 模拟相似评论
    if (text.length > 20) {
      similarComments.push({
        content: '这个观点很有道理，我也这么认为',
        similarity: 0.3 + Math.random() * 0.2,
        author: '用户A',
        timestamp: Date.now() - 3600000
      });
    }
    
    return {
      isLowQuality: qualityScore < 40,
      qualityScore: qualityScore,
      issues: issues,
      suggestions: suggestions,
      similarComments: similarComments,
      readability: readability,
      timestamp: Date.now()
    };
  }
  
  // 应用润色风格
  private applyPolishStyle(text: string, style: PolishStyle): string {
    const stylePrefixes = new Map<PolishStyle, string>();
    stylePrefixes.set(PolishStyle.LITERARY, '如诗如画，');
    stylePrefixes.set(PolishStyle.SARCASTIC, '哈哈，');
    stylePrefixes.set(PolishStyle.PROFESSIONAL, '从专业角度来看，');
    stylePrefixes.set(PolishStyle.CASUAL, '说真的，');
    stylePrefixes.set(PolishStyle.EMOTIONAL, '真心觉得，');
    
    const prefix = stylePrefixes.get(style) || '';
    
    // 根据风格调整文本
    let polishedText = text;
    
    if (style === PolishStyle.LITERARY) {
      polishedText = this.addLiteraryTouch(text);
    } else if (style === PolishStyle.SARCASTIC) {
      polishedText = this.addSarcasticTouch(text);
    } else if (style === PolishStyle.PROFESSIONAL) {
      polishedText = this.addProfessionalTouch(text);
    }
    
    return prefix + polishedText;
  }
  
  // 添加文艺风格
  private addLiteraryTouch(text: string): string {
    const literaryEndings = ['，令人心旷神怡', '，如沐春风', '，别有一番韵味'];
    const ending = literaryEndings[Math.floor(Math.random() * literaryEndings.length)];
    return text + ending;
  }
  
  // 添加吐槽风格
  private addSarcasticTouch(text: string): string {
    const sarcasticEndings = ['，这操作真是绝了', '，我服了', '，厉害了我的哥'];
    const ending = sarcasticEndings[Math.floor(Math.random() * sarcasticEndings.length)];
    return text + ending;
  }
  
  // 添加专业风格
  private addProfessionalTouch(text: string): string {
    const professionalEndings = ['，值得深入思考', '，有其独到之处', '，体现了专业水准'];
    const ending = professionalEndings[Math.floor(Math.random() * professionalEndings.length)];
    return text + ending;
  }
  
  // 提取关键词
  private extractKeywords(text: string): string[] {
    // 简单的关键词提取（实际应使用NLP算法）
    const words = text.split(/[\s，。！？、；：""''（）【】《》]/);
    const keywords = words
      .filter(word => word.length >= 2 && word.length <= 6)
      .slice(0, 5);
    return keywords;
  }
  
  // 分析情感
  private analyzeSentiment(text: string): SentimentInfo {
    // 简单的情感分析（实际应使用NLP算法）
    const positiveWords = ['好', '棒', '优秀', '喜欢', '赞', '精彩', '完美'];
    const negativeWords = ['差', '烂', '糟糕', '讨厌', '失望', '垃圾', '无聊'];
    
    let positiveCount = 0;
    let negativeCount = 0;
    
    positiveWords.forEach(word => {
      if (text.includes(word)) positiveCount++;
    });
    
    negativeWords.forEach(word => {
      if (text.includes(word)) negativeCount++;
    });
    
    const score = (positiveCount - negativeCount) / Math.max(1, positiveCount + negativeCount + 1);
    let label: SentimentLabel;
    
    if (score > 0.2) label = SentimentLabel.POSITIVE;
    else if (score < -0.2) label = SentimentLabel.NEGATIVE;
    else label = SentimentLabel.NEUTRAL;
    
    return {
      score: score,
      label: label,
      confidence: 0.7 + Math.random() * 0.2
    };
  }
  
  // 生成优化建议
  private generateSuggestions(originalText: string, polishedText: string): string[] {
    const suggestions: string[] = [];
    
    if (originalText.length < 20) {
      suggestions.push('可以增加更多细节描述');
    }
    
    if (!originalText.includes('，') && !originalText.includes('。')) {
      suggestions.push('可以添加标点符号使表达更清晰');
    }
    
    suggestions.push('润色后的表达更加流畅自然');
    
    return suggestions;
  }
  
  // 检测无意义内容
  private isMeaningless(text: string): boolean {
    const meaninglessPatterns = [
      /^(.)\1+$/, // 重复字符
      /^[0-9]+$/, // 纯数字
      /^[a-zA-Z]+$/ // 纯字母
    ];
    
    return meaninglessPatterns.some(pattern => pattern.test(text.trim()));
  }
  
  // 检测情绪过激
  private isEmotionalExtreme(text: string): boolean {
    const extremeWords = ['垃圾', '傻逼', '脑残', '去死', '滚蛋'];
    return extremeWords.some(word => text.includes(word));
  }
  
  // 检测重复内容
  private hasDuplicate(text: string): boolean {
    // 简单的重复检测
    const words = text.split('');
    for (let i = 0; i < words.length - 2; i++) {
      if (words[i] === words[i + 1] && words[i + 1] === words[i + 2]) {
        return true;
      }
    }
    return false;
  }
  
  // 分析可读性
  private analyzeReadability(text: string): ReadabilityInfo {
    const sentences = text.split(/[。！？]/).filter(s => s.length > 0);
    const avgSentenceLength = sentences.length > 0 
      ? sentences.reduce((sum, s) => sum + s.length, 0) / sentences.length 
      : text.length;
    
    // 简单的复杂词汇检测
    const complexWords = text.match(/[^\s，。！？、；：""''（）【】《》]{4,}/g) || [];
    
    let level: ReadabilityLevel;
    if (avgSentenceLength < 10) level = ReadabilityLevel.VERY_EASY;
    else if (avgSentenceLength < 15) level = ReadabilityLevel.EASY;
    else if (avgSentenceLength < 20) level = ReadabilityLevel.MEDIUM;
    else if (avgSentenceLength < 30) level = ReadabilityLevel.HARD;
    else level = ReadabilityLevel.VERY_HARD;
    
    const score = Math.max(0, 100 - avgSentenceLength * 2 - complexWords.length * 5);
    
    return {
      score: score,
      level: level,
      avgSentenceLength: avgSentenceLength,
      complexWords: complexWords.length
    };
  }
  
  // 延迟函数
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
