var funSheet14 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(13);
  sheet.isPaintSuspended(true);
  sheet.name('党内表彰情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(6);
  sheet.setColumnCount(17);
  sheet.setRowCount( 4, SheetArea.colHeader);
  sheet.setColumnCount( 2, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 50 },
    { name: "B", displayName: "B", size: 60},
    { name: "C", displayName: "C", size: 60 },
    { name: "D", displayName: "D", size: 60},
    { name: "E", displayName: "E", size: 60},
    { name: "F", displayName: "F", size: 60},
    { name: "G", displayName: "G", size: 60},
    { name: "H", displayName: "H", size: 60},
    { name: "I", displayName: "I", size: 60},
    { name: "J", displayName: "J", size: 60},
    { name: "K", displayName: "K", size: 60},
    { name: "L", displayName: "L", size: 60},
    { name: "M", displayName: "M", size: 60},
    { name: "N", displayName: "N", size: 60},
    { name: "O", displayName: "O", size: 60},
    { name: "P", displayName: "P", size: 60},
    { name: "Q", displayName: "Q", size: 60},
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
  sheet.addSpan(1, 0, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 0, "总       数", SheetArea.colHeader);
  sheet.addSpan(1, 1, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 1, "抗灾救灾", SheetArea.colHeader);
  sheet.addSpan(0, 2, 1, 4, SheetArea.colHeader);
  sheet.setValue(0, 2, "表 彰 层 级", SheetArea.colHeader);
  sheet.addSpan(1, 2, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 2, "省（区、市）一级表彰", SheetArea.colHeader);
  sheet.addSpan(1, 3, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 3, "市（地、州、盟）一级表  彰", SheetArea.colHeader);
  sheet.addSpan(1, 4, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 4, "县（市、区、旗）一级表  彰", SheetArea.colHeader);
  sheet.addSpan(1, 5, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 5, "其他表彰", SheetArea.colHeader);
  sheet.addSpan(0, 6, 1, 11, SheetArea.colHeader);
  sheet.setValue(0, 6, "受表彰的党员或党组织所在单位", SheetArea.colHeader);
  sheet.addSpan(1, 6, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 6, "机   关", SheetArea.colHeader);
  sheet.addSpan(1, 7, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 7, "事业单位", SheetArea.colHeader);
  sheet.addSpan(1, 8, 1, 3, SheetArea.colHeader);
  sheet.setValue(1, 8, "企业", SheetArea.colHeader);
  sheet.setValue(2, 8, "国有经济控制", SheetArea.colHeader);
  sheet.setValue(2, 9, "集体经济控制", SheetArea.colHeader);
  sheet.setValue(2, 10, "非公有经济控制", SheetArea.colHeader);
  sheet.addSpan(1, 11, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 11, "社会组织", SheetArea.colHeader);
  sheet.addSpan(1, 12, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 12, "街道", SheetArea.colHeader);
  sheet.addSpan(1, 13, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 13, "乡镇", SheetArea.colHeader);
  sheet.addSpan(1, 14, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 14, "社区", SheetArea.colHeader);
  sheet.addSpan(1, 15, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 15, "建制村", SheetArea.colHeader);
  sheet.addSpan(1, 16, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 16, "其他", SheetArea.colHeader);


  sheet.getCell(0, 2,SheetArea.colHeader).tag('{"key": "DtNation", "values": ["1"]}');


  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(7,0,style,SheetArea.rowHeader);
  style.cellPadding = "5 5";
  for(var i = 0; i<=17; i++){
    sheet.setRowHeight(i, 30,SheetArea.rowHeader);
    sheet.setStyle(0,i, style,SheetArea.colHeader);
    sheet.setStyle(1,i, style,SheetArea.colHeader);
    sheet.setStyle(2,i, style,SheetArea.colHeader);
    sheet.setStyle(i,0, newStyle("#CCCCFF"));
    if(i<=2 || i == 10){
      for(var j =0; j<=14; j++){
        sheet.setStyle(i,j, newStyle("#CCCCFF"));
      }
    }
    for(var j =0; j<=17; j++){
      sheet.getCell(i, j).hAlign(1).vAlign(1);
      sheet.getCell(i,j).setBorder(new GC.Spread.Sheets.LineBorder("#9EB6CE", GC.Spread.Sheets.LineStyle.thin), {top: true,left: true,right: true,bottom: true});
    }
  }

  sheet.setColumnWidth(0, 220,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 35,SheetArea.rowHeader);
  sheet.setRowHeight(0, 40,SheetArea.colHeader);
  sheet.setRowHeight(1, 40,SheetArea.colHeader);
  sheet.setRowHeight(2, 60,SheetArea.colHeader);

  /*
   *  Y表头
   */
  sheet.setValue(0, 0,"先进基层党组织", SheetArea.rowHeader);
  sheet.setValue(1, 0,"优秀共产党员", SheetArea.rowHeader);
  sheet.setValue(2, 0,"优秀党务工作者", SheetArea.rowHeader);
  sheet.getCell(1, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["0%"]}');

  // 补充资料
  sheet.addSpan(3, 0, 1, 2, SheetArea.rowHeader);
  sheet.setValue(3, 0, "补充资料：1. 本年度表彰的优秀共产党", SheetArea.rowHeader);
  sheet.addSpan(3, 0, 1, 4);
  sheet.setValue(3, 0, " 员中有党委（总支部、支部）书记");
  sheet.addSpan(3, 5, 1, 7);
  sheet.setValue(3, 5, " 名；表彰的优秀党务工作者中有党委（总支部、支部）书记");
  sheet.setValue(3, 13, " 名");
  sheet.addSpan(4, 0, 1, 2, SheetArea.rowHeader);
  sheet.setValue(4, 0, "2. 本年度表彰的优秀共产党员中生活", SheetArea.rowHeader);
  sheet.setValue(4, 0, "困难的");
  sheet.addSpan(4, 2, 1, 5);
  sheet.setValue(4, 2, "名；表彰的优秀党务工作者中生活困难的");
  sheet.setValue(4, 8, "名");
  sheet.addSpan(5, 0, 1, 2, SheetArea.rowHeader);
  sheet.setValue(5, 0, "3. 本年度追授优秀共产党员", SheetArea.rowHeader);
  sheet.addSpan(5, 1, 1, 3);
  sheet.setValue(5, 1, " 名，其中抗灾救灾追授");
  sheet.setValue(5, 5, " 名");

  var rowStyle = new GC.Spread.Sheets.Style();
  rowStyle.backColor = "#E4ECF7";
  for(var i = 3 ;i<= 5; i++){
    for(var j = 0 ;j<=1;j++){
      sheet.getCell(i, j, SheetArea.rowHeader).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }

    for(var j = 0 ;j<=17;j++){
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
  sheet.setValue(3,4,data[17][1]);
  sheet.setValue(3,12,data[17][2]);
  sheet.setValue(4,1,data[18][1]);
  sheet.setValue(4,7,data[18][2]);
  sheet.setValue(5,0,data[19][1]);
  sheet.setValue(5,4,data[19][2]);
  sheet.getCell(23, 1).tag('P,1');

};
