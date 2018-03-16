var funSheet22 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(21);
  sheet.isPaintSuspended(true);
  sheet.name('城市街道、社区（居委会）、社会组织发展党员工作情况（一）');
  sheet.options.isProtected = true;
  sheet.setRowCount(18);
  sheet.setColumnCount(9);
  sheet.setRowCount( 3, SheetArea.colHeader);
  sheet.setColumnCount( 4, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 110  },
    { name: "B", displayName: "B", size: 100 },
    { name: "C", displayName: "C", size: 100 },
    { name: "D", displayName: "D", size: 100 },
    { name: "E", displayName: "E", size: 120 },
    { name: "F", displayName: "F", size: 100 },
    { name: "G", displayName: "G", size: 110 },
    { name: "H", displayName: "H", size: 100 },
  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.addSpan(0, 0, 1, 5, SheetArea.colHeader);
  sheet.setValue(1, 0, "总数", SheetArea.colHeader);
  sheet.setValue(1, 1, "女", SheetArea.colHeader);
  sheet.getCell(0, 1,SheetArea.colHeader).tag('{"key": "GenderCode", "values": ["0"]}');
  sheet.setValue(1, 2, "少数民族", SheetArea.colHeader);
  sheet.getCell(0, 2,SheetArea.colHeader).tag('{"key": "DtNation", "values": ["1"]}');
  sheet.setValue(1, 3, "大专及以上学历", SheetArea.colHeader);
  sheet.setValue(1, 4, "中专、高中中技学历", SheetArea.colHeader);
  sheet.addSpan(0, 5, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 5, "35岁及以下", SheetArea.colHeader);
  sheet.addSpan(0, 6, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 6, "36岁至59岁", SheetArea.colHeader);
  sheet.addSpan(0, 7, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 7, "60岁及以上", SheetArea.colHeader);


  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  sheet.addSpan(0, 0, 9, 1, SheetArea.rowHeader);
  sheet.addSpan(0, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(2, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(3, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(4, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(5, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(6, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(7, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(8, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(9, 0, 9, 1, SheetArea.rowHeader);
  sheet.addSpan(9, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(11, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(12, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(13, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(14, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(15, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(16, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(17, 1, 1, 2, SheetArea.rowHeader);


  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(0,0,style,SheetArea.rowHeader);
  sheet.setStyle(9,0,style,SheetArea.rowHeader);
  style.cellPadding = "5 5";

  for(var i = 0; i<=18; i++){
    sheet.setRowHeight(i, 30,SheetArea.rowHeader);
    sheet.setStyle(0,i,style,SheetArea.colHeader);
    sheet.setStyle(1,i,style,SheetArea.colHeader);
    sheet.setStyle(i,0, newStyle("#CCCCFF"));
    if(i<=2 || i==10){
      for(var j =0; j<=14; j++){
        sheet.setStyle(i,j, newStyle("#CCCCFF"));
      }
    }
    for(var j =0; j<=14; j++){
      sheet.getCell(i, j).hAlign(1).vAlign(1);
      sheet.getCell(i,j).setBorder(new GC.Spread.Sheets.LineBorder("#9EB6CE", GC.Spread.Sheets.LineStyle.thin), {top: true,left: true,right: true,bottom: true});
    }
  }
  sheet.getCell(1, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(10, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  // sheet.getCell(1, 0, SheetArea.colHeader).setBorder(
  //   new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
  //   { top: true});
  sheet.setColumnWidth(0, 30,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 30,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 150,SheetArea.rowHeader);
  sheet.setRowHeight(0, 20,SheetArea.colHeader);
  sheet.setRowHeight(1, 50,SheetArea.colHeader);

  sheet.setValue(0, 0,"本年发展党员", SheetArea.rowHeader);
  sheet.setValue(0, 1,"城市街道", SheetArea.rowHeader);
  sheet.setValue(1, 2,"城市社区（居委会）", SheetArea.rowHeader);
  sheet.setValue(2, 1,"乡镇社区（居委会）", SheetArea.rowHeader);
  sheet.setValue(3, 1,"社会团体", SheetArea.rowHeader);
  sheet.setValue(4, 1,"基金会", SheetArea.rowHeader);
  sheet.setValue(5, 1,"民办非企业单位", SheetArea.rowHeader);
  sheet.setValue(6, 1,"律师事务所", SheetArea.rowHeader);
  sheet.setValue(7, 1,"会计师事务所", SheetArea.rowHeader);
  sheet.setValue(8, 1,"税务师事务所", SheetArea.rowHeader);

  sheet.setValue(9, 0,"发展对象", SheetArea.rowHeader);
  sheet.setValue(9, 1,"城市街道", SheetArea.rowHeader);
  sheet.setValue(10, 2,"城市社区（居委会）", SheetArea.rowHeader);
  sheet.setValue(11, 1,"乡镇社区（居委会）", SheetArea.rowHeader);
  sheet.setValue(12, 1,"社会团体", SheetArea.rowHeader);
  sheet.setValue(13, 1,"基金会", SheetArea.rowHeader);
  sheet.setValue(14, 1,"民办非企业单位", SheetArea.rowHeader);
  sheet.setValue(15, 1,"律师事务所", SheetArea.rowHeader);
  sheet.setValue(16, 1,"会计师事务所", SheetArea.rowHeader);
  sheet.setValue(17, 1,"税务师事务所", SheetArea.rowHeader);

  sheet.getCell(22, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["5%"]}');

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
