/* ***********************************************
 * author :  ***
 * function: 主框架
 * history:  created by *** 2015/7/1 14:12:21 
 * ***********************************************/

Ext.define('app.view.main.Top', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'app-top',
    border: false,
    frame: false,
    height: 48,
    padding: 0,
    items:[
         '->', {
            //帮助按钮
            iconCls: 'fa fa-question',
            tooltip: '帮助'
        },{
            xtype:'label',
            text:ServerData.UserName
        },
        {
            xtype:"image",
            src:"lib/img/user.jpeg",
            height:32,
            width:32,
            border:1
        }
    ]
});

Ext.define('app.view.main.Left', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-mainleft',
    width:AppConfig.Design.Menu.MaxWidth,
    padding: 0,
    border: false,
    scrollable: 'y',
    collapsible: false,
    bodyStyle:{
        'background':"#2aa88f"
    },
    items: [
        {
            xtype: "treelist",
            ui:'blogNav',
            width:AppConfig.Design.Menu.MaxWidth,
            store: Ext.create('Ext.data.TreeStore', {
                root: {
                    expanded: true,
                    children: ServerData.MenuList
                }
            }),
            singleExpand: true,
            expanderOnly: false,
            selected: false,
            expanderFirst: false,
            selectOnExpander:true,
            selectedParent: false,
            listeners: {
                itemclick: "leftMenuItemClick"
            }
        }
    ]
});

Ext.define("app.view.main.Tab", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Fm.ux.TabCloseMenu'
    ],
    xtype: 'app-maintab',
    id: "ViewPortCoreTab",
    activeTab: 0,
    enableTabScroll: true,
    autoScroll: false,
    //分辨率不能低于1024
    minWidth: 800,
    items: [
    {
        id: 'main_tab_0',
        menuId: 0,
        title: "",
        xtype: 'container',
        border: false,
        frame: false,
        hidden: true
    }],
    plugins: [
        Ext.create('Fm.ux.TabCloseMenu', {
            closeTabText: '关闭面板',
            closeOthersTabsText: '关闭其他面板',
            closeAllTabsText: '关闭所有面板'
        })
    ],
    listeners: {
        tabchange: 'tabChange'
    }
});

Ext.define('app.view.main.Bottom', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'app-mainbottom',
    border: 0,
    frame: false,
    items: [{
        xtype: 'container', msgarea: 'msgarea', items: []
    }, "->", {
        xtype: 'label',
        text: '版权所有:XXXXXXXXX 版本:' + AppConfig.appVersion
    }]
});

Ext.define('app.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        "app.view.main.MainController",
        "app.view.main.MainModel"
    ],
    xtype: 'app-main',
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    layout: {
        type: 'border'
    },
    listeners: {
        afterRender: 'mainRender',
        //resize: 'mainResize'
    },
    style:{
        'background':'#fff'
    },
    items: [
        {
            xtype: 'app-top',
            region: 'north',
            split: false
        }, {
            xtype: 'app-mainleft',
            region: 'west',
            split: false
        }, {
            xtype: 'app-maintab',
            region: "center",
            padding: '0 8 8'
        }, {
            xtype: 'app-mainbottom',
            region: 'south',
            border: 1
        }
    ]
});
