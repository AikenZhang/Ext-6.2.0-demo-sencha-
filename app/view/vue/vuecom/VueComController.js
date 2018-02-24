Ext.define('app.view.vue.vuecom.VueComController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.vueComController',
    ok:function(){
        var me=this,
            view=me.getView(),
            viewModel=view.getViewModel().get("vueCom"),
            vueDescription=view.down("ueditor").getContentText();
            Mask.show(view);
        Ext.Msg.show({
            title:"提示",
            message:"确定添加？",
            buttons:5,
            icon: Ext.Msg.QUESTION,
            fn:function(but){
                if(but=='ok'){
                    mask.show();
                    Ext.Ajax.request({
                        url: 'http://localhost:8060/insertvue',
                        params:{
                            comName:viewModel.comName,
                            vueDescription:vueDescription
                        },
                        success: function(response, opts) {
                            Mask.hide(view);
                            view.close();
                        }
                    });
                }

            }
        })
    }
})