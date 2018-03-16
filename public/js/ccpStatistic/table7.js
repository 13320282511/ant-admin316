var funSheet7 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(6);
  sheet.isPaintSuspended(true);
  sheet.name('学生党员情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(17);
  sheet.setColumnCount(6);
  sheet.setRowCount( 3, SheetArea.colHeader);
  sheet.setColumnCount( 4, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 120 },
    { name: "B", displayName: "B", size: 140},
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
  sheet.addSpan(0, 0, 1, 3, SheetArea.colHeader);
  sheet.setValue(1, 0, "党员总数", SheetArea.colHeader);
  sheet.addSpan(0, 3, 1, 3, SheetArea.colHeader);
  sheet.setValue(1, 3, "本年发展党员", SheetArea.colHeader);
  sheet.setValue(1, 1, "女", SheetArea.colHeader);
  sheet.setValue(1, 2, "少数民族", SheetArea.colHeader);
  sheet.setValue(1, 4, "女", SheetArea.colHeader);
  sheet.setValue(1, 5, "少数民族", SheetArea.colHeader);
  sheet.getCell(0, 1,SheetArea.colHeader).tag('{"key": "GenderCode", "values": ["0"]}');
  sheet.getCell(0, 2,SheetArea.colHeader).tag('{"key": "DtNation", "values": ["1"]}');
  // sheet.getCell(1, 0, SheetArea.colHeader).setBorder(
  //   new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
  //   {top:true});


  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  sheet.addSpan(0, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(1, 0, 10, 1, SheetArea.rowHeader);
  sheet.addSpan(1, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(2, 1, 3, 1, SheetArea.rowHeader);
  sheet.addSpan(5, 1, 3, 1, SheetArea.rowHeader);
  sheet.addSpan(8, 1, 3, 1, SheetArea.rowHeader);
  sheet.addSpan(11, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(12, 0, 1, 3, SheetArea.rowHeader);

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(1,0,style,SheetArea.rowHeader);
  sheet.setStyle(2,1,style,SheetArea.rowHeader);
  sheet.setStyle(5,1,style,SheetArea.rowHeader);
  sheet.setStyle(8,1,style,SheetArea.rowHeader);
  style.cellPadding = "5 8";
  for(var i = 0; i<=20; i++){
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
  sheet.setColumnWidth(1, 55,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 140,SheetArea.rowHeader);
  sheet.setRowHeight(0, 20,SheetArea.colHeader);
  sheet.setRowHeight(1, 50,SheetArea.colHeader);

  /*
   *  Y表头
   */
  sheet.setValue(0, 0,"总计", SheetArea.rowHeader);
  sheet.setValue(1, 0,"大学生", SheetArea.rowHeader);
  sheet.setValue(1, 1,"女", SheetArea.rowHeader);
  sheet.setValue(2, 1,"研究生", SheetArea.rowHeader);
  sheet.setValue(5, 1,"大学本科生", SheetArea.rowHeader);
  sheet.setValue(8, 1,"大学专科生", SheetArea.rowHeader);
  sheet.setValue(11, 0,"大学专科生", SheetArea.rowHeader);
  sheet.setValue(12, 0,"高中、中技学生", SheetArea.rowHeader);
  sheet.setValue(2, 2,"毕业年级", SheetArea.rowHeader);
  sheet.setValue(3, 2,"一年级", SheetArea.rowHeader);
  sheet.setValue(4, 2,"其他年级", SheetArea.rowHeader);
  sheet.setValue(5, 2,"毕业年级", SheetArea.rowHeader);
  sheet.setValue(6, 2,"一年级", SheetArea.rowHeader);
  sheet.setValue(7, 2,"其他年级", SheetArea.rowHeader);
  sheet.setValue(8, 2,"毕业年级", SheetArea.rowHeader);
  sheet.setValue(9, 2,"一年级", SheetArea.rowHeader);
  sheet.setValue(10, 2,"其他年级", SheetArea.rowHeader);


  sheet.getCell(1, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["0%"]}');
  sheet.getCell(2, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["01%"]}');
  sheet.getCell(3, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["011%"]}');
  sheet.getCell(4, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["012%"]}');

  // 补充资料
  sheet.addSpan(13, 0, 1, 4, SheetArea.rowHeader);
  sheet.setValue(13, 0,"补充资料：1．全体在校学生中研究生", SheetArea.rowHeader);
  sheet.setValue(13, 1, "人，大学本科生");
  sheet.setValue(13, 3, "人，大学专科生");
  sheet.addSpan(14, 2, 1, 2, SheetArea.rowHeader);
  sheet.setValue(14, 2,"人，中专生", SheetArea.rowHeader);
  sheet.setValue(14, 1, " 人，高中、中技学生");
  sheet.setValue(14, 3, "人");
  sheet.addSpan(15, 2, 1, 2, SheetArea.rowHeader);
  sheet.setValue(15, 2,"2．高等学校共有教师", SheetArea.rowHeader);
  sheet.setValue(15, 1, " 人，其中女性");
  sheet.setValue(15, 3, "人、35岁及以下的");
  sheet.addSpan(16, 2, 1, 2, SheetArea.rowHeader);
  sheet.setValue(16, 2,"人；共有教师党员", SheetArea.rowHeader);
  sheet.setValue(16, 1, " 人，其中女性");
  sheet.setValue(16, 3, "人，35岁及以下的 ");
  sheet.setValue(16, 5, "人");

  var rowStyle = new GC.Spread.Sheets.Style();
  rowStyle.backColor = "#E4ECF7";
  for(var i = 13 ;i<= 17; i++){
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

  sheet.isPaintSuspended(false);
};

var setDT7ExtendData = function (sheet,data) {
  sheet.setValue(13,0,data[6][1]);
  sheet.setValue(13,2,data[6][2]);
  sheet.setValue(13,4,data[6][3]);
  sheet.setValue(14,0,data[6][4]);
  sheet.setValue(14,2,data[6][5]);
  sheet.setValue(15,0,data[7][1]);
  sheet.setValue(15,2,data[7][2]);
  sheet.setValue(15,4,data[7][3]);
  sheet.setValue(16,0,data[7][4]);
  sheet.setValue(16,2,data[7][5]);
  sheet.setValue(16,4,data[7][6]);
  sheet.getCell(23, 11).tag('P,4');
};
