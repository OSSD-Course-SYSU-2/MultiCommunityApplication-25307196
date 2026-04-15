/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export interface BarItemInterface {
    /**
     * Name of the tab.
     */
    name: Resource;
    /**
     * Icon of the tab.
     */
    icon: Resource;
    /**
     * Icon selected.
     */
    iconSelected: Resource;
}
export const TabBarsInfo: BarItemInterface[] = [
    {
        name: { "id": 67108906, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        icon: { "id": 67108912, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        iconSelected: { "id": 67108870, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
    },
    {
        name: { "id": 67108905, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        icon: { "id": 67108869, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        iconSelected: { "id": 67108868, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
    },
    {
        name: { "id": 67108907, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        icon: { "id": 67108913, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        iconSelected: { "id": 67108902, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
    },
    {
        name: { "id": 67108908, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        icon: { "id": 67108911, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        iconSelected: { "id": 67108915, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
    }
];
