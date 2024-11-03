class SharedData {

    static createDefaultBones() {
        return [
            {
                "name": "根",
                "pivot": [ 0.0, 0.0, 0.0 ]
            },
            {
                "name": "身体",
                "parent": "waist",
                "pivot": [ 0.0, 24.0, 0.0 ]
            },

            {
                "name": "腰部",
                "parent": "root",
                "pivot": [ 0.0, 12.0, 0.0 ]
            },

            {
                "name": "头部",
                "parent": "body",
                "pivot": [ 0.0, 24.0, 0.0 ]
            },

            {
                "name": "披风",
                "pivot": [ 0.0, 24, 3.0 ],
                "parent": "body"
            },
            {
                "name": "帽子",
                "parent": "head",
                "pivot": [ 0.0, 24.0, 0.0 ]
            },
            {
                "name": "左臂",
                "parent": "body",
                "pivot": [ -5.0, 22.0, 0.0 ]
            },
            {
                "name": "左袖",
                "parent": "leftArm",
                "pivot": [ -5.0, 22.0, 0.0 ]
            },
            {
                "name": "左物品",
                "pivot": [ -6.0, 15.0, 1.0 ],
                "parent": "leftArm"
            },
            {
                "name": "右臂",
                "parent": "body",
                "pivot": [ 5.0, 22.0, 0.0 ]
            },
            {
                "name": "右袖",
                "parent": "rightArm",
                "pivot": [ 5.0, 22.0, 0.0 ]
            },
            {
                "name": "右物品",
                "pivot": [ 6, 15, 1 ],
                "locators": {
                    "lead_hold": [ -6, 15, 1 ]
                },
                "parent": "rightArm"
            },

            {
                "name": "左腿",
                "parent": "root",
                "pivot": [ -1.9, 12.0, 0.0 ]
            },
            {
                "name": "左裤",
                "parent": "leftLeg",
                "pivot": [ -1.9, 12.0, 0.0 ]
            },

            {
                "name": "右腿",
                "parent": "root",
                "pivot": [ 1.9, 12.0, 0.0 ]
            },
            {
                "name": "右裤",
                "parent": "rightLeg",
                "pivot": [ 1.9, 12.0, 0.0 ]
            },

            {
                "name": "夹克",
                "parent": "body",
                "pivot": [ 0.0, 24.0, 0.0 ]
            }
        ];
    }

}