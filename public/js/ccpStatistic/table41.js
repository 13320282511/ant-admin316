var funSheet41 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(40);
  sheet.isPaintSuspended(true);
  sheet.name('整顿软弱涣散基层党组织情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(3);
  sheet.setColumnCount(26);
  sheet.setRowCount( 4, SheetArea.colHeader);
  sheet.setColumnCount( 2, SheetArea.rowHeader);

  var colInfos = [
    { name: "A", displayName: "A", size: 45  },
    { name: "B", displayName: "B", size: 45 },
    { name: "C", displayName: "C", size: 45 },
    { name: "D", displayName: "D", size: 45 },
    { name: "E", displayName: "E", size: 45 },
    { name: "F", displayName: "F", size: 45 },
    { name: "G", displayName: "G", size: 45 },
    { name: "H", displayName: "H", size: 45 },
    { name: "I", displayName: "I", size: 45 },
    { name: "J", displayName: "J", size: 45 },
    { name: "K", displayName: "K", size: 45 },
    { name: "L", displayName: "L", size: 45 },
    { name: "M", displayName: "M", size: 45 },
    { name: "N", displayName: "N", size: 45 },
    { name: "O", displayName: "O", size: 45 },
    { name: "P", displayName: "P", size: 45 },
    { name: "Q", displayName: "Q", size: 45 },
    { name: "R", displayName: "R", size: 45 },
    { name: "S", displayName: "S", size: 45 },
    { name: "T", displayName: "T", size: 45 },
    { name: "U", displayName: "U", size: 45 },
    { name: "V", displayName: "V", size: 45 },
    { name: "W", displayName: "W", size: 45 },
    { name: "X", displayName: "X", size: 45 },
    { name: "Y", displayName: "Y", size: 45 },
    { name: "Z", displayName: "Z", size: 45 },
  ];

  sheet.autoGenerateColumns = false;
  sheet.bindColumns(colInfos);

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  /*
   *  x表头，总数
   */
  sheet.addSpan(0, 0, 1, 3, SheetArea.colHeader);
  sheet.setValue(0, 0, "排查整顿", SheetArea.colHeader);
  sheet.addSpan(1, 0, 1, 2, SheetArea.colHeader);
  sheet.setValue(2, 0, "排查软弱涣散基层党组织", SheetArea.colHeader);
  sheet.setValue(2, 1, "建档立卡贫困村", SheetArea.colHeader);
  sheet.addSpan(1, 2, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 2, "整顿提升基层党组织", SheetArea.colHeader);
  sheet.addSpan(0, 3, 1, 10, SheetArea.colHeader);
  sheet.setValue(0, 3, "软弱涣散基层党组织主要类型（个）", SheetArea.colHeader);
  sheet.addSpan(1, 3, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 3, "属于党组织班子配备不齐、书记长期缺职、工作处于停滞状态的", SheetArea.colHeader);
  sheet.addSpan(1, 4, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 4, "属于党组织书记不胜任现职、工作不在状态、严重影响班子整体战斗力的", SheetArea.colHeader);
  sheet.addSpan(1, 5, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 5, "属于班子不团结、内耗严重、工作不能正常开展的", SheetArea.colHeader);
  sheet.addSpan(1, 6, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 6, "属于组织制度形同虚设、不开展党组织活动的", SheetArea.colHeader);
  sheet.addSpan(1, 7, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 7, "属于换届选举拉票贿选问题突出的", SheetArea.colHeader);
  sheet.addSpan(1, 8, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 8, "属于宗族宗教和黑恶势力干扰渗透严重的", SheetArea.colHeader);
  sheet.addSpan(1, 9, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 9, "属于村务居务财务公开和民主管理混乱的", SheetArea.colHeader);
  sheet.addSpan(1, 10, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 10, "属于社会治安问题和信访矛盾纠纷集中的", SheetArea.colHeader);
  sheet.addSpan(1, 11, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 11, "属于无固定办公活动场所及便民服务设施的", SheetArea.colHeader);
  sheet.addSpan(1, 12, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 12, "属于党组织服务意识差、服务能力弱、群众意见大的", SheetArea.colHeader);

  sheet.addSpan(0, 13, 1, 6, SheetArea.colHeader);
  sheet.setValue(0, 13, "调整培训党组织书记（人）", SheetArea.colHeader);
  sheet.addSpan(1, 13, 1, 2, SheetArea.colHeader);
  sheet.setValue(2, 13, "年初缺配的软弱涣散基层党组织书记数", SheetArea.colHeader);
  sheet.setValue(2, 14, "本年度已选配", SheetArea.colHeader);
  sheet.addSpan(1, 15, 1, 2, SheetArea.colHeader);
  sheet.setValue(2, 15, "年初需调整的软弱涣散基层党组织书记数", SheetArea.colHeader);
  sheet.setValue(2, 16, "本年度已调整", SheetArea.colHeader);
  sheet.addSpan(1, 17, 1, 2, SheetArea.colHeader);
  sheet.setValue(2, 17, "培训软弱涣散基层党组织书记", SheetArea.colHeader);
  sheet.setValue(2, 18, "参加县级及以上培训", SheetArea.colHeader);
  sheet.addSpan(0, 19, 1, 4, SheetArea.colHeader);
  sheet.setValue(0, 19, "整顿措施", SheetArea.colHeader);
  sheet.addSpan(1, 19, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 19, "结对帮扶单位（个）", SheetArea.colHeader);
  sheet.addSpan(1, 20, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 20, "挂点联系领导（人）", SheetArea.colHeader);
  sheet.addSpan(1, 21, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 21, "选派第一书记（人）", SheetArea.colHeader);
  sheet.addSpan(1, 22, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 22, "选派驻村干部（人）", SheetArea.colHeader);
  sheet.addSpan(0, 23, 1, 4, SheetArea.colHeader);
  sheet.setValue(0, 23, "解决突出问题", SheetArea.colHeader);
  sheet.addSpan(1, 23, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 23, "开展专项整治（项）", SheetArea.colHeader);
  sheet.addSpan(1, 24, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 24, "解决各类问题（个）", SheetArea.colHeader);
  sheet.addSpan(1, 25, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 25, "查处违纪违法行为（例）", SheetArea.colHeader);


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

  sheet.setColumnWidth(0, 50,SheetArea.rowHeader);
  sheet.setRowHeight(0, 30,SheetArea.colHeader);
  sheet.setRowHeight(1, 30,SheetArea.colHeader);
  sheet.setRowHeight(2, 250,SheetArea.colHeader);

  sheet.setValue(0, 0,"总计", SheetArea.rowHeader);
  sheet.setValue(1, 0,"村", SheetArea.rowHeader);
  sheet.setValue(2, 0,"社区", SheetArea.rowHeader);

  // // 补充资料
  // sheet.addSpan(1, 0, 1, 2, SheetArea.rowHeader);
  // sheet.setValue(1, 0,"补充资", SheetArea.rowHeader);
  // sheet.addSpan(1, 0, 1, 6);
  // sheet.setValue(1, 0,"料：实行“四议两公开”工作法的建制村");
  // sheet.addSpan(1, 7, 1, 8);
  // sheet.setValue(1, 7,"个，成立村务监督委员会或其他村务监督机构的建制村");
  // sheet.addSpan(1, 16, 1, 8);
  // sheet.setValue(1, 16,"个。");
  //
  // var bcStyle = new GC.Spread.Sheets.Style();
  // bcStyle.backColor = "#E4ECF7";
  // for(var i = 1 ;i<= 1; i++){
  //   for(var j = 0 ;j<=3;j++){
  //     sheet.getCell(i, j, SheetArea.rowHeader).setBorder(
  //       new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
  //       {bottom:true,left:true,right:true});
  //   }
  //   for(var j = 0 ;j<=32;j++){
  //     sheet.setStyle(i,j,bcStyle);
  //     sheet.getCell(i, j).vAlign(1);
  //     sheet.getCell(i, j).setBorder(
  //       new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
  //       {bottom:true,left:true,right:true});
  //   }
  // }

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
