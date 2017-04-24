/**
 * Created by pengqin on 2017/1/13.
 */

import { rootPath } from 'services/xhr/config.js'

const config = {
    state: {
        rootPath: rootPath(),
        fullscreenLoading: false
    },
    mutations: {
        updateFullLoading (state, bool) {
            state.fullscreenLoading = bool;
        }
    }
};

export default config;
