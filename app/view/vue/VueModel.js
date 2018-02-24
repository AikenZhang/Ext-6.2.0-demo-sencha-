Ext.define('app.view.vue.VueModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.vueModel',
    require:[
        "app.store.vue.VueStore",
    ],
    stores:{
        gridStore:{
            type:"vueStore"
        }
    }
});