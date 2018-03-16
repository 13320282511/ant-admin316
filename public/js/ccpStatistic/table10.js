var funSheet10 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(9);
  sheet.isPaintSuspended(true);
  sheet.name('党员出党情况（一）');
  sheet.options.isProtected = true;
  sheet.setRowCount(13);
  sheet.setColumnCount(9);
  sheet.setRowCount( 3, SheetArea.colHeader);
  sheet.setColumnCount( 3, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 120 },
    { name: "B", displayName: "B", size: 130},
    { name: "C", displayName: "C", size: 120 },
    { name: "D", displayName: "D", size: 140},
    { name: "E", displayName: "E", size: 120},
    { name: "F", displayName: "F", size: 120},
    { name: "G", displayName: "G", size: 120 },
    { name: "H", displayName: "H", size: 120 },
    { name: "I", displayName: "I", size: 80 },
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
  sheet.setValue(0, 0, "总       数", SheetArea.colHeader);
  sheet.addSpan(0, 1, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 1, "开除党籍", SheetArea.colHeader);
  sheet.addSpan(0, 2, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 2, "退党除名", SheetArea.colHeader);
  sheet.addSpan(0, 3, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 3, "劝退", SheetArea.colHeader);
  sheet.addSpan(0, 4, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 4, "劝而不退除名", SheetArea.colHeader);
  sheet.addSpan(0, 5, 1, 2, SheetArea.colHeader);
  sheet.setValue(1, 5, "自行脱党除名", SheetArea.colHeader);
  sheet.setValue(1, 6, "经多方查找确实无法取得联系", SheetArea.colHeader);
  sheet.addSpan(0, 7, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 7, "取消预备党员资格", SheetArea.colHeader);
  sheet.addSpan(0, 8, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 8, "不予承认", SheetArea.colHeader);
  sheet.getCell(0, 2,SheetArea.colHeader).tag('{"key": "DtNation", "values": ["1"]}');


  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  sheet.addSpan(0, 0, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(1, 0, 2, 1, SheetArea.rowHeader);
  sheet.addSpan(3, 0, 4, 1, SheetArea.rowHeader);
  sheet.addSpan(7, 0, 6, 1, SheetArea.rowHeader);

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(3,0,style,SheetArea.rowHeader);
  sheet.setStyle(7,0,style,SheetArea.rowHeader);
  style.cellPadding = "5 8";
  for(var i = 0; i<=13; i++){
    sheet.setRowHeight(i, 30,SheetArea.rowHeader);
    sheet.setStyle(0,i, style,SheetArea.colHeader);
    sheet.setStyle(1,i, style,SheetArea.colHeader);
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
  sheet.setColumnWidth(1, 220,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 35,SheetArea.rowHeader);
  sheet.setRowHeight(0, 30,SheetArea.colHeader);
  sheet.setRowHeight(1, 20,SheetArea.colHeader);
  sheet.setRowHeight(2, 50,SheetArea.colHeader);

  /*
   *  Y表头
   */
  sheet.setValue(0, 0,"总计", SheetArea.rowHeader);
  sheet.setValue(3, 0,"年龄", SheetArea.rowHeader);
  sheet.setValue(7, 0,"入党时间", SheetArea.rowHeader);
  sheet.setValue(1, 1,"厅局级", SheetArea.rowHeader);
  sheet.setValue(2, 1,"县处级", SheetArea.rowHeader);
  sheet.setValue(3, 1,"35   岁    及     以     下", SheetArea.rowHeader);
  sheet.setValue(4, 1,"36   岁    至     54     岁", SheetArea.rowHeader);
  sheet.setValue(5, 1,"55   岁    至     59     岁", SheetArea.rowHeader);
  sheet.setValue(6, 1,"60   岁   及   以   上", SheetArea.rowHeader);
  sheet.setValue(7, 1,"1966  年  4  月  及  以  前", SheetArea.rowHeader);
  sheet.setValue(8, 1,"1966年 5月 至 1976年 10 月", SheetArea.rowHeader);
  sheet.setValue(9, 1,"1976年 11 月 至 1978年12月", SheetArea.rowHeader);
  sheet.setValue(10, 1,"1979年 1 月 至 2002年10月", SheetArea.rowHeader);
  sheet.setValue(11, 1,"2002 年 11 月 至2012年10月", SheetArea.rowHeader);
  sheet.setValue(12, 1,"2012年11月及以后", SheetArea.rowHeader);

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
