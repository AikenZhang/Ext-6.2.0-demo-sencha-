/* ***********************************************
 * author :  ***
 * function: 表格控制器基类
 * history:  created by *** 2015/5/21 13:25:24 
 * ***********************************************/
Ext.define("Fm.base.GridController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cisgrid',
    operationView: '',
    autoLoad: false,
    mask:null,
    showMask:function(){
        var me=this;
            me.mask.show();
    },
    dataLoaded:function(){
        var me=this;
            me.hideMask();
    },
    hideMask:function(){
        var me=this;
            me.mask.hide();
    },
    init: function () {
        var me = this,
            xtype = me.getView().xtype,
            control = {};

        control[xtype] = {
            afterrender: me.selfRender
        };
        control[xtype + " cispagingtoolbar"] = { beforechange: me.beforePageChange };

        me.control(control, me);
        me.mask=new Ext.LoadMask({
            target:me.getView()
        })
        me.callParent(arguments);
        me.initSelfEvents();
    },
    getGridStore: function () {
        var me = this,
            grid,
            store;

        if (!me.__gridStore) {
            grid = this.getView();
            store = grid.getStore();
            if (store.isEmptyStore) {
                store = grid.getBind().store.getValue();
            }
            me.__gridStore = store;
        }
        return me.__gridStore;
    },
    /**
     * 常用事件
     * dataChanged: store数据改变时触发
     */
    initSelfEvents: function () {
        var me = this,
            store = me.getGridStore();
        if (me.dataChanged) {
            store.on('datachanged', me.dataChanged, me);
        }
        if (me.dataLoaded) {
            store.on('load', me.dataLoaded, me);
        }
    },
    selfRender: function () {
        var me = this,
            store = me.getGridStore();
        if (me.autoLoad && !store.autoLoad) {
            me.refresh();
        }
    },
    getParams:function(){
        return {};
    },
    /* *
     * 获取查询参数 验证通过返回true 否则返回false 提示错误
     * 子类重写
     */
    getRefreshParams: function () {
        this.showMask();
        return this.getParams() || {};
    },
    beforePageChange: function () {
        var me = this;
        //分页改变不需要重复查询分页总条数
        me.getGridStore().isRequiresPage = false;
        return me.addParams();
    },
    addParams: function () {
        var params = this.getRefreshParams();
        if (params !== false) {
            this.getGridStore().outParams = params;
            //Ext.apply(this.getGridStore().outParams, params);
            //console.dir(this.getGridStore().outParams);
            //application.mask.show();
            return true;
        }
        return false;
    },
    refresh: function () {
        //点击搜索需要重复查询分页总条数
        this.getGridStore().isRequiresPage = true;
        this.refreshByParams();
    },
    refreshByParams: function (params) {
        var me = this,
            isCanRefresh = me.addParams();
        if (isCanRefresh !== false) {
            setTimeout(function () {
                //me.getGridStore().load(params);
                //解决检索时从第一页开始查的问题
                me.getGridStore().loadPage(1, params);
            }, 10);
        }
    }
});
