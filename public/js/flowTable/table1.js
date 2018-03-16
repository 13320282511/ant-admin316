var funSheet1 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(0);
  sheet.isPaintSuspended(true);
  sheet.name('流动党员情况统计表');
  sheet.options.isProtected = true;
  sheet.setRowCount(1);
  sheet.setColumnCount(12);
  sheet.setRowCount( 3, SheetArea.colHeader);
  sheet.setColumnCount( 0, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 100 },
    { name: "B", displayName: "B", size: 100 },
    { name: "C", displayName: "C", size: 100 },
    { name: "D", displayName: "D", size: 100 },
    { name: "E", displayName: "E", size: 100 },
    { name: "F", displayName: "F", size: 100 },
    { name: "G", displayName: "G", size: 100 },
    { name: "H", displayName: "H", size: 100 },
    { name: "I", displayName: "I", size: 100 },
    { name: "J", displayName: "J", size: 100 },
    { name: "K", displayName: "K", size: 100 },
    { name: "L", displayName: "L", size: 100 },
  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.addSpan(0, 0, 1, 2, SheetArea.colHeader);
  sheet.setValue(0, 0, "流出党员数（名）", SheetArea.colHeader);
  sheet.addSpan(1, 0, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 0, "流出省外的", SheetArea.colHeader);
  sheet.addSpan(1, 1, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 1, "在省内流动的", SheetArea.colHeader);
  sheet.addSpan(0, 2, 1, 2, SheetArea.colHeader);
  sheet.setValue(0, 2, "流入党员数（名）", SheetArea.colHeader);
  sheet.addSpan(1, 2, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 2, "从省外流入的", SheetArea.colHeader);
  sheet.addSpan(1, 3, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 3, "从省内其他市县和单位流入的", SheetArea.colHeader);
  sheet.addSpan(0, 4, 1, 4, SheetArea.colHeader);
  sheet.setValue(0, 4, "在外建立流动党员党组织情况", SheetArea.colHeader);
  sheet.addSpan(1, 4, 1, 2, SheetArea.colHeader);
  sheet.setValue(2, 4, "在省外建立的（个）", SheetArea.colHeader);
  sheet.setValue(2, 5, "管理的流动党员数（名）", SheetArea.colHeader);
  sheet.addSpan(1, 6, 1, 2, SheetArea.colHeader);
  sheet.setValue(2, 6, "在省内其他市县和单位建立的（个）", SheetArea.colHeader);
  sheet.setValue(2, 7, "管理的流动党员数（名）", SheetArea.colHeader);
  sheet.addSpan(0, 8, 1, 4, SheetArea.colHeader);
  sheet.setValue(0, 8, "管理外来流动党员情况", SheetArea.colHeader);
  sheet.addSpan(1, 8, 1, 2, SheetArea.colHeader);
  sheet.setValue(2, 8, "管理有外来流入党员的党组织数（个）", SheetArea.colHeader);
  sheet.setValue(2, 9, "专门管理外来流入党员的党组织数（个）", SheetArea.colHeader);
  sheet.addSpan(1, 10, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 10, "管理从省内其他地方流入的党员数（名）", SheetArea.colHeader);
  sheet.addSpan(1, 11, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 11, "管理从省外流入的党员数（名）", SheetArea.colHeader);


  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  style.cellPadding = "5 8";
  for(var i = 0; i<=12; i++){
    sheet.setStyle(0,i, style,SheetArea.colHeader);
    sheet.setStyle(1,i, style,SheetArea.colHeader);
    sheet.setStyle(2,i, style,SheetArea.colHeader);
    sheet.getCell(0, i).hAlign(1).vAlign(1);
  }
  sheet.setRowHeight(0, 40,SheetArea.colHeader);
  sheet.setRowHeight(1, 20,SheetArea.colHeader);
  sheet.setRowHeight(2, 80,SheetArea.colHeader);
  sheet.setRowHeight(0, 80);



  sheet.isPaintSuspended(false);
};

