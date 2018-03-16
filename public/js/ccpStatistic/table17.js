//发展党员情况（二）
var funSheet17 = function(SheetArea,spread){
  /*
   *  内容区域
   */
  var sheet = spread.getSheet(16);
  sheet.isPaintSuspended(true);
  sheet.name('发展党员情况（二）');
  sheet.options.isProtected = true;
  sheet.setRowCount(18);
  sheet.setColumnCount(3);
  sheet.setRowCount( 3, SheetArea.colHeader);
  sheet.setColumnCount( 3, SheetArea.rowHeader);
  var colInfos = [
    { name: "A", displayName: "A", size: 160  },
    { name: "B", displayName: "B", size: 160 },
    { name: "C", displayName: "C", size: 250 },
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
  sheet.setValue(0, 0, "总数", SheetArea.colHeader);
  sheet.addSpan(1, 1, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 1, "女", SheetArea.colHeader);
  sheet.getCell(0, 1,SheetArea.colHeader).tag('{"key": "GenderCode", "values": ["0"]}');
  sheet.addSpan(1, 2, 1, 1, SheetArea.colHeader);
  sheet.setValue(1, 2, "35岁及以下", SheetArea.colHeader);
  sheet.getCell(0, 2,SheetArea.colHeader).tag('{"key": "AgeMin", "values": ["0"]},{"key": "AgeMax", "values": ["35"]}');

  /*
   *  0,0,1,3   y坐标，x坐标，占多少行，占多少列
   */

  sheet.addSpan(0, 0, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(1, 0, 4, 1, SheetArea.rowHeader);
  sheet.addSpan(1, 1, 1, 1, SheetArea.rowHeader);
  sheet.addSpan(2, 1, 1, 1, SheetArea.rowHeader);
  sheet.addSpan(3, 1, 1, 1, SheetArea.rowHeader);
  sheet.addSpan(4, 1, 1, 1, SheetArea.rowHeader);
  sheet.addSpan(5, 0, 4, 1, SheetArea.rowHeader);
  sheet.addSpan(5, 1, 1, 1, SheetArea.rowHeader);
  sheet.addSpan(6, 1, 1, 1, SheetArea.rowHeader);
  sheet.addSpan(7, 1, 1, 1, SheetArea.rowHeader);
  sheet.addSpan(8, 1, 1, 1, SheetArea.rowHeader);
  sheet.addSpan(9, 0, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(10, 1, 1, 1, SheetArea.rowHeader);
  sheet.addSpan(11, 0, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(12, 1, 1, 1, SheetArea.rowHeader);
  sheet.addSpan(13, 0, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(14, 0, 1, 2, SheetArea.rowHeader);
  sheet.addSpan(15, 1, 1, 1, SheetArea.rowHeader);
  sheet.addSpan(16, 0, 1,2, SheetArea.rowHeader);

  // 样式
  for(var i = 11;i<=12;i++){
    for(var j = 0;j<=2;j++){
      sheet.setStyle(i,j,newStyle('#FFCC99'));
    }
  }

  var style = new GC.Spread.Sheets.Style();
  style.wordWrap = true;
  sheet.setStyle(2,0,style,SheetArea.rowHeader);
  sheet.setStyle(5,0,style,SheetArea.rowHeader);
  for(var i = 0; i<=17; i++){
    sheet.setRowHeight(i, 35,SheetArea.rowHeader);
    if( i==5){
      for(var j =0; j<=2; j++){
        sheet.setStyle(i,j, newStyle("#CCCCFF"));
      }
    }
    for(var j =0; j<=2; j++){
      sheet.getCell(i, j).hAlign(1).vAlign(1);
      sheet.getCell(i,j).setBorder(new GC.Spread.Sheets.LineBorder("#9EB6CE", GC.Spread.Sheets.LineStyle.thin), {top: true,left: true,right: true,bottom: true});
    }
  }

  sheet.getCell(1, 0, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(10, 0, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(12, 0, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.getCell(15, 0, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    { top: true});
  sheet.setColumnWidth(0, 70,SheetArea.rowHeader);
  sheet.setColumnWidth(1, 220,SheetArea.rowHeader);
  sheet.setRowHeight(0, 30,SheetArea.colHeader);
  sheet.setRowHeight(1, 30,SheetArea.colHeader);
  sheet.setRowHeight(2, 25,SheetArea.colHeader);

  sheet.setValue(0, 0,"一、生产、工作第一线", SheetArea.rowHeader);
  sheet.getCell(0, 0,SheetArea.rowHeader).tag('{"key": "OneLineCode", "values": ["0%"]}');
  sheet.setValue(1, 1,"企业生产第一线", SheetArea.rowHeader);
  sheet.getCell(1, 0,SheetArea.rowHeader).tag('{"key": "OneLineCode", "values": ["01%"]}');
  sheet.setValue(2, 1,"农村生产第一线", SheetArea.rowHeader);
  sheet.getCell(2, 0,SheetArea.rowHeader).tag('{"key": "OneLineCode", "values": ["02%"]}');
  sheet.setValue(3, 1,"教学科研第一线", SheetArea.rowHeader);
  sheet.getCell(3, 0,SheetArea.rowHeader).tag('{"key": "OneLineCode", "values": ["03%"]},{"key": "TwoLineCode", "values": ["04%"]}');
  sheet.setValue(4, 1,"机关第一线", SheetArea.rowHeader);
  sheet.getCell(4, 0,SheetArea.rowHeader).tag('{"key": "OneLineCode", "values": ["05%"]}');


  sheet.setValue(5, 0,"二 、企事业、民办非企业单位具有专业技术职务的", SheetArea.rowHeader);//ProfTechCode
  sheet.getCell(5, 0,SheetArea.rowHeader).tag('{"key": "ProfTechHierarchy", "values": ["1","2","3"]}');
  sheet.setValue(5, 1,"合                  计", SheetArea.rowHeader);
  sheet.setValue(6, 1,"高级专业技术职务", SheetArea.rowHeader);
  sheet.getCell(6, 0,SheetArea.rowHeader).tag('{"key": "ProfTechHierarchy", "values": ["1"]}');
  sheet.setValue(7, 1,"中级专业技术职务", SheetArea.rowHeader);
  sheet.getCell(7, 0,SheetArea.rowHeader).tag('{"key": "ProfTechHierarchy", "values": ["2"]}');
  sheet.setValue(8, 1,"初级专业技术职务", SheetArea.rowHeader);
  sheet.getCell(8, 0,SheetArea.rowHeader).tag('{"key": "ProfTechHierarchy", "values": ["3"]}');

  sheet.setValue(9, 0,"三、乡（镇）、建制村", SheetArea.rowHeader);
  sheet.setValue(10, 1,"建制村", SheetArea.rowHeader);
  sheet.setValue(11, 0,"四、先进模范人物", SheetArea.rowHeader);
  sheet.setValue(12, 1,"省（部）一级及以上命名或表彰", SheetArea.rowHeader);
  sheet.getCell(11, 0).tag('A,12');
  sheet.getCell(11, 1).tag('B,12');
  sheet.getCell(11, 2).tag('C,12');
  sheet.getCell(12, 0).tag('A,13');
  sheet.getCell(12, 1).tag('B,13');
  sheet.getCell(12, 2).tag('C,13');
  sheet.getCell(17, 0).tag('D,1');
  sheet.setValue(13, 0,"五  、特殊情况下", SheetArea.rowHeader);
  sheet.getCell(13, 0,SheetArea.rowHeader).tag('{"key": "JoinTypeCode", "values": ["1113%"]}');
  sheet.setValue(14, 0,"六  、共青团员", SheetArea.rowHeader);
  sheet.getCell(14, 0,SheetArea.rowHeader).tag('{"key": "JoinTypeCode", "values": ["1111%"]}');
  sheet.setValue(15, 1,"经过“推优”", SheetArea.rowHeader);
  sheet.getCell(15, 0,SheetArea.rowHeader).tag('{"key": "JoinTypeCode", "values": ["11111%"]}');
  sheet.setValue(16, 0,"七  、台湾省籍", SheetArea.rowHeader);
  sheet.getCell(16, 0,SheetArea.rowHeader).tag('{"key": "IsTaiwan", "values": ["1"]}');

  // 补充资料
  sheet.addSpan(17, 0, 1, 3, SheetArea.rowHeader);
  sheet.setValue(17, 0,"补充资料：由省级党委审批追认的共产党员", SheetArea.rowHeader);
  sheet.addSpan(17, 1, 1, 2);
  sheet.setValue(17, 1,"名（表中各项均不统计）。");

  var rowStyle = new GC.Spread.Sheets.Style();
  rowStyle.backColor = "#E4ECF7";
  sheet.getCell(17, 0, SheetArea.rowHeader).setBorder(
    new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
    {bottom:true,left:true,right:true});

  for(var j = 0 ;j<=2;j++) {
    sheet.setStyle(17, j, rowStyle);
    sheet.getCell(17, j).vAlign(1);
    sheet.getCell(17, j).setBorder(
      new GC.Spread.Sheets.LineBorder("#E4ECF7", GC.Spread.Sheets.LineStyle.thin),
      {bottom: true, left: true, right: true});
  }
  sheet.setStyle(17,0,newStyle('#FFCC99'));


  sheet.isPaintSuspended(false);
};

var setDT6ExtendData = function (sheet,data) {
  sheet.setValue(17,0,data[3][1])
};
