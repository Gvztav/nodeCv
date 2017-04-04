
       $(document).ready(function(){
            progressBar(25, $('.progressBarBootstrap'));
            progressBar(40, $('.progressBarPLSQL'));
            progressBar(60, $('.progressBarHTML5CSS'));
            progressBar(20, $('.progressBarAngular'));
            progressBar(40, $('.progressBarPHP'));
            progressBar(60, $('.progressBarJava'));
            progressBar(40, $('.progressBarJavascriptjQuery'));
        
                function progressBar(percent, $element) {
                    var progressBarWidth = percent * $element.width() / 100;
                    $element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
                }

  
  
        });
