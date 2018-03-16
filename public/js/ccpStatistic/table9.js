var funSheet9 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(8);
  sheet.isPaintSuspended(true);
  sheet.name('党员培训情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(4);
  sheet.setColumnCount(8);
  sheet.setRowCount( 2, SheetArea.colHeader);
  sheet.setColumnCount( 1, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 140 },
    { name: "B", displayName: "B", size: 130},
    { name: "C", displayName: "C", size: 120 },
    { name: "D", displayName: "D", size: 145},
    { name: "E", displayName: "E", size: 145},
    { name: "F", displayName: "F", size: 150},
    { name: "G", displayName: "G", size: 120 },
    { name: "H", displayName: "H", size: 120 },
  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.setValue(0, 0, "总   数", SheetArea.colHeader);
  sheet.setValue(0, 1, "基层党组织书记培训", SheetArea.colHeader);
  sheet.setValue(0, 2, "农村党员远程教育培训", SheetArea.colHeader);
  sheet.setValue(0, 3, "非公有制经济组织和社会组织党员培训", SheetArea.colHeader);
  sheet.setValue(0, 4, "新党员培训", SheetArea.colHeader);
  sheet.setValue(0, 5, "流动党员培训", SheetArea.colHeader);
  sheet.setValue(0, 6, "边疆民族地区基层党员教育培训", SheetArea.colHeader);
  sheet.setValue(0, 7, "党员创业就业技能培训", SheetArea.colHeader);
  sheet.getCell(0, 2,SheetArea.colHeader).tag('{"key": "DtNation", "values": ["1"]}');

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  style.cellPadding = "5 8";
  for(var i = 0; i<=7; i++){
    sheet.setStyle(0,i, style,SheetArea.colHeader);
  }
  sheet.setColumnWidth(0, 100,SheetArea.rowHeader);
  sheet.setRowHeight(0, 60,SheetArea.rowHeader);
  sheet.setRowHeight(1, 30,SheetArea.rowHeader);
  sheet.setRowHeight(2, 30,SheetArea.rowHeader);
  sheet.setRowHeight(3, 30,SheetArea.rowHeader);
  sheet.setRowHeight(0, 60,SheetArea.colHeader);

  /*
   *  Y表头
   */
  sheet.setValue(0, 0,"人      次", SheetArea.rowHeader);
  sheet.getCell(1, 0,SheetArea.rowHeader).tag('{"key": "JobCode", "values": ["0%"]}');

  // 补充资料
  sheet.setValue(1, 0,"补充资料：1.", SheetArea.rowHeader);
  sheet.setValue(1, 0, "农村党组织书记培训");
  sheet.addSpan(1, 2, 1, 2);
  sheet.setValue(1, 2, "人次，社区党务工作者培训");
  sheet.addSpan(1, 5, 1, 3);
  sheet.setValue(1, 5, "人次。国有企业二级及以下单位（部门）党组织书记培训");
  sheet.setValue(2, 0,"", SheetArea.rowHeader);
  sheet.addSpan(2, 1, 1, 3);
  sheet.setValue(2, 1," 人次，非公有制经济控制企业党组织书记培训");
  sheet.setValue(2, 5, "人次。");
  sheet.setValue(3, 0,"2. 党员年度集", SheetArea.rowHeader);
  sheet.addSpan(3, 0, 1, 2);
  sheet.setValue(3, 0, "中学习培训达标的基层党组织");
  sheet.addSpan(3, 3, 1, 3);
  sheet.setValue(3, 3, "个，基层党组织书记和班子成员年度集中学习培训达标的基层党组织");
  sheet.setValue(3, 7, "个");

  var rowStyle = new GC.Spread.Sheets.Style();
  rowStyle.backColor = "#E4ECF7";
  for(var i = 1 ;i<= 3; i++){
    for(var j = 0 ;j<=1;j++){
      sheet.getCell(i, j, SheetArea.rowHeader).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
    for(var j = 0 ;j<=7;j++){
      sheet.setStyle(i,j,rowStyle);
      sheet.getCell(i, j).vAlign(1);
      sheet.getCell(i, j).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
  }

  sheet.isPaintSuspended(false);
};

var setDT9ExtendData = function (sheet,data) {
  sheet.setValue(1,1,data[8][1]);
  sheet.setValue(1,4,data[8][2]);
  sheet.setValue(2,0,data[8][3]);
  sheet.setValue(2,4,data[8][4]);
  sheet.setValue(3,2,data[9][1]);
  sheet.setValue(3,6,data[9][2]);
  sheet.getCell(23, 1).tag('P,1');

};
