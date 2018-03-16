// 党员入党时间情况
var funSheet3 = function(SheetArea,spread){
  var dataList=[];
  var sheet = spread.getSheet(2);

  var colInfos = [
    { name: "A", displayName: "A", size: 60  },
    { name: "B", displayName: "B", size: 80 },
    { name: "C", displayName: "C", size: 80 },
    { name: "D", displayName: "D", size: 80 },
    { name: "E", displayName: "E", size: 80 },
    { name: "F", displayName: "F", size: 80 },
    { name: "G", displayName: "G", size: 80 },
    { name: "H", displayName: "H", size: 80 },
    { name: "I", displayName: "I", size: 80 },
    { name: "J", displayName: "J", size: 80 },
  ];
  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);
  /*
   *  内容区域
   */
  sheet.isPaintSuspended(true);
  sheet.options.isProtected = true;
  sheet.name('党员入党时间情况');
  sheet.setRowCount(26);
  sheet.setColumnCount(10);
  sheet.setRowCount( 2, SheetArea.colHeader);
  sheet.setColumnCount( 4, SheetArea.rowHeader);
  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */

  sheet.addSpan(0, 0, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 0, "总数", SheetArea.colHeader);
  sheet.addSpan(0, 1, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 1, "1937年7月6日及以前", SheetArea.colHeader);
  sheet.getCell(0, 1,SheetArea.colHeader).tag('{"key": "JoinDateMin", "values": ["1921-01-01 00:00:00.000"]},{"key": "JoinDateMax", "values": ["1937-07-06 00:00:00.000"]}');
  sheet.addSpan(0, 2, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 2, "1937年7月7日至1945年9月2日", SheetArea.colHeader);
  sheet.getCell(0, 2,SheetArea.colHeader).tag('{"key": "JoinDateMin", "values": ["1937-07-07 00:00:00.000"]},{"key": "JoinDateMax", "values": ["1945-09-02 00:00:00.000"]}');
  sheet.addSpan(0, 3, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 3, "1945年9月3日至1949年9月", SheetArea.colHeader);
  sheet.getCell(0, 3,SheetArea.colHeader).tag('{"key": "JoinDateMin", "values": ["1945-09-01 00:00:00.000"]},{"key": "JoinDateMax", "values": ["1949-09-01 00:00:00.000"]}');
  sheet.addSpan(0, 4, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 4, "1949年10月至1966年4月", SheetArea.colHeader);
  sheet.getCell(0, 4,SheetArea.colHeader).tag('{"key": "JoinDateMin", "values": ["1949-10-01 00:00:00.000"]},{"key": "JoinDateMax", "values": ["1966-04-30 00:00:00.000"]}');
  sheet.addSpan(0, 5, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 5, "1966年5月至1976年10月", SheetArea.colHeader);
  sheet.getCell(0, 5,SheetArea.colHeader).tag('{"key": "JoinDateMin", "values": ["1966-05-01 00:00:00.000"]},{"key": "JoinDateMax", "values": ["1976-10-31 00:00:00.000"]}');
  sheet.addSpan(0, 6, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 6, "1976年11月至1978年12月", SheetArea.colHeader);
  sheet.getCell(0, 6,SheetArea.colHeader).tag('{"key": "JoinDateMin", "values": ["1976-11-01 00:00:00.000"]},{"key": "JoinDateMax", "values": ["1978-12-31 00:00:00.000"]}');
  sheet.addSpan(0, 7, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 7, "1979年1月至2002年10月", SheetArea.colHeader);
  sheet.getCell(0, 7,SheetArea.colHeader).tag('{"key": "JoinDateMin", "values": ["1979-01-01 00:00:00.000"]},{"key": "JoinDateMax", "values": ["2002-10-31 00:00:00.000"]}');
  sheet.addSpan(0, 8, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 8, "2002年11月至2012年10月", SheetArea.colHeader);
  sheet.getCell(0, 8,SheetArea.colHeader).tag('{"key": "JoinDateMin", "values": ["2002-11-01 00:00:00.000"]},{"key": "JoinDateMax", "values": ["2012-10-31 00:00:00.000"]}');
  sheet.addSpan(0, 9, 1, 1, SheetArea.colHeader);
  sheet.setValue(0, 9, "2012年11月及以后", SheetArea.colHeader);
  sheet.getCell(0, 9,SheetArea.colHeader).tag('{"key": "JoinDateMin", "values": ["2012-11-01 00:00:00.000"]},{"key": "JoinDateMax", "values": ["2100-01-01 00:00:00.000"]}');

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  sheet.addSpan(0, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(1, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(2, 0, 8, 1, SheetArea.rowHeader);
  /*
   *  公有制单位
   */
  sheet.addSpan(2, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(3, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(4, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(5, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(6, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(7, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(8, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(9, 2, 1, 1, SheetArea.rowHeader);

  /*
   *  非公有制单位
   */
  sheet.addSpan(10, 0, 7, 1, SheetArea.rowHeader);
  sheet.addSpan(10, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(11, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(12, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(13, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(14, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(15, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(16, 2, 1, 1, SheetArea.rowHeader);

  /*
   *  其他
   */
  sheet.addSpan(17, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(18, 1, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(19, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(20, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(21, 0, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(22, 0, 1, 3, SheetArea.rowHeader);

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(2,0,style,SheetArea.rowHeader);
  sheet.setStyle(10,0,style,SheetArea.rowHeader);
  for(var i = 0; i<=22; i++){
    sheet.setRowHeight(i, 30,SheetArea.rowHeader);
    sheet.setStyle(i,0, newStyle("#CCCCFF"));
    if(i<=2 || i==10){
      for(var j =0; j<=9; j++){
        sheet.setStyle(i,j, newStyle("#CCCCFF"));
      }
    }
    for(var j =0; j<=9; j++){
      sheet.setColumnWidth(j, 90,SheetArea.colHeader);
      sheet.setStyle(0,j,style,SheetArea.colHeader);
      sheet.getCell(i, j).hAlign(1).vAlign(1);
      sheet.getCell(i,j).setBorder(new GC.Spread.Sheets.LineBorder("#9EB6CE", GC.Spread.Sheets.LineStyle.thin), {top: true,left: true,right: true,bottom: true});
    }
  }

  sheet.setRowHeight(23, 30,SheetArea.rowHeader);
  sheet.setRowHeight(24, 30,SheetArea.rowHeader);
  sheet.setRowHeight(25, 30,SheetArea.rowHeader);
  sheet.setColumnWidth(0, 25,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 25,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 150,SheetArea.rowHeader);
  sheet.setRowHeight(0, 80,SheetArea.colHeader);
  sheet.setRowHeight(1, 25,SheetArea.colHeader);
  sheet.getCell(9, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(16, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(18, 0, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});

  sheet.setValue(0, 0,"总计", SheetArea.rowHeader);
  sheet.setValue(1, 0,"一、在岗职工", SheetArea.rowHeader);
  sheet.getCell(1, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["0%"]}');
  sheet.setValue(2, 0,"公有制单位", SheetArea.rowHeader);
  sheet.setValue(2, 1,"合计", SheetArea.rowHeader);
  sheet.getCell(2, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["01%"]}');
  sheet.setValue(3, 1,"党政机关工作人员", SheetArea.rowHeader);
  sheet.getCell(3, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["011%"]}');
  sheet.setValue(4, 1,"事业单位管理人员", SheetArea.rowHeader);
  sheet.getCell(4, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["012%"]}');
  sheet.setValue(5, 1,"事业单位专业技术人员", SheetArea.rowHeader);
  sheet.getCell(5, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["013%"]}');
  sheet.setValue(6, 1,"企业管理人员", SheetArea.rowHeader);
  sheet.getCell(6, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["014%"]}');
  sheet.setValue(7, 1,"企业专业技术人员", SheetArea.rowHeader);
  sheet.getCell(7, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["015%"]}');
  sheet.setValue(8, 1,"工勤技能人员", SheetArea.rowHeader);
  sheet.getCell(8, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["016%"]}');
  sheet.setValue(9, 2,"农民工", SheetArea.rowHeader);
  sheet.getCell(9, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["0164%"]}');

  sheet.setValue(10, 0,"非公有制单位", SheetArea.rowHeader);
  sheet.setValue(10, 1,"合计", SheetArea.rowHeader);
  sheet.getCell(10, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["02%"]}');
  sheet.setValue(11, 1,"企业管理人员", SheetArea.rowHeader);
  sheet.getCell(11, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["021%"]}');
  sheet.setValue(12, 1,"企业专业技术人员", SheetArea.rowHeader);
  sheet.getCell(12, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["022%"]}');
  sheet.setValue(13, 1,"民办非企业单位管理人员", SheetArea.rowHeader);
  sheet.getCell(13, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["023%"]}');
  sheet.setValue(14, 1,"民办非企业专业技术人员", SheetArea.rowHeader);
  sheet.getCell(14, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["024%"]}');
  sheet.setValue(15, 1,"工勤技能人员", SheetArea.rowHeader);
  sheet.getCell(15, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["025%"]}');
  sheet.setValue(16, 2,"农民工", SheetArea.rowHeader);
  sheet.getCell(16, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["0253%"]}');

  sheet.setValue(17, 0,"二 、农牧渔民", SheetArea.rowHeader);
  sheet.getCell(17, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["1%"]}');
  sheet.setValue(18, 1,"外出务工经商人员", SheetArea.rowHeader);
  sheet.getCell(18, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["113%"]}');
  sheet.setValue(19, 0,"三 、军人、武警", SheetArea.rowHeader);
  sheet.getCell(19, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["2%"]}');
  sheet.setValue(20, 0,"四 、学生", SheetArea.rowHeader);
  sheet.getCell(20, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["3%"]}');
  sheet.setValue(21, 0,"五 、离退休人员", SheetArea.rowHeader);
  sheet.getCell(21, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["4%"]}');
  sheet.setValue(22, 0,"六 、其他", SheetArea.rowHeader);
  sheet.getCell(22, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["5%"]}');

  // 补充资料
  sheet.addSpan(23, 0, 1, 4, SheetArea.rowHeader);
  sheet.setValue(23, 0,"补充资料:  共有新的社会阶层党员", SheetArea.rowHeader);
  sheet.addSpan(23, 1, 1, 4);
  sheet.setValue(23, 1,"名，其中，民营科技企业创业人员和技术人员");
  sheet.getCell(23, 5).tag('{"key": "StratumCode", "values": ["41","1"]}');
  sheet.addSpan(23, 6, 1,3);
  sheet.setValue(23, 6,"名，受聘于外资企业管理技术人员");
  sheet.getCell(23, 9).tag('{"key": "StratumCode", "values": ["2"]}');
  sheet.addSpan(24, 2, 1, 2, SheetArea.rowHeader);
  sheet.setValue(24, 2,"名，个体劳动者", SheetArea.rowHeader);
  sheet.getCell(24, 0).tag('{"key": "StratumCode", "values": ["3","31","39"]}');
  sheet.addSpan(24, 1, 1, 2);
  sheet.setValue(24, 1,"（城镇个体劳动者");
  sheet.getCell(24, 3).tag('{"key": "StratumCode", "values": ["31"]}');
  sheet.addSpan(24, 4, 1, 2);
  sheet.setValue(24, 4,"名），私营企业主");
  sheet.getCell(24, 6).tag('{"key": "StratumCode", "values": ["4","41","49"]}');
  sheet.addSpan(24, 7, 1, 2);
  sheet.setValue(24, 7,"名（民营科技企业创业人员");
  sheet.getCell(24, 9).tag('{"key": "StratumCode", "values": ["41"]}');
  sheet.addSpan(25, 2, 1, 2, SheetArea.rowHeader);
  sheet.setValue(25, 2,"名），中介组织从业人员", SheetArea.rowHeader);
  sheet.getCell(25, 0).tag('{"key": "StratumCode", "values": ["5"]}');
  sheet.addSpan(25, 1, 1, 2);
  sheet.setValue(25, 1,"名，自由职业人员");
  sheet.getCell(25, 3).tag('{"key": "StratumCode", "values": ["6"]}');
  sheet.addSpan(25, 4, 1, 2);
  sheet.setValue(25, 4,"名");

  var rowStyle = new GC.Spread.Sheets.Style();
  rowStyle.backColor = "#E4ECF7";
  for(var i = 23 ;i<= 25; i++){
    for(var j = 0 ;j<=3;j++){
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

var setDT3ExtendData = function (sheet,data) {
  sheet.setValue(23,0,data[10][1]);
  sheet.setValue(23,5,data[10][2]);
  sheet.setValue(23,9,data[10][3]);
  sheet.setValue(24,0,data[10][4]);
  sheet.setValue(24,3,data[10][5]);
  sheet.setValue(24,6,data[10][6]);
  sheet.setValue(24,9,data[10][7]);
  sheet.setValue(25,0,data[10][8]);
  sheet.setValue(25,3,data[10][9]);
};
