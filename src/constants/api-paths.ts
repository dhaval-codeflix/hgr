export const API_PATH = {
    testQuery: '/asset-types',
    testMutation: '',
    auth: {
        login: '/login',
        forgotPassword: '/forgot-password',
        verifyOtp: '/verify-otp',
        resetPassword: '/reset-password'
    },
    superAdmin: {
        assetType: {
            assetTypeGroup: '/view-asset-types',
            assetTypes: '/asset-types',
            addAssetTypes: '/add-asset-types',
            assetTypesPlatforms: '/asset-types-platforms',
            assetTypesBoards: '/asset-types-boards',
            masterAssetType: '/master-asset-types',
            actions: '/asset-types-multiple',
            basicDetails: {
                basicDetail: '/basic-detail',
                editColumnOfBasicDetail: '/edit-column-meta-props',
                basicDetailColumn: '/basic-detail-column'
            }
        },
        master: {
            assetMaster: '/asset-master'
        }

    }

}

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL