# AI评论润色与优化功能

## 功能概述

为 MultiCommunityApplication 项目新增了完整的 AI 评论润色与优化功能，包括：

1. **智能润色** - 五种润色风格（文艺风、吐槽风、专业点评风、轻松风、情感风）
2. **质量分析** - 自动检测评论质量问题，提供优化建议
3. **情感分析** - 分析评论情感倾向
4. **关键词提取** - 自动提取评论关键词
5. **可读性分析** - 评估评论可读性等级

## 文件结构

```
commons/base/src/main/ets/model/
  └── AICommentModel.ets          # AI润色数据模型

features/detail/src/main/ets/
  ├── service/
  │   └── AIPolishService.ets     # AI服务接口
  └── view/
      ├── AIPolishStyleView.ets        # 风格选择组件
      ├── AIPolishResultView.ets       # 结果展示组件
      ├── AIQualityAnalysisView.ets    # 质量分析组件
      ├── AIPolishPanelView.ets        # 完整润色面板
      └── CommentInputWithAIView.ets   # 增强版评论输入组件
```

## 使用方法

### 1. 基础使用 - 完整润色面板

```typescript
import { AIPolishPanelView } from './view/AIPolishPanelView';

@Component
struct MyComponent {
  build() {
    Column() {
      AIPolishPanelView({
        onComplete: (text: string) => {
          // 用户确认使用润色后的文本
          console.log('润色结果:', text);
        },
        onCancel: () => {
          // 用户取消润色
          console.log('用户取消');
        }
      });
    }
  }
}
```

### 2. 集成到评论输入

```typescript
import { CommentInputWithAIView } from './view/CommentInputWithAIView';

@Component
struct CommentPage {
  build() {
    Column() {
      // 评论列表
      CommentListView();
      
      // 带AI润色功能的评论输入
      CommentInputWithAIView();
    }
  }
}
```

### 3. 单独使用风格选择组件

```typescript
import { AIPolishStyleView } from './view/AIPolishStyleView';
import { PolishStyle } from 'base';

@Component
struct MyComponent {
  @State selectedStyle: PolishStyle = PolishStyle.LITERARY;
  
  build() {
    AIPolishStyleView({
      selectedStyle: this.selectedStyle,
      onStyleSelected: (style: PolishStyle) => {
        this.selectedStyle = style;
        console.log('选中风格:', style);
      }
    });
  }
}
```

### 4. 单独使用质量分析组件

```typescript
import { AIQualityAnalysisView } from './view/AIQualityAnalysisView';
import { AIPolishService } from './service/AIPolishService';

@Component
struct MyComponent {
  @State qualityResult: QualityAnalysisResult | null = null;
  private aiService = AIPolishService.getInstance();
  
  async aboutToAppear() {
    this.qualityResult = await this.aiService.analyzeQuality('这是一条测试评论');
  }
  
  build() {
    if (this.qualityResult) {
      AIQualityAnalysisView({
        analysisResult: this.qualityResult,
        onSuggestionClick: (suggestion: string) => {
          console.log('点击建议:', suggestion);
        }
      });
    }
  }
}
```

### 5. 直接调用AI服务

```typescript
import { AIPolishService } from './service/AIPolishService';
import { PolishStyle, AIPolishRequest } from 'base';

// 获取服务实例
const aiService = AIPolishService.getInstance();

// 润色评论
const request: AIPolishRequest = {
  text: '这个产品很好用',
  style: PolishStyle.PROFESSIONAL
};

const response = await aiService.polishComment(request);
if (response.success && response.result) {
  console.log('润色结果:', response.result.polishedText);
}

// 分析质量
const qualityResult = await aiService.analyzeQuality('这是一条评论');
console.log('质量分数:', qualityResult.qualityScore);
```

## 润色风格说明

| 风格 | 说明 | 示例 |
|------|------|------|
| 文艺风 | 诗意优雅，如诗如画 | "如诗如画，这个产品很好用，令人心旷神怡" |
| 吐槽风 | 幽默调侃，妙趣横生 | "哈哈，这个产品很好用，这操作真是绝了" |
| 专业点评 | 理性深度，见解独到 | "从专业角度来看，这个产品很好用，值得深入思考" |
| 轻松风 | 活泼亲切，自然随性 | "说真的，这个产品很好用" |
| 情感风 | 感性共鸣，触动人心 | "真心觉得，这个产品很好用" |

## 质量分析功能

系统会自动检测以下问题：

- **内容过短** - 评论长度不足
- **无意义内容** - 纯数字、重复字符等
- **情绪过激** - 包含极端情绪词汇
- **重复内容** - 存在重复的文字
- **垃圾信息** - 疑似垃圾评论
- **冒犯性内容** - 包含不当言论

## 可读性分析

系统会评估评论的可读性等级：

- 非常易读（平均句长 < 10）
- 易读（平均句长 < 15）
- 中等（平均句长 < 20）
- 较难（平均句长 < 30）
- 很难（平均句长 >= 30）

## 注意事项

1. 当前实现为模拟服务，实际使用时需要接入真实的AI服务API
2. 图标资源需要自行添加到资源文件中：
   - `ic_ai_polish` - AI润色按钮图标
   - `ic_polish_literary` - 文艺风图标
   - `ic_polish_sarcastic` - 吐槽风图标
   - `ic_polish_professional` - 专业点评图标
   - `ic_polish_casual` - 轻松风图标
   - `ic_polish_emotional` - 情感风图标

3. 建议在实际项目中：
   - 添加用户偏好设置，记住用户常用的润色风格
   - 实现润色历史记录功能
   - 添加网络错误处理和重试机制
   - 考虑添加离线缓存功能

## 扩展建议

1. **多语言支持** - 可以扩展支持英文润色
2. **自定义风格** - 允许用户创建自定义润色风格
3. **批量润色** - 支持批量处理多条评论
4. **润色对比** - 同时展示多种风格的润色结果供选择
5. **学习用户风格** - 根据用户历史评论学习个性化润色风格

🎯
