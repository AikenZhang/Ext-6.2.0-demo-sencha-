/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.view.main.MainController', {
    extend: 'Fm.base.MainController',
    alias: 'controller.main',
    xtypeStartWith: 'webapp',
    /**
     * 左菜单点击
     */
    leftMenuItemClick: function (view, record) {
        var me = this,
            treelist = view,
            record = record.get ? record : record.item.getNode();

        var _isLeaf = record.get('leaf') || false;
        if (_isLeaf) {
            if (record.get('Handler') === 'openNewTab') {
                Ext.History.add(record.get('Id'));
            }
        }
    }
});
