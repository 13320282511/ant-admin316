var funSheet33 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(32);
  sheet.isPaintSuspended(true);
  sheet.name('流动党员情况（一）');
  sheet.options.isProtected = true;
  sheet.setRowCount(24);
  sheet.setColumnCount(9);
  sheet.setRowCount( 4, SheetArea.colHeader);
  sheet.setColumnCount( 5, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 100  },
    { name: "B", displayName: "B", size: 100},
    { name: "C", displayName: "C", size: 100 },
    { name: "D", displayName: "D", size: 100 },
    { name: "E", displayName: "E", size: 100 },
    { name: "F", displayName: "F", size: 100 },
    { name: "G", displayName: "G", size: 100 },
    { name: "H", displayName: "H", size: 100 },
    { name: "I", displayName: "I", size: 100 },

  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.addSpan(0, 0, 3, 1, SheetArea.colHeader);
  sheet.setValue(0, 0, "总数", SheetArea.colHeader);
  sheet.addSpan(0, 1, 1, 7, SheetArea.colHeader);
  sheet.setValue(0, 1, "原职业", SheetArea.colHeader);
  sheet.addSpan(1, 1, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 1, "公有经济企事业单位管理人员专业技术人员", SheetArea.colHeader);
  sheet.addSpan(1, 2, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 2, "工勤技能人员", SheetArea.colHeader);
  sheet.addSpan(1, 3, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 3, "农牧渔民", SheetArea.colHeader);
  sheet.addSpan(1, 4, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 4, "未就业的高校毕业生", SheetArea.colHeader);
  sheet.addSpan(1, 5, 1, 3, SheetArea.colHeader);
  sheet.setValue(2, 5, "中介组织从业人员", SheetArea.colHeader);
  sheet.setValue(2, 6, "执业律师", SheetArea.colHeader);
  sheet.setValue(2, 7, "会计师", SheetArea.colHeader);
  sheet.addSpan(1, 8, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 8, "其他", SheetArea.colHeader);
  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */
  sheet.addSpan(0, 0, 1, 4, SheetArea.rowHeader);
  sheet.addSpan(1, 0, 3, 1, SheetArea.rowHeader);
  sheet.addSpan(1, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(2, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(3, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(4, 0, 17, 1, SheetArea.rowHeader);
  sheet.addSpan(4, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(5, 1, 5, 1, SheetArea.rowHeader);
  sheet.addSpan(5, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(6, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(8, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(9, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(10, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(11, 1, 4, 1, SheetArea.rowHeader);
  sheet.addSpan(11, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(12, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(13, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(14, 2, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(15, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(16, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(17, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(18, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(19, 1, 1, 3, SheetArea.rowHeader);
  sheet.addSpan(20, 2, 1, 2, SheetArea.rowHeader);

  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(4,0,style,SheetArea.rowHeader);
  style.cellPadding = "5 5";

  for(var i = 0; i<=25; i++){
    sheet.setRowHeight(i, 30,SheetArea.rowHeader);
    sheet.setStyle(0,i,style,SheetArea.colHeader);
    sheet.setStyle(1,i,style,SheetArea.colHeader);
    sheet.setStyle(2,i,style,SheetArea.colHeader);
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

  sheet.getCell(5, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(7, 2, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(11, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(20, 1, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});


  sheet.setColumnWidth(0, 30,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 30,SheetArea.rowHeader);
  sheet.setColumnWidth(2, 30,SheetArea.rowHeader);
  sheet.setColumnWidth(3, 180,SheetArea.rowHeader);
  sheet.setRowHeight(0, 30,SheetArea.colHeader);
  sheet.setRowHeight(1, 25,SheetArea.colHeader);
  sheet.setRowHeight(2, 50,SheetArea.colHeader);

  sheet.setValue(0, 0,"流出党员总数", SheetArea.rowHeader);
  sheet.setValue(1, 1,"跨 省 流 动", SheetArea.rowHeader);
  sheet.setValue(2, 1,"省  内  跨  市 （地）  流  动", SheetArea.rowHeader);
  sheet.setValue(3, 1,"持《中国共产党流动党员活动证》", SheetArea.rowHeader);
  sheet.setValue(4, 0,"外出流向", SheetArea.rowHeader);
  sheet.setValue(4, 1,"公有经济控制单位", SheetArea.rowHeader);
  sheet.setValue(5, 2,"机关", SheetArea.rowHeader);
  sheet.setValue(6, 2,"事业单位", SheetArea.rowHeader);
  sheet.setValue(7, 3,"人才(劳动)服务中心", SheetArea.rowHeader);
  sheet.setValue(8, 2,"港澳台商投资企业", SheetArea.rowHeader);
  sheet.setValue(9, 2,"外商投资企业", SheetArea.rowHeader);
  sheet.setValue(10, 1,"非公有经济控制单位", SheetArea.rowHeader);
  sheet.setValue(11, 2,"民办非企业单位", SheetArea.rowHeader);
  sheet.setValue(12, 2,"私营企业", SheetArea.rowHeader);
  sheet.setValue(13, 2,"港澳台商投资企业", SheetArea.rowHeader);
  sheet.setValue(14, 2,"外商投资企业", SheetArea.rowHeader);
  sheet.setValue(15, 1,"个体工商户", SheetArea.rowHeader);
  sheet.setValue(16, 1,"城市社区（居委会）", SheetArea.rowHeader);
  sheet.setValue(17, 1,"乡镇社区（居委会）", SheetArea.rowHeader);
  sheet.setValue(18, 1,"建制村", SheetArea.rowHeader);
  sheet.setValue(19, 1,"其他", SheetArea.rowHeader);
  sheet.setValue(20, 2,"不掌握流向", SheetArea.rowHeader);

  // 补充资料
  sheet.addSpan(21, 0, 1, 5, SheetArea.rowHeader);
  sheet.setValue(21, 0,"补充资料：建立党员服务中心（站、点）", SheetArea.rowHeader);
  sheet.addSpan(21, 1, 1, 2);
  sheet.setValue(21, 1,"个，其中省（区、市）一级");
  sheet.addSpan(21, 4, 1, 2);
  sheet.setValue(21, 4,"个，市（地、州、盟）一级");
  sheet.setValue(21, 7,"个，");
  sheet.addSpan(22, 3, 1, 2, SheetArea.rowHeader);
  sheet.setValue(22, 3,"县（市、区、旗）一级", SheetArea.rowHeader);
  sheet.addSpan(22, 1, 1, 2);
  sheet.setValue(22, 1,"个，乡（镇）一级");
  sheet.setValue(22, 4,"个，街道");
  sheet.setValue(22, 6,"个，社区");
  sheet.setValue(22, 8,"个");
  sheet.setValue(23, 4,"，村", SheetArea.rowHeader);
  sheet.setValue(23, 1,"个。");

  var rowStyle = new GC.Spread.Sheets.Style();
  rowStyle.backColor = "#E4ECF7";
  for(var i = 21 ;i<= 24; i++){
    for(var j = 0 ;j<=4;j++){
      sheet.getCell(i, j, SheetArea.rowHeader).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
    for(var j = 0 ;j<=16;j++){
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
