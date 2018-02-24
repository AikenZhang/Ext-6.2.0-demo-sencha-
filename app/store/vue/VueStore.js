Ext.define("app.store.vue.VueStore",{
    extend:"Fm.base.Store",
    alias: 'store.vueStore',

    fields: [
        'ComName', 'vueDescription'
    ],
    proxy: {
        url:"http://localhost:8060/selectvue"
    }
});