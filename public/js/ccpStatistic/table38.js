var funSheet38 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(37);
  sheet.isPaintSuspended(true);
  sheet.name('基层党组织领导班子公推直选情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(9);
  sheet.setColumnCount(6);
  sheet.setRowCount( 3, SheetArea.colHeader);
  sheet.setColumnCount( 2, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 150  },
    { name: "B", displayName: "B", size: 150},
    { name: "C", displayName: "C", size: 150 },
    { name: "D", displayName: "D", size: 150 },
    { name: "E", displayName: "E", size: 150 },
    { name: "F", displayName: "F", size: 150 },
  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.addSpan(0, 0, 1, 4, SheetArea.colHeader);
  sheet.setValue(0, 0, "开展公推直选的基层党组织", SheetArea.colHeader);
  sheet.setValue(1, 0, "总数", SheetArea.colHeader);
  sheet.setValue(1, 1, "党 委", SheetArea.colHeader);
  sheet.setValue(1, 2, "总 支 部", SheetArea.colHeader);
  sheet.setValue(1, 3, "支 部", SheetArea.colHeader);
  sheet.addSpan(0, 4, 1, 2, SheetArea.colHeader);
  sheet.setValue(0, 4, "书记、副书记选举方式", SheetArea.colHeader);
  sheet.setValue(1, 4, "组织关系出国（境）时转往国（境）外的", SheetArea.colHeader);
  sheet.setValue(1, 5, "等额选举", SheetArea.colHeader);


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


  sheet.setColumnWidth(0, 160,SheetArea.rowHeader);
  sheet.setRowHeight(0, 50,SheetArea.colHeader);
  sheet.setRowHeight(1, 50,SheetArea.colHeader);

  sheet.setValue(0, 0,"乡镇", SheetArea.rowHeader);
  sheet.setValue(1, 0,"建制村", SheetArea.rowHeader);
  sheet.setValue(2, 0,"社区（居委会）", SheetArea.rowHeader);
  sheet.setValue(3, 0,"机关", SheetArea.rowHeader);
  sheet.setValue(4, 0,"事业单位", SheetArea.rowHeader);
  sheet.setValue(5, 0,"公有经济控制企业", SheetArea.rowHeader);
  sheet.setValue(6, 0,"非公有经济控制企业", SheetArea.rowHeader);
  sheet.setValue(7, 0,"社会组织", SheetArea.rowHeader);
  sheet.setValue(8, 0,"其他", SheetArea.rowHeader);

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
