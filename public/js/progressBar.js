
       $(document).ready(function(){
            progressBar(15, $('.progressBarBootstrap'));
            progressBar(30, $('.progressBarPLSQL'));
            progressBar(40, $('.progressBarHTML5CSS'));
            progressBar(10, $('.progressBarAngular'));
            progressBar(20, $('.progressBarPHP'));
            progressBar(50, $('.progressBarJava'));
            progressBar(30, $('.progressBarJavascriptjQuery'));
            

                function progressBar(percent, $element) {
                    var progressBarWidth = percent * $element.width() / 100;
                    $element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
                }

  
  
        });
