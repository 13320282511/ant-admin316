var funSheet2 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(1);
  sheet.isPaintSuspended(true);
  sheet.name('流动党员花名册（含流出、流入党员分册）');
  sheet.options.isProtected = true;
  sheet.setRowCount(1);
  sheet.setColumnCount(9);
  sheet.setRowCount( 1, SheetArea.colHeader);
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
  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.setValue(0, 0, "姓名", SheetArea.colHeader);
  sheet.setValue(0, 1, "性别", SheetArea.colHeader);
  sheet.setValue(0, 2, "出生年月", SheetArea.colHeader);
  sheet.setValue(0, 3, "文化程度", SheetArea.colHeader);
  sheet.setValue(0, 4, "外出时间", SheetArea.colHeader);
  sheet.setValue(0, 5, "外出地点", SheetArea.colHeader);
  sheet.setValue(0, 6, "流动党员联系电话", SheetArea.colHeader);
  sheet.setValue(0, 7, "正式组织关系所在支部", SheetArea.colHeader);
  sheet.setValue(0, 8, "支部联系电话", SheetArea.colHeader);



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

