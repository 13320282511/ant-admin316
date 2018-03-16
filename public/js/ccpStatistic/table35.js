var funSheet35 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(34);
  sheet.isPaintSuspended(true);
  sheet.name('出国（境）党员情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(22);
  sheet.setColumnCount(13);
  sheet.setRowCount( 4, SheetArea.colHeader);
  sheet.setColumnCount( 4, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 80 },
    { name: "B", displayName: "B", size: 80 },
    { name: "C", displayName: "C", size: 80 },
    { name: "D", displayName: "D", size: 80 },
    { name: "E", displayName: "E", size: 80 },
    { name: "F", displayName: "F", size: 80 },
    { name: "G", displayName: "G", size: 80 },
    { name: "H", displayName: "H", size: 80 },
    { name: "I", displayName: "I", size: 80 },
    { name: "J", displayName: "J", size: 80 },
    { name: "K", displayName: "K", size: 80 },
    { name: "L", displayName: "L", size: 80 },
    { name: "M", displayName: "M", size: 80 },

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
  sheet.addSpan(1, 0, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 0, "公派出国（境）半年以上的", SheetArea.colHeader);
  sheet.addSpan(1, 1, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 1, "驻外机 构", SheetArea.colHeader);
  sheet.addSpan(1, 2, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 2, "劳务输 出", SheetArea.colHeader);
  sheet.addSpan(1, 3, 1, 2, SheetArea.colHeader);
  sheet.setValue(2, 3, "公派留学", SheetArea.colHeader);
  sheet.setValue(2, 4, "逾期一年以上未归的", SheetArea.colHeader);
  sheet.addSpan(0, 5, 1, 3, SheetArea.colHeader);
  sheet.addSpan(1, 5, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 5, "因私出国(境)半年以上的", SheetArea.colHeader);
  sheet.addSpan(1, 6, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 6, "自费留学", SheetArea.colHeader);
  sheet.addSpan(1, 7, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 7, "工作", SheetArea.colHeader);
  sheet.addSpan(0, 8, 3, 1, SheetArea.colHeader);
  sheet.setValue(0, 8, "本年自费留学出国（境）的", SheetArea.colHeader);
  sheet.addSpan(0, 9, 1, 4, SheetArea.colHeader);
  sheet.addSpan(1, 9, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 9, "本年出国（境）定居的", SheetArea.colHeader);
  sheet.addSpan(1, 10, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 10, "探亲", SheetArea.colHeader);
  sheet.addSpan(1, 11, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 11, "继承遗产", SheetArea.colHeader);
  sheet.addSpan(1, 12, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 12, "工作", SheetArea.colHeader);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  sheet.addSpan(0, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(1, 0, 4, 1, SheetArea.rowHeader);
  sheet.addSpan(1, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(2, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(3, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(4, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(5, 0, 6, 1, SheetArea.rowHeader);
  sheet.addSpan(5, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(6, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(7, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(8, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(9, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(10, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(11, 0, 9, 1, SheetArea.rowHeader);
  sheet.addSpan(11, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(12, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(14, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(15, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(16, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(17, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(18, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(19, 1, 1, 2, SheetArea.rowHeader);

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(5,0,style,SheetArea.rowHeader);
  sheet.setStyle(11,0,style,SheetArea.rowHeader);
  sheet.setStyle(12,1,style,SheetArea.rowHeader);
  style.cellPadding = "5 5";

  for(var i = 0; i<=25; i++){
    sheet.setRowHeight(i, 30,SheetArea.rowHeader);
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
  sheet.setRowHeight(12, 50,SheetArea.rowHeader);

  sheet.getCell(13, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});


  sheet.setColumnWidth(0, 30,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 30,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 180,SheetArea.rowHeader);
  sheet.setRowHeight(0, 25,SheetArea.colHeader);
  sheet.setRowHeight(1, 25,SheetArea.colHeader);
  sheet.setRowHeight(2, 80,SheetArea.colHeader);

  sheet.setValue(0, 0,"总              计", SheetArea.rowHeader);
  sheet.setValue(1, 1,"本年出国（境）的", SheetArea.rowHeader);
  sheet.setValue(2, 1,"预备党员", SheetArea.rowHeader);
  sheet.setValue(3, 1,"35   岁及以下的", SheetArea.rowHeader);
  sheet.setValue(4, 1,"60   岁及以上的", SheetArea.rowHeader);

  sheet.setValue(5, 0,"入党时间", SheetArea.rowHeader);
  sheet.setValue(5, 1,"1949  年 9 月 30 日 以 前", SheetArea.rowHeader);
  sheet.setValue(6, 1,"1949年10月1日至1976年10月", SheetArea.rowHeader);
  sheet.setValue(7, 1,"1976年11月至1978年12月", SheetArea.rowHeader);
  sheet.setValue(8, 1,"1979年1月 至 2002年10月", SheetArea.rowHeader);
  sheet.setValue(9, 1,"2002年11月至2012年10月", SheetArea.rowHeader);
  sheet.setValue(10, 1,"2012年11月及以后", SheetArea.rowHeader);
  sheet.setValue(11, 0,"职业", SheetArea.rowHeader);
  sheet.setValue(11, 1,"党政机关工作人员", SheetArea.rowHeader);
  sheet.setValue(12, 1,"企事业、民办非企业单位管理人员、专业技术人员", SheetArea.rowHeader);
  sheet.setValue(13, 2,"高校教师", SheetArea.rowHeader);
  sheet.setValue(14, 1,"工勤技能人员", SheetArea.rowHeader);
  sheet.setValue(15, 1,"农牧渔民", SheetArea.rowHeader);
  sheet.setValue(16, 1,"军人、武警", SheetArea.rowHeader);
  sheet.setValue(17, 1,"学生", SheetArea.rowHeader);
  sheet.setValue(18, 1,"离退休人员", SheetArea.rowHeader);
  sheet.setValue(19, 1,"其他", SheetArea.rowHeader);

  // 补充资料
  sheet.addSpan(20, 0, 1, 4, SheetArea.rowHeader);
  sheet.setValue(20, 0,"补充资料：1. 979年1月1日以来赴港澳、", SheetArea.rowHeader);
  sheet.addSpan(20, 0, 1, 2);
  sheet.setValue(20, 0,"本年底仍在港澳的党员");
  sheet.addSpan(20, 3, 1, 2);
  sheet.setValue(20, 3,"名，其中定居的党员");
  sheet.addSpan(20, 6, 1, 2);
  sheet.setValue(20, 6,"名，自费留学的党员");
  sheet.addSpan(20, 9, 1, 2);
  sheet.setValue(20, 9,"名，工作的党员");
  sheet.setValue(20, 12,"名");
  sheet.addSpan(21, 2, 1, 2, SheetArea.rowHeader);
  sheet.setValue(21, 2,"2．本年内赴港澳定居的党员", SheetArea.rowHeader);
  sheet.addSpan(21, 1, 1, 2);
  sheet.setValue(21, 1,"名，自费留学的党员");
  sheet.addSpan(21, 4, 1, 2);
  sheet.setValue(21, 4,"名，工作的党员");
  sheet.addSpan(21, 7, 1, 2);
  sheet.setValue(21, 7,"名。");


  var rowStyle = new GC.Spread.Sheets.Style();
  rowStyle.backColor = "#E4ECF7";
  for(var i = 20 ;i<= 24; i++){
    for(var j = 0 ;j<=4;j++){
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
