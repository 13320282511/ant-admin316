var funSheet40 = function(SheetArea,spread){
  /*
   *  发展党员情况（一）
   */
  var sheet = spread.getSheet(39);
  sheet.isPaintSuspended(true);
  sheet.name('农村党建有关情况');
  sheet.options.isProtected = true;
  sheet.setRowCount(2);
  sheet.setColumnCount(32);
  sheet.setRowCount( 4, SheetArea.colHeader);
  sheet.setColumnCount( 1, SheetArea.rowHeader);

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
    { name: "AA", displayName: "AA", size: 45 },
    { name: "AB", displayName: "AB", size: 45 },
    { name: "AC", displayName: "AC", size: 45 },
    { name: "AD", displayName: "AD", size: 45 },
    { name: "AE", displayName: "AE", size: 45 },
    { name: "AF", displayName: "AF", size: 45 },
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
  sheet.addSpan(1, 0, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 0, "建制村总数", SheetArea.colHeader);
  sheet.addSpan(1, 1, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 1, "建档立卡贫困村数", SheetArea.colHeader);
  sheet.addSpan(1, 2, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 2, "党组织软弱涣散的村", SheetArea.colHeader);
  sheet.addSpan(0, 3, 1, 9, SheetArea.colHeader);
  sheet.setValue(0, 3, "村党组织书记", SheetArea.colHeader);
  sheet.addSpan(1, 3, 1, 5, SheetArea.colHeader);
  sheet.setValue(2, 3, "总人数", SheetArea.colHeader);
  sheet.setValue(2, 4, "属于农村致富带头人", SheetArea.colHeader);
  sheet.setValue(2, 5, "属于外出务工返乡人员", SheetArea.colHeader);
  sheet.setValue(2, 6, "属于农村专业合作组织负责人", SheetArea.colHeader);
  sheet.setValue(2, 7, "属于大学生村官", SheetArea.colHeader);
  sheet.addSpan(1, 8, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 8, "有党组织书记后备人选的建制村", SheetArea.colHeader);
  sheet.addSpan(1, 9, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 9, "参加县级以上培训的村党组织书记", SheetArea.colHeader);
  sheet.addSpan(1, 10, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 10, "从村党组织书记中录用公务员和事业编制工作人员", SheetArea.colHeader);
  sheet.addSpan(1, 11, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 11, "从村党组织书记中选拔乡镇领导干部", SheetArea.colHeader);
  sheet.addSpan(0, 12, 1, 6, SheetArea.colHeader);
  sheet.setValue(0, 12, "第一书记", SheetArea.colHeader);
  sheet.addSpan(1, 12, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 12, "选派第一书记", SheetArea.colHeader);
  sheet.addSpan(1, 13, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 13, "本年各级培训第一书记（人次）", SheetArea.colHeader);
  sheet.addSpan(1, 14, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 14, "为第一书记安排不低于1万元工作经费的村", SheetArea.colHeader);
  sheet.addSpan(1, 15, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 15, "派出单位落实责任、项目、资金捆绑的村", SheetArea.colHeader);
  sheet.addSpan(1, 16, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 16, "提拔使用或晋级的第一书记", SheetArea.colHeader);
  sheet.addSpan(1, 17, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 17, "因工作不胜任召回调整的第一书记", SheetArea.colHeader);
  sheet.addSpan(0, 18, 1, 14, SheetArea.colHeader);
  sheet.setValue(0, 18, "基层基础保障", SheetArea.colHeader);
  sheet.addSpan(1, 18, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 18, "平均每村运转经费（万元∕年）", SheetArea.colHeader);
  sheet.addSpan(1, 19, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 19, "平均每村办公经费（万元∕年）", SheetArea.colHeader);
  sheet.addSpan(1, 20, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 20, "村党组织书记平均报酬（万元∕年）", SheetArea.colHeader);
  sheet.addSpan(1, 21, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 21, "村干部基本报酬和村级组织办公经费合计低于9 万元的县", SheetArea.colHeader);
  sheet.addSpan(1, 22, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 22, "村党组织书记报酬低于农村居民人均可支配收入两倍标准的县", SheetArea.colHeader);
  sheet.addSpan(1, 23, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 23, "为村党组织书记办理养老保险的县", SheetArea.colHeader);
  sheet.addSpan(1, 24, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 24, "落实正常离任村党组织书记生活补贴的县", SheetArea.colHeader);
  sheet.addSpan(1, 25, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 25, "落实农村公共服务运行维护支出或服务群众专项经费的县", SheetArea.colHeader);
  sheet.addSpan(1, 26, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 26, "落实村民小组长误工补贴的县", SheetArea.colHeader);
  sheet.addSpan(1, 27, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 27, "无集体经济收入的建制村", SheetArea.colHeader);
  sheet.addSpan(1, 28, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 28, "暂无活动场所的建制村", SheetArea.colHeader);
  sheet.addSpan(1, 29, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 29, "活动场所面积200㎡以上的建制村", SheetArea.colHeader);
  sheet.addSpan(1, 30, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 30, "本年新建或改扩建活动场所数量", SheetArea.colHeader);
  sheet.addSpan(1, 31, 2, 1, SheetArea.colHeader);
  sheet.setValue(1, 31, "未完成“五小”建设的乡镇", SheetArea.colHeader);


  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */


  // 样式
  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(0,0,style,SheetArea.rowHeader);

  style.cellPadding = "5 5";

  for(var i = 0; i<=32; i++){
    sheet.setRowHeight(i, 70,SheetArea.rowHeader);
    sheet.setStyle(0,i,style,SheetArea.colHeader);
    sheet.setStyle(1,i,style,SheetArea.colHeader);
    sheet.setStyle(2,i,style,SheetArea.colHeader);
    // sheet.setStyle(i,0, newStyle("#CCCCFF"));
    // if(i<=2 || i==10){
    //   for(var j =0; j<=14; j++){
    //     sheet.setStyle(i,j, newStyle("#CCCCFF"));
    //   }
    // }

  }
  for(var j =0; j<=32; j++){
    sheet.getCell(0, j).hAlign(1).vAlign(1);
    sheet.getCell(0,j).setBorder(new GC.Spread.Sheets.LineBorder("#9EB6CE", GC.Spread.Sheets.LineStyle.thin), {top: true,left: true,right: true,bottom: true});
  }

  sheet.setRowHeight(i, 30,SheetArea.rowHeader);
  sheet.setColumnWidth(0, 50,SheetArea.rowHeader);
  sheet.setRowHeight(0, 30,SheetArea.colHeader);
  sheet.setRowHeight(1, 30,SheetArea.colHeader);
  sheet.setRowHeight(2, 250,SheetArea.colHeader);

  sheet.setValue(0, 0,"数量（个/人）", SheetArea.rowHeader);

  // 补充资料
  sheet.addSpan(1, 0, 1, 2, SheetArea.rowHeader);
  sheet.setValue(1, 0,"补充资", SheetArea.rowHeader);
  sheet.addSpan(1, 0, 1, 6);
  sheet.setValue(1, 0,"料：实行“四议两公开”工作法的建制村");
  sheet.addSpan(1, 7, 1, 8);
  sheet.setValue(1, 7,"个，成立村务监督委员会或其他村务监督机构的建制村");
  sheet.addSpan(1, 16, 1, 8);
  sheet.setValue(1, 16,"个。");

  var bcStyle = new GC.Spread.Sheets.Style();
  bcStyle.backColor = "#E4ECF7";
  for(var i = 1 ;i<= 1; i++){
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
