var funSheet25 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(24);
  sheet.isPaintSuspended(true);
  sheet.name('街道、社区（居委会）、乡镇、建制村法人单位建立党的基层组织情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(14);
  sheet.setColumnCount(5);
  sheet.setRowCount( 2, SheetArea.colHeader);
  sheet.setColumnCount( 4, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 150  },
    { name: "B", displayName: "B", size: 150},
    { name: "C", displayName: "C", size: 150 },
    { name: "D", displayName: "D", size: 150 },
    { name: "E", displayName: "E", size: 150 },
  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.setValue(0, 0, "城市街道", SheetArea.colHeader);
  sheet.setValue(0, 1, "城市社区（居委会）", SheetArea.colHeader);
  sheet.setValue(0, 2, "乡镇", SheetArea.colHeader);
  sheet.setValue(0, 3, "乡镇社区（居委会）", SheetArea.colHeader);
  sheet.setValue(0, 4, "建制村", SheetArea.colHeader);


  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  sheet.addSpan(0, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(1, 0, 3, 1, SheetArea.rowHeader);
  sheet.addSpan(1, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(2, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(3, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(4, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(5, 0, 2, 1, SheetArea.rowHeader);
  sheet.addSpan(5, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(6, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(7, 0, 4, 1, SheetArea.rowHeader);
  sheet.addSpan(7, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(9, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(10, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(11, 0, 2, 1, SheetArea.rowHeader);
  sheet.addSpan(11, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(12, 1, 1, 2, SheetArea.rowHeader);

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(1,0,style,SheetArea.rowHeader);
  sheet.setStyle(7,0,style,SheetArea.rowHeader);
  sheet.setStyle(11,0,style,SheetArea.rowHeader);
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

  sheet.getCell(8, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(5, 0, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});

  sheet.setColumnWidth(0, 50,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 25,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 130,SheetArea.rowHeader);
  sheet.setRowHeight(0, 50,SheetArea.colHeader);

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
  sheet.setValue(11, 1,"建立党员服务机构的", SheetArea.rowHeader);
  sheet.setValue(12, 1,"建立党员志愿者队伍的", SheetArea.rowHeader);

  // 补充资料
  sheet.addSpan(13, 0, 1, 4, SheetArea.rowHeader);
  sheet.setValue(13, 0,"补充资料：本表A1栏中包括建立工委", SheetArea.rowHeader);
  sheet.setValue(13, 0,"的城市街道");
  sheet.setValue(13, 2,"个。");
  sheet.getCell(1, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["0%"]}');

  for(var i = 13 ;i<= 13; i++){
    for(var j = 0 ;j<=3;j++){
      sheet.getCell(i, j, SheetArea.rowHeader).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
    for(var j = 0 ;j<=4;j++){
      sheet.setStyle(i,j,newStyle("#E4ECF7"));
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
