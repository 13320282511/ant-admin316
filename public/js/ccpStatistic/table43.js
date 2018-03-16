var funSheet43 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(42);
  sheet.isPaintSuspended(true);
  sheet.name('失去联系党员情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(11);
  sheet.setColumnCount(27);
  sheet.setRowCount( 4, SheetArea.colHeader);
  sheet.setColumnCount( 2, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 45  },
    { name: "B", displayName: "B", size: 45 },
    { name: "C", displayName: "C", size: 45 },
    { name: "D", displayName: "D", size: 45 },
    { name: "E", displayName: "E", size: 45 },
    { name: "F", displayName: "F", size: 45 },
    { name: "G", displayName: "G", size: 45 },
    { name: "H", displayName: "H", size: 45 },
    { name: "I", displayName: "I", size: 45 },
    { name: "J", displayName: "J", size: 45 },
    { name: "K", displayName: "K", size: 45 },
    { name: "L", displayName: "L", size: 45 },
    { name: "M", displayName: "M", size: 45 },
    { name: "N", displayName: "N", size: 45 },
    { name: "O", displayName: "O", size: 45 },
    { name: "P", displayName: "P", size: 45 },
    { name: "Q", displayName: "Q", size: 45 },
    { name: "R", displayName: "R", size: 45 },
    { name: "S", displayName: "S", size: 45 },
    { name: "T", displayName: "T", size: 45 },
    { name: "U", displayName: "U", size: 45 },
    { name: "V", displayName: "V", size: 45 },
    { name: "W", displayName: "W", size: 45 },
    { name: "X", displayName: "X", size: 45 },
    { name: "Y", displayName: "Y", size: 45 },
    { name: "Z", displayName: "Z", size: 45 },
    { name: "AA", displayName: "AA", size: 45 },
  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.addSpan(0, 0, 2, 4, SheetArea.colHeader);
  sheet.setValue(0, 0, "总数", SheetArea.colHeader);
  sheet.setValue(2, 1, "预备党员", SheetArea.colHeader);
  sheet.setValue(2, 2, "女", SheetArea.colHeader);
  sheet.setValue(2, 3, "少数民族", SheetArea.colHeader);
  sheet.addSpan(0, 4, 1, 12, SheetArea.colHeader);
  sheet.setValue(0, 4, "结构情况", SheetArea.colHeader);
  sheet.addSpan(1, 4, 1, 4, SheetArea.colHeader);
  sheet.setValue(1, 4, "年龄", SheetArea.colHeader);
  sheet.setValue(2, 4, "35岁及以下", SheetArea.colHeader);
  sheet.setValue(2, 5, "36岁至45岁", SheetArea.colHeader);
  sheet.setValue(2, 6, "46岁至60岁", SheetArea.colHeader);
  sheet.setValue(2, 7, "61岁及以上", SheetArea.colHeader);
  sheet.addSpan(1, 8, 1, 5, SheetArea.colHeader);
  sheet.setValue(1, 8, "党龄", SheetArea.colHeader);
  sheet.setValue(2, 8, "1年以下", SheetArea.colHeader);
  sheet.setValue(2, 9, "1年至5年", SheetArea.colHeader);
  sheet.setValue(2, 10, "6年至10年", SheetArea.colHeader);
  sheet.setValue(2, 11, "11年至20年", SheetArea.colHeader);
  sheet.setValue(2, 12, "21年及以上", SheetArea.colHeader);
  sheet.addSpan(1, 13, 1, 3, SheetArea.colHeader);
  sheet.setValue(1, 13, "学历", SheetArea.colHeader);
  sheet.setValue(2, 13, "大专及以上", SheetArea.colHeader);
  sheet.setValue(2, 14, "中专、高中、中技", SheetArea.colHeader);
  sheet.setValue(2, 15, "初中及以下", SheetArea.colHeader);
  sheet.addSpan(0, 16, 1, 11, SheetArea.colHeader);
  sheet.setValue(0, 16, "失去联系情况", SheetArea.colHeader);
  sheet.addSpan(1, 16, 1, 4, SheetArea.colHeader);
  sheet.setValue(1, 16, "失去联系时间", SheetArea.colHeader);
  sheet.setValue(2, 16, "6个月以上不满1年", SheetArea.colHeader);
  sheet.setValue(2, 17, "1年至5年", SheetArea.colHeader);
  sheet.setValue(2, 18, "6年至10年", SheetArea.colHeader);
  sheet.setValue(2, 19, "11年及以上", SheetArea.colHeader);
  sheet.addSpan(1, 20, 1, 7, SheetArea.colHeader);
  sheet.setValue(1, 20, "失去联系具体情形", SheetArea.colHeader);
  sheet.setValue(2, 20, "外出务工经商", SheetArea.colHeader);
  sheet.setValue(2, 21, "单位改制或破产", SheetArea.colHeader);
  sheet.setValue(2, 22, "毕业后去向不明", SheetArea.colHeader);
  sheet.setValue(2, 23, "工作单位改变", SheetArea.colHeader);
  sheet.setValue(2, 24, "出国（境）", SheetArea.colHeader);
  sheet.setValue(2, 25, "居住地改变", SheetArea.colHeader);
  sheet.setValue(2, 26, "其他", SheetArea.colHeader);


  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */


  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(0,0,style,SheetArea.rowHeader);
  sheet.setStyle(1,0,style,SheetArea.rowHeader);
  sheet.setStyle(2,0,style,SheetArea.rowHeader);
  sheet.setStyle(3,0,style,SheetArea.rowHeader);
  sheet.setStyle(4,0,style,SheetArea.rowHeader);
  sheet.setStyle(5,0,style,SheetArea.rowHeader);
  sheet.setStyle(6,0,style,SheetArea.rowHeader);
  sheet.setStyle(7,0,style,SheetArea.rowHeader);
  sheet.setStyle(8,0,style,SheetArea.rowHeader);
  style.cellPadding = "5 5";

  for(var i = 0; i<=32; i++){
    sheet.setRowHeight(i, 50,SheetArea.rowHeader);
    sheet.setStyle(0,i,style,SheetArea.colHeader);
    sheet.setStyle(1,i,style,SheetArea.colHeader);
    sheet.setStyle(2,i,style,SheetArea.colHeader);
  }
  for(var i = 0; i<=8; i++){
    for(var j =0; j<=32; j++){
      sheet.getCell(i, j).hAlign(1).vAlign(1);
      sheet.getCell(i,j).setBorder(new GC.Spread.Sheets.LineBorder("#9EB6CE", GC.Spread.Sheets.LineStyle.thin), {top: true,left: true,right: true,bottom: true});
    }
  }

  // sheet.getCell(2, 0, SheetArea.colHeader).setBorder(
  //   new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
  //   { top: true});

  sheet.setColumnWidth(0, 120,SheetArea.rowHeader);
  sheet.setRowHeight(0, 30,SheetArea.colHeader);
  sheet.setRowHeight(1, 30,SheetArea.colHeader);
  sheet.setRowHeight(2, 110,SheetArea.colHeader);

  sheet.setValue(0, 0,"总计", SheetArea.rowHeader);
  sheet.setValue(1, 0,"建制村", SheetArea.rowHeader);
  sheet.setValue(2, 0,"社区（居委会）", SheetArea.rowHeader);
  sheet.setValue(3, 0,"机关", SheetArea.rowHeader);
  sheet.setValue(4, 0,"事业单位", SheetArea.rowHeader);
  sheet.setValue(5, 0,"公有经济控制企业", SheetArea.rowHeader);
  sheet.setValue(6, 0,"非公有经济控制企业", SheetArea.rowHeader);
  sheet.setValue(7, 0,"社会组织", SheetArea.rowHeader);
  sheet.setValue(8, 0,"其他", SheetArea.rowHeader);

  // 补充资料
  sheet.addSpan(9, 0, 1, 2, SheetArea.rowHeader);
  sheet.setValue(9, 0,"补充资料：1.  高等学校", SheetArea.rowHeader);
  sheet.addSpan(9, 0, 1, 4);
  sheet.setValue(9, 0,"中失去联系的毕业生党员");
  sheet.addSpan(9, 5, 1, 6);
  sheet.setValue(9, 5," 名，其中失去联系6个月以上不满1年的");
  sheet.addSpan(9, 12, 1, 3);
  sheet.setValue(9, 12,"名、1年至5年的");
  sheet.addSpan(9, 16, 1, 3);
  sheet.setValue(9, 16,"名、6年及以上的");
  sheet.setValue(9, 20,"名。");
  sheet.addSpan(10, 0, 1, 2, SheetArea.rowHeader);
  sheet.setValue(10, 0,"2. 公共就业和人才服务", SheetArea.rowHeader);
  sheet.addSpan(10, 0, 1, 5);
  sheet.setValue(10, 0,"机构中失去联系的流动人才党员");
  sheet.addSpan(10, 6, 1, 6);
  sheet.setValue(10, 6,"名，其中失去联系6个月以上不满1年的");
  sheet.addSpan(10, 13, 1, 3);
  sheet.setValue(10, 13,"名、1年至5年的");
  sheet.addSpan(10, 17, 1, 3);
  sheet.setValue(10, 17,"名、6年及以上的");
  sheet.setValue(10, 21,"名。");

  var bcStyle = new GC.Spread.Sheets.Style();
  bcStyle.backColor = "#E4ECF7";
  for(var i = 9 ;i<= 11; i++){
    for(var j = 0 ;j<=2;j++){
      sheet.getCell(i, j, SheetArea.rowHeader).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
    for(var j = 0 ;j<=32;j++){
      sheet.setStyle(i,j,bcStyle);
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
