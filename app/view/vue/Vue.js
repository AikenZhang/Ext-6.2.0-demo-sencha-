/* ***********************************************
 * author :  AikenZhang
 * function: 表格基类
 * history:  created by AikenZhang 2015/7/6 15:03:12 
 * ***********************************************/
Ext.define('app.view.vue.Vue', {
    extend: 'Ext.container.Container',
    requires:[
        "app.view.vue.VueController",
        "app.view.vue.VueModel",
        "Fm.base.searchPanel",
        "Fm.base.Grid"
    ],
    controller:'vueController',
    viewModel: {
        type: 'vueModel'
    },
    layout:"border",
    items:[
        {
            region:"north",
            xtype:"base_searchPanel",
            searchItems:[{
                xtype:"textfield",
                fieldLabel:"组件",
                bind:{
                    value:"{searchModel.comName}"
                }
            }
            ],
            searchHandler:"search"
        },
        {
            region:'center',
            xtype:"base_Grid",
            bind:{
                store:"{gridStore}",
                selection: '{selVue}'
            },
            tbar:[
                "->",
                {
                    type:"button",
                    width:70,
                    text:'添加组件',
                    handler:'addCom'
                },{
                    xtype:"button",
                    text:"添加示例",
                    handler:"addBut"
                }
            ],
            columns:[
                {text:"名称",dataIndex:"comName"},
                {text:"简介",dataIndex:"vueDescription",flex:1}
            ]
        }
    ]
});