$(document).ready(function(){
   $.ajax({
       url : "http://localhost/prova_chartjs/datadb.php",
       type : "GET",
       success : function(data){



           var HR = [];
           var BR = [];
           var HRV = [];
           var CoreTemp = [];
           var sec = [];



           for(var i in data){
               HR.push(data[i].HR);
               BR.push(data[i].BR);
               HRV.push(data[i].HRV);
               CoreTemp.push(data[i].CoreTemp);
               sec.push(data[i].sec);
           }



           var chartdata = {
               labels: sec,
               datasets: [
                   {
                       label: "HR",
                       type: 'line',
                       fill: false,
                       lineTension: 1,
                       backgroundColor: "rgba(215, 40, 40, 1)",
                       borderColor: "rgba(215, 40, 40, 1)",
                       pointHoverBackgroundColor: "rgba(215, 40, 40, 1)",
                       pointHoverBorderColor: "rgba(215, 40, 40, 1)",
                       data: HR,

                   },
                   {
                        label: "BR",
                        type: 'line',
                        fill: false,
                        lineTension: 1,
                        backgroundColor: "rgba(131, 209, 255, 1)",
                        borderColor: "rgba(131, 209, 255, 1)",
                        pointHoverBackgroundColor: "rgba(131, 209, 255, 1)",
                        pointHoverBorderColor: "rgba(131, 209, 255, 1)",
                        data: BR
                   },
                   {
                       label: "HRV",
                       type: 'line',
                       fill: false,
                       lineTension: 1,
                       backgroundColor: "rgba(0, 0, 0, 1)",
                       borderColor: "rgba(0, 0, 0, 1)",
                       pointHoverBackgroundColor: "rgba(0, 0, 0, 1)",
                       pointHoverBorderColor: "rgba(0, 0, 0, 1)",
                       data: HRV
                   },
                   {
                       label: "CoreTemp",
                       fill: false,
                       backGroundColor: 'rgba(255, 0, 0, 1)',
                       borderColor: 'rgba(255, 0, 0, 1)',
                       borderWidth: 1,
                       data: CoreTemp
                   }
               ]

           };



           var ctx = $("#mycanvas");

           var GenericGraph = new Chart(ctx, {
               type: 'bar',
               data: chartdata
               // options: graphOptions
           });



           /*$.each(CoreTemp, function(k,value){
               debugger;
               if (GenericGraph.data.datasets[k].value > "39"){
                   GenericGraph.data.datasets[k].fillColor = "red";
                   GenericGraph.update();
               }
           })


           $.each(GenericGraph.data,function(key,value){
               console.log(value.CoreTemp);
           })*/


       },
       error : function(data){
        console.log("non funge un cazzo");
       }
   });
});
