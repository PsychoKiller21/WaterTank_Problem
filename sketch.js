var cols=10;
var rows=10;


var colors= [];
//var geek=[0,4,0,0,0,6,0,6,4,0];
var result=0;
var geek=[];
for(let i=0;i<10;i++)
geek[i]=prompt("Enter Your 10 elements Input Array of wall size");





function setup() {
  createCanvas(900, 900);
  for(var i=0;i<cols;i++)
  {
    colors[i]=[];
    for(var j=0;j<rows;j++)
    {
      colors[i][j]=random(200000);
    }
  }

  
}

function draw() {
  background(250);

  for(var i=0;i<cols;i++)
  {
    for(var j=0;j<rows;j++)
    {
      var x=i*90;
      var y=j*90;
      fill(255,255,255);
      stroke(0);
      rect(x,y,90,90);
    }
  }
     // var x=4*90;
     // var y=4*90;
     // fill(255,255,0);
     // stroke(10);
     //  rect(x,y,90,90);
 
    

      for(var i=0;i<cols;i++)
      {
        for(var j=0;j<geek[i];j++)
        {
           var t1=(i)*90;
           var t2=(9-j)*90;
           fill(255,215,0);
           stroke(0);
           rect(t1,t2,90,90);
        }
      }  
      
      
    var left_max=0;
    var right_max=0;
    var low=0;
    var high=0;
    low=0 , high=9;
    while(low<=high)
    {
      if(geek[low]<geek[high])
      {
        if(geek[low]>left_max)
        left_max=geek[low];
        else
        {
          for(var i=0;i<left_max-geek[low];i++)
          {
            var x1=low*90;
            var x2=(9-i)*90;
            fill(102,255,255);
            stroke(0);
            rect(x1,x2,90,90);
          }
          result +=left_max-geek[low];
        }
        low++;
        
      }
      else
      {
        if(geek[high]>right_max)
        right_max=geek[high];
        else
        {
          for(var i=0;i<right_max-geek[high];i++)
          {
            var y1=high*90;
            var y2=(9-i)*90;
            fill(102,255,255);
            stroke(0);
            rect(y1,y2,90,90);
          }
          result+=right_max-geek[high];
        }
        high--;
      }
    }
    //return result;
    

}

function findwater(arr)
       {
         if(arr instanceof Array)
         {
          var result=0;
          var left_max=0;
          var right_max=0;
          var low=0;
          var high=0;
          low=0 , high=9;
          while(low<=high)
          {
            if(arr[low]<arr[high])
            {
              if(arr[low]>left_max)
              left_max=arr[low];
              else
              result +=left_max-arr[low];
              low++;
              
            }
            else
            {
              if(arr[high]>right_max)
              right_max=arr[high];
              else
              result+=right_max-arr[high];
              high--;
            }
          }
          return result;
         }
       }



var ans = findwater(geek);
document.write("Your answer is : "+ans+" units");



