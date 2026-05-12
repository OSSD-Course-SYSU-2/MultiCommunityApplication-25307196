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

import { CommonConstants as BaseCommon } from 'base';
import { 
  QualityAnalysisResult, 
  QualityIssue, 
  IssueType, 
  IssueSeverity,
  SimilarComment,
  ReadabilityLevel 
} from 'base';

/**
 * AI评论质量分析组件
 * 分析评论质量，识别问题，提供优化建议
 */
@Component
export struct AIQualityAnalysisView {
  @Prop analysisResult: QualityAnalysisResult;
  @State expandedIssue: string = ''; // 展开的问题ID
  
  // 优化建议回调
  onSuggestionClick?: (suggestion: string) => void;

  build() {
    Column() {
      // 质量评分概览
      this.QualityScoreView();
      
      // 质量问题列表
      if (this.analysisResult.issues.length > 0) {
        this.IssuesListView();
      }
      
      // 优化建议
      if (this.analysisResult.suggestions.length > 0) {
        this.SuggestionsView();
      }
      
      // 相似评论检测
      if (this.analysisResult.similarComments.length > 0) {
        this.SimilarCommentsView();
      }
      
      // 可读性分析
      this.ReadabilityView();
    }
    .width(BaseCommon.FULL_PERCENT)
    .padding(16)
    .backgroundColor($r('app.color.white'))
    .borderRadius(12);
  }

  @Builder
  QualityScoreView() {
    Column() {
      Row() {
        Text('📊 质量分析')
          .fontSize(16)
          .fontColor($r('app.color.font_color_normal'))
          .fontWeight(FontWeight.Bold);
        
        Blank();
        
        // 质量等级标签
        Text(this.getQualityLabel())
          .fontSize(12)
          .fontColor(Color.White)
          .backgroundColor(this.getQualityColor())
          .borderRadius(12)
          .padding({ left: 12, right: 12, top: 4, bottom: 4 });
      }
      .width(BaseCommon.FULL_PERCENT);
      
      // 质量分数进度条
      Row() {
        Text(`${this.analysisResult.qualityScore}分`)
          .fontSize(24)
          .fontColor(this.getQualityColor())
          .fontWeight(FontWeight.Bold);
        
        Column() {
          Row()
            .width(`${this.analysisResult.qualityScore}%`)
            .height(8)
            .backgroundColor(this.getQualityColor())
            .borderRadius(4);
        }
        .width(BaseCommon.FULL_PERCENT)
        .layoutWeight(1)
        .backgroundColor('#E0E0E0')
        .borderRadius(4)
        .margin({ left: 12 });
      }
      .width(BaseCommon.FULL_PERCENT)
      .alignItems(VerticalAlign.Center)
      .margin({ top: 16 });
    }
    .width(BaseCommon.FULL_PERCENT);
  }

  @Builder
  IssuesListView() {
    Column() {
      Row() {
        Text(`⚠️ 发现 ${this.analysisResult.issues.length} 个问题`)
          .fontSize(14)
          .fontColor('#FF5722')
          .fontWeight(FontWeight.Bold);
      }
      .width(BaseCommon.FULL_PERCENT)
      .margin({ top: 16, bottom: 8 });
      
      ForEach(this.analysisResult.issues, (issue: QualityIssue, index: number) => {
        this.IssueItem(issue, index);
      }, (issue: QualityIssue, index: number) => index.toString());
    }
    .width(BaseCommon.FULL_PERCENT);
  }

