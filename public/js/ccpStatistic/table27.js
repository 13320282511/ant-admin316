var funSheet27 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(26);
  sheet.isPaintSuspended(true);
  sheet.name('非公有经济控制的企业法人单位建立党的基层组织情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(18);
  sheet.setColumnCount(13);
  sheet.setRowCount( 4, SheetArea.colHeader);
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
  sheet.setValue(1, 0, "总数", SheetArea.colHeader);
  sheet.addSpan(1, 1, 1, 2, SheetArea.colHeader);
  sheet.setValue(2, 1, "从业人员50人以上企     业", SheetArea.colHeader);
  sheet.setValue(2, 2, "从业人员100人以上企     业", SheetArea.colHeader);
  sheet.addSpan(1, 3, 1, 2, SheetArea.colHeader);
  sheet.setValue(2, 3, "法定代表人是党员的", SheetArea.colHeader);
  sheet.setValue(2, 4, "兼任企业党组织书记的", SheetArea.colHeader);
  sheet.addSpan(0, 5, 1, 4, SheetArea.colHeader);
  sheet.addSpan(1, 5, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 5, "私 有经 济控 制", SheetArea.colHeader);
  sheet.addSpan(1, 6, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 6, "私 营独 资", SheetArea.colHeader);
  sheet.addSpan(1, 7, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 7, "港 澳台 商投 资", SheetArea.colHeader);
  sheet.addSpan(1, 8, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 8, "外 商投 资", SheetArea.colHeader);

  sheet.addSpan(0, 9, 1, 2, SheetArea.colHeader);
  sheet.addSpan(1, 9, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 9, "港 澳台 商经 济控 制", SheetArea.colHeader);
  sheet.addSpan(1, 10, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 10, "港 澳台 商独 资", SheetArea.colHeader);
  sheet.addSpan(0, 11, 1, 2, SheetArea.colHeader);
  sheet.addSpan(1, 11, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 11, "外 商经 济控 制", SheetArea.colHeader);
  sheet.addSpan(1, 12, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 12, "外 商独 资", SheetArea.colHeader);


  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  sheet.addSpan(0, 0, 1, 4, SheetArea.rowHeader);
  sheet.addSpan(1, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(2, 0, 3, 1, SheetArea.rowHeader);
  sheet.addSpan(2, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(3, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(4, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(5, 0, 1, 4, SheetArea.rowHeader);
  sheet.addSpan(6, 0, 2, 1, SheetArea.rowHeader);
  sheet.addSpan(6, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(7, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(8, 0, 3, 1, SheetArea.rowHeader);
  sheet.addSpan(8, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(9, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(10, 1, 1, 3, SheetArea.rowHeader);

  sheet.addSpan(11, 0, 7, 1, SheetArea.rowHeader);
  sheet.addSpan(11, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(12, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(13, 1, 5, 1, SheetArea.rowHeader);
  sheet.addSpan(13, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(14, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(16, 2, 1, 2, SheetArea.rowHeader);

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(2,0,style,SheetArea.rowHeader);
  sheet.setStyle(8,0,style,SheetArea.rowHeader);
  sheet.setStyle(11,0,style,SheetArea.rowHeader);
  sheet.setStyle(14,2,style,SheetArea.rowHeader);
  sheet.setStyle(16,2,style,SheetArea.rowHeader);
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

  sheet.setRowHeight(14, 60,SheetArea.rowHeader);
  sheet.setRowHeight(16, 60,SheetArea.rowHeader);

  // sheet.getCell(1, 0, SheetArea.rowHeader).setBorder(
  //   new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
  //   { top: true});
  sheet.getCell(6, 0, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(13, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(15, 2, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(17, 2, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});

  sheet.setColumnWidth(0, 50,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 25,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 25,SheetArea.rowHeader);
  sheet.setColumnWidth(3, 130,SheetArea.rowHeader);
  sheet.setRowHeight(0, 20,SheetArea.colHeader);
  sheet.setRowHeight(1, 20,SheetArea.colHeader);
  sheet.setRowHeight(2, 70,SheetArea.colHeader);

  sheet.setValue(0, 0,"单位数", SheetArea.rowHeader);
  sheet.setValue(1, 1,"党建工作指导员联系的  ", SheetArea.rowHeader);
  sheet.setValue(2, 0,"已单独建  立党组织", SheetArea.rowHeader);
  sheet.setValue(2, 1,"建立党委的", SheetArea.rowHeader);
  sheet.setValue(3, 1,"建立总支部的", SheetArea.rowHeader);
  sheet.setValue(4, 1,"建立支部的", SheetArea.rowHeader);
  sheet.setValue(5, 0,"已建立联合党支部的", SheetArea.rowHeader);
  sheet.setValue(6, 1,"具有3名以上党员的", SheetArea.rowHeader);
  sheet.setValue(7, 1,"联合党支部数", SheetArea.rowHeader);
  sheet.setValue(8, 0,"未建立党组织", SheetArea.rowHeader);
  sheet.setValue(8, 1,"应建尚未建立党组织的", SheetArea.rowHeader);
  sheet.setValue(9, 1,"仅有个别党员的", SheetArea.rowHeader);
  sheet.setValue(10, 1,"没有党员的", SheetArea.rowHeader);

  sheet.setValue(11, 0,"补充情况", SheetArea.rowHeader);
  sheet.setValue(11, 1,"党建工作指导员", SheetArea.rowHeader);
  sheet.setValue(12, 1,"在岗职工", SheetArea.rowHeader);
  sheet.setValue(13, 2,"党员", SheetArea.rowHeader);
  sheet.setValue(14, 2,"已建立党组织的企业在岗职工", SheetArea.rowHeader);
  sheet.setValue(15, 3,"党员", SheetArea.rowHeader);
  sheet.setValue(16, 2,"未建立党组织，已派出党建指导员的企业在岗职工", SheetArea.rowHeader);
  sheet.setValue(17, 3,"党员", SheetArea.rowHeader);


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
