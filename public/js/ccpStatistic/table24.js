var funSheet24 = function(SheetArea,spread){
  var sheet = spread.getSheet(23);
  sheet.name('党的基层组织数量情况和换届情况');
  sheet.options.isProtected = true;

  sheet.setRowCount(17);
  sheet.setColumnCount(12);
  sheet.setRowCount( 2, SheetArea.colHeader);
  sheet.setColumnCount( 4, SheetArea.rowHeader);
  var colInfos = [
    { name: "A", displayName: "A"},
    { name: "B", displayName: "B" },
    { name: "C", displayName: "C" },
    { name: "D", displayName: "D" },
    { name: "E", displayName: "E" },
    { name: "F", displayName: "F" },
    { name: "G", displayName: "G" },
    { name: "H", displayName: "H" },
    { name: "I", displayName: "I" },
    { name: "J", displayName: "J" },
    { name: "K", displayName: "K" },
    { name: "L", displayName: "L" },
  ];
  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  /*
   *  x表头
   */
  //sheet.addSpan(0, 0, 1, 5, SheetArea.colHeader);
  sheet.setValue(0, 0, "总数", SheetArea.colHeader);
  sheet.setValue(0, 1, "党  委", SheetArea.colHeader); //'{"key": "IsTaiwan", "values": ["1"]}'
  sheet.getCell(0, 1,SheetArea.colHeader).tag('{"key": "TypeCodes", "values": ["611"]}');
  sheet.setValue(0, 2, "总 支 部", SheetArea.colHeader);
  sheet.getCell(0, 2,SheetArea.colHeader).tag('{"key": "TypeCodes", "values": ["621"]}');
  sheet.setValue(0, 3, "支   部", SheetArea.colHeader);
  sheet.getCell(0, 3,SheetArea.colHeader).tag('{"key": "TypeCodes", "values": ["631","632"]}');
  sheet.addSpan(0, 4, 1, 3, SheetArea.colHeader);
  sheet.setValue(0, 4, "项   目", SheetArea.colHeader);
  sheet.addSpan(1, 4, 1, 3, SheetArea.colHeader);
  sheet.setValue(1, 4, "甲", SheetArea.colHeader);
  sheet.addSpan(0, 7, 1, 2, SheetArea.colHeader);
  sheet.setValue(0, 7, "总    数", SheetArea.colHeader);
  sheet.addSpan(1, 7, 1, 2, SheetArea.colHeader);
  sheet.setValue(1, 7, "A", SheetArea.colHeader);
  sheet.setValue(0, 9, "党  委", SheetArea.colHeader);
  sheet.getCell(0, 9,SheetArea.colHeader).tag('{"key": "TypeCodes", "values": ["611"]}');
  sheet.setValue(1, 9, "B", SheetArea.colHeader);
  sheet.setValue(0, 10, "总 支 部", SheetArea.colHeader);
  sheet.getCell(0, 10,SheetArea.colHeader).tag('{"key": "TypeCodes", "values": ["621"]}');
  sheet.setValue(1, 10, "C", SheetArea.colHeader);
  sheet.setValue(0, 11, "支   部", SheetArea.colHeader);
  sheet.getCell(0, 11,SheetArea.colHeader).tag('{"key": "TypeCodes", "values": ["631","632"]}');
  sheet.setValue(1, 11, "D", SheetArea.colHeader);

  /*
   *  Y表头
   */
  sheet.addSpan(0, 0, 1, 3, SheetArea.rowHeader);
  sheet.setValue(0, 0, "党的基层组织数", SheetArea.rowHeader);
  sheet.getCell(0, 0,SheetArea.rowHeader).tag("typecode like '6%' ");
  sheet.getCell(0, 0,SheetArea.rowHeader).tag('{"key": "TypeCode", "values": ["6%"]}');
  sheet.addSpan(1, 0, 4, 1, SheetArea.rowHeader);
  sheet.addSpan(1, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(1, 1, "任届期满", SheetArea.rowHeader);
  sheet.getCell(1, 0,SheetArea.rowHeader).tag('{"key": "TenureEndDate1", "values": ["2017-01-01 00:00:00.000"]},{"key": "TenureEndDate2", "values": ["2017-06-30 00:00:00.000"]}');
  sheet.setValue(2, 2, "报告期内换届", SheetArea.rowHeader);
  sheet.getCell(2, 0,SheetArea.rowHeader).tag('{"key": "TenureStartDate1", "values": ["2017-01-01 00:00:00.000"]},{"key": "TenureStartDate2", "values": ["2017-06-30 00:00:00.000"]}');
  sheet.addSpan(3, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(3, 1, "城市街道", SheetArea.rowHeader);
  sheet.getCell(3, 0,SheetArea.rowHeader).tag('{"key": "OrgClassifyCode", "values": ["51%"]}');
  sheet.addSpan(4, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(4, 1, "乡镇", SheetArea.rowHeader);
  sheet.getCell(4, 0,SheetArea.rowHeader).tag('{"key": "OrgClassifyCodes", "values": ["52","53"]}');
  sheet.addSpan(5, 0, 3, 1, SheetArea.rowHeader);
  sheet.setValue(5, 0, "企业", SheetArea.rowHeader);
  sheet.addSpan(5, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(5, 1, "国有经济控制", SheetArea.rowHeader);
  sheet.getCell(5, 0,SheetArea.rowHeader).tag('{"key": "JobTypeCode", "values": ["21"]}');
  sheet.addSpan(6, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(6, 1, "集体经济控制", SheetArea.rowHeader);
  sheet.getCell(6, 0,SheetArea.rowHeader).tag('{"key": "JobTypeCode", "values": ["22"]}');
  sheet.addSpan(7, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(7, 1, "非公有经济控制", SheetArea.rowHeader);
  sheet.getCell(7, 0,SheetArea.rowHeader).tag('{"key": "JobTypeCode", "values": ["23"]}');

  sheet.addSpan(0, 4, 1, 3);
  sheet.addSpan(1, 4, 1, 3);
  sheet.addSpan(2, 5, 1, 2);
  sheet.addSpan(3, 5, 1, 2);
  sheet.addSpan(4, 5, 1, 2);
  sheet.addSpan(5, 5, 1, 2);
  sheet.addSpan(2, 4, 4, 1);
  sheet.addSpan(6, 4, 1, 3);
  sheet.addSpan(7, 4, 1, 3);
  sheet.addSpan(7, 8, 1, 4);

  setTabHead(sheet,SheetArea);
  // 给假表头加背景色
  var rowStyle = new GC.Spread.Sheets.Style();
  rowStyle.backColor = "#E4ECF7";
  for(var i = 0; i<=7; i++){
    sheet.setStyle(i,4,rowStyle);
    sheet.setStyle(i,6,rowStyle);
    sheet.setStyle(i,7,rowStyle);
  }
  sheet.setStyle(2,5,rowStyle);
  sheet.setStyle(3,5,rowStyle);
  sheet.setStyle(4,5,rowStyle);
  sheet.setStyle(5,5,rowStyle);

  sheet.setStyle(0,1, newStyle("#CCCCFF"));
  sheet.setStyle(0,2, newStyle("#CCCCFF"));
  sheet.setStyle(0,3, newStyle("#CCCCFF"));
  for(var i = 0; i<=7; i++){
    sheet.setStyle(i,0, newStyle("#CCCCFF"));
    sheet.setStyle(i,8, newStyle("#CCCCFF"));
    sheet.setRowHeight(i, 10,SheetArea.rowHeader);
    for(var j =0; j<=14; j++){
      sheet.getCell(i, j).hAlign(1).vAlign(1);
      sheet.getCell(i,j).setBorder(new GC.Spread.Sheets.LineBorder("#9EB6CE", GC.Spread.Sheets.LineStyle.thin), {top: true,left: true,right: true,bottom: true});
    }
  }
  sheet.setStyle(7,8, newStyle("#FFFFFF"));
  sheet.getCell(7,8).setBorder(new GC.Spread.Sheets.LineBorder("#9EB6CE", GC.Spread.Sheets.LineStyle.thin), {top: true,left: true,right: true,bottom: true});

  // 给假表头加边框
  for(var i = 0; i<=7; i++){
    for(var j =4 ; j<=7 ; j++){
      sheet.getCell(i,j).setBorder(new GC.Spread.Sheets.LineBorder("#9EB6CE", GC.Spread.Sheets.LineStyle.thin), {top: true,left: true,right: true,bottom: true});
    }
  }
  sheet.getCell(1, 0, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(2, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(5,0,style,SheetArea.rowHeader);
  for(var i = 0; i<=7; i++){
    sheet.setRowHeight(i, 30,SheetArea.rowHeader);
    for(var j =0; j<=10; j++){
      sheet.getCell(i, j).hAlign(1).vAlign(1);
    }
  }
  for(var i = 8 ; i<=16;i++){
    sheet.setRowHeight(i, 30,SheetArea.rowHeader);
  }
  sheet.setColumnWidth(0, 25,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 25,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 150,SheetArea.rowHeader);
  sheet.setRowHeight(0, 50,SheetArea.colHeader);
  sheet.setRowHeight(1, 30,SheetArea.colHeader);
  sheet.setColumnWidth(4, 40,SheetArea.colHeader);
  sheet.setColumnWidth(5, 50,SheetArea.colHeader);
  sheet.setColumnWidth(6, 150,SheetArea.colHeader);
  sheet.setColumnWidth(7, 45,SheetArea.colHeader);
  sheet.setColumnWidth(8, 70,SheetArea.colHeader);
  sheet.setColumnWidth(9, 70,SheetArea.colHeader);
  sheet.setColumnWidth(10, 70,SheetArea.colHeader);

  // 补充资料
  sheet.addSpan(8, 0, 1, 4, SheetArea.rowHeader);
  sheet.setValue(8, 0,"补充资料：1．党组                         ", SheetArea.rowHeader);
  sheet.addSpan(8, 1, 1, 3);
  sheet.setValue(8, 1,"个，其中中央一级机关");
  sheet.addSpan(8, 5, 1, 2);
  sheet.setValue(8, 5,"个、省（区、市）一级机关");
  sheet.addSpan(8, 8, 1, 3);
  sheet.setValue(8, 8,"个、市（地、州、盟）一级机关");
  sheet.addSpan(9, 0, 1, 4, SheetArea.rowHeader);
  sheet.setValue(9, 0,"个、县（市、区、旗）一级机关", SheetArea.rowHeader);
  sheet.setValue(9, 1,"个");

  sheet.addSpan(10, 0, 1, 4, SheetArea.rowHeader);
  sheet.setValue(10, 0,"2．中央和各级地方党委派出工委", SheetArea.rowHeader);
  sheet.addSpan(10, 1, 1, 4 );
  sheet.setValue(10, 1,"个，其中省（区、市）委派出工委");
  sheet.addSpan(10, 6, 1, 2 );
  sheet.setValue(10, 6,"个、省辖市（州）委派出工委");
  sheet.addSpan(10, 8, 1, 2 );
  sheet.setValue(10, 10,"个、");
  sheet.addSpan(11, 0, 1, 4, SheetArea.rowHeader);
  sheet.setValue(11, 0,"县（市、区、旗）委派出工委", SheetArea.rowHeader);
  sheet.addSpan(11, 1, 1, 11 );
  sheet.setValue(11, 1,"个。");

  sheet.addSpan(12, 0, 1, 4, SheetArea.rowHeader);
  sheet.setValue(12, 0,"           3．国务院和地方政府工作部门", SheetArea.rowHeader);
  sheet.addSpan(12, 0, 1, 2);
  sheet.setValue(12, 0,"中有基层党组织");
  sheet.addSpan(12, 3, 1, 2);
  sheet.setValue(12, 3,"个，其中党委");
  sheet.setValue(12, 6,"个、总支部");
  sheet.setValue(12, 8,"个、支部");
  sheet.setValue(12, 10,"个。");

  sheet.addSpan(13, 0, 1, 4, SheetArea.rowHeader);
  sheet.setValue(13, 0,"4．建制村中有党组织", SheetArea.rowHeader);
  sheet.addSpan(13, 1, 1, 2);
  sheet.setValue(13, 1,"个，其中党委");
  sheet.addSpan(13, 4, 1, 2);
  sheet.setValue(13, 4,"个、总支部");
  sheet.addSpan(13, 7, 1, 2);
  sheet.setValue(13, 7,"个、支部");
  sheet.setValue(13, 10,"个");

  sheet.addSpan(14, 0, 1, 4, SheetArea.rowHeader);
  sheet.setValue(14, 0,"5．农村专业技术协会", SheetArea.rowHeader);
  sheet.addSpan(14, 1, 1, 2);
  sheet.setValue(14, 1,"个，共有党组织");
  sheet.addSpan(14, 4, 1, 2);
  sheet.setValue(14, 4,"个，其中党委");
  sheet.addSpan(14, 7, 1, 2);
  sheet.setValue(14, 7,"个、总支部");
  sheet.setValue(14, 10,"个、支部");
  sheet.addSpan(15, 0, 1, 4, SheetArea.rowHeader);
  sheet.setValue(15, 0,"个；农民专业合作社", SheetArea.rowHeader);
  sheet.addSpan(15, 1, 1, 2);
  sheet.setValue(15, 1,"个，共有党组织");
  sheet.addSpan(15, 4, 1, 2);
  sheet.setValue(15, 4,"个，其中党委");
  sheet.addSpan(15, 7, 1, 2);
  sheet.setValue(15, 7,"个、总支部");
  sheet.setValue(15, 10,"个、支部");
  sheet.addSpan(16, 0, 1, 4, SheetArea.rowHeader);
  sheet.setValue(16, 0,"个；家庭农场", SheetArea.rowHeader);
  sheet.addSpan(16, 1, 1, 2);
  sheet.setValue(16, 1,"个，共有党组织");
  sheet.addSpan(16, 4, 1, 2);
  sheet.setValue(16, 4,"个，其中党委");
  sheet.addSpan(16, 7, 1, 2);
  sheet.setValue(16, 7,"个、总支部");
  sheet.setValue(16, 10,"个、支部");

  for(var i = 8 ;i<= 17; i++){
    for(var j = 0 ;j<=3;j++){
      sheet.getCell(i, j, SheetArea.rowHeader).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
    for(var j = 0 ;j<=12;j++){
      sheet.setStyle(i,j,newStyle("#E4ECF7"));
      sheet.getCell(i, j).vAlign(1);
      sheet.getCell(i, j).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
  }
  sheet.setStyle(12,5,newStyle("#FFCC99"));
  sheet.setStyle(12,7,newStyle("#FFCC99"));
  sheet.setStyle(12,9,newStyle("#FFCC99"));

  sheet.setStyle(14,0,newStyle("#FFCC99"));
  sheet.setStyle(14,6,newStyle("#FFCC99"));
  sheet.setStyle(14,9,newStyle("#FFCC99"));
  sheet.setStyle(14,11,newStyle("#FFCC99"));
  sheet.setStyle(15,0,newStyle("#FFCC99"));
  sheet.setStyle(15,6,newStyle("#FFCC99"));
  sheet.setStyle(15,9,newStyle("#FFCC99"));
  sheet.setStyle(15,11,newStyle("#FFCC99"));
  sheet.setStyle(16,0,newStyle("#FFCC99"));
  sheet.setStyle(16,6,newStyle("#FFCC99"));
  sheet.setStyle(16,9,newStyle("#FFCC99"));
  sheet.setStyle(16,11,newStyle("#FFCC99"));

  sheet.setStyle(12,2,newStyle("#CCCCFF"));
  sheet.setFormula(12, 2, '=F13+J13+H13');
  sheet.setStyle(14,3,newStyle("#CCCCFF"));
  sheet.setFormula(14, 3, '=G15+J15+L15');
  sheet.setStyle(15,3,newStyle("#CCCCFF"));
  sheet.setFormula(15, 3, '=G16+J16+L16');
  sheet.setStyle(16,3,newStyle("#CCCCFF"));
  sheet.setFormula(16, 3, '==G17+J17+L17');
  for(var i = 8 ;i<= 17; i++){
    for(var j = 0 ;j<=12;j++){
      sheet.getCell(i, j).vAlign(1);
    }
  }
  setTabHead(sheet,SheetArea);


};
var setTabHead = function (sheet,SheetArea) {
  sheet.setValue(0, 4, "事业单位");
  sheet.getCell(0, 4).tag('{"key": "JobTypeCode", "values": ["3"]}');
  sheet.setValue(1, 4, "机关");
  sheet.getCell(1, 4).tag('{"key": "JobTypeCode", "values": ["4"]}');
  sheet.setValue(2, 5, "中央一级");
  sheet.getCell(2, 4).tag('{"key": "OrgClassifyCode", "values": ["1%"]}');
  sheet.setValue(3, 5, "省（区、市）一级");
  sheet.getCell(3, 4).tag('{"key": "OrgClassifyCode", "values": ["2%"]}');
  sheet.setValue(4, 5, "市（地、州、盟）一级");
  sheet.getCell(4, 4).tag('{"key": "OrgClassifyCode", "values": ["3%"]}');
  sheet.setValue(5, 5, "县（市、区、旗）一级");
  sheet.getCell(5, 4).tag('{"key": "OrgClassifyCode", "values": ["4%"]}');
  sheet.setValue(6, 4, "其    他");
  sheet.getCell(6, 4).tag('{"key": "OrgClassifyCode", "values": ["9%"]}');
  sheet.setValue(0, 7, "9");
  sheet.setValue(1, 7, "10");
  sheet.setValue(2, 7, "11");
  sheet.setValue(3, 7, "12");
  sheet.setValue(4, 7, "13");
  sheet.setValue(5, 7, "14");
  sheet.setValue(6, 7, "15");
};

var setDT7ExtendData = function (sheet,data) {
  sheet.setValue(8, 0, data[4][1]);
  sheet.setValue(8, 4, data[4][2]);
  sheet.setValue(8, 7, data[4][3]);
  sheet.setValue(8, 11, data[4][4]);
  sheet.setValue(9, 0, data[4][5]);

  sheet.setValue(10, 0, data[5][1]);
  sheet.setValue(10, 5, data[5][2]);
  sheet.setValue(10, 8, data[5][3]);
  sheet.setValue(11, 0, data[5][4]);

  sheet.setValue(12, 2, data[6][1]);
  sheet.setValue(12, 5, data[6][2]);
  sheet.getCell(12, 5).tag('G,2');
  sheet.setValue(12, 7, data[6][3]);
  sheet.getCell(12, 7).tag('G,3');
  sheet.setValue(12, 9, data[6][4]);
  sheet.getCell(12, 9).tag('G,4');

  sheet.setValue(13, 0, data[7][1]);
  sheet.setValue(13, 3, data[7][2]);
  sheet.setValue(13, 6, data[7][3]);
  sheet.setValue(13, 9, data[7][4]);

  sheet.setValue(14, 0, data[8][1]);
  sheet.getCell(14, 0).tag('I,1');
  sheet.setValue(14, 3, data[8][2]);
  sheet.setValue(14, 6, data[8][3]);
  sheet.getCell(14, 6).tag('I,3');
  sheet.setValue(14, 9, data[8][4]);
  sheet.getCell(14, 9).tag('I,4');
  sheet.setValue(14, 11, data[8][5]);
  sheet.getCell(14, 11).tag('I,5');
  sheet.setValue(15, 0, data[8][6]);
  sheet.getCell(15, 0).tag('I,6');
  sheet.setValue(15, 3, data[8][7]);
  sheet.setValue(15, 6, data[8][8]);
  sheet.getCell(15, 6).tag('I,8');
  sheet.setValue(15, 9, data[8][9]);
  sheet.getCell(15, 9).tag('I,9');
  sheet.setValue(15, 11, data[8][10]);
  sheet.getCell(15, 11).tag('I,10');
  sheet.setValue(16, 0, data[8][11]);
  sheet.getCell(16, 0).tag('I,11');
  sheet.setValue(16, 3, data[8][12]);
  sheet.setValue(16, 6, data[8][13]);
  sheet.getCell(16, 6).tag('I,13');
  sheet.setValue(16, 9, data[8][14]);
  sheet.getCell(16, 9).tag('I,14');
  sheet.setValue(16, 11, data[8][15]);
  sheet.getCell(16, 11).tag('I,15');
};
