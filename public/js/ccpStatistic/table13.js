var funSheet13 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(12);
  sheet.isPaintSuspended(true);
  sheet.name('党员受党的纪律处分情况（二）');
  sheet.options.isProtected = true;
  sheet.setRowCount(7);
  sheet.setColumnCount(6);
  sheet.setRowCount( 2, SheetArea.colHeader);
  sheet.setColumnCount( 4, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 120 },
    { name: "B", displayName: "B", size: 130},
    { name: "C", displayName: "C", size: 120 },
    { name: "D", displayName: "D", size: 140},
    { name: "E", displayName: "E", size: 120},
    { name: "F", displayName: "F", size: 120},
  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.setValue(0, 0, "总       数", SheetArea.colHeader);
  sheet.setValue(0, 1, "警      告", SheetArea.colHeader);
  sheet.setValue(0, 2, "严重警告", SheetArea.colHeader);
  sheet.setValue(0, 3, "撤销党内职务", SheetArea.colHeader);
  sheet.setValue(0, 4, "留党察看", SheetArea.colHeader);
  sheet.setValue(0, 5, "开除党籍", SheetArea.colHeader);
  sheet.getCell(0, 2,SheetArea.colHeader).tag('{"key": "DtNation", "values": ["1"]}');


  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  sheet.addSpan(0, 0, 7, 1, SheetArea.rowHeader);
  sheet.addSpan(0, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(1, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(3, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(4, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(5, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(6, 1, 1, 2, SheetArea.rowHeader);

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(0,0,style,SheetArea.rowHeader);
  style.cellPadding = "5 8";
  for(var i = 0; i<=13; i++){
    sheet.setRowHeight(i, 50,SheetArea.rowHeader);
    sheet.setStyle(0,i, style,SheetArea.colHeader);

    sheet.setStyle(i,0, newStyle("#CCCCFF"));
    if(i<=2 || i == 10){
      for(var j =0; j<=14; j++){
        sheet.setStyle(i,j, newStyle("#CCCCFF"));
      }
    }
    for(var j =0; j<=14; j++){
      sheet.getCell(i, j).hAlign(1).vAlign(1);
      sheet.getCell(i,j).setBorder(new GC.Spread.Sheets.LineBorder("#9EB6CE", GC.Spread.Sheets.LineStyle.thin), {top: true,left: true,right: true,bottom: true});
    }
  }

  sheet.setColumnWidth(0, 35,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 35,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 220,SheetArea.rowHeader);
  sheet.setRowHeight(0, 50,SheetArea.colHeader);

  /*
   *  Y表头
   */
  sheet.setValue(0, 0,"违纪行为", SheetArea.rowHeader);
  sheet.setValue(0, 1,"违     反     政     治     纪     律", SheetArea.rowHeader);
  sheet.setValue(1, 1,"违反组织纪律", SheetArea.rowHeader);
  sheet.setValue(2, 2,"违反干部选拔任用规定", SheetArea.rowHeader);
  sheet.setValue(3, 1,"违反廉洁纪律", SheetArea.rowHeader);
  sheet.setValue(4, 1,"违     反     群     众     纪     律", SheetArea.rowHeader);
  sheet.setValue(5, 1,"违     反     工     作     纪     律", SheetArea.rowHeader);
  sheet.setValue(6, 1,"违     反     生     活     纪     律", SheetArea.rowHeader);

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
