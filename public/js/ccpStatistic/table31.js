var funSheet31 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(30);
  sheet.isPaintSuspended(true);
  sheet.name('国务院和地方政府工作部门法人单位建立党组织情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(7);
  sheet.setColumnCount(5);
  sheet.setRowCount( 2, SheetArea.colHeader);
  sheet.setColumnCount( 2, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 190  },
    { name: "B", displayName: "B", size: 190},
    { name: "C", displayName: "C", size: 190 },
    { name: "D", displayName: "D", size: 190 },
    { name: "E", displayName: "E", size: 190 },

  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.setValue(0, 0, "总数", SheetArea.colHeader);
  sheet.setValue(0, 1, "国务院部（委、办、局）", SheetArea.colHeader);
  sheet.setValue(0, 2, "省（区、市）政府工作部门", SheetArea.colHeader);
  sheet.setValue(0, 3, "市（地、州、盟）政府工作部门", SheetArea.colHeader);
  sheet.setValue(0, 4, "县（市、区、旗）政府工作部门", SheetArea.colHeader);

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



  sheet.setColumnWidth(0, 130,SheetArea.rowHeader);
  sheet.setRowHeight(0, 70,SheetArea.colHeader);

  sheet.setValue(0, 0,"部门数", SheetArea.rowHeader);
  sheet.setValue(1, 0,"建立党组的", SheetArea.rowHeader);
  sheet.setValue(2, 0,"建立党委的", SheetArea.rowHeader);
  sheet.setValue(3, 0,"建立总支部的", SheetArea.rowHeader);
  sheet.setValue(4, 0,"建立支部的", SheetArea.rowHeader);
  sheet.setValue(5, 0,"未建立党组织的", SheetArea.rowHeader);


  // 补充资料
  sheet.addSpan(6, 0, 1, 2, SheetArea.rowHeader);
  sheet.setValue(6, 0,"补充资料：军队和武警部", SheetArea.rowHeader);
  // sheet.addSpan(6, 0, 1, 2);
  sheet.setValue(6, 0,"队团及团以上单位建立的党委");
  sheet.setValue(6, 2,"个。");

  var rowStyle = new GC.Spread.Sheets.Style();
  rowStyle.backColor = "#E4ECF7";
  for(var i = 6 ;i<= 6; i++){
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
