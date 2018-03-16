// 党员学历情况
var funSheet4 = function(SheetArea,spread){
  /*
   *  内容区域
   */
  var sheet = spread.getSheet(3);
  sheet.isPaintSuspended(true);
  sheet.name('党员学历情况');
  var colInfos = [
    { name: "A", displayName: "A", size: 100  },
    { name: "B", displayName: "B", size: 100 },
    { name: "C", displayName: "C", size: 100 },
    { name: "D", displayName: "D", size: 100 },
    { name: "E", displayName: "E", size: 100 },
    { name: "F", displayName: "F", size: 100 },
    { name: "G", displayName: "G", size: 100 },
  ];
  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);
  sheet.options.isProtected = true;
  sheet.setRowCount(23);
  sheet.setColumnCount(7);
  sheet.setRowCount( 2, SheetArea.colHeader);
  sheet.setColumnCount( 4, SheetArea.rowHeader);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.addSpan(0, 0, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 0, "总数", SheetArea.colHeader);
  sheet.addSpan(0, 1, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 1, "研究生", SheetArea.colHeader);
  sheet.getCell(0, 1,SheetArea.colHeader).tag('{"key": "EduCode", "values": ["1%"]}');
  sheet.addSpan(0, 2, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 2, "大学本科", SheetArea.colHeader);
  sheet.getCell(0, 2,SheetArea.colHeader).tag('{"key": "EduCode", "values": ["2%"]}');
  sheet.addSpan(0, 3, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 3, "大学专科", SheetArea.colHeader);
  sheet.getCell(0, 3,SheetArea.colHeader).tag('{"key": "EduCode", "values": ["3%"]}');
  sheet.addSpan(0, 4, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 4, "中专", SheetArea.colHeader);
  sheet.getCell(0, 4,SheetArea.colHeader).tag('{"key": "EduCode", "values": ["4%"]}');
  sheet.addSpan(0, 5, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 5, "高中、中技", SheetArea.colHeader);
  sheet.getCell(0, 5,SheetArea.colHeader).tag('{"key": "EduCode", "values": ["5%"]}');
  sheet.addSpan(0, 6, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 6, "初中及以下", SheetArea.colHeader);
  sheet.getCell(0, 6,SheetArea.colHeader).tag('{"key": "EduCode", "values": ["6%"]}');

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  sheet.addSpan(0, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(1, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(2, 0, 8, 1, SheetArea.rowHeader);
  /*
   *  公有制单位
   */
  sheet.addSpan(2, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(3, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(4, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(5, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(6, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(7, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(8, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(9, 2, 1, 1, SheetArea.rowHeader);

  /*
   *  非公有制单位
   */
  sheet.addSpan(10, 0, 7, 1, SheetArea.rowHeader);
  sheet.addSpan(10, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(11, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(12, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(13, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(14, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(15, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(16, 2, 1, 1, SheetArea.rowHeader);

  /*
   *  其他
   */
  sheet.addSpan(17, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(18, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(19, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(20, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(21, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(22, 0, 1, 3, SheetArea.rowHeader);

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(3,0,style,SheetArea.rowHeader);
  sheet.setStyle(11,0,style,SheetArea.rowHeader);
  sheet.setStyle(14,1,style,SheetArea.rowHeader);
  for(var i = 0; i<=6; i++){
    sheet.setColumnWidth(i, 100,SheetArea.colHeader);
    sheet.setStyle(0,i,style,SheetArea.colHeader);
  }
  sheet.setRowHeight(0, 60,SheetArea.colHeader);
  sheet.setRowHeight(1, 25,SheetArea.colHeader);
  sheet.setStyle(2,0,style,SheetArea.rowHeader);
  sheet.setStyle(10,0,style,SheetArea.rowHeader);
  for(var i = 0; i<=22; i++){
    sheet.setRowHeight(i, 30,SheetArea.rowHeader);
    sheet.setStyle(i,0, newStyle("#CCCCFF"));
    if(i<=2 || i==10){
      for(var j =0; j<=14; j++){
        sheet.setStyle(i,j, newStyle("#CCCCFF"));
      }
    }
    for(var j =0; j<=9; j++){
      sheet.getCell(i, j).hAlign(1).vAlign(1);
      sheet.getCell(i,j).setBorder(new GC.Spread.Sheets.LineBorder("#9EB6CE", GC.Spread.Sheets.LineStyle.thin), {top: true,left: true,right: true,bottom: true});
    }
  }
  sheet.getCell(9, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(16, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(18, 0, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.setColumnWidth(0, 25,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 25,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 150,SheetArea.rowHeader);

  sheet.setValue(0, 0,"总计", SheetArea.rowHeader);
  sheet.setValue(1, 0,"一、在岗职工", SheetArea.rowHeader);
  sheet.getCell(1, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["0%"]}');
  sheet.setValue(2, 0,"公有制单位", SheetArea.rowHeader);
  sheet.setValue(2, 1,"合计", SheetArea.rowHeader);
  sheet.getCell(2, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["01%"]}');
  sheet.setValue(3, 1,"党政机关工作人员", SheetArea.rowHeader);
  sheet.getCell(3, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["011%"]}');
  sheet.setValue(4, 1,"事业单位管理人员", SheetArea.rowHeader);
  sheet.getCell(4, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["012%"]}');
  sheet.setValue(5, 1,"事业单位专业技术人员", SheetArea.rowHeader);
  sheet.getCell(5, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["013%"]}');
  sheet.setValue(6, 1,"企业管理人员", SheetArea.rowHeader);
  sheet.getCell(6, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["014%"]}');
  sheet.setValue(7, 1,"企业专业技术人员", SheetArea.rowHeader);
  sheet.getCell(7, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["015%"]}');
  sheet.setValue(8, 1,"工勤技能人员", SheetArea.rowHeader);
  sheet.getCell(8, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["016%"]}');
  sheet.setValue(9, 2,"农民工", SheetArea.rowHeader);
  sheet.getCell(9, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["0164%"]}');

  sheet.setValue(10, 0,"非公有制单位", SheetArea.rowHeader);
  sheet.setValue(10, 1,"合计", SheetArea.rowHeader);
  sheet.getCell(10, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["02%"]}');
  sheet.setValue(11, 1,"企业管理人员", SheetArea.rowHeader);
  sheet.getCell(11, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["021%"]}');
  sheet.setValue(12, 1,"企业专业技术人员", SheetArea.rowHeader);
  sheet.getCell(12, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["022%"]}');
  sheet.setValue(13, 1,"民办非企业单位管理人员", SheetArea.rowHeader);
  sheet.getCell(13, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["023%"]}');
  sheet.setValue(14, 1,"民办非企业专业技术人员", SheetArea.rowHeader);
  sheet.getCell(14, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["024%"]}');
  sheet.setValue(15, 1,"工勤技能人员", SheetArea.rowHeader);
  sheet.getCell(15, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["025%"]}');
  sheet.setValue(16, 2,"农民工", SheetArea.rowHeader);
  sheet.getCell(16, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["0253%"]}');

  sheet.setValue(17, 0,"二 、农牧渔民", SheetArea.rowHeader);
  sheet.getCell(17, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["1%"]}');
  sheet.setValue(18, 1,"外出务工经商人员", SheetArea.rowHeader);
  sheet.getCell(18, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["113%"]}');
  sheet.setValue(19, 0,"三 、军人、武警", SheetArea.rowHeader);
  sheet.getCell(19, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["2%"]}');
  sheet.setValue(20, 0,"四 、学生", SheetArea.rowHeader);
  sheet.getCell(20, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["3%"]}');
  sheet.setValue(21, 0,"五 、离退休人员", SheetArea.rowHeader);
  sheet.getCell(21, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["4%"]}');
  sheet.setValue(22, 0,"六 、其他", SheetArea.rowHeader);
  sheet.getCell(22, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["5%"]}');

  sheet.isPaintSuspended(false);
};

