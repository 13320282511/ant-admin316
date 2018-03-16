<!-- 总的通过messenger控制流程-->
function setMessenger(spread,SheetArea) {
  messenger = new Messenger('FlowTable','MessengerSync');
  messenger.listen(function (data) {
    console.log('setMessenger',data);

    if(data === 'export'){  //导出Excel
      exportExcel(spread);
    }

    if(data.indexOf('changeTab') === 0){
      // console.log(data.split('changeTab'));
      spread.setActiveSheetIndex(parseInt(data.split('changeTab')[1])-1);
    }

  });
  messenger.addTarget(window.parent, 'parent');
}
var sendMessage = function (msg) {
  messenger.targets['parent'].send(msg);
};
