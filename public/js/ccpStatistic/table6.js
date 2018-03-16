var funSheet6 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(5);
  sheet.isPaintSuspended(true);
  sheet.name('街道、社区（居委会）党员情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(25);
  sheet.setColumnCount(15);
  sheet.setRowCount( 4, SheetArea.colHeader);
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
    { name: "I", displayName: "I", size: 120 },
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
  sheet.setValue(1, 0, "城市街道党员总数", SheetArea.colHeader);
  sheet.addSpan(1, 1, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 1, "城市社区（居委会）党员总数", SheetArea.colHeader);
  sheet.addSpan(0, 2, 3, 1, SheetArea.colHeader);
  sheet.setValue(0, 2, "乡镇社区（居委会）党员总数", SheetArea.colHeader);
  sheet.addSpan(0, 3, 1, 4, SheetArea.colHeader);
  sheet.addSpan(1, 3, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 3, "社区（居委会）党支部（总支部、党委）委员", SheetArea.colHeader);
  sheet.addSpan(1, 4, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 4, "兼任社区（居委会）委员", SheetArea.colHeader);
  sheet.addSpan(1, 5, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 5, "党支部(总支部、党委)书  记", SheetArea.colHeader);
  sheet.setValue(2, 6, "兼任社区(居委会)主任", SheetArea.colHeader);

  sheet.addSpan(0, 7, 1, 2, SheetArea.colHeader);
  sheet.setValue(0, 7, "补充情况", SheetArea.colHeader);
  sheet.addSpan(1, 7, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 7, "社区(居委会)委员", SheetArea.colHeader);
  sheet.setValue(2, 8, "社区(居委会)主任", SheetArea.colHeader);
  sheet.getCell(0, 1,SheetArea.colHeader).tag('{"key": "GenderCode", "values": ["0"]}');
  sheet.getCell(0, 2,SheetArea.colHeader).tag('{"key": "DtNation", "values": ["1"]}');


  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  sheet.addSpan(0, 0, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(2, 0, 5, 1, SheetArea.rowHeader);
  sheet.addSpan(7, 0, 9, 1, SheetArea.rowHeader);
  sheet.addSpan(16, 0, 4, 1, SheetArea.rowHeader);

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(2,0,style,SheetArea.rowHeader);
  sheet.setStyle(7,0,style,SheetArea.rowHeader);
  sheet.setStyle(16,0,style,SheetArea.rowHeader);
  style.cellPadding = "5 8";
  for(var i = 0; i<=25; i++){
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
    for(var j =0; j<=14; j++){
      sheet.getCell(i, j).hAlign(1).vAlign(1);
      sheet.getCell(i,j).setBorder(new GC.Spread.Sheets.LineBorder("#9EB6CE", GC.Spread.Sheets.LineStyle.thin), {top: true,left: true,right: true,bottom: true});
    }
  }


  sheet.setRowHeight(23, 30,SheetArea.rowHeader);
  sheet.setRowHeight(24, 20,SheetArea.rowHeader);
  sheet.setRowHeight(25, 20,SheetArea.rowHeader);
  sheet.setRowHeight(26, 60,SheetArea.rowHeader);
  // sheet.getCell(1, 4, SheetArea.colHeader).setBorder(
  //   new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
  //   { left: true});

  sheet.setColumnWidth(0, 35,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 220,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 35,SheetArea.rowHeader);
  sheet.setRowHeight(0, 30,SheetArea.colHeader);
  sheet.setRowHeight(1, 20,SheetArea.colHeader);
  sheet.setRowHeight(2, 50,SheetArea.colHeader);

  /*
   *  Y表头
   */
  sheet.setValue(0, 0,"总计", SheetArea.rowHeader);
  sheet.setValue(2, 0,"年龄", SheetArea.rowHeader);
  sheet.setValue(7, 0,"入党时间", SheetArea.rowHeader);
  sheet.setValue(16, 0,"学历", SheetArea.rowHeader);
  sheet.setValue(1, 1,"女", SheetArea.rowHeader);
  sheet.setValue(2, 1,"35    岁     及     以      下", SheetArea.rowHeader);
  sheet.setValue(3, 1,"36    岁     至     45          岁", SheetArea.rowHeader);
  sheet.setValue(4, 1,"46    岁     至     54          岁", SheetArea.rowHeader);
  sheet.setValue(5, 1,"55    岁     至     59          岁", SheetArea.rowHeader);
  sheet.setValue(6, 1,"60    岁     及     以      上", SheetArea.rowHeader);
  sheet.setValue(7, 1,"1937年 7  月 6  日  及  以  前", SheetArea.rowHeader);
  sheet.setValue(8, 1,"1937年7月7日至1945年9月2日", SheetArea.rowHeader);
  sheet.setValue(9, 1,"1945年9月3日至1949年9月", SheetArea.rowHeader);
  sheet.setValue(10, 1,"1949年10月至1966年4月", SheetArea.rowHeader);
  sheet.setValue(11, 1,"1966年5月至1976年10月", SheetArea.rowHeader);
  sheet.setValue(12, 1,"1976年11月至1978年12月", SheetArea.rowHeader);
  sheet.setValue(13, 1,"1979年1月至2002年10月", SheetArea.rowHeader);
  sheet.setValue(14, 1,"2002年11月至2012年10月", SheetArea.rowHeader);
  sheet.setValue(15, 1,"2012年11月及以后", SheetArea.rowHeader);
  sheet.setValue(16, 1,"大专及以上", SheetArea.rowHeader);
  sheet.setValue(17, 1,"中专", SheetArea.rowHeader);
  sheet.setValue(18, 1,"高中、中技", SheetArea.rowHeader);
  sheet.setValue(19, 1,"初中及以下", SheetArea.rowHeader);

  sheet.getCell(1, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["0%"]}');
  sheet.getCell(2, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["01%"]}');
  sheet.getCell(3, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["011%"]}');
  sheet.getCell(4, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["012%"]}');
  sheet.getCell(5, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["013%"]}');
  sheet.getCell(6, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["014%"]}');
  sheet.getCell(7, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["015%"]}');
  sheet.getCell(8, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["016%"]}');
  sheet.getCell(9, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["0164%"]}');
  sheet.getCell(10, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["02%"]}');
  sheet.getCell(11, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["021%"]}');
  sheet.getCell(12, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["022%"]}');
  sheet.getCell(13, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["023%"]}');
  sheet.getCell(14, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["024%"]}');
  sheet.getCell(15, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["025%"]}');
  sheet.getCell(16, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["0253%"]}');
  sheet.getCell(17, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["1%"]}');
  sheet.getCell(18, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["113%"]}');
  sheet.getCell(19, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["2%"]}');
  sheet.getCell(20, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["3%"]}');
  sheet.getCell(21, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["4%"]}');
  sheet.getCell(22, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["5%"]}');

  // 补充资料
  sheet.addSpan(20, 0, 1, 3, SheetArea.rowHeader);
  sheet.setValue(20, 0,"补充资料：1．社区居委会委员中党员", SheetArea.rowHeader);
  sheet.addSpan(20, 1, 1, 3);
  sheet.setValue(20, 1, "名");
  sheet.addSpan(21, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(21, 1, "2．街道干部",SheetArea.rowHeader);
  sheet.setValue(21, 1, "人，其中35岁及以下");
  sheet.setValue(21, 3, " 人，36至54岁");
  sheet.setValue(21, 5, " 人，55岁及以上");
  sheet.setValue(21, 7, " 人；大专及以上");
  sheet.addSpan(22, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(22, 1, "人，高中中专及以下",SheetArea.rowHeader);
  sheet.setValue(22, 1, "人；公务员");
  sheet.setValue(22, 3, "人，事业人员");
  sheet.setValue(22, 5, "人，其他身份");
  sheet.setValue(22, 7, "人");
  sheet.addSpan(23, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(23, 1, "3．街道党组织书记",SheetArea.rowHeader);
  sheet.setValue(23, 1, "名，其中35岁及以下");
  sheet.setValue(23, 3, "名，36至54岁");
  sheet.setValue(23, 5, "名，55岁及以上");
  sheet.setValue(23, 7, "名；大专及以上");
  sheet.addSpan(24, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(24, 1, "名，高中中专及以下",SheetArea.rowHeader);
  sheet.setValue(24, 1, "名");


  var rowStyle = new GC.Spread.Sheets.Style();
  rowStyle.backColor = "#E4ECF7";
  for(var i = 20 ;i<= 25; i++){
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

var setDT6ExtendData = function (sheet,data) {
  sheet.setValue(20,0,data[9][1]);
  sheet.setValue(21,0,data[10][1]);
  sheet.setValue(21,2,data[10][2]);
  sheet.setValue(21,4,data[10][3]);
  sheet.setValue(21,6,data[10][4]);
  sheet.setValue(21,8,data[10][5]);
  sheet.setValue(22,0,data[10][6]);
  sheet.setValue(22,2,data[10][7]);
  sheet.setValue(22,4,data[10][8]);
  sheet.setValue(22,6,data[10][9]);
  sheet.setValue(22,8,data[10][10]);
  sheet.setValue(23,0,data[11][1]);
  sheet.setValue(23,2,data[11][2]);
  sheet.setValue(23,4,data[11][3]);
  sheet.setValue(23,6,data[11][4]);
  sheet.setValue(23,8,data[11][5]);
  sheet.setValue(24,0,data[11][6]);
  sheet.getCell(23, 11).tag('P,4');
};
