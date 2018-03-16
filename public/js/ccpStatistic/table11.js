var funSheet11 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(10);
  sheet.isPaintSuspended(true);
  sheet.name('党员出党情况（二）');
  sheet.options.isProtected = true;
  sheet.setRowCount(15);
  sheet.setColumnCount(8);
  sheet.setRowCount( 2, SheetArea.colHeader);
  sheet.setColumnCount( 4, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 120 },
    { name: "B", displayName: "B", size: 130},
    { name: "C", displayName: "C", size: 120 },
    { name: "D", displayName: "D", size: 140},
    { name: "E", displayName: "E", size: 120},
    { name: "F", displayName: "F", size: 120},
    { name: "G", displayName: "G", size: 120 },
    { name: "H", displayName: "H", size: 120 },
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
  sheet.setValue(0, 1, "开除党籍", SheetArea.colHeader);
  sheet.setValue(0, 2, "退党除名", SheetArea.colHeader);
  sheet.setValue(0, 3, "劝退", SheetArea.colHeader);
  sheet.setValue(0, 4, "劝而不退除名", SheetArea.colHeader);
  sheet.setValue(0, 5, "自行脱党除名", SheetArea.colHeader);
  sheet.setValue(0, 6, "取消预备党员资格", SheetArea.colHeader);
  sheet.setValue(0, 7, "不予承认", SheetArea.colHeader);
  sheet.getCell(0, 2,SheetArea.colHeader).tag('{"key": "DtNation", "values": ["1"]}');


  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  sheet.addSpan(0, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(1, 0, 7, 1, SheetArea.rowHeader);
  sheet.addSpan(1, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(2, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(4, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(5, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(6, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(7, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(8, 0, 6, 1, SheetArea.rowHeader);
  sheet.addSpan(8, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(9, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(10, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(11, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(12, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(13, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(14, 0, 1, 3, SheetArea.rowHeader);

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(1,0,style,SheetArea.rowHeader);
  sheet.setStyle(8,0,style,SheetArea.rowHeader);
  style.cellPadding = "5 8";
  for(var i = 0; i<=15; i++){
    sheet.setRowHeight(i, 30,SheetArea.rowHeader);
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
  sheet.setRowHeight(0, 60,SheetArea.colHeader);

  /*
   *  Y表头
   */
  sheet.setValue(0, 0,"总计", SheetArea.rowHeader);
  sheet.setValue(1, 0,"违纪行为", SheetArea.rowHeader);
  sheet.setValue(1, 1,"违反政治纪律", SheetArea.rowHeader);
  sheet.setValue(2, 1,"违反组织纪律", SheetArea.rowHeader);
  sheet.setValue(3, 2,"违反干部选拔任用规定", SheetArea.rowHeader);
  sheet.setValue(4, 1,"违反廉洁纪律", SheetArea.rowHeader);
  sheet.setValue(5, 1,"违反群众纪律", SheetArea.rowHeader);
  sheet.setValue(6, 1,"违反工作纪律", SheetArea.rowHeader);
  sheet.setValue(7, 1,"违反生活纪律", SheetArea.rowHeader);
  sheet.setValue(8, 0,"具体表现", SheetArea.rowHeader);
  sheet.setValue(8, 1,"理想信念缺失", SheetArea.rowHeader);
  sheet.setValue(9, 1,"政治立场动摇", SheetArea.rowHeader);
  sheet.setValue(10, 1,"宗旨观念淡薄", SheetArea.rowHeader);
  sheet.setValue(11, 1,"工作消极懈怠", SheetArea.rowHeader);
  sheet.setValue(12, 1,"组织纪律散漫", SheetArea.rowHeader);
  sheet.setValue(13, 1,"道德行为不端", SheetArea.rowHeader);
  sheet.setValue(14, 0,"其他", SheetArea.rowHeader);

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