  @Builder
  IssueItem(issue: QualityIssue, index: number) {
    Column() {
      Row() {
        // 问题类型图标
        Text(this.getIssueIcon(issue.type))
          .fontSize(16);
        
        // 问题类型名称
        Text(this.getIssueTypeName(issue.type))
          .fontSize(12)
          .fontColor($r('app.color.font_color_normal'))
          .fontWeight(FontWeight.Bold)
          .margin({ left: 8 });
        
        Blank();
        
        // 严重程度标签
        Text(this.getSeverityLabel(issue.severity))
          .fontSize(10)
          .fontColor(Color.White)
          .backgroundColor(this.getSeverityColor(issue.severity))
          .borderRadius(8)
          .padding({ left: 8, right: 8, top: 2, bottom: 2 });
        
        // 展开/收起按钮
        Text(this.expandedIssue === index.toString() ? '▲' : '▼')
          .fontSize(10)
          .fontColor('#999999')
          .margin({ left: 8 })
          .onClick(() => {
            this.expandedIssue = this.expandedIssue === index.toString() ? '' : index.toString();
          });
      }
      .width(BaseCommon.FULL_PERCENT);
      
      // 问题描述
      if (this.expandedIssue === index.toString()) {
        Column() {
          Text(issue.description)
            .fontSize(12)
            .fontColor('#666666')
            .width(BaseCommon.FULL_PERCENT)
            .margin({ top: 8 });
          
          // 修复建议
          Row() {
            Text('💡 建议：')
              .fontSize(12)
              .fontColor('#2196F3');
            
            Text(issue.suggestion)
              .fontSize(12)
              .fontColor('#666666')
              .layoutWeight(1);
          }
          .width(BaseCommon.FULL_PERCENT)
          .margin({ top: 8 });
        }
        .width(BaseCommon.FULL_PERCENT)
        .padding(8)
        .backgroundColor('#F5F5F5')
        .borderRadius(8)
        .margin({ top: 8 });
      }
    }
    .width(BaseCommon.FULL_PERCENT)
    .padding(8)
    .backgroundColor('#FFF3E0')
    .borderRadius(8)
    .margin({ top: 8 });
  }

  @Builder
  SuggestionsView() {
    Column() {
      Row() {
        Text('💡 优化建议')
          .fontSize(14)
          .fontColor('#4CAF50')
          .fontWeight(FontWeight.Bold);
      }
      .width(BaseCommon.FULL_PERCENT)
      .margin({ top: 16, bottom: 8 });
      
      ForEach(this.analysisResult.suggestions, (suggestion: string, index: number) => {
        Row() {
          Text(`${index + 1}.`)
            .fontSize(12)
            .fontColor('#4CAF50');
          
          Text(suggestion)
            .fontSize(12)
            .fontColor('#666666')
            .layoutWeight(1)
            .margin({ left: 4 });
        }
        .width(BaseCommon.FULL_PERCENT)
        .padding(8)
        .backgroundColor('#E8F5E9')
        .borderRadius(8)
        .margin({ top: 4 })
        .onClick(() => {
          if (this.onSuggestionClick) {
            this.onSuggestionClick(suggestion);
          }
        });
      }, (suggestion: string, index: number) => index.toString());
    }
    .width(BaseCommon.FULL_PERCENT);
  }

  @Builder
  SimilarCommentsView() {
    Column() {
      Row() {
        Text('🔍 相似评论检测')
          .fontSize(14)
          .fontColor('#FF9800')
          .fontWeight(FontWeight.Bold);
        
        Text(`发现 ${this.analysisResult.similarComments.length} 条`)
          .fontSize(12)
          .fontColor('#999999')
          .margin({ left: 8 });
      }
      .width(BaseCommon.FULL_PERCENT)
      .margin({ top: 16, bottom: 8 });
      
      ForEach(this.analysisResult.similarComments, (comment: SimilarComment, index: number) => {
        Row() {
          Column() {
            Text(comment.content)
              .fontSize(12)
              .fontColor('#666666')
              .maxLines(2)
              .textOverflow({ overflow: TextOverflow.Ellipsis });
            
            Row() {
              Text(`作者：${comment.author}`)
                .fontSize(10)
                .fontColor('#999999');
              
              Text(`相似度：${Math.round(comment.similarity * 100)}%`)
                .fontSize(10)
                .fontColor('#FF9800')
                .margin({ left: 8 });
            }
            .margin({ top: 4 });
          }
          .layoutWeight(1);
        }
        .width(BaseCommon.FULL_PERCENT)
        .padding(8)
        .backgroundColor('#FFF8E1')
        .borderRadius(8)
        .margin({ top: 4 });
      }, (comment: SimilarComment, index: number) => index.toString());
    }
    .width(BaseCommon.FULL_PERCENT);
  }

