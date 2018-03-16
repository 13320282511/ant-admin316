<!-- 总的通过messenger控制流程-->
function setMessenger(spread,SheetArea) {
  messenger = new Messenger('iframeSpread','MessengerSync');
  messenger.listen(function (data) {
    console.log('setMessenger',data);
    if(data === 'count'){   // 重新统计
      fetch('/api/common/select/source', {///api/common/login "/api/service/login
        "method": "post",
        "mode": "cors",
        "body": JSON.stringify({pagination:false,code:'DT_plan',para:[{key: "code", values: [`${orgCode}`]}]}),
        "credentials": "include"
      }).then(function (response) {
        return response.json();
      }).then(function(data) {
        if(data.code === 0 ){
          if(data.data.length>0){
            if(data.data[0].IsPresentation === 0){
              loadData(spread,SheetArea,orgCode,"/api/service/dt"); //http://192.168.234.108:8080/api/partcount/dt
            }else{
              sendMessage('已上报^counttrue')
            }
          }else{
            loadData(spread,SheetArea,orgCode,"/api/service/dt");
          }
        }
      })
    }
    if(data === 'examine'){  //报表校核
      loadExamine(spread,orgCode);
    }
    if(data === 'shangbao'){ //上报
      report(orgCode);
    }
    if(data === 'save'){  //附表保存
      cheduleSave(spread);
    }
    if(data === 'export'){  //导出Excel
      exportExcel(spread);
    }

    if(data.indexOf('changeTab') === 0){
      // console.log(data.split('changeTab'));
      spread.setActiveSheetIndex(parseInt(data.split('changeTab')[1])-1);
    }
    // switch (data)
    // {
    //   case '0':
    //     spread.setActiveSheetIndex(parseInt(data));
    //     break;
    //   case '0_1':
    //     spread.setActiveSheetIndex(7);
    //     break;
    //   case '0_2':
    //     spread.setActiveSheetIndex(8);
    //     break;
    //   case '1':
    //     spread.setActiveSheetIndex(parseInt(data));
    //     break;
    //   case '1_1':
    //     spread.setActiveSheetIndex(9);
    //     break;
    //   case '1_2':
    //     spread.setActiveSheetIndex(10);
    //     break;
    //   case '1_3':
    //     spread.setActiveSheetIndex(11);
    //     break;
    //   case '1_4':
    //     spread.setActiveSheetIndex(12);
    //     break;
    //   case '2':
    //     spread.setActiveSheetIndex(parseInt(data));
    //     break;
    //   case '2_1':
    //     spread.setActiveSheetIndex(13);
    //     break;
    //   case '3':
    //     spread.setActiveSheetIndex(parseInt(data));
    //     break;
    //   case '4':
    //     spread.setActiveSheetIndex(parseInt(data));
    //     break;
    //   case '4_1':
    //     spread.setActiveSheetIndex(14);
    //     break;
    //   case '4_2':
    //     spread.setActiveSheetIndex(15);
    //     break;
    //   case '4_3':
    //     spread.setActiveSheetIndex(16);
    //     break;
    //   case '5':
    //     spread.setActiveSheetIndex(parseInt(data));
    //     break;
    //   case '6':
    //     spread.setActiveSheetIndex(parseInt(data));
    //     break;
    //   case '6_1':
    //     spread.setActiveSheetIndex(17);
    //     break;
    //   case '7_1':
    //     spread.setActiveSheetIndex(18);
    //     break;
    // }
  });
  messenger.addTarget(window.parent, 'parent');
}
var sendMessage = function (msg) {
  messenger.targets['parent'].send(msg);
};
