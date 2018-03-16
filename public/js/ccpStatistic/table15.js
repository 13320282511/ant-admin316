var funSheet15 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(14);
  sheet.isPaintSuspended(true);
  sheet.name('预备党员转正情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(1);
  sheet.setColumnCount(9);
  sheet.setRowCount( 4, SheetArea.colHeader);
  sheet.setColumnCount( 1, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 120 },
    { name: "B", displayName: "B", size: 120},
    { name: "C", displayName: "C", size: 120 },
    { name: "D", displayName: "D", size: 120},
    { name: "E", displayName: "E", size: 120},
    { name: "F", displayName: "F", size: 120},
    { name: "G", displayName: "G", size: 120 },
    { name: "H", displayName: "H", size: 120 },
    { name: "I", displayName: "I", size: 120 },
  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.addSpan(0, 0, 3, 1, SheetArea.colHeader);
  sheet.setValue(0, 0, "预备期满的党员", SheetArea.colHeader);
  sheet.addSpan(0, 1, 1, 6, SheetArea.colHeader);
  sheet.setValue(0, 1, "已经上级党组织审批", SheetArea.colHeader);
  sheet.addSpan(1, 1, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 1, "合计", SheetArea.colHeader);
  sheet.addSpan(1, 2, 1, 3, SheetArea.colHeader);
  sheet.setValue(2, 2, "转为正式党员", SheetArea.colHeader);
  sheet.setValue(2, 3, "延长预备期转正", SheetArea.colHeader);
  sheet.setValue(2, 4, "推迟讨论转正", SheetArea.colHeader);
  sheet.addSpan(1, 5, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 5, "延长预备期", SheetArea.colHeader);
  sheet.addSpan(1, 6, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 6, "取消预备党员资格", SheetArea.colHeader);
  sheet.addSpan(0, 7, 3, 1, SheetArea.colHeader);
  sheet.setValue(0, 7, "尚未讨论或 审 批", SheetArea.colHeader);
  sheet.addSpan(0, 8, 3, 1, SheetArea.colHeader);
  sheet.setValue(0, 8, "预备期未满被取消预备党员资格", SheetArea.colHeader);

  sheet.getCell(0, 2,SheetArea.colHeader).tag('{"key": "DtNation", "values": ["1"]}');

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  style.cellPadding = "5 8";
  for(var i = 0; i<=9; i++){
    sheet.setStyle(0,i, style,SheetArea.colHeader);
    sheet.setStyle(1,i, style,SheetArea.colHeader);
    sheet.setStyle(2,i, style,SheetArea.colHeader);
  }
  sheet.setColumnWidth(0, 100,SheetArea.rowHeader);
  sheet.setRowHeight(0, 60,SheetArea.rowHeader);
  sheet.setRowHeight(0, 40,SheetArea.colHeader);
  sheet.setRowHeight(1, 20,SheetArea.colHeader);
  sheet.setRowHeight(2, 40,SheetArea.colHeader);

  /*
   *  Y表头
   */
  sheet.setValue(0, 0,"人数", SheetArea.rowHeader);
  sheet.getCell(1, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["0%"]}');


  sheet.isPaintSuspended(false);
};

var setDT5ExtendData = function (sheet,data) {
  sheet.setValue(23,1,data[15][1]);
  sheet.getCell(23, 1).tag('P,1');
  sheet.setValue(23,4,data[15][2]);
  sheet.getCell(23, 4).tag('P,2');
  sheet.setValue(23,7,data[15][3]);
  sheet.getCell(23, 7).tag('P,3');
  sheet.setValue(23,11,data[15][4]);
  sheet.getCell(23, 11).tag('P,4');
};
