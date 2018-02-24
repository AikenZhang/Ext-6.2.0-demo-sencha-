Ext.define("Fm.base.searchPanel",{
    extend: 'Ext.form.Panel',
    alias: 'widget.base_searchPanel',
    modelValidation: true,
    searchItems:[],
    searchHandler: 'refresh',
    layout:'hbox',
    height:45,
    items:[],
    defaults:{
        margin:"8px 5px 0 0"
    },
    style:{
        "border-bottom":"1px solid #d2d2d2"
    },
    initComponent:function(){
        var me=this;
        if(me.searchItems.length>0){
            me.items=[{
                xtype:"panel",
                flex:5,
                defaults:{
                    labelWidth:60,
                    labelAlign:"right",
                    width:191,
                },
                items:me.searchItems
            },{
                xtype:"panel",
                items:[
                    {
                        xtype:"button",
                        width:60,
                        text:"检索",
                        listeners:{
                            click:me.searchHandler
                        }
                    }
                ],
                flex:1
            }]
        }
        me.callParent(arguments);
    }
})