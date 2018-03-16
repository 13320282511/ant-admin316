var funSheet36 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(35);
  sheet.isPaintSuspended(true);
  sheet.name('留学回国人员党员情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(5);
  sheet.setColumnCount(7);
  sheet.setRowCount( 3, SheetArea.colHeader);
  sheet.setColumnCount( 3, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 150  },
    { name: "B", displayName: "B", size: 150},
    { name: "C", displayName: "C", size: 150 },
    { name: "D", displayName: "D", size: 150 },
    { name: "E", displayName: "E", size: 150 },
    { name: "F", displayName: "F", size: 150 },
    { name: "G", displayName: "G", size: 150 },
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
  sheet.setValue(1, 0, "总数", SheetArea.colHeader);
  sheet.setValue(1, 1, "预备党员", SheetArea.colHeader);
  sheet.setValue(1, 2, "自费留学的", SheetArea.colHeader);
  sheet.addSpan(0, 3, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 3, "组织关系出国（境）时转往国（境）外的", SheetArea.colHeader);
  sheet.addSpan(0, 4, 1, 2, SheetArea.colHeader);
  sheet.setValue(1, 4, "组织关系出国（境）时未转往国（境）外的", SheetArea.colHeader);
  sheet.setValue(1, 5, "在国（境）外期间与党组织保持联系的", SheetArea.colHeader);
  sheet.addSpan(0, 6, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 6, "因出国（境）定居停止党籍的", SheetArea.colHeader);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  sheet.addSpan(0, 0, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(1, 0, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(2, 0, 1, 2, SheetArea.rowHeader);


  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  style.cellPadding = "5 5";

  for(var i = 0; i<=17; i++){
    sheet.setRowHeight(i, 60,SheetArea.rowHeader);
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

  sheet.getCell(3, 0, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});

  sheet.setColumnWidth(1, 130,SheetArea.rowHeader);
  sheet.setRowHeight(0, 30,SheetArea.colHeader);
  sheet.setRowHeight(1, 70,SheetArea.colHeader);

  sheet.setValue(0, 0,"总计", SheetArea.rowHeader);
  sheet.setValue(1, 0,"已恢复组织生活的", SheetArea.rowHeader);
  sheet.setValue(2, 0,"未恢复组织生活的", SheetArea.rowHeader);
  sheet.setValue(3, 1,"已提出恢复申请的", SheetArea.rowHeader);


  // 补充资料
  sheet.addSpan(4, 0, 1, 3, SheetArea.rowHeader);
  sheet.setValue(4, 0,"补充资料：在国（境）外期间已", SheetArea.rowHeader);
  sheet.setValue(4, 0,"作出党处理的");
  sheet.addSpan(4, 2, 1, 2);
  sheet.setValue(4, 2,"人；回国后已作出党处理的");
  sheet.setValue(4, 5,"人。");

  var rowStyle = new GC.Spread.Sheets.Style();
  rowStyle.backColor = "#E4ECF7";
  for(var i = 4 ;i<= 6; i++){
    for(var j = 0 ;j<=2;j++){
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
