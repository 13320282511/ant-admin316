/**
 * Created by Administrator on 2017/10/17.
 */
var  funSheet1 = function(SheetArea,spread){
  var sheet = spread.getSheet(0);
  sheet.name('党员数量变化情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(9);
  sheet.setColumnCount(5);
  sheet.setRowCount( 2, SheetArea.colHeader);
  sheet.setColumnCount( 3, SheetArea.rowHeader);
  var colInfos = [
    { name: "A", displayName: "A" ,size: 200  },
    { name: "B", displayName: "B" ,size: 20 },
    { name: "C", displayName: "C" ,size: 230 },
    { name: "D", displayName: "D" ,size: 50 },
    { name: "E", displayName: "E" ,size: 250 },
  ];
  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);
  //sheet.options.colHeaderAutoText = GC.Spread.Sheets.HeaderAutoText.blank;
  sheet.addSpan(0, 0, 2, 1);
  sheet.addSpan(0, 1, 1, 2);
  sheet.addSpan(1, 1, 1, 2);
  sheet.addSpan(2, 1, 1, 2);
  sheet.addSpan(3, 1, 1, 2);
  sheet.addSpan(4, 1, 1, 2);
  sheet.addSpan(6, 1, 1, 2);
  sheet.addSpan(7, 1, 1, 2);
  sheet.addSpan(8, 1, 1, 2);

  sheet.addSpan(0, 3, 1, 1);
  sheet.addSpan(1, 3, 1, 1);
  sheet.addSpan(2, 2, 1, 1);
  sheet.addSpan(3, 3, 1, 1);
  sheet.addSpan(4, 3, 1, 1);
  sheet.addSpan(6, 3, 1, 1);
  sheet.addSpan(7, 3, 1, 1);
  sheet.addSpan(8, 3, 1, 1);

  setTab1Head(sheet,SheetArea);
  sheet.autoFitColumn(3);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头
   */
  sheet.addSpan(0, 0, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 0, "人数", SheetArea.colHeader);
  sheet.getCell(0, 0,SheetArea.colHeader).tag('{"key": "IsEnabled", "values": ["1"]}');
  sheet.addSpan(0, 1, 1, 2, SheetArea.colHeader);
  sheet.setValue(0, 1, "项目", SheetArea.colHeader);
  sheet.addSpan(0, 3, 1, 2, SheetArea.colHeader);
  sheet.setValue(0, 3, "人数", SheetArea.colHeader);
  sheet.getCell(0, 4,SheetArea.colHeader).tag('{"key": "IsEnabled", "values": ["0"]}');
  sheet.addSpan(1, 1, 1, 2, SheetArea.colHeader);
  sheet.setValue(1, 1, "甲", SheetArea.colHeader);
  sheet.addSpan(1, 3, 1, 2, SheetArea.colHeader);
  sheet.setValue(1, 3, "A", SheetArea.colHeader);

  /*
   *     y坐标，x坐标，占多少行，占多少列
   */
  sheet.addSpan(0, 0, 2, 2, SheetArea.rowHeader);
  sheet.setValue(0, 0,"一、上年底总数", SheetArea.rowHeader);
  sheet.getCell(0, 0).tag('A,1');
  sheet.getCell(0,0,SheetArea.rowHeader).tag('{"key": "JoinStartDate", "values": ["1900-01-01 00:00:00.000"]},{"key": "JoinEndDate", "values": ["2017-01-01 00:00:00.000"]},' +
    '{"key": "RecoverStartDate", "values": ["1900-01-01 00:00:00.000"]},{"key": "RecoverEndDate", "values": ["2017-01-01 00:00:00.000"]},' +
    '{"key": "EnterStartDate", "values": ["1900-01-01 00:00:00.000"]},{"key": "EnterEndDate", "values": ["2017-01-01 00:00:00.000"]}');
  sheet.addSpan(0, 2, 2, 1, SheetArea.rowHeader);
  sheet.addSpan(2, 0, 1, 2, SheetArea.rowHeader);
  sheet.setValue(2, 0,"二、本年增加", SheetArea.rowHeader);
  sheet.setFormula(2, 0, '=A4+A6+A8'); //
  sheet.getCell(2,0,SheetArea.rowHeader).tag('{"key": "JoinStartDate", "values": ["2017-01-01 00:00:00.000"]},{"key": "JoinEndDate", "values": ["2017-06-30 00:00:00.000"]},' +
    '{"key": "RecoverStartDate", "values": ["2017-01-01 00:00:00.000"]},{"key": "RecoverEndDate", "values": ["2017-06-30 00:00:00.000"]},' +
    '{"key": "EnterStartDate", "values": ["2017-01-01 00:00:00.000"]},{"key": "EnterEndDate", "values": ["2017-06-30 00:00:00.000"]}');
  sheet.addSpan(3, 0, 1, 2, SheetArea.rowHeader);
  sheet.setValue(3, 0,"发展党员", SheetArea.rowHeader);
  sheet.getCell(3,0,SheetArea.rowHeader).tag('{"key": "TypeCode", "values": ["2"]},{"key": "JoinStartDate", "values": ["2017-01-01 00:00:00.000"]},{"key": "JoinEndDate", "values": ["2017-06-30 00:00:00.000"]}');
  sheet.addSpan(4, 1, 1, 1, SheetArea.rowHeader);
  sheet.setValue(4, 1,"重新入党", SheetArea.rowHeader);
  sheet.getCell(4,0,SheetArea.rowHeader).tag('{"key": "TypeCode", "values": ["2"]},key": "JoinCatCode", "values": ["11%"]},{"key": "JoinStartDate", "values": ["2017-01-01 00:00:00.000"]},{"key": "JoinEndDate", "values": ["2017-06-30 00:00:00.000"]}');
  sheet.addSpan(5, 0, 1, 2, SheetArea.rowHeader);
  sheet.setValue(5, 0,"恢复党籍", SheetArea.rowHeader);
  sheet.getCell(5,0,SheetArea.rowHeader).tag('{"key": "JoinCatCode", "values": ["2%"]},{"key": "RecoverStartDate", "values": ["2017-01-01 00:00:00.000"]},{"key": "RecoverEndDate", "values": ["2017-06-30 00:00:00.000"]}');
  sheet.addSpan(6, 1, 1, 1, SheetArea.rowHeader);
  sheet.setValue(6, 1,"停止党籍后恢复党籍", SheetArea.rowHeader);
  sheet.getCell(6,0,SheetArea.rowHeader).tag('{"key": "JoinCatCode", "values": ["21%"]},{"key": "RecoverStartDate", "values": ["2017-01-01 00:00:00.000"]},{"key": "RecoverEndDate", "values": ["2017-06-30 00:00:00.000"]}');
  sheet.addSpan(7, 0, 1, 2, SheetArea.rowHeader);
  sheet.setValue(7, 0,"转入组织关系", SheetArea.rowHeader);
  sheet.getCell(7,0,SheetArea.rowHeader).tag('{"key": "JoinCatCode", "values": ["3%"]},{"key": "EnterStartDate", "values": ["2017-01-01 00:00:00.000"]},{"key": "EnterEndDate", "values": ["2017-06-30 00:00:00.000"]}');
  sheet.addSpan(8, 1, 1, 1, SheetArea.rowHeader);
  sheet.setValue(8, 1,"整建制转入", SheetArea.rowHeader);
  sheet.getCell(8,0,SheetArea.rowHeader).tag('{"key": "JoinCatCode", "values": ["38%"]},{"key": "EnterStartDate", "values": ["2017-01-01 00:00:00.000"]},{"key": "EnterEndDate", "values": ["2017-06-30 00:00:00.000"]}');
  sheet.setValue(2, 2,"2", SheetArea.rowHeader);
  sheet.setValue(3, 2,"3", SheetArea.rowHeader);
  sheet.setValue(4, 2,"4", SheetArea.rowHeader);
  sheet.setValue(5, 2,"5", SheetArea.rowHeader);
  sheet.setValue(6, 2,"6", SheetArea.rowHeader);
  sheet.setValue(7, 2,"7", SheetArea.rowHeader);
  sheet.setValue(8, 2,"8", SheetArea.rowHeader);
  // 样式
  sheet.setRowHeight(0, 60,SheetArea.colHeader);
  sheet.setRowHeight(1, 35,SheetArea.colHeader);
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  var rowStyle = new GC.Spread.Sheets.Style();
  rowStyle.backColor = "#E4ECF7";
  for(var i = 0; i<=8; i++){
    sheet.setStyle(i,1,rowStyle);
    sheet.setStyle(i,3,rowStyle);
  }
  sheet.setStyle(5,2,rowStyle);
  // 给假表头加边框
  for(var i = 0; i<=8; i++){
    for(var j =1 ; j<=2 ; j++){
      sheet.getCell(i,j).setBorder(new GC.Spread.Sheets.LineBorder("#9EB6CE", GC.Spread.Sheets.LineStyle.thin), {top: true,left: true,right: true,bottom: true});
    }
  }
  for(var i = 4;i<=8;i+=2){
    sheet.getCell(i, 0, SheetArea.rowHeader).setBorder(
      new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
      { top: true});
  }


  // 单元格颜色
  sheet.setStyle(0,0,newStyle("#FFCC99"));
  for(var i = 3;i<=8;i++){
    sheet.setStyle(i,0,newStyle("#FFCC99"));
    sheet.getCell(i, 0).tag(`A,${i}`);
  }
  for(var i = 0;i<=5;i++){
    sheet.setStyle(i,4,newStyle("#FFCC99"));
    sheet.getCell(i, 4).tag(`A,${i+9}`);
  }
  sheet.setStyle(2,0,newStyle("#CCCCFF"));
  sheet.setStyle(0,4,newStyle("#CCCCFF"));
  sheet.setStyle(6,4,newStyle("#CCFFFF"));
  sheet.setStyle(8,4,newStyle("#CCFFFF"));
  for(var i = 0; i<=8; i++){
    sheet.setRowHeight(i, 40,SheetArea.rowHeader);
    for(var j =0; j<=4; j++){
      sheet.getCell(i, j).hAlign(1).vAlign(1);
    }
  }
  sheet.setColumnWidth(0, 20,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 250,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 30,SheetArea.colHeader);
  sheet.setColumnWidth(3, 40,SheetArea.colHeader);
  for(var i = 0;i<=8;i++){
    sheet.getCell(i, 0).setBorder(
      new GC.Spread.Sheets.LineBorder("#9EB6CE", GC.Spread.Sheets.LineStyle.thin),
      { top: true,bottom: true});
    sheet.getCell(i, 4).setBorder(
      new GC.Spread.Sheets.LineBorder("#9EB6CE", GC.Spread.Sheets.LineStyle.thin),
      { top: true,bottom: true});
  }

};
var setTab1Head = function (sheet,SheetArea) {
  sheet.setValue(0,1, "三、本年减少");
  sheet.setFormula(0, 4, '=E2+E3+E4+E5');
  sheet.setValue(1,1, "出党");
  sheet.getCell(1,1).tag('{"key": "LeaveCatCode", "values": ["11","251","241","242","231","2312","232","221","222","301","3","31","32"]},' +
    '{"key": "LeaveStartDate", "values": ["2017-01-01 00:00:00.000"]},{"key": "LeaveEndDate", "values": ["2017-06-30 00:00:00.000"]}');
  sheet.setValue(2,1, "停止党籍");
  sheet.getCell(2,1).tag('{"key": "LeaveCatCode", "values": ["261","12"]},' +
    '{"key": "LeaveStartDate", "values": ["2017-01-01 00:00:00.000"]},{"key": "LeaveEndDate", "values": ["2017-06-30 00:00:00.000"]}');
  sheet.setValue(3,1, "死亡");
  sheet.getCell(3,1).tag('{"key": "LeaveCatCode", "values": ["13","211","212","213"]},' +
    '{"key": "LeaveStartDate", "values": ["2017-01-01 00:00:00.000"]},{"key": "LeaveEndDate", "values": ["2017-06-30 00:00:00.000"]}');
  sheet.setValue(4,1, "转出组织关系");
  sheet.getCell(4,1).tag('{"key": "TransferCode", "values": ["2%"]}');
  sheet.setValue(5,2, "整建制转出");
  sheet.getCell(5,1).tag('{"key": "TransferCodein", "values": ["22","24","26"]}');
  sheet.setValue(6,1, "四、本年底应有数");
  sheet.getCell(6, 4).tag('A,15');
  sheet.setFormula(6, 4, '=A1+A3-E1');
  sheet.setFormula(8, 4, '=E8-E7');
  sheet.getCell(8, 4).tag('A,17');
  sheet.getCell(6,1).tag("IsEnabled = '1' ");
  sheet.setValue(7,1, "五、本年底实有数");
  sheet.setValue(8,1, "六、实有数与应有数之差");

  sheet.setValue(0,3, "9");
  sheet.setValue(1,3, "10");
  sheet.setValue(2,3, "11");
  sheet.setValue(3,3, "12");
  sheet.setValue(4,3, "13");
  sheet.setValue(5,3, "14");
  sheet.setValue(6,3, "15");
  sheet.setValue(7,3, "16");
  sheet.setValue(8,3, "17");
};

var setDT1ExtendData = function (sheet,data) {
  sheet.setValue(0,0,data[0][1]);
  sheet.setValue(2,0,data[0][2]);
  sheet.setValue(3,0,data[0][3]);
  sheet.setValue(4,0,data[0][4]);
  sheet.setValue(5,0,data[0][5]);
  sheet.setValue(6,0,data[0][6]);
  sheet.setValue(7,0,data[0][7]);
  sheet.setValue(8,0,data[0][8]);
  sheet.setValue(0,4,data[0][9]);
  sheet.setValue(1,4,data[0][10]);
  sheet.setValue(2,4,data[0][11]);
  sheet.setValue(3,4,data[0][12]);
  sheet.setValue(4,4,data[0][13]);
  sheet.setValue(5,4,data[0][14]);
  sheet.setValue(6,4,data[0][15]);
  sheet.setValue(7,4,data[0][16]);
  sheet.setValue(8,4,data[0][17]);
};
