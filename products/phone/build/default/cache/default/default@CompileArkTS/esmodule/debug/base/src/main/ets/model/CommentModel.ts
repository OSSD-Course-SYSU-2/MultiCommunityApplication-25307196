import { StanceType, EmotionType, CommentQualityType } from "@normalized:N&&&base/src/main/ets/viewmodel/CommentViewModel&1.0.0";
import type { CommentItemInterface, StanceData, EmotionData, QualityData } from "@normalized:N&&&base/src/main/ets/viewmodel/CommentViewModel&1.0.0";
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
        icon: { "id": 67109210, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109173, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 41,
        content: { "id": 67109161, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        timePosition: { "id": 67109180, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        reviewCnt: 123,
        subContent: { "id": 67109179, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
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
        icon: { "id": 67109211, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109174, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 36,
        content: { "id": 67109162, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        timePosition: { "id": 67109181, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        reviewCnt: 12,
        subContent: { "id": 67109179, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
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
        icon: { "id": 67109212, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109175, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 432,
        content: { "id": 67109163, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        timePosition: { "id": 67109182, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
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
        icon: { "id": 67109222, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109172, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 33,
        content: { "id": 67109132, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        timePosition: { "id": 67109182, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
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
        icon: { "id": 67109210, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109176, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 6,
        content: { "id": 67109133, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        timePosition: { "id": 67109183, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
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
        icon: { "id": 67109211, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109167, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 5,
        content: { "id": 67109134, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        timePosition: { "id": 67109184, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
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
        icon: { "id": 67109212, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109168, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 33,
        content: { "id": 67109135, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        timePosition: { "id": 67109185, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
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
];
