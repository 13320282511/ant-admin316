var funSheet3 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(2);
  sheet.isPaintSuspended(true);
  sheet.name('流动党员党组织登记表（含省外建立、省内其他地方建立分表）');
  sheet.options.isProtected = true;
  sheet.setRowCount(1);
  sheet.setColumnCount(6);
  sheet.setRowCount( 1, SheetArea.colHeader);
  sheet.setColumnCount( 0, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 150 },
    { name: "B", displayName: "B", size: 150 },
    { name: "C", displayName: "C", size: 150 },
    { name: "D", displayName: "D", size: 150 },
    { name: "E", displayName: "E", size: 150 },
    { name: "F", displayName: "F", size: 150 },
  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.setValue(0, 0, "党组织名称", SheetArea.colHeader);
  sheet.setValue(0, 1, "管理党员数", SheetArea.colHeader);
  sheet.setValue(0, 2, "党组织负责人", SheetArea.colHeader);
  sheet.setValue(0, 3, "负责人联系电话", SheetArea.colHeader);
  sheet.setValue(0, 4, "党组织所在地址", SheetArea.colHeader);
  sheet.setValue(0, 5, "组织关系隶属于哪个基层党委", SheetArea.colHeader);


  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  style.cellPadding = "5 8";
  for(var i = 0; i<=12; i++){
    sheet.setStyle(0,i, style,SheetArea.colHeader);
    sheet.getCell(0, i).hAlign(1).vAlign(1);
  }
  sheet.setRowHeight(0, 80,SheetArea.colHeader);
  sheet.setRowHeight(0, 80);



  sheet.isPaintSuspended(false);
};

