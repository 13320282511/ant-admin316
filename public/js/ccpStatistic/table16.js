var funSheet16 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(15);
  sheet.isPaintSuspended(true);
  sheet.name('发展党员情况（一）');
  sheet.options.isProtected = true;
  sheet.setRowCount(24);
  sheet.setColumnCount(15);
  sheet.setRowCount( 3, SheetArea.colHeader);
  sheet.setColumnCount( 4, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 60  },
    { name: "B", displayName: "B", size: 60 },
    { name: "C", displayName: "C", size: 60 },
    { name: "D", displayName: "D", size: 60 },
    { name: "E", displayName: "E", size: 60 },
    { name: "F", displayName: "F", size: 60 },
    { name: "G", displayName: "G", size: 60 },
    { name: "H", displayName: "H", size: 60 },
    { name: "I", displayName: "I", size: 60 },
    { name: "J", displayName: "J", size: 60 },
    { name: "K", displayName: "K", size: 60 },
    { name: "L", displayName: "L", size: 60 },
    { name: "M", displayName: "M", size: 60 },
    { name: "N", displayName: "N", size: 60 },
    { name: "O", displayName: "O", size: 60 },
  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.addSpan(0, 0, 1, 3, SheetArea.colHeader);
  sheet.setValue(0, 0, "总数", SheetArea.colHeader);
  sheet.addSpan(1, 1, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 1, "女", SheetArea.colHeader);
  sheet.getCell(0, 1,SheetArea.colHeader).tag('{"key": "GenderCode", "values": ["0"]}');
  sheet.addSpan(1, 2, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 2, "少数民族", SheetArea.colHeader);
  sheet.getCell(0, 2,SheetArea.colHeader).tag('{"key": "DtNation", "values": ["1"]}');

  /*
   *  x表头，年龄
   */
  sheet.addSpan(0, 3, 1, 6, SheetArea.colHeader);
  sheet.setValue(0, 3, "年龄", SheetArea.colHeader);
  sheet.addSpan(1, 3, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 3, "25岁及以下", SheetArea.colHeader);//'{"key": "AgeMin", "values": ["0"]},{"key": "AgeMax", "values": ["30"]}'
  sheet.getCell(0, 3,SheetArea.colHeader).tag('{"key": "AgeMin", "values": ["0"]},{"key": "AgeMax", "values": ["25"]}');
  sheet.addSpan(1, 4, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 4, "26至30岁", SheetArea.colHeader);
  sheet.getCell(0, 4,SheetArea.colHeader).tag('{"key": "AgeMin", "values": ["26"]},{"key": "AgeMax", "values": ["30"]}');
  sheet.addSpan(1, 5, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 5, "31至35岁", SheetArea.colHeader);
  sheet.getCell(0, 5,SheetArea.colHeader).tag('{"key": "AgeMin", "values": ["31"]},{"key": "AgeMax", "values": ["35"]}');
  sheet.addSpan(1, 6, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 6, "36至40岁", SheetArea.colHeader);
  sheet.getCell(0, 6,SheetArea.colHeader).tag('{"key": "AgeMin", "values": ["36"]},{"key": "AgeMax", "values": ["40"]}');
  sheet.addSpan(1, 7, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 7, "41至59岁", SheetArea.colHeader);
  sheet.getCell(0, 7,SheetArea.colHeader).tag('{"key": "AgeMin", "values": ["41"]},{"key": "AgeMax", "values": ["59"]}');
  sheet.addSpan(1, 8, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 8, "60岁及以上", SheetArea.colHeader);
  sheet.getCell(0, 8,SheetArea.colHeader).tag('{"key": "AgeMin", "values": ["60"]},{"key": "AgeMax", "values": ["200"]}');
  /*
   *  x表头，学历
   */
  sheet.addSpan(0, 9, 1, 6, SheetArea.colHeader);
  sheet.setValue(0, 9, "学历", SheetArea.colHeader);
  sheet.addSpan(1, 9, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 9, "研究生", SheetArea.colHeader);
  sheet.getCell(0, 9,SheetArea.colHeader).tag('{"key": "EduCode", "values": ["1%"]}');
  sheet.addSpan(1, 10, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 10, "大学本科", SheetArea.colHeader);
  sheet.getCell(0, 10,SheetArea.colHeader).tag('{"key": "EduCode", "values": ["2%"]}');
  sheet.addSpan(1, 11, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 11, "大学专科", SheetArea.colHeader);
  sheet.getCell(0, 11,SheetArea.colHeader).tag('{"key": "EduCode", "values": ["3%"]}');
  sheet.addSpan(1, 12, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 12, "中专", SheetArea.colHeader);
  sheet.getCell(0, 12,SheetArea.colHeader).tag('{"key": "EduCode", "values": ["4%"]}');
  sheet.addSpan(1, 13, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 13, "高中中技", SheetArea.colHeader);
  sheet.getCell(0, 13,SheetArea.colHeader).tag('{"key": "EduCode", "values": ["5%"]}');
  sheet.addSpan(1, 14, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 14, "初中及以下", SheetArea.colHeader);
  sheet.getCell(0, 14,SheetArea.colHeader).tag('{"key": "EduCode", "values": ["6%"]}');

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
  sheet.setStyle(2,0,style,SheetArea.rowHeader);
  sheet.setStyle(10,0,style,SheetArea.rowHeader);
  sheet.setStyle(3,0,style,SheetArea.rowHeader);
  sheet.setStyle(11,0,style,SheetArea.rowHeader);
  sheet.setStyle(14,1,style,SheetArea.rowHeader);
  style.cellPadding = "5 5";

  for(var i = 0; i<=22; i++){
    sheet.setRowHeight(i, 30,SheetArea.rowHeader);
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
  sheet.setRowHeight(23, 30,SheetArea.rowHeader);
  sheet.getCell(9, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(16, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(18, 0, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(1, 0, SheetArea.colHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.setColumnWidth(0, 25,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 25,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 150,SheetArea.rowHeader);
  sheet.setRowHeight(0, 30,SheetArea.colHeader);
  sheet.setRowHeight(1, 40,SheetArea.colHeader);
  sheet.setRowHeight(2, 25,SheetArea.colHeader);

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

  // 补充资料
  sheet.addSpan(23, 0, 1, 4, SheetArea.rowHeader);
  sheet.setValue(23, 0,"补充资料：报告期内发展劳务派遣工", SheetArea.rowHeader);
  sheet.setValue(23, 0,"党员");
  sheet.addSpan(23, 2, 1, 2);
  sheet.setValue(23, 2, "名，其中女性");
  sheet.addSpan(23, 5, 1, 2);
  sheet.setValue(23, 5, "名，35岁及以下的");
  sheet.addSpan(23, 8, 1, 3);
  sheet.setValue(23, 8, "名，大专及以上学历的");
  sheet.setValue(23, 12, "名");

  var rowStyle = new GC.Spread.Sheets.Style();
  rowStyle.backColor = "#E4ECF7";
  for(var i = 23 ;i<= 23; i++){
    for(var j = 0 ;j<=3;j++){
      sheet.getCell(i, j, SheetArea.rowHeader).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
    for(var j = 0 ;j<=14;j++){
      sheet.setStyle(i,j,rowStyle);
      sheet.getCell(i, j).vAlign(1);
      sheet.getCell(i, j).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
  }
  sheet.setStyle(23,1,newStyle("#FFCC99"));
  sheet.setStyle(23,4,newStyle("#FFCC99"));
  sheet.setStyle(23,7,newStyle("#FFCC99"));
  sheet.setStyle(23,11,newStyle("#FFCC99"));

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
