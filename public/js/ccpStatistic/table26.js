var funSheet26 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(25);
  sheet.isPaintSuspended(true);
  sheet.name('公有经济控制的企业法人单位建立党的基层组织情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(17);
  sheet.setColumnCount(15);
  sheet.setRowCount( 5, SheetArea.colHeader);
  sheet.setColumnCount( 5, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 80  },
    { name: "B", displayName: "B", size: 80},
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
    { name: "N", displayName: "N", size: 80 },
    { name: "O", displayName: "O", size: 80 },
  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.addSpan(0, 0, 1, 6, SheetArea.colHeader);
  sheet.addSpan(1, 0, 3, 1, SheetArea.colHeader);
  sheet.setValue(1, 0, "总数", SheetArea.colHeader);
  sheet.addSpan(1, 1, 3, 1, SheetArea.colHeader);
  sheet.setValue(1, 1, "大中型", SheetArea.colHeader);
  sheet.addSpan(1, 2, 1, 4, SheetArea.colHeader);
  sheet.addSpan(2, 2, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 2, "中央企业", SheetArea.colHeader);
  sheet.addSpan(2, 3, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 3, "中管金融企业", SheetArea.colHeader);
  sheet.addSpan(2, 4, 1, 2, SheetArea.colHeader);
  sheet.setValue(3, 4, "国务院国资委监管企业", SheetArea.colHeader);
  sheet.setValue(3, 5, "中管企业", SheetArea.colHeader);
  sheet.addSpan(0, 6, 1, 5, SheetArea.colHeader);
  sheet.addSpan(1, 6, 3, 1, SheetArea.colHeader);
  sheet.setValue(1, 6, "合计", SheetArea.colHeader);
  sheet.addSpan(1, 7, 3, 1, SheetArea.colHeader);
  sheet.setValue(1, 7, "国有独资", SheetArea.colHeader);
  sheet.addSpan(1, 8, 1, 3, SheetArea.colHeader);
  sheet.addSpan(2, 8, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 8, "国有控股", SheetArea.colHeader);
  sheet.addSpan(2, 9, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 9, "港澳台商投资", SheetArea.colHeader);
  sheet.addSpan(2, 10, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 10, "外商投资", SheetArea.colHeader);
  sheet.addSpan(0, 11, 1, 4, SheetArea.colHeader);
  sheet.addSpan(1, 11, 3, 1, SheetArea.colHeader);
  sheet.setValue(1, 11, "集体经济控制", SheetArea.colHeader);
  sheet.addSpan(1, 12, 3, 1, SheetArea.colHeader);
  sheet.setValue(1, 12, "集体企业", SheetArea.colHeader);
  sheet.addSpan(1, 13, 3, 1, SheetArea.colHeader);
  sheet.setValue(1, 13, "港澳台商投资", SheetArea.colHeader);
  sheet.addSpan(1, 14, 3, 1, SheetArea.colHeader);
  sheet.setValue(1, 14, "外商投资", SheetArea.colHeader);


  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  sheet.addSpan(0, 0, 1, 4, SheetArea.rowHeader);
  sheet.addSpan(1, 0, 3, 1, SheetArea.rowHeader);
  sheet.addSpan(1, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(2, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(3, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(4, 0, 1, 4, SheetArea.rowHeader);
  sheet.addSpan(5, 0, 2, 1, SheetArea.rowHeader);
  sheet.addSpan(5, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(6, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(7, 0, 4, 1, SheetArea.rowHeader);
  sheet.addSpan(7, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(8, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(9, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(10, 1, 1, 3, SheetArea.rowHeader);

  sheet.addSpan(11, 0, 6, 1, SheetArea.rowHeader);
  sheet.addSpan(11, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(12, 1, 3, 1, SheetArea.rowHeader);
  sheet.addSpan(12, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(13, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(15, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(16, 2, 1, 2, SheetArea.rowHeader);

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(1,0,style,SheetArea.rowHeader);
  sheet.setStyle(7,0,style,SheetArea.rowHeader);
  sheet.setStyle(11,0,style,SheetArea.rowHeader);
  style.cellPadding = "5 5";

  for(var i = 0; i<=17; i++){
    sheet.setRowHeight(i, 30,SheetArea.rowHeader);
    sheet.setStyle(0,i,style,SheetArea.colHeader);
    sheet.setStyle(1,i,style,SheetArea.colHeader);
    sheet.setStyle(2,i,style,SheetArea.colHeader);
    sheet.setStyle(3,i,style,SheetArea.colHeader);
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

  sheet.getCell(8, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(12, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(14, 2, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(16, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});


  sheet.setColumnWidth(0, 50,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 25,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 25,SheetArea.rowHeader);
  sheet.setColumnWidth(3, 130,SheetArea.rowHeader);
  sheet.setRowHeight(0, 30,SheetArea.colHeader);
  sheet.setRowHeight(1, 20,SheetArea.colHeader);
  sheet.setRowHeight(2, 20,SheetArea.colHeader);
  sheet.setRowHeight(3, 70,SheetArea.colHeader);

  sheet.setValue(0, 0,"单位数", SheetArea.rowHeader);
  sheet.setValue(1, 0,"已单独建  立党组织", SheetArea.rowHeader);
  sheet.setValue(1, 1,"建立党委的", SheetArea.rowHeader);
  sheet.setValue(2, 1,"建立总支部的", SheetArea.rowHeader);
  sheet.setValue(3, 1,"建立支部的", SheetArea.rowHeader);
  sheet.setValue(4, 0,"已建立联合党支部的", SheetArea.rowHeader);
  sheet.setValue(5, 1,"具有3名以上党员的", SheetArea.rowHeader);
  sheet.setValue(6, 1,"联合党支部数", SheetArea.rowHeader);
  sheet.setValue(7, 0,"未建立党组织", SheetArea.rowHeader);
  sheet.setValue(7, 1,"应建尚未建立党组织的", SheetArea.rowHeader);
  sheet.setValue(8, 2,"建立党小组的", SheetArea.rowHeader);
  sheet.setValue(9, 1,"仅有个别党员的", SheetArea.rowHeader);
  sheet.setValue(10, 1,"没有党员的", SheetArea.rowHeader);
  sheet.setValue(11, 0,"补充情况", SheetArea.rowHeader);
  sheet.setValue(11, 1,"在岗职工", SheetArea.rowHeader);
  sheet.setValue(12, 2,"党员", SheetArea.rowHeader);
  sheet.setValue(13, 2,"工勤技能人员", SheetArea.rowHeader);
  sheet.setValue(14, 3,"党员", SheetArea.rowHeader);
  sheet.setValue(15, 1,"配备专职党务工作人员的", SheetArea.rowHeader);
  sheet.setValue(16, 2,"配备专职副书记的", SheetArea.rowHeader);

  // 补充资料


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
