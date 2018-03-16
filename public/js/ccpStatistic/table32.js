var funSheet32 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(31);
  sheet.isPaintSuspended(true);
  sheet.name('党的地方委员会换届和领导班子召开民主生活会情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(5);
  sheet.setColumnCount(16);
  sheet.setRowCount( 4, SheetArea.colHeader);
  sheet.setColumnCount( 2, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 85  },
    { name: "B", displayName: "B", size: 85},
    { name: "C", displayName: "C", size: 75 },
    { name: "D", displayName: "D", size: 75},
    { name: "E", displayName: "E", size: 75 },
    { name: "F", displayName: "F", size: 75 },
    { name: "G", displayName: "G", size: 75 },
    { name: "H", displayName: "H", size: 75 },
    { name: "I", displayName: "I", size: 75 },
    { name: "J", displayName: "J", size: 75 },
    { name: "K", displayName: "K", size: 75 },
    { name: "L", displayName: "L", size: 75 },
    { name: "M", displayName: "M", size: 75 },
    { name: "N", displayName: "N", size: 75 },
    { name: "O", displayName: "O", size: 75 },
    { name: "P", displayName: "P", size: 75 },

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
  sheet.addSpan(1, 0, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 0, "总数", SheetArea.colHeader);
  sheet.addSpan(1, 1, 1, 2, SheetArea.colHeader);
  sheet.setValue(2, 1, "任届期满", SheetArea.colHeader);
  sheet.setValue(2, 2, "本年已换届", SheetArea.colHeader);
  sheet.addSpan(0, 3, 1, 2, SheetArea.colHeader);
  sheet.addSpan(1, 3, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 3, "试行党代会常任制的", SheetArea.colHeader);
  sheet.addSpan(1, 4, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 4, "已召开年会的", SheetArea.colHeader);
  sheet.addSpan(0, 5, 3, 1, SheetArea.colHeader);
  sheet.setValue(0, 5, "本年换届选举代表", SheetArea.colHeader);
  sheet.addSpan(0, 6, 1, 2, SheetArea.colHeader);
  sheet.addSpan(1, 6, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 6, "党委委员", SheetArea.colHeader);
  sheet.addSpan(1, 7, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 7, "常委", SheetArea.colHeader);
  sheet.addSpan(0, 8, 3, 1, SheetArea.colHeader);
  sheet.setValue(0, 8, "党委候补委员", SheetArea.colHeader);
  sheet.addSpan(0, 9, 1, 2, SheetArea.colHeader);
  sheet.addSpan(1, 9, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 9, "纪委委员", SheetArea.colHeader);
  sheet.addSpan(1, 10, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 10, "常委", SheetArea.colHeader);
  sheet.addSpan(0, 11, 1, 3, SheetArea.colHeader);
  sheet.setValue(0, 11, "召开党委全委会", SheetArea.colHeader);
  sheet.addSpan(1, 11, 1, 2, SheetArea.colHeader);
  sheet.setValue(2, 11, "已召开的", SheetArea.colHeader);
  sheet.setValue(2, 12, "召开两次及以上  的", SheetArea.colHeader);
  sheet.addSpan(1, 13, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 13, "参加委员", SheetArea.colHeader);
  sheet.addSpan(0, 14, 2, 2, SheetArea.colHeader);
  sheet.setValue(0, 14, "领导班子召开民主生活会", SheetArea.colHeader);
  sheet.setValue(2, 14, "已召开的", SheetArea.colHeader);
  sheet.setValue(2, 15, "参加 人员", SheetArea.colHeader);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  style.cellPadding = "5 5";

  for(var i = 0; i<=17; i++){
    sheet.setRowHeight(i, 60,SheetArea.rowHeader);
    sheet.setStyle(0,i,style,SheetArea.colHeader);
    sheet.setStyle(1,i,style,SheetArea.colHeader);
    sheet.setStyle(2,i,style,SheetArea.colHeader);
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



  sheet.setColumnWidth(0, 150,SheetArea.rowHeader);
  sheet.setRowHeight(0, 30,SheetArea.colHeader);
  sheet.setRowHeight(1, 20,SheetArea.colHeader);
  sheet.setRowHeight(2, 70,SheetArea.colHeader);

  sheet.setValue(0, 0,"总计", SheetArea.rowHeader);
  sheet.setValue(1, 0,"省（区、市）委", SheetArea.rowHeader);
  sheet.setValue(2, 0,"市（州）委", SheetArea.rowHeader);
  sheet.setValue(3, 0,"县（市、区、旗）委", SheetArea.rowHeader);


  // 补充资料
  sheet.addSpan(4, 0, 1, 2, SheetArea.rowHeader);
  sheet.setValue(4, 0,"补充资料：地（盟）委", SheetArea.rowHeader);
  sheet.addSpan(4, 0, 1, 2);
  sheet.setValue(4, 0,"个，已召开民主生活会的");
  sheet.addSpan(4, 3, 1, 2);
  sheet.setValue(4, 3,"个，参加人员");
  sheet.setValue(4, 6,"名。");

  var rowStyle = new GC.Spread.Sheets.Style();
  rowStyle.backColor = "#E4ECF7";
  for(var i = 4 ;i<= 4; i++){
    for(var j = 0 ;j<=2;j++){
      sheet.getCell(i, j, SheetArea.rowHeader).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
    for(var j = 0 ;j<=16;j++){
      sheet.setStyle(i,j,rowStyle);
      sheet.getCell(i, j).vAlign(1);
      sheet.getCell(i, j).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
  }
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
