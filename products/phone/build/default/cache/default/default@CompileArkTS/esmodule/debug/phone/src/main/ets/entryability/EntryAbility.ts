import UIAbility from "@ohos:app.ability.UIAbility";
import type Want from "@ohos:app.ability.Want";
import type AbilityConstant from "@ohos:app.ability.AbilityConstant";
import type { BusinessError } from "@ohos:base";
import deviceInfo from "@ohos:deviceInfo";
import hilog from "@ohos:hilog";
import type window from "@ohos:window";
import display from "@ohos:display";
import { CommonConstants as BaseCommon, BreakpointConstants } from "@normalized:N&&&base/Index&1.0.0";
export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
    }
    onDestroy(): void {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
    }
    onWindowStageCreate(windowStage: window.WindowStage): void {
        // Main window is created, set main page for this ability
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');
        windowStage.getMainWindow((err: BusinessError<void>, data) => {
            if (err.code) {
                hilog.info(0x0000, 'testTag', '%{public}s', 'getMainWindow failed');
                return;
            }
            if (deviceInfo.deviceType !== BaseCommon.DEVICE_2IN1) {
                data.setWindowLayoutFullScreen(true);
            }
            this.updateBreakpoint(data.getWindowProperties().windowRect.width);
            data.on('windowSizeChange', (windowSize: window.Size) => {
                this.updateBreakpoint(windowSize.width);
            });
        });
        windowStage.loadContent('pages/MainPage', (err, data) => {
            if (err.code) {
                hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
                return;
            }
            hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');
        });
    }
    onWindowStageDestroy(): void {
        // Main window is destroyed, release UI related resources
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
    }
    onForeground(): void {
        // Ability has brought to foreground
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');
    }
    onBackground(): void {
        // Ability has back to background
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');
    }
    private updateBreakpoint(windowWidth: number): void {
        try {
            let windowWidthVp = windowWidth / display.getDefaultDisplaySync().densityPixels;
            let curBp: string = '';
            if (windowWidthVp < BreakpointConstants.BREAKPOINT_RANGES[1]) {
                curBp = BreakpointConstants.BREAKPOINT_SM;
            }
            else if (windowWidthVp < BreakpointConstants.BREAKPOINT_RANGES[2]) {
                curBp = BreakpointConstants.BREAKPOINT_MD;
            }
            else {
                curBp = BreakpointConstants.BREAKPOINT_LG;
            }
            AppStorage.setOrCreate('currentBreakpoint', curBp);
        }
        catch (error) {
            let err = error as BusinessError;
            hilog.error(0x0000, 'testTag', `updateBreakpoint failed. code=${err.code}, message=${err.message}`);
        }
    }
}
