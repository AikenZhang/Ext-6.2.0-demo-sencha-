Ext.define('app.view.vue.vuebut.VueButController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.vueButController',
    ok:function(){
        var me=this,
            view=me.getView(),
            viewModel=view.getViewModel().get("vueCom"),
            des=view.down("ueditor[itemId='comDes']").getContentText();
            Mask.show(view);
        Ext.Ajax.request({
            url: 'http://localhost:8060/insertvuebut',
            params:{
                comId:view.selValue.data.comId,
                vueUsageTitle:viewModel.title,
                vueUsageDes:des,
                vueBut:viewModel.but,
                vueJs:viewModel.code,
                vueSort:viewModel.sort
            },
            success: function(response, opts) {
                Mask.hide(view);
                view.close();
            }
        });
    }
})