  @Builder
  ReadabilityView() {
    Column() {
      Row() {
        Text('📖 可读性分析')
          .fontSize(14)
          .fontColor('#9C27B0')
          .fontWeight(FontWeight.Bold);
      }
      .width(BaseCommon.FULL_PERCENT)
      .margin({ top: 16, bottom: 8 });
      
      Row() {
        // 可读性等级
        Column() {
          Text(this.getReadabilityLabel(this.analysisResult.readability.level))
            .fontSize(14)
            .fontColor('#9C27B0')
            .fontWeight(FontWeight.Bold);
          
          Text('可读性等级')
            .fontSize(10)
            .fontColor('#999999')
            .margin({ top: 4 });
        }
        .layoutWeight(1);
        
        // 平均句子长度
        Column() {
          Text(`${this.analysisResult.readability.avgSentenceLength}`)
            .fontSize(14)
            .fontColor('#9C27B0')
            .fontWeight(FontWeight.Bold);
          
          Text('平均句长')
            .fontSize(10)
            .fontColor('#999999')
            .margin({ top: 4 });
        }
        .layoutWeight(1);
        
        // 复杂词汇数
        Column() {
          Text(`${this.analysisResult.readability.complexWords}`)
            .fontSize(14)
            .fontColor('#9C27B0')
            .fontWeight(FontWeight.Bold);
          
          Text('复杂词汇')
            .fontSize(10)
            .fontColor('#999999')
            .margin({ top: 4 });
        }
        .layoutWeight(1);
      }
      .width(BaseCommon.FULL_PERCENT);
    }
    .width(BaseCommon.FULL_PERCENT);
  }

  // 获取质量等级标签
  getQualityLabel(): string {
    const score = this.analysisResult.qualityScore;
    if (score >= 80) return '优秀';
    if (score >= 60) return '良好';
    if (score >= 40) return '一般';
    return '需改进';
  }

  // 获取质量颜色
  getQualityColor(): string {
    const score = this.analysisResult.qualityScore;
    if (score >= 80) return '#4CAF50';
    if (score >= 60) return '#2196F3';
    if (score >= 40) return '#FF9800';
    return '#F44336';
  }

  // 获取问题类型图标
  getIssueIcon(type: IssueType): string {
    const iconMap = new Map<IssueType, string>();
    iconMap.set(IssueType.DUPLICATE, '🔄');
    iconMap.set(IssueType.TOO_SHORT, '📏');
    iconMap.set(IssueType.SPAM, '🚫');
    iconMap.set(IssueType.OFFENSIVE, '⚠️');
    iconMap.set(IssueType.MEANINGLESS, '❓');
    iconMap.set(IssueType.GRAMMAR, '✍️');
    iconMap.set(IssueType.EMOTIONAL_EXTREME, '😤');
    iconMap.set(IssueType.LACK_SUBSTANCE, '📝');
    return iconMap.get(type) || '⚠️';
  }

  // 获取问题类型名称
  getIssueTypeName(type: IssueType): string {
    const nameMap = new Map<IssueType, string>();
    nameMap.set(IssueType.DUPLICATE, '重复内容');
    nameMap.set(IssueType.TOO_SHORT, '内容过短');
    nameMap.set(IssueType.SPAM, '垃圾信息');
    nameMap.set(IssueType.OFFENSIVE, '冒犯性内容');
    nameMap.set(IssueType.MEANINGLESS, '无意义内容');
    nameMap.set(IssueType.GRAMMAR, '语法错误');
    nameMap.set(IssueType.EMOTIONAL_EXTREME, '情绪过激');
    nameMap.set(IssueType.LACK_SUBSTANCE, '缺乏实质');
    return nameMap.get(type) || '未知问题';
  }

  // 获取严重程度标签
  getSeverityLabel(severity: IssueSeverity): string {
    const labelMap = new Map<IssueSeverity, string>();
    labelMap.set(IssueSeverity.LOW, '轻微');
    labelMap.set(IssueSeverity.MEDIUM, '中等');
    labelMap.set(IssueSeverity.HIGH, '严重');
    labelMap.set(IssueSeverity.CRITICAL, '严重');
    return labelMap.get(severity) || '未知';
  }

  // 获取严重程度颜色
  getSeverityColor(severity: IssueSeverity): string {
    const colorMap = new Map<IssueSeverity, string>();
    colorMap.set(IssueSeverity.LOW, '#FF9800');
    colorMap.set(IssueSeverity.MEDIUM, '#FF5722');
    colorMap.set(IssueSeverity.HIGH, '#F44336');
    colorMap.set(IssueSeverity.CRITICAL, '#D32F2F');
    return colorMap.get(severity) || '#999999';
  }

  // 获取可读性等级标签
  getReadabilityLabel(level: ReadabilityLevel): string {
    const labelMap = new Map<ReadabilityLevel, string>();
    labelMap.set(ReadabilityLevel.VERY_EASY, '非常易读');
    labelMap.set(ReadabilityLevel.EASY, '易读');
    labelMap.set(ReadabilityLevel.MEDIUM, '中等');
    labelMap.set(ReadabilityLevel.HARD, '较难');
    labelMap.set(ReadabilityLevel.VERY_HARD, '很难');
    return labelMap.get(level) || '未知';
  }
}
