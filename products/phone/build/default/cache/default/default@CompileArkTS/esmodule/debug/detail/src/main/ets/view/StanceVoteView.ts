if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface StanceVoteView_Params {
    stanceData?: StanceData;
    userStance?: StanceType;
    onStanceChange?: (stance: StanceType) => void;
}
import { StanceType } from "@normalized:N&&&base/Index&1.0.0";
import type { StanceData } from "@normalized:N&&&base/Index&1.0.0";
export class StanceVoteView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__stanceData = new SynchedPropertyObjectOneWayPU(params.stanceData, this, "stanceData");
        this.__userStance = new SynchedPropertySimpleTwoWayPU(params.userStance, this, "userStance");
        this.onStanceChange = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: StanceVoteView_Params) {
        if (params.onStanceChange !== undefined) {
            this.onStanceChange = params.onStanceChange;
        }
    }
    updateStateVars(params: StanceVoteView_Params) {
        this.__stanceData.reset(params.stanceData);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__stanceData.purgeDependencyOnElmtId(rmElmtId);
        this.__userStance.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__stanceData.aboutToBeDeleted();
        this.__userStance.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __stanceData: SynchedPropertySimpleOneWayPU<StanceData>;
    get stanceData() {
        return this.__stanceData.get();
    }
    set stanceData(newValue: StanceData) {
        this.__stanceData.set(newValue);
    }
    private __userStance: SynchedPropertySimpleTwoWayPU<StanceType>;
    get userStance() {
        return this.__userStance.get();
    }
    set userStance(newValue: StanceType) {
        this.__userStance.set(newValue);
    }
    private onStanceChange?: (stance: StanceType) => void;
    // 计算百分比
    getPercentage(count: number, total: number): string {
        if (total === 0)
            return '0%';
        return Math.round((count / total) * 100) + '%';
    }
    // 处理立场选择
    handleStanceSelect(stance: StanceType) {
        if (this.userStance === stance) {
            // 取消选择
            this.userStance = StanceType.NONE;
        }
        else {
            this.userStance = stance;
        }
        if (this.onStanceChange) {
            this.onStanceChange(this.userStance);
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.padding(12);
            Column.backgroundColor('#F5F5F5');
            Column.borderRadius(8);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 标题
            Text.create('观点站队');
            // 标题
            Text.fontSize(14);
            // 标题
            Text.fontColor('#666666');
            // 标题
            Text.margin({ bottom: 12 });
        }, Text);
        // 标题
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 投票按钮行
            Row.create();
            // 投票按钮行
            Row.width('100%');
            // 投票按钮行
            Row.justifyContent(FlexAlign.Center);
        }, Row);
        // 支持按钮
        this.StanceButton.bind(this)('支持', StanceType.SUPPORT, this.stanceData.supportCount, this.stanceData.totalCount, '#4CAF50');
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.width(12);
        }, Blank);
        Blank.pop();
        // 反对按钮
        this.StanceButton.bind(this)('反对', StanceType.OPPOSE, this.stanceData.opposeCount, this.stanceData.totalCount, '#F44336');
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.width(12);
        }, Blank);
        Blank.pop();
        // 中立按钮
        this.StanceButton.bind(this)('中立', StanceType.NEUTRAL, this.stanceData.neutralCount, this.stanceData.totalCount, '#FF9800');
        // 投票按钮行
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 比例展示
            if (this.userStance !== StanceType.NONE) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width('100%');
                        Row.margin({ top: 8 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(`当前立场比例：支持 ${this.getPercentage(this.stanceData.supportCount, this.stanceData.totalCount)} | 反对 ${this.getPercentage(this.stanceData.opposeCount, this.stanceData.totalCount)} | 中立 ${this.getPercentage(this.stanceData.neutralCount, this.stanceData.totalCount)}`);
                        Text.fontSize(12);
                        Text.fontColor('#666666');
                    }, Text);
                    Text.pop();
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    StanceButton(label: string, stance: StanceType, count: number, total: number, color: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(label);
            Button.fontSize(14);
            Button.fontColor(this.userStance === stance ? Color.White : color);
            Button.backgroundColor(this.userStance === stance ? color : Color.Transparent);
            Button.border({
                width: 1,
                color: color,
                radius: 4
            });
            Button.width(70);
            Button.height(32);
            Button.onClick(() => {
                this.handleStanceSelect(stance);
            });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.getPercentage(count, total));
            Text.fontSize(12);
            Text.fontColor('#666666');
            Text.margin({ top: 4 });
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
