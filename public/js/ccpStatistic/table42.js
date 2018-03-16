var funSheet42 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(41);
  sheet.isPaintSuspended(true);
  sheet.name('社区党建情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(4);
  sheet.setColumnCount(23);
  sheet.setRowCount( 5, SheetArea.colHeader);
  sheet.setColumnCount( 2, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 55  },
    { name: "B", displayName: "B", size: 55 },
    { name: "C", displayName: "C", size: 55 },
    { name: "D", displayName: "D", size: 55 },
    { name: "E", displayName: "E", size: 55 },
    { name: "F", displayName: "F", size: 55 },
    { name: "G", displayName: "G", size: 55 },
    { name: "H", displayName: "H", size: 55 },
    { name: "I", displayName: "I", size: 55 },
    { name: "J", displayName: "J", size: 55 },
    { name: "K", displayName: "K", size: 55 },
    { name: "L", displayName: "L", size: 55 },
    { name: "M", displayName: "M", size: 55 },
    { name: "N", displayName: "N", size: 55 },
    { name: "O", displayName: "O", size: 55 },
    { name: "P", displayName: "P", size: 75 },
    { name: "Q", displayName: "Q", size: 75 },
    { name: "R", displayName: "R", size: 55 },
    { name: "S", displayName: "S", size: 55 },
    { name: "T", displayName: "T", size: 55 },
    { name: "U", displayName: "U", size: 55 },
    { name: "V", displayName: "V", size: 55 },
    { name: "W", displayName: "W", size: 55 },
  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.addSpan(0, 0, 1, 11, SheetArea.colHeader);
  sheet.setValue(0, 0, "社区工作者", SheetArea.colHeader);
  sheet.addSpan(1, 0, 1, 7, SheetArea.colHeader);
  sheet.addSpan(2, 0, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 0, "总数", SheetArea.colHeader);
  sheet.addSpan(2, 1, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 1, "专职党务工作者", SheetArea.colHeader);
  sheet.addSpan(2, 2, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 2, "大专及以上学历", SheetArea.colHeader);
  sheet.addSpan(2, 3, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 3, "从机关和街道选派的", SheetArea.colHeader);
  sheet.addSpan(2, 4, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 4, "录用为公务员的", SheetArea.colHeader);
  sheet.addSpan(2, 5, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 5, "选拔进入事业编制的", SheetArea.colHeader);
  sheet.addSpan(2, 6, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 6, "推荐为两代表一委员的", SheetArea.colHeader);

  sheet.addSpan(1, 7, 1, 3, SheetArea.colHeader);
  sheet.setValue(1, 7, "报酬待遇", SheetArea.colHeader);
  sheet.addSpan(2, 7, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 7, "按不低于上年度当地社会平均工资水平确定报酬的社区", SheetArea.colHeader);
  sheet.addSpan(2, 8, 1, 2, SheetArea.colHeader);
  sheet.setValue(3, 8, "全部社区工作者年工资总额（万元）", SheetArea.colHeader);
  sheet.setValue(3, 9, "全部社区党组织书记年工资总额（万元）", SheetArea.colHeader);

  sheet.addSpan(1, 10, 3, 1, SheetArea.colHeader);
  sheet.setValue(1, 10, "党建工作指导员", SheetArea.colHeader);
  sheet.addSpan(0, 11, 1, 6, SheetArea.colHeader);
  sheet.setValue(0, 11, "经费情况", SheetArea.colHeader);
  sheet.addSpan(1, 11, 1, 2, SheetArea.colHeader);
  sheet.setValue(1, 11, "纳入财政预算", SheetArea.colHeader);
  sheet.addSpan(2, 11, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 11, "纳入财政预算的社区", SheetArea.colHeader);
  sheet.addSpan(2, 12, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 12, "社区纳入财政预算的工作经费总额（万元）", SheetArea.colHeader);

  sheet.addSpan(1, 13, 1, 2, SheetArea.colHeader);
  sheet.setValue(1, 13, "服务群众专项经费", SheetArea.colHeader);
  sheet.addSpan(2, 13, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 13, "落实服务群众专项经费的社区", SheetArea.colHeader);
  sheet.addSpan(2, 14, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 14, "社区全年服务群众专项经费总额（万元）", SheetArea.colHeader);
  sheet.addSpan(1, 15, 1, 2, SheetArea.colHeader);
  sheet.setValue(1, 15, "转移支付、社会赞助、党费支持", SheetArea.colHeader);
  sheet.addSpan(2, 15, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 15, "有转移支付、社会赞助、党费支持的社区", SheetArea.colHeader);
  sheet.addSpan(2, 16, 2, 1, SheetArea.colHeader);
  sheet.setValue(2, 16, "社区全年转移支付、社会赞助、党费支持总额(万元)", SheetArea.colHeader);
  sheet.addSpan(0, 17, 1, 3, SheetArea.colHeader);
  sheet.setValue(0, 17, "办公及活动场所", SheetArea.colHeader);
  sheet.addSpan(1, 17, 3, 1, SheetArea.colHeader);
  sheet.setValue(1, 17, "暂无办公用房的社区", SheetArea.colHeader);
  sheet.addSpan(1, 18, 3, 1, SheetArea.colHeader);
  sheet.setValue(1, 18, "面积200㎡及以下的社区", SheetArea.colHeader);
  sheet.addSpan(1, 19, 3, 1, SheetArea.colHeader);
  sheet.setValue(1, 19, "面积200㎡以上的社区", SheetArea.colHeader);
  sheet.addSpan(0, 20, 4, 1, SheetArea.colHeader);
  sheet.setValue(0, 20, "实行大党委的社区", SheetArea.colHeader);
  sheet.addSpan(0, 21, 1, 2, SheetArea.colHeader);
  sheet.setValue(0, 21, "在职党员到社区报到", SheetArea.colHeader);
  sheet.addSpan(1, 21, 3, 1, SheetArea.colHeader);
  sheet.setValue(1, 21, "开展在职党员到社区报到为群众服务的社区", SheetArea.colHeader);
  sheet.addSpan(1, 22, 3, 1, SheetArea.colHeader);
  sheet.setValue(1, 22, "到社区报到的在职党员", SheetArea.colHeader);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */


  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(0,0,style,SheetArea.rowHeader);

  style.cellPadding = "5 5";

  for(var i = 0; i<=32; i++){
    sheet.setRowHeight(i, 50,SheetArea.rowHeader);
    sheet.setStyle(0,i,style,SheetArea.colHeader);
    sheet.setStyle(1,i,style,SheetArea.colHeader);
    sheet.setStyle(2,i,style,SheetArea.colHeader);
    sheet.setStyle(3,i,style,SheetArea.colHeader);
  }
  for(var i = 0; i<=3; i++){
    for(var j =0; j<=32; j++){
      sheet.getCell(i, j).hAlign(1).vAlign(1);
      sheet.getCell(i,j).setBorder(new GC.Spread.Sheets.LineBorder("#9EB6CE", GC.Spread.Sheets.LineStyle.thin), {top: true,left: true,right: true,bottom: true});
    }
  }

  // sheet.getCell(2, 0, SheetArea.colHeader).setBorder(
  //   new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
  //   { top: true});

  sheet.setColumnWidth(0, 70,SheetArea.rowHeader);
  sheet.setRowHeight(0, 50,SheetArea.colHeader);
  sheet.setRowHeight(1, 50,SheetArea.colHeader);
  sheet.setRowHeight(2, 30,SheetArea.colHeader);
  sheet.setRowHeight(3, 200,SheetArea.colHeader);

  sheet.setValue(0, 0,"总计", SheetArea.rowHeader);
  sheet.setValue(1, 0,"城市社区", SheetArea.rowHeader);
  sheet.setValue(2, 0,"乡镇社区", SheetArea.rowHeader);

  // // 补充资料
  sheet.addSpan(3, 0, 1, 2, SheetArea.rowHeader);
  sheet.setValue(3, 0,"补充资料：实行", SheetArea.rowHeader);
  sheet.addSpan(3, 0, 1, 2);
  sheet.setValue(3, 0,"大工委的街道");
  sheet.setValue(3, 3,"个。");

  var bcStyle = new GC.Spread.Sheets.Style();
  bcStyle.backColor = "#E4ECF7";
  for(var i = 3 ;i<= 3; i++){
    for(var j = 0 ;j<=3;j++){
      sheet.getCell(i, j, SheetArea.rowHeader).setBorder(
        new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
        {bottom:true,left:true,right:true});
    }
    for(var j = 0 ;j<=32;j++){
      sheet.setStyle(i,j,bcStyle);
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
