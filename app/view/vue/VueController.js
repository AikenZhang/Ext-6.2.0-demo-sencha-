
Ext.define('app.view.vue.VueController', {
    extend: 'Fm.base.GridController',
    alias: 'controller.vueController',
    search:function(){
        var me=this;
        me.refresh();
    },
    getParams:function(){
        var me=this,
            Model=me.getView().getViewModel();
        return Model.get("searchModel");
    },
    getGridStore:function(){
        var me = this,
            grid,
            store;
        if (!me.__gridStore) {
            grid = this.getView().down("base_Grid");
            store = grid.getStore();
            if (store.isEmptyStore) {
                store = grid.getBind().store.getValue();
            }
            me.__gridStore = store;
        }
        return me.__gridStore;
    },
    addCom:function(){
        var vueCom=Ext.create("app.view.vue.vuecom.VueCom");
        vueCom.show();
    },
    addBut:function(){
        var me=this,
            view=me.getView(),
            seleValue=view.getViewModel().get("selVue");
            if(!seleValue){
                Ext.Msg.show({
                    title:"提示",
                    message:"请选择要添加示例的数据",
                    buttons:Ext.Msg.OK,
                    icon:Ext.Msg.WARNING,
                });
                return;
            }
            
        var vueBut=Ext.create("app.view.vue.vuebut.VueBut",{
            selValue:seleValue
        });
        vueBut.show();
    },
});