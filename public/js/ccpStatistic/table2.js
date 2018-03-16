
// 党员基本情况
var funSheet2 = function(SheetArea,spread){
  var sheet = spread.getSheet(1);

  var colInfos = [
    { name: "A", displayName: "A", size: 70  },
    { name: "B", displayName: "B", size: 60 },
    { name: "C", displayName: "C", size: 60 },
    { name: "D", displayName: "D", size: 60 },
    { name: "E", displayName: "E", size: 60 },
    { name: "F", displayName: "F", size: 65 },
    { name: "G", displayName: "G", size: 67 },
    { name: "H", displayName: "H", size: 67 },
    { name: "I", displayName: "I", size: 66 },
    { name: "J", displayName: "J", size: 66 },
    { name: "K", displayName: "K", size: 66 },
    { name: "L", displayName: "L", size: 67 },
    { name: "M", displayName: "M", size: 67 },
    { name: "N", displayName: "N", size: 66 },
    { name: "O", displayName: "O", size: 65 },
  ];
  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);
  sheet.options.isProtected = true;
  sheet.name('党员基本情况');
  /*
   *  内容区域
   */
  sheet.setRowCount(27);
  sheet.setColumnCount(15);
  sheet.setRowCount( 3, SheetArea.colHeader);
  sheet.setColumnCount( 4, SheetArea.rowHeader);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  /*
   *  x表头
   */
  sheet.addSpan(0, 0, 1, 5, SheetArea.colHeader);
  sheet.setValue(0, 0, "总数", SheetArea.colHeader);
  sheet.addSpan(1, 1, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 1, "预备党员", SheetArea.colHeader);
  sheet.getCell(0, 1,SheetArea.colHeader).tag('{"key": "TypeCode", "values": ["2"]}');
  sheet.addSpan(1, 2, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 2, "女", SheetArea.colHeader);
  sheet.getCell(0, 2,SheetArea.colHeader).tag('{"key": "GenderCode", "values": ["0"]}');
  sheet.addSpan(1, 3, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 3, "少数民族", SheetArea.colHeader);
  sheet.getCell(0, 3,SheetArea.colHeader).tag('{"key": "DtNation", "values": ["1"]}');
  sheet.addSpan(1, 4, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 4, "台湾省籍", SheetArea.colHeader);
  sheet.getCell(0, 4,SheetArea.colHeader).tag('{"key": "IsTaiwan", "values": ["1"]}');

  /*
   *  x表头，年龄
   */
  sheet.addSpan(0, 5, 1, 10, SheetArea.colHeader);
  sheet.setValue(0, 5, "年龄", SheetArea.colHeader);
  sheet.addSpan(1, 5, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 5, "30岁及以下", SheetArea.colHeader);
  sheet.getCell(0, 5,SheetArea.colHeader).tag('{"key": "AgeMin", "values": ["0"]},{"key": "AgeMax", "values": ["30"]}');
  sheet.addSpan(1, 6, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 6, "31至35岁", SheetArea.colHeader);
  sheet.getCell(0, 6,SheetArea.colHeader).tag('{"key": "AgeMin", "values": ["31"]},{"key": "AgeMax", "values": ["35"]}');
  sheet.addSpan(1, 7, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 7, "36至40岁", SheetArea.colHeader);
  sheet.getCell(0, 7,SheetArea.colHeader).tag('{"key": "AgeMin", "values": ["36"]},{"key": "AgeMax", "values": ["40"]}');
  sheet.addSpan(1, 8, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 8, "41至45岁", SheetArea.colHeader);
  sheet.getCell(0, 8,SheetArea.colHeader).tag('{"key": "AgeMin", "values": ["41"]},{"key": "AgeMax", "values": ["45"]}');
  sheet.addSpan(1, 9, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 9, "46至50岁", SheetArea.colHeader);
  sheet.getCell(0, 9,SheetArea.colHeader).tag('{"key": "AgeMin", "values": ["46"]},{"key": "AgeMax", "values": ["50"]}');
  sheet.addSpan(1, 10, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 10, "51至55岁", SheetArea.colHeader);
  sheet.getCell(0, 10,SheetArea.colHeader).tag('{"key": "AgeMin", "values": ["51"]},{"key": "AgeMax", "values": ["55"]}');
  sheet.addSpan(1,11, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 11, "56至60岁", SheetArea.colHeader);
  sheet.getCell(0, 11,SheetArea.colHeader).tag('{"key": "AgeMin", "values": ["56"]},{"key": "AgeMax", "values": ["60"]}');
  sheet.addSpan(1, 12, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 12, "61至65岁", SheetArea.colHeader);
  sheet.getCell(0, 12,SheetArea.colHeader).tag('{"key": "AgeMin", "values": ["61"]},{"key": "AgeMax", "values": ["65"]}');
  sheet.addSpan(1, 13, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 13, "66至70岁", SheetArea.colHeader);
  sheet.getCell(0, 13,SheetArea.colHeader).tag('{"key": "AgeMin", "values": ["66"]},{"key": "AgeMax", "values": ["70"]}');
  sheet.addSpan(1, 14, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 14, "71岁及以上", SheetArea.colHeader);
  sheet.getCell(0, 14,SheetArea.colHeader).tag('{"key": "AgeMin", "values": ["71"]},{"key": "AgeMax", "values": ["200"]}');

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
  style.cellPadding = "5 8";
  for(var i = 0; i<=22; i++){
    sheet.setRowHeight(i, 30,SheetArea.rowHeader);
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


  sheet.setRowHeight(23, 30,SheetArea.rowHeader);
  sheet.setRowHeight(24, 30,SheetArea.rowHeader);
  sheet.setRowHeight(25, 30,SheetArea.rowHeader);
  sheet.setRowHeight(26, 30,SheetArea.rowHeader);
  sheet.getCell(9, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(16, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(18, 0, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});

  sheet.setColumnWidth(0, 35,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 35,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 150,SheetArea.rowHeader);
  sheet.setRowHeight(0, 30,SheetArea.colHeader);
  sheet.setRowHeight(1, 50,SheetArea.colHeader);
  sheet.setRowHeight(2, 25,SheetArea.colHeader);

  /*
   *  Y表头
   */
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
  sheet.addSpan(23, 0, 1, 2, SheetArea.rowHeader);
  sheet.setValue(23, 0,"补充资料:", SheetArea.rowHeader);
  sheet.addSpan(23, 2, 1, 2, SheetArea.rowHeader);
  sheet.setValue(23, 2,"1．能够按时按标准交纳党", SheetArea.rowHeader);
  sheet.setValue(23, 0,"费的党员");
  sheet.addSpan(23, 2, 1, 3);
  sheet.setValue(23, 2,"名，经批准少交党费的党员");
  sheet.addSpan(23, 6, 1, 2);
  sheet.setValue(23, 6,"名，免交党费的党员");
  sheet.addSpan(23, 9, 1, 4);
  sheet.setValue(23, 9,"名，自愿一次性多交纳1000元以上党费的");
  sheet.setValue(23, 14,"名");

  sheet.addSpan(24, 0, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(24, 2, 1, 2, SheetArea.rowHeader);
  sheet.setValue(24, 2,"2．生活不能自理、丧失劳", SheetArea.rowHeader);
  sheet.addSpan(24, 0, 1, 2);
  sheet.setValue(24, 0,"动能力的党员 ");
  sheet.addSpan(24, 3, 1, 12);
  sheet.setValue(24, 3,"名");
  sheet.addSpan(25, 0, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(25, 2, 1, 2, SheetArea.rowHeader);
  sheet.setValue(25, 2,"3．企事业、民办非企业单", SheetArea.rowHeader);
  sheet.addSpan(25, 0, 1, 4);
  sheet.setValue(25, 0,"位党员中担任高级专业技术职务的");
  sheet.getCell(25, 4).tag('{"key": "ProfTechHierarchy", "values": ["1"]}');

  sheet.addSpan(25, 5, 1, 2);
  sheet.setValue(25, 5,"名，其中女性");
  sheet.getCell(25, 7).tag('{"key": "ProfTechHierarchy", "values": ["1"]},{"key": "GenderCode", "values": ["0"]}');
  sheet.addSpan(25, 8, 1, 2);
  sheet.setValue(25, 8,"名，35岁及以下的");
  sheet.getCell(25, 10).tag('{"key": "ProfTechHierarchy", "values": ["1"]},{"key": "DtAge", "values": ["35"]}');
  sheet.addSpan(25, 11, 1, 3);
  sheet.setValue(25, 11,"名；担任中级专业技术职务的");
  sheet.getCell(25, 14).tag('{"key": "ProfTechHierarchy", "values": ["2"]}');

  sheet.addSpan(26, 2, 1, 2, SheetArea.rowHeader);
  sheet.setValue(26, 2,"名，其中女性", SheetArea.rowHeader);
  sheet.getCell(26, 0).tag('{"key": "ProfTechHierarchy", "values": ["2"]},{"key": "GenderCode", "values": ["0"]}');
  sheet.addSpan(26, 1, 1, 2);
  sheet.setValue(26, 1,"名，35岁及以下的");
  sheet.getCell(26, 3).tag('{"key": "ProfTechHierarchy", "values": ["2"]},{"key": "DtAge", "values": ["35"]}');
  sheet.addSpan(26, 4, 1, 3);
  sheet.setValue(26, 4,"名；担任初级专业技术职务的");
  sheet.getCell(26, 7).tag('{"key": "ProfTechHierarchy", "values": ["3"]}');
  sheet.addSpan(26, 8, 1, 2);
  sheet.setValue(26, 8,"名，其中女性");
  sheet.getCell(26, 10).tag('{"key": "ProfTechHierarchy", "values": ["3"]},{"key": "GenderCode", "values": ["0"]}');
  sheet.addSpan(26, 11, 1, 2);
  sheet.setValue(26, 11,"名，35岁及以下的");
  sheet.getCell(26, 13).tag('{"key": "ProfTechHierarchy", "values": ["3"]},{"key": "DtAge", "values": ["35"]}');
  sheet.setValue(26, 14,'名');

  for(var i = 23 ;i<= 26; i++){
    for(var j = 0 ;j<=3;j++){
      sheet.getCell(i, j, SheetArea.rowHeader).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
    for(var j = 0 ;j<=14;j++){
      sheet.setStyle(i,j,newStyle("#E4ECF7"));
      sheet.getCell(i, j).vAlign(1);
      sheet.getCell(i, j).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
  }
  sheet.setStyle(23,1, newStyle("#FFCC99"));
  sheet.setStyle(23,5, newStyle("#FFCC99"));
  sheet.setStyle(23,8, newStyle("#FFCC99"));
  sheet.setStyle(23,13, newStyle("#FFCC99"));
  sheet.setStyle(24,2, newStyle("#FFCC99"));

};

var setDT2ExtendData = function (sheet,data) {
  sheet.setValue(23,1,data[15][1]);
  sheet.getCell(23, 1).tag('P,1');
  sheet.setValue(23,5,data[15][2]);
  sheet.getCell(23, 5).tag('P,2');
  sheet.setValue(23,8,data[15][3]);
  sheet.getCell(23, 8).tag('P,3');
  sheet.setValue(23,13,data[15][4]);
  sheet.getCell(23, 13).tag('P,4');

  sheet.setValue(24,2,data[16][1]);
  sheet.getCell(24, 2).tag('Q,1');

  sheet.setValue(25,4,data[17][1]);
  sheet.setValue(25,7,data[17][2]);
  sheet.setValue(25,10,data[17][3]);
  sheet.setValue(25,14,data[17][4]);
  sheet.setValue(26,0,data[17][5]);
  sheet.setValue(26,3,data[17][6]);
  sheet.setValue(26,7,data[17][7]);
  sheet.setValue(26,10,data[17][8]);
  sheet.setValue(26,13,data[17][9]);
};
