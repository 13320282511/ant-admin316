var funSheet21 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(20);
  sheet.isPaintSuspended(true);
  sheet.name('新的社会阶层中发展党员工作情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(29);
  sheet.setColumnCount(9);
  sheet.setRowCount( 3, SheetArea.colHeader);
  sheet.setColumnCount( 5, SheetArea.rowHeader);

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
  sheet.addSpan(0, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(1, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(2, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(3, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(4, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(5, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(6, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(7, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(8, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(9, 0, 9, 1, SheetArea.rowHeader);
  sheet.addSpan(9, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(10, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(11, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(12, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(13, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(14, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(15, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(16, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(17, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(18, 0, 9, 1, SheetArea.rowHeader);
  sheet.addSpan(18, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(19, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(20, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(21, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(22, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(23, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(24, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(25, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(26, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(27, 0, 2, 2, SheetArea.rowHeader);
  sheet.addSpan(27, 2, 1, 2, SheetArea.rowHeader);

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(0,0,style,SheetArea.rowHeader);
  sheet.setStyle(9,0,style,SheetArea.rowHeader);
  sheet.setStyle(18,0,style,SheetArea.rowHeader);
  sheet.setStyle(27,0,style,SheetArea.rowHeader);
  style.cellPadding = "5 5";

  for(var i = 0; i<=29; i++){
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
  sheet.getCell(4, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(6, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(13, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(15, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(22, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(24, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(28, 2, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  // sheet.getCell(1, 0, SheetArea.colHeader).setBorder(
  //   new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
  //   { top: true});
  sheet.setColumnWidth(0, 30,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 30,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 30,SheetArea.rowHeader);
  sheet.setColumnWidth(3, 200,SheetArea.rowHeader);
  sheet.setRowHeight(0, 20,SheetArea.colHeader);
  sheet.setRowHeight(1, 50,SheetArea.colHeader);

  sheet.setValue(0, 0,"本年发展党员", SheetArea.rowHeader);
  sheet.setValue(0, 1,"合计", SheetArea.rowHeader);
  sheet.setValue(1, 1,"民营科技企业创业人员和技术人员", SheetArea.rowHeader);
  sheet.setValue(2, 1,"受聘于外资企业管理技术人员", SheetArea.rowHeader);
  sheet.setValue(3, 1,"个体劳动者", SheetArea.rowHeader);
  sheet.setValue(4, 2,"城镇个体劳动者", SheetArea.rowHeader);
  sheet.setValue(5, 1,"私营企业主", SheetArea.rowHeader);
  sheet.setValue(6, 2,"民营科技企业创业人员", SheetArea.rowHeader);
  sheet.setValue(7, 1,"中介组织从业人员", SheetArea.rowHeader);
  sheet.setValue(8, 1,"自由职业人员", SheetArea.rowHeader);
  sheet.setValue(9, 0,"发展对象", SheetArea.rowHeader);
  sheet.setValue(9, 1,"合计", SheetArea.rowHeader);
  sheet.setValue(10, 1,"民营科技企业创业人员和技术人员", SheetArea.rowHeader);
  sheet.setValue(11, 1,"受聘于外资企业管理技术人员", SheetArea.rowHeader);
  sheet.setValue(12, 1,"个体劳动者", SheetArea.rowHeader);
  sheet.setValue(13, 2,"城镇个体劳动者", SheetArea.rowHeader);
  sheet.setValue(14, 1,"私营企业主", SheetArea.rowHeader);
  sheet.setValue(15, 2,"民营科技企业创业人员", SheetArea.rowHeader);
  sheet.setValue(16, 1,"中介组织从业人员", SheetArea.rowHeader);
  sheet.setValue(17, 1,"自由职业人员", SheetArea.rowHeader);
  sheet.setValue(18, 0,"入党积极分子", SheetArea.rowHeader);
  sheet.setValue(18, 1,"合计", SheetArea.rowHeader);
  sheet.setValue(19, 1,"民营科技企业创业人员和技术人员", SheetArea.rowHeader);
  sheet.setValue(20, 1,"受聘于外资企业管理技术人员", SheetArea.rowHeader);
  sheet.setValue(21, 1,"个体劳动者", SheetArea.rowHeader);
  sheet.setValue(22, 2,"城镇个体劳动者", SheetArea.rowHeader);
  sheet.setValue(23, 1,"私营企业主", SheetArea.rowHeader);
  sheet.setValue(24, 2,"民营科技企业创业人员", SheetArea.rowHeader);
  sheet.setValue(25, 1,"中介组织从业人员", SheetArea.rowHeader);
  sheet.setValue(26, 1,"自由职业人员", SheetArea.rowHeader);
  sheet.setValue(27, 0,"补充资  料", SheetArea.rowHeader);
  sheet.setValue(27, 2,"入党申请人", SheetArea.rowHeader);
  sheet.setValue(28, 3,"本年", SheetArea.rowHeader);
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
