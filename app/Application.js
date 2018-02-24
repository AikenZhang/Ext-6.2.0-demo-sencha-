//指定ux起调目录
Ext.Loader.setPath({
    'Fm': 'app/Content'
});
Mask={
    mask:null,
    show:function(view){
        this[view.getId()]=new Ext.LoadMask({
            target:view
        }).show();
    },
    hide:function(view){
        this[view.getId()].hide();
        delete this[view.getId()];
    }
}
Ext.define('app.Application', {
    extend: 'Ext.app.Application',
    name: 'app',
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    stores: [
        // TODO: add global / shared stores here
    ],
    launch: function () {
        // TODO - Launch the application
    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
    aa:"sfsdfds"
});
