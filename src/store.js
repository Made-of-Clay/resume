export default {
    state: {
        drawerOpen: false,
        sections: [], // [{ heading, icon, id }]
    },

    mutations: {
        openDrawer(state, shouldOpen = true) {
            state.drawerOpen = !!shouldOpen;
        },
        addSection(state, info) {
            const matches = state.sections.find(section => section.id === info.id);
            if (!matches) {
                state.sections.push(info);
            }
        },
    },

    actions: {
        //
    },
};