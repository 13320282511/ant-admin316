var funSheet37 = function(SheetArea,spread){
  var sheet = spread.getSheet(36);
  sheet.name('省、市、县、乡党的代表大会代表情况');
  sheet.options.isProtected = true;

  sheet.setRowCount(20);
  sheet.setColumnCount(12);
  sheet.setRowCount( 2, SheetArea.colHeader);
  sheet.setColumnCount( 4, SheetArea.rowHeader);
  var colInfos = [
    { name: "A", displayName: "A" ,size: 100  },
    { name: "B", displayName: "B" ,size: 100  },
    { name: "C", displayName: "C" ,size: 100  },
    { name: "D", displayName: "D" ,size: 100  },
    { name: "E", displayName: "E" ,size: 40  },
    { name: "F", displayName: "F" ,size: 50  },
    { name: "G", displayName: "G" ,size: 220  },
    { name: "H", displayName: "H" ,size: 40  },
    { name: "I", displayName: "I" ,size: 100  },
    { name: "J", displayName: "J" ,size: 100  },
    { name: "K", displayName: "K" ,size: 100  },
    { name: "L", displayName: "L" ,size: 100  },
  ];
  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  /*
   *  x表头
   */
  sheet.setValue(0, 0, "省（区、市）代表", SheetArea.colHeader);
  sheet.setValue(0, 1, "市（州）代表", SheetArea.colHeader); //'{"key": "IsTaiwan", "values": ["1"]}'
  sheet.setValue(0, 2, "县（市、区）代表", SheetArea.colHeader);
  sheet.setValue(0, 3, "乡（镇）代表", SheetArea.colHeader);
  sheet.addSpan(0, 4, 1, 3, SheetArea.colHeader);
  sheet.setValue(0, 4, "项   目", SheetArea.colHeader);
  sheet.addSpan(1, 4, 1, 3, SheetArea.colHeader);
  sheet.setValue(1, 4, "甲", SheetArea.colHeader);

  sheet.addSpan(0, 7, 1, 2, SheetArea.colHeader);
  sheet.setValue(0, 7, "省（区、市）代表", SheetArea.colHeader);
  sheet.addSpan(1, 7, 1, 2, SheetArea.colHeader);
  sheet.setValue(1, 7, "A", SheetArea.colHeader);
  sheet.setValue(0, 9, "市（州）代表", SheetArea.colHeader);
  sheet.setValue(1, 9, "B", SheetArea.colHeader);
  sheet.setValue(0, 10, "县（市、区）代表", SheetArea.colHeader);
  sheet.setValue(1, 10, "C", SheetArea.colHeader);
  sheet.setValue(0, 11, "乡（镇）代表", SheetArea.colHeader);
  sheet.setValue(1, 11, "D", SheetArea.colHeader);

  /*
   *  Y表头
   */
  sheet.addSpan(0, 0, 1, 3, SheetArea.rowHeader);
  sheet.setValue(0, 0, "总计", SheetArea.rowHeader);
  sheet.addSpan(1, 0, 5, 1, SheetArea.rowHeader);
  sheet.addSpan(1, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(1, 1, "女", SheetArea.rowHeader);
  sheet.addSpan(2, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(2, 1, "少数民族", SheetArea.rowHeader);
  sheet.addSpan(3, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(3, 1, "党员领导干部", SheetArea.rowHeader);
  sheet.addSpan(4, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(4, 1, "生产和工作在一线", SheetArea.rowHeader);
  sheet.addSpan(5, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(5, 1, "参加各级党委组织的培训", SheetArea.rowHeader);

  sheet.addSpan(6, 0, 5, 1, SheetArea.rowHeader);
  sheet.setValue(6, 0, "年　　龄", SheetArea.rowHeader);
  sheet.addSpan(6, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(6, 1, "35    岁    及    以   下", SheetArea.rowHeader);
  sheet.addSpan(7, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(7, 1, "36    岁    至    45   岁", SheetArea.rowHeader);
  sheet.addSpan(8, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(8, 1, "46    岁    至    54   岁", SheetArea.rowHeader);
  sheet.addSpan(9, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(9, 1, "55    岁    至    59   岁", SheetArea.rowHeader);
  sheet.addSpan(10, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(10, 1, "60    岁    及    以   上", SheetArea.rowHeader);

  sheet.addSpan(11, 0, 6, 1, SheetArea.rowHeader);
  sheet.setValue(11, 0, "学　　历", SheetArea.rowHeader);
  sheet.addSpan(11, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(11, 1, "研究生", SheetArea.rowHeader);
  sheet.addSpan(12, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(12, 1, "大学本科", SheetArea.rowHeader);
  sheet.addSpan(13, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(13, 1, "大学专科", SheetArea.rowHeader);
  sheet.addSpan(14, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(14, 1, "中专", SheetArea.rowHeader);
  sheet.addSpan(15, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(15, 1, "高中、中技", SheetArea.rowHeader);
  sheet.addSpan(16, 1, 1, 2, SheetArea.rowHeader);
  sheet.setValue(16, 1, "初中及以下", SheetArea.rowHeader);

  sheet.addSpan(0, 4, 7, 1);
  sheet.addSpan(0, 5, 1, 2);
  sheet.addSpan(1, 5, 1, 2);
  sheet.addSpan(2, 5, 1, 2);
  sheet.addSpan(3, 5, 1, 2);
  sheet.addSpan(4, 5, 1, 2);
  sheet.addSpan(5, 5, 1, 2);
  sheet.addSpan(6, 5, 1, 2);
  sheet.addSpan(7, 4, 7, 1);
  sheet.addSpan(7, 5, 1, 2);
  sheet.addSpan(8, 5, 1, 2);
  sheet.addSpan(9, 5, 2, 2);
  sheet.addSpan(9, 7, 2, 1);
  sheet.addSpan(11, 5, 2, 2);
  sheet.addSpan(11, 7, 2, 1);
  sheet.addSpan(13, 5, 1, 2);
  sheet.addSpan(14, 4, 3, 8);
  sheet.addSpan(9, 8, 2, 1);
  sheet.addSpan(9, 9, 2, 1);
  sheet.addSpan(9, 10, 2, 1);
  sheet.addSpan(9, 11, 2, 1);
  sheet.addSpan(11, 8, 2, 1);
  sheet.addSpan(11, 9, 2, 1);
  sheet.addSpan(11, 10, 2, 1);
  sheet.addSpan(11, 11, 2, 1);


  setTabHead(sheet,SheetArea);
  // 给假表头加背景色
  var rowStyle = new GC.Spread.Sheets.Style();
  rowStyle.backColor = "#E4ECF7";
  for(var i = 0; i<=13; i++){
    sheet.setStyle(i,5,rowStyle);
    sheet.setStyle(i,6,rowStyle);
    sheet.setStyle(i,7,rowStyle);
  }
  sheet.setStyle(0,4,rowStyle);
  sheet.setStyle(7,4,rowStyle);

  // 给假表头加边框
  for(var i = 0; i<=14; i++){
    for(var j =4 ; j<=7 ; j++){
      sheet.getCell(i,j).setBorder(new GC.Spread.Sheets.LineBorder("#9EB6CE", GC.Spread.Sheets.LineStyle.thin), {top: true,left: true,right: true,bottom: true});
    }
  }
  sheet.getCell(1, 0, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  style.backColor = "#E4ECF7";
  sheet.setStyle(0,4,style);
  sheet.setStyle(7,4,style);
  sheet.setStyle(9,5,style);
  sheet.setStyle(11,5,style);

  for(var i = 0; i <= 20; i++){
    sheet.setRowHeight(i, 30,SheetArea.rowHeader);
    sheet.setStyle(0,i,style,SheetArea.colHeader);
    for(var j =0; j<=10; j++){
      sheet.getCell(i, j).hAlign(1).vAlign(1);
    }
  }
  for(var i = 8 ; i<=16;i++){
    sheet.setRowHeight(i, 30,SheetArea.rowHeader);
  }
  sheet.setColumnWidth(0, 30,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 30,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 150,SheetArea.rowHeader);
  sheet.setRowHeight(0, 80,SheetArea.colHeader);


  // 补充资料
  sheet.addSpan(17, 0, 1, 4, SheetArea.rowHeader);
  sheet.setValue(17, 0,"补充资料：1．已建立党代表大会代表", SheetArea.rowHeader);
  sheet.addSpan(17, 0, 1, 2);
  sheet.setValue(17, 0,"联络工作机构的地方各级党委");
  sheet.addSpan(17, 3, 1, 3);
  sheet.setValue(17, 3,"个，其中省（区、市）党委");
  sheet.addSpan(17, 7, 1, 2);
  sheet.setValue(17, 7,"个，市（州）党委");
  sheet.addSpan(17, 10, 1, 2);
  sheet.setValue(17, 10,"个，");
  sheet.addSpan(18, 2, 1, 2, SheetArea.rowHeader);
  sheet.setValue(18, 2,"县（市、区）党委", SheetArea.rowHeader);
  sheet.setValue(18, 1,"个。");
  sheet.addSpan(19, 2, 1, 2, SheetArea.rowHeader);
  sheet.setValue(19, 2,"2．试行乡镇党代会年会制", SheetArea.rowHeader);
  sheet.setValue(19, 0,"的乡镇党委");
  sheet.setValue(19, 2,"个。");

  var bcStyle = new GC.Spread.Sheets.Style();
  bcStyle.backColor = "#E4ECF7";
  for(var i = 17 ;i<= 19; i++){
    for(var j = 0 ;j<=3;j++){
      sheet.getCell(i, j, SheetArea.rowHeader).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
    for(var j = 0 ;j<=14;j++){
      sheet.setStyle(i,j,bcStyle);
      sheet.getCell(i, j).vAlign(1);
      sheet.getCell(i, j).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
  }

  setTabHead(sheet,SheetArea);


};
var setTabHead = function (sheet,SheetArea) {
  sheet.setValue(0, 4, "职   业");
  sheet.setValue(0, 5, "党政机关工作人员");
  sheet.setValue(1, 5, "企事业单位管理人员、专业技术人员");
  sheet.setValue(2, 5, "工勤技能人员");
  sheet.setValue(3, 5, "农牧渔民");
  sheet.setValue(4, 5, "军人、武警");
  sheet.setValue(5, 5, "离退休人员");
  sheet.setValue(6, 5, "其他");
  sheet.setValue(7, 4, "补 充 情 况");
  sheet.setValue(7, 5, "因受党纪处分终止代表资格");
  sheet.setValue(8, 5, "因辞去代表职务终止代表资格");
  sheet.setValue(9, 5, "因停止党籍或丧失中国国籍终止代表资格");
  sheet.setValue(11, 5, "调离同级党代表大会所属范围停止执行代表职务");
  sheet.setValue(13, 5, "因其他情况终止代表资格");

  sheet.setValue(0, 7, "18");
  sheet.setValue(1, 7, "19");
  sheet.setValue(2, 7, "20");
  sheet.setValue(3, 7, "21");
  sheet.setValue(4, 7, "22");
  sheet.setValue(5, 7, "23");
  sheet.setValue(6, 7, "24");
  sheet.setValue(7, 7, "25");
  sheet.setValue(8, 7, "26");
  sheet.setValue(9, 7, "27");
  sheet.setValue(11, 7, "28");
  sheet.setValue(13, 7, "29");
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
