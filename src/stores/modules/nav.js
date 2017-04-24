/**
 * Created by pengqin on 2017/1/13.
 */
if (!window.localStorage.getItem('menus')) {
    window.localStorage.setItem('menus', JSON.stringify([]));
}

const menus = {
    state: {
        menus: JSON.parse(window.localStorage.getItem('menus')) || [],
        breadcrumbCur: []
    },
    mutations: {
        updateMenus (state, menus) {
            state.menus = menus;
        },
        updateBreadcrumbCur (state, breadcrumb) {
            state.breadcrumbCur = breadcrumb;
        }
    }
};

export default menus;
