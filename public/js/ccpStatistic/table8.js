var funSheet8 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(7);
  sheet.isPaintSuspended(true);
  sheet.name('民主评议党员情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(13);
  sheet.setColumnCount(10);
  sheet.setRowCount( 3, SheetArea.colHeader);
  sheet.setColumnCount( 3, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 120 },
    { name: "B", displayName: "B", size: 130},
    { name: "C", displayName: "C", size: 120 },
    { name: "D", displayName: "D", size: 140},
    { name: "E", displayName: "E", size: 120},
    { name: "F", displayName: "F", size: 120},
    { name: "G", displayName: "G", size: 120 },
    { name: "H", displayName: "H", size: 120 },
    { name: "I", displayName: "I", size: 80 },
    { name: "J", displayName: "J", size: 80 },
  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.addSpan(0, 0, 1, 2, SheetArea.colHeader);
  sheet.setValue(1, 0, "总   数", SheetArea.colHeader);
  sheet.setValue(1, 1, "上年开展本年结束评议", SheetArea.colHeader);
  sheet.addSpan(0, 2, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 2, "建制村", SheetArea.colHeader);
  sheet.addSpan(0, 3, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 3, "社区（居委会）", SheetArea.colHeader);
  sheet.addSpan(0, 4, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 4, "机关", SheetArea.colHeader);
  sheet.addSpan(0, 5, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 5, "事业单位", SheetArea.colHeader);
  sheet.addSpan(0, 6, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 6, "公有经济控制企业", SheetArea.colHeader);
  sheet.addSpan(0, 7, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 7, "非公有经济控制企业", SheetArea.colHeader);
  sheet.addSpan(0, 8, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 8, "社会组织", SheetArea.colHeader);
  sheet.addSpan(0, 9, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 9, "其他", SheetArea.colHeader);
  sheet.addSpan(0, 10, 2, 1, SheetArea.colHeader);
  sheet.setValue(0, 10, "事业单位", SheetArea.colHeader);
  sheet.getCell(0, 1,SheetArea.colHeader).tag('{"key": "GenderCode", "values": ["0"]}');
  sheet.getCell(0, 2,SheetArea.colHeader).tag('{"key": "DtNation", "values": ["1"]}');


  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  sheet.addSpan(0, 0, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(2, 0, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(4, 0, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(5, 0, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(6, 0, 5, 1, SheetArea.rowHeader);
  sheet.addSpan(11, 0, 1, 2, SheetArea.rowHeader);

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(6,0,style,SheetArea.rowHeader);
  sheet.setStyle(11,0,style,SheetArea.rowHeader);
  style.cellPadding = "5 8";
  for(var i = 0; i<=19; i++){
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
  sheet.setRowHeight(11, 50,SheetArea.rowHeader);
  sheet.setColumnWidth(0, 35,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 220,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 35,SheetArea.rowHeader);
  sheet.setRowHeight(0, 20,SheetArea.colHeader);
  sheet.setRowHeight(1, 40,SheetArea.colHeader);

  /*
   *  Y表头
   */
  sheet.setValue(0, 0,"开展评议的支部", SheetArea.rowHeader);
  sheet.setValue(2, 0,"参加评议的党员", SheetArea.rowHeader);
  sheet.setValue(4, 0,"表彰党员", SheetArea.rowHeader);
  sheet.setValue(5, 0,"被评定为“不合格党员”", SheetArea.rowHeader);
  sheet.setValue(6, 0,"组织处置情况", SheetArea.rowHeader);
  sheet.setValue(11, 0,"限期改正期满仍无转变予以劝退以及劝而不退除名", SheetArea.rowHeader);
  sheet.setValue(1, 1,"结束评议的支部", SheetArea.rowHeader);
  sheet.setValue(3, 1,"结束评议的党员", SheetArea.rowHeader);
  sheet.setValue(6, 1,"合计", SheetArea.rowHeader);
  sheet.setValue(7, 1,"限期改正", SheetArea.rowHeader);
  sheet.setValue(8, 1,"劝退", SheetArea.rowHeader);
  sheet.setValue(9, 1,"劝而不退除名", SheetArea.rowHeader);
  sheet.setValue(10, 1,"自行脱党除名", SheetArea.rowHeader);

  sheet.getCell(1, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["0%"]}');

  // 补充资料
  sheet.addSpan(12, 0, 1, 3, SheetArea.rowHeader);
  sheet.setValue(12, 0,"补充资料：本年民主评议党员中，发现党员", SheetArea.rowHeader);
  sheet.addSpan(12, 0, 1, 3);
  sheet.setValue(12, 0, "违反党的纪律线索，通报纪检机关查实开除党籍的");
  sheet.addSpan(12, 4, 1, 2);
  sheet.setValue(12, 4, "名，给予其他党的纪律处分的");
  sheet.setValue(12, 7, "名");

  var rowStyle = new GC.Spread.Sheets.Style();
  rowStyle.backColor = "#E4ECF7";
  for(var i = 12 ;i<= 12; i++){
    for(var j = 0 ;j<=2;j++){
      sheet.getCell(i, j, SheetArea.rowHeader).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
    for(var j = 0 ;j<=9;j++){
      sheet.setStyle(i,j,rowStyle);
      sheet.getCell(i, j).vAlign(1);
      sheet.getCell(i, j).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
  }

  sheet.isPaintSuspended(false);
};

var setDT8ExtendData = function (sheet,data) {
  sheet.setValue(12,3,data[10][1]);
  sheet.setValue(12,6,data[10][2]);

  sheet.getCell(23, 11).tag('P,4');
};
