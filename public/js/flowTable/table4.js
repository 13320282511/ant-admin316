var funSheet4 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(3);
  sheet.isPaintSuspended(true);
  sheet.name('管理有外来流入党员的党组织情况表');
  sheet.options.isProtected = true;
  sheet.setRowCount(1);
  sheet.setColumnCount(7);
  sheet.setRowCount( 2, SheetArea.colHeader);
  sheet.setColumnCount( 0, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 100 },
    { name: "B", displayName: "B", size: 100 },
    { name: "C", displayName: "C", size: 100 },
    { name: "D", displayName: "D", size: 100 },
    { name: "E", displayName: "E", size: 100 },
    { name: "F", displayName: "F", size: 100 },
    { name: "G", displayName: "G", size: 100 },

  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.addSpan(0, 0, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 0, "党组织名称", SheetArea.colHeader);
  sheet.addSpan(0, 1, 1, 2, SheetArea.colHeader);
  sheet.setValue(0, 1, "管理流入党员数", SheetArea.colHeader);
  sheet.setValue(1, 1, "从省内流入的", SheetArea.colHeader);
  sheet.setValue(1, 2, "从省外流入的", SheetArea.colHeader);
  sheet.addSpan(0, 3, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 3, "党组织负责人", SheetArea.colHeader);
  sheet.addSpan(0, 4, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 4, "负责人联系电话", SheetArea.colHeader);
  sheet.addSpan(0, 5, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 5, "党组织所在地址", SheetArea.colHeader);
  sheet.addSpan(0, 6, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 6, "组织关系隶属于哪个基层党委", SheetArea.colHeader);



  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  style.cellPadding = "5 8";
  for(var i = 0; i<=12; i++){
    sheet.setStyle(0,i, style,SheetArea.colHeader);
    sheet.setStyle(1,i, style,SheetArea.colHeader);
    sheet.getCell(0, i).hAlign(1).vAlign(1);
  }
  sheet.setRowHeight(0, 40,SheetArea.colHeader);
  sheet.setRowHeight(1, 40,SheetArea.colHeader);
  sheet.setRowHeight(0, 80);



  sheet.isPaintSuspended(false);
};